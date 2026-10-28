/**
 * Small, shared behaviors for demos, wired by data attributes and ARIA roles so each demo stays
 * plain HTML. Native features (details, popover, dialog, form controls) need none of this.
 */
type Cleanup = () => void

function on<K extends keyof HTMLElementEventMap>(
  root: HTMLElement,
  type: K,
  handler: (event: HTMLElementEventMap[K]) => void,
): Cleanup {
  root.addEventListener(type, handler)
  return () => root.removeEventListener(type, handler)
}

function closestIn(root: HTMLElement, target: EventTarget | null, selector: string): HTMLElement | null {
  if (!(target instanceof Element)) return null
  const match = target.closest<HTMLElement>(selector)
  return match && root.contains(match) ? match : null
}

/** `<button data-open="dialogId">` opens a modal; `<button data-close>` closes its dialog. */
function dialogs(root: HTMLElement): Cleanup {
  return on(root, 'click', (event) => {
    const opener = closestIn(root, event.target, '[data-open]')
    if (opener) {
      const dialog = root.querySelector<HTMLDialogElement>(`#${opener.dataset.open}`)
      dialog?.showModal()
      return
    }
    const closer = closestIn(root, event.target, '[data-close]')
    closer?.closest('dialog')?.close(closer.dataset.close || undefined)
  })
}

/** APG tabs: click or arrow keys select a tab and show its panel. */
function tabs(root: HTMLElement): Cleanup {
  const select = (tab: HTMLElement) => {
    const list = tab.closest('[role="tablist"]')
    list?.querySelectorAll<HTMLElement>('[role="tab"]').forEach((other) => {
      const selected = other === tab
      other.setAttribute('aria-selected', String(selected))
      other.tabIndex = selected ? 0 : -1
      const panel = root.querySelector<HTMLElement>(`#${other.getAttribute('aria-controls')}`)
      if (panel) panel.hidden = !selected
    })
    tab.focus()
  }
  const offClick = on(root, 'click', (event) => {
    const tab = closestIn(root, event.target, '[role="tab"]')
    if (tab) select(tab)
  })
  const offKey = on(root, 'keydown', (event) => {
    const tab = closestIn(root, event.target, '[role="tab"]')
    if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    const all = [...(tab.closest('[role="tablist"]')?.querySelectorAll<HTMLElement>('[role="tab"]') ?? [])]
    const index = all.indexOf(tab)
    const next = {
      ArrowLeft: all[(index - 1 + all.length) % all.length],
      ArrowRight: all[(index + 1) % all.length],
      Home: all[0],
      End: all[all.length - 1],
    }[event.key]
    if (next) {
      event.preventDefault()
      select(next)
    }
  })
  return () => {
    offClick()
    offKey()
  }
}

/** `<button data-toast="regionId">` appends a message that removes itself after a few seconds. */
function toasts(root: HTMLElement): Cleanup {
  const timers = new Set<number>()
  const off = on(root, 'click', (event) => {
    const trigger = closestIn(root, event.target, '[data-toast]')
    const region = trigger && root.querySelector<HTMLElement>(`#${trigger.dataset.toast}`)
    if (!trigger || !region) return
    const toast = document.createElement('div')
    toast.className = 'toast'
    toast.textContent = trigger.dataset.message ?? '已儲存'
    region.append(toast)
    const timer = window.setTimeout(() => {
      toast.remove()
      timers.delete(timer)
    }, 4000)
    timers.add(timer)
  })
  return () => {
    off()
    timers.forEach((timer) => window.clearTimeout(timer))
  }
}

/** APG tree: clicking or Enter/Space on a parent treeitem toggles aria-expanded. */
function trees(root: HTMLElement): Cleanup {
  const toggle = (item: HTMLElement) => {
    if (!item.hasAttribute('aria-expanded')) return
    item.setAttribute('aria-expanded', String(item.getAttribute('aria-expanded') !== 'true'))
  }
  const offClick = on(root, 'click', (event) => {
    const label = closestIn(root, event.target, '[role="treeitem"] > .tree-label')
    if (label) toggle(label.parentElement as HTMLElement)
  })
  const offKey = on(root, 'keydown', (event) => {
    const item = closestIn(root, event.target, '[role="treeitem"], [role="row"][aria-expanded]')
    if (!item) return
    const expanded = item.getAttribute('aria-expanded')
    if (expanded === null) return
    if ((event.key === 'ArrowRight' && expanded === 'false') || (event.key === 'ArrowLeft' && expanded === 'true')) {
      event.preventDefault()
      toggle(item)
    }
  })
  return () => {
    offClick()
    offKey()
  }
}

/** Treegrid rows: a button inside a row toggles the row and hides or shows rows with its data-parent. */
function treegrids(root: HTMLElement): Cleanup {
  return on(root, 'click', (event) => {
    const button = closestIn(root, event.target, '[data-toggle-row]')
    const row = button?.closest<HTMLElement>('[role="row"]')
    if (!row) return
    const expanded = row.getAttribute('aria-expanded') !== 'true'
    row.setAttribute('aria-expanded', String(expanded))
    root.querySelectorAll<HTMLElement>(`[data-parent="${row.id}"]`).forEach((child) => {
      child.hidden = !expanded
    })
  })
}

/** Carousel: prev/next buttons and dots move between `.slide` elements. */
function carousels(root: HTMLElement): Cleanup {
  return on(root, 'click', (event) => {
    const control = closestIn(root, event.target, '[data-slide]')
    const carousel = control?.closest<HTMLElement>('[aria-roledescription="carousel"]')
    if (!control || !carousel) return
    const slides = [...carousel.querySelectorAll<HTMLElement>('.slide')]
    const current = slides.findIndex((slide) => !slide.hidden)
    const target = control.dataset.slide
    const next =
      target === 'next'
        ? (current + 1) % slides.length
        : target === 'prev'
          ? (current - 1 + slides.length) % slides.length
          : Number(target)
    slides.forEach((slide, index) => {
      slide.hidden = index !== next
    })
    carousel
      .querySelectorAll<HTMLElement>('[data-slide]:not([data-slide="next"]):not([data-slide="prev"])')
      .forEach((dot, index) => dot.setAttribute('aria-current', String(index === next)))
  })
}

/** Sortable headers: `<button data-sort>` in a column header sorts the table body by that column. */
function sortable(root: HTMLElement): Cleanup {
  return on(root, 'click', (event) => {
    const button = closestIn(root, event.target, '[data-sort]')
    const header = button?.closest<HTMLElement>('th, [role="columnheader"]')
    const table = header?.closest('table')
    const body = table?.tBodies[0]
    if (!header || !body) return
    const column = [...(header.parentElement?.children ?? [])].indexOf(header)
    const ascending = header.getAttribute('aria-sort') !== 'ascending'
    table.querySelectorAll('[aria-sort]').forEach((other) => other.removeAttribute('aria-sort'))
    header.setAttribute('aria-sort', ascending ? 'ascending' : 'descending')
    const rows = [...body.rows].sort((a, b) => {
      const left = a.cells[column]?.textContent ?? ''
      const right = b.cells[column]?.textContent ?? ''
      return (ascending ? 1 : -1) * left.localeCompare(right, undefined, { numeric: true })
    })
    body.append(...rows)
  })
}

/** `[data-contextmenu="menuId"]` opens that popover menu at the pointer on right-click or Shift+F10. */
function contextMenus(root: HTMLElement): Cleanup {
  const open = (area: HTMLElement, x: number, y: number) => {
    const menu = root.querySelector<HTMLElement>(`#${area.dataset.contextmenu}`)
    if (!menu) return
    menu.style.left = `${x}px`
    menu.style.top = `${y}px`
    menu.showPopover()
    menu.querySelector<HTMLElement>('[role="menuitem"]')?.focus()
  }
  const offMenu = on(root, 'contextmenu', (event) => {
    const area = closestIn(root, event.target, '[data-contextmenu]')
    if (!area) return
    event.preventDefault()
    open(area, event.clientX, event.clientY)
  })
  const offKey = on(root, 'keydown', (event) => {
    const area = closestIn(root, event.target, '[data-contextmenu]')
    if (!area || !(event.key === 'ContextMenu' || (event.shiftKey && event.key === 'F10'))) return
    event.preventDefault()
    const rect = area.getBoundingClientRect()
    open(area, rect.left + 16, rect.top + 16)
  })
  return () => {
    offMenu()
    offKey()
  }
}

/** `<button data-step="1|-1">` inside `[data-stepper]` nudges that group's number input within its min/max. */
function steppers(root: HTMLElement): Cleanup {
  return on(root, 'click', (event) => {
    const button = closestIn(root, event.target, '[data-step]')
    const input = button?.closest('[data-stepper]')?.querySelector<HTMLInputElement>('input')
    if (!button || !input) return
    const delta = Number(button.dataset.step)
    if (delta > 0) input.stepUp()
    else input.stepDown()
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })
}

/** Rows in `[data-selectable]` tables become selected on click (single selection). */
function selectableRows(root: HTMLElement): Cleanup {
  return on(root, 'click', (event) => {
    const row = closestIn(root, event.target, '[data-selectable] tbody tr')
    if (!row) return
    row.parentElement
      ?.querySelectorAll('tr')
      .forEach((other) => other.setAttribute('aria-selected', String(other === row)))
  })
}

/** Keeps `--fill` on range inputs in sync so CSS can paint the filled part of the track. */
function rangeFill(root: HTMLElement): Cleanup {
  const paint = (input: HTMLInputElement) => {
    const min = Number(input.min || 0)
    const max = Number(input.max || 100)
    input.style.setProperty('--fill', `${((Number(input.value) - min) / (max - min)) * 100}%`)
  }
  root.querySelectorAll<HTMLInputElement>('input[type="range"]').forEach(paint)
  return on(root, 'input', (event) => {
    if (event.target instanceof HTMLInputElement && event.target.type === 'range') paint(event.target)
  })
}

/** Attaches every behavior to a live demo root; returns one cleanup for unmount. */
export function mountDemo(root: HTMLElement): Cleanup {
  const cleanups = [
    dialogs,
    tabs,
    toasts,
    trees,
    treegrids,
    carousels,
    sortable,
    contextMenus,
    steppers,
    selectableRows,
    rangeFill,
  ].map((behavior) => behavior(root))
  return () => cleanups.forEach((cleanup) => cleanup())
}
