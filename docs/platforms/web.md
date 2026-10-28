<!-- Exported from Claude Docs: https://claude.ai/artifact/H5x4bSUJQqZi1GzFNuUxW2 (rev 6). The online doc is the source of truth. -->

# Web UI 組件對照

2026-10-27 · @yobbo

本文件是「跨平台 UI 組件辭典」的 Web 篇。Web 沒有單一官方設計系統，因此以原生 HTML 與 WAI-ARIA Authoring Practices（APG）為標準名稱，常見組件庫的稱呼列為別名。

## 組件總表

Web 約 45 個常見組件，其中 [APG 定義了互動與鍵盤行為的模式](https://www.w3.org/WAI/ARIA/apg/patterns) 約 25 個，可當作命名的權威來源；其餘如 Toast、Card、Skeleton 屬社群慣用名，無標準定義。「其他平台」欄依序為 macOS / iOS / Android，方便在辭典中跨頁連結。

| 分類 | 標準名稱 | 中文 | 原生 HTML | ARIA 角色（APG 模式） | 常見別名 | 其他平台（macOS / iOS / Android） |
| --- | --- | --- | --- | --- | --- | --- |
| 動作 | Button | 按鈕 | `<button>` | `button`（Button） | CTA | Button / Button / Button |
| 動作 | Link | 連結 | `<a>` | `link`（Link） | — | — / — / — |
| 動作 | Menu button | 選單按鈕 | `<button>` + `popover` | `button` + `menu`（Menu Button） | Dropdown menu、kebab menu | Pull-down button / Menu / Overflow menu |
| 動作 | Toolbar | 工具列 | — | `toolbar`（Toolbar） | Action bar | Toolbar / Toolbar / Bottom app bar |
| 導覽 | Navigation | 導覽列 | `<nav>` | `navigation` landmark | Navbar、header | Sidebar / Tab bar / Navigation bar |
| 導覽 | Breadcrumb | 麵包屑 | `<nav>` + `<ol>` | `navigation`（Breadcrumb） | — | Path control / — / — |
| 導覽 | Tabs | 分頁標籤 | — | `tablist`、`tab`、`tabpanel`（Tabs） | Tab bar | Tab view / Segmented control / Tabs |
| 導覽 | Menubar | 選單列 | — | `menubar`（Menu and Menubar） | Mega menu | Menu bar / — / — |
| 導覽 | Pagination | 分頁器 | `<nav>` + 連結 | `navigation` | Pager | — / — / — |
| 導覽 | Sidebar / Drawer | 側邊欄、抽屜 | `<aside>`、`<dialog>` | `complementary` 或 `dialog` | Off-canvas、side panel | Sidebar / Sidebar / Navigation drawer |
| 展開 | Accordion | 手風琴 | 同名 `<details name>` 群組 | Accordion | Collapse、Expander | Disclosure group / DisclosureGroup / — |
| 展開 | Disclosure | 展開收合 | `<details>` + `<summary>` | Disclosure | Show/hide、Toggle | Disclosure control / DisclosureGroup / — |
| 覆蓋層 | Modal dialog | 對話框 | `<dialog>`（`showModal()`） | `dialog`（Dialog (Modal)） | Modal、Lightbox | Sheet / Sheet / Dialog |
| 覆蓋層 | Alert dialog | 警示對話框 | `<dialog>` | `alertdialog`（Alert and Message Dialogs） | Confirm | Alert / Alert / Dialog |
| 覆蓋層 | Drawer / Side sheet | 側滑面板 | `<dialog>` | `dialog` | Off-canvas、Slide-over | Inspector / Sheet / Side sheet |
| 覆蓋層 | Popover | 浮出框 | `popover` 屬性 | 依內容而定 | Flyout、Popper | Popover / Popover / Rich tooltip |
| 覆蓋層 | Tooltip | 工具提示 | `popover="hint"`、`title` | `tooltip`（Tooltip） | Hint | Help tag / — / Plain tooltip |
| 覆蓋層 | Toast | 吐司通知 | — | `status` 或 `alert`（live region） | Snackbar、Notification | Notification / — / Snackbar |
| 輸入 | Text input | 文字輸入框 | `<input type="text">`、`<textarea>` | `textbox` | Input、Text field | Text field / Text field / Text field |
| 輸入 | Select | 下拉選擇 | `<select>` | `combobox`（Select-Only Combobox）或 `listbox` | Dropdown | Pop-up button / Picker（menu） / Exposed dropdown |
| 輸入 | Combobox | 組合框 | `<input list>` + `<datalist>` | `combobox`（Combobox） | Autocomplete、Typeahead | Combo box / — / Exposed dropdown（可輸入） |
| 輸入 | Listbox | 清單選擇 | `<select multiple>` | `listbox`（Listbox） | Multi-select | Table view / List / — |
| 輸入 | Checkbox | 核取方塊 | `<input type="checkbox">` | `checkbox`（Checkbox） | — | Checkbox / — / Checkbox |
| 輸入 | Radio group | 單選群組 | `<input type="radio">` | `radiogroup`（Radio Group） | — | Radio buttons / — / Radio button |
| 輸入 | Switch | 開關 | `<input type="checkbox" switch>`（僅 Safari） | `switch`（Switch） | Toggle | Switch / Toggle / Switch |
| 輸入 | Slider | 滑桿 | `<input type="range">` | `slider`（Slider） | Range | Slider / Slider / Slider |
| 輸入 | Number input | 數字輸入 | `<input type="number">` | `spinbutton`（Spinbutton） | Stepper、Counter | Stepper / Stepper / — |
| 輸入 | Date picker | 日期選擇器 | `<input type="date">` | `dialog` + `grid`（Date Picker Dialog） | Calendar | Date picker / Date picker / Date picker |
| 輸入 | Color picker | 顏色選擇器 | `<input type="color">` | — | Swatch | Color well / Color picker / — |
| 輸入 | File upload | 檔案上傳 | `<input type="file">` | — | Dropzone | Image well / — / — |
| 輸入 | Search | 搜尋欄 | `<search>` + `<input type="search">` | `search` landmark | Search bar | Search field / Search field / Search |
| 輸入 | Segmented control | 分段控制 | radio 群組 | `radiogroup` | Button group、Toggle group | Segmented control / Segmented control / Segmented button |
| 資料 | Table | 表格 | `<table>` | `table`（Table） | — | Table view / List / — |
| 資料 | Data grid | 資料格 | `<table>` + JS | `grid`（Grid） | Data table | Table view / — / — |
| 資料 | Tree view | 樹狀視圖 | — | `tree`（Tree View） | File tree | Outline view / OutlineGroup / — |
| 資料 | Treegrid | 樹狀表格 | — | `treegrid`（Treegrid） | — | Outline view（多欄） / — / — |
| 資料 | Feed | 動態牆 | — | `feed`（Feed） | Infinite scroll | — / — / — |
| 資料 | Carousel | 輪播 | — | Carousel | Slider、Slideshow | — / Page control / Carousel |
| 狀態 | Progress bar | 進度條 | `<progress>` | `progressbar` | — | Progress indicator / Progress view / Progress indicator |
| 狀態 | Meter | 量表 | `<meter>` | `meter`（Meter） | Gauge | Level indicator / Gauge / — |
| 狀態 | Spinner | 載入指示 | — | `status` | Loader | Spinner / Activity indicator / Loading indicator |
| 狀態 | Alert / Banner | 警示橫幅 | — | `alert`（Alert） | Callout、Notice | — / — / Banner |
| 狀態 | Skeleton | 骨架屏 | — | 搭配 `aria-busy` | Placeholder、Shimmer | — / `.redacted` / — |
| 容器 | Card | 卡片 | `<article>` | — | Tile | Box / GroupBox / Card |
| 容器 | Badge / Chip / Tag | 徽章、標籤 | — | — | Pill、Label | Token / Badge / Chip、Badge |
| 容器 | Avatar | 頭像 | `<img>` | — | Profile picture | — / — / — |
| 容器 | Separator | 分隔線 | `<hr>` | `separator` | Divider | Separator / Divider / Divider |

## 核心組件的 AI prompt 關鍵字

Web 的 keywords 以「正式名稱 + 原生元素 + ARIA 模式」組成，讓 AI 產出語意正確、可無障礙操作的程式碼，而不是一堆 `<div>`。欄位規範同主研究報告。

| 組件 | keywords | descriptors | avoid |
| --- | --- | --- | --- |
| Modal dialog | modal dialog, HTML dialog element, showModal, APG dialog pattern | focus trapped inside, Escape closes, backdrop dims page | div overlay without focus management |
| Popover | popover, HTML popover attribute, anchor positioning | anchored to trigger, light dismiss on outside click | modal dialog |
| Tooltip | tooltip, popover hint, APG tooltip pattern | short text, shows on hover and keyboard focus | popover with interactive content |
| Toast | toast notification, aria-live status region | auto-dismiss after a few seconds, stacked in a corner | blocking alert dialog |
| Menu button | menu button, APG menu button pattern, aria-haspopup menu | arrow keys move between items, Escape returns focus | site navigation links |
| Tabs | tabs, APG tabs pattern, tablist tab tabpanel | arrow keys switch tabs, only active panel visible | segmented radio group |
| Accordion | accordion, details summary with name attribute | one section open at a time, chevron rotates | single disclosure |
| Select | custom select, appearance base-select, selectedcontent | fully styled button and picker, native keyboard behavior | JavaScript dropdown replacement |
| Combobox | combobox, APG combobox pattern, autocomplete | text input filters a listbox popup, aria-activedescendant | plain select |
| Switch | switch, role switch, input checkbox switch | on and off thumb, takes effect immediately | checkbox in a form |
| Data grid | data grid, APG grid pattern, role grid | arrow key cell navigation, sortable headers | static HTML table |
| Tree view | tree view, APG treeview pattern, role tree | nested expandable nodes, arrow keys expand and collapse | nested bullet list |
| Breadcrumb | breadcrumb, nav aria-label breadcrumb, ordered list | separators between links, current page with aria-current | path control |
| Drawer | drawer, off-canvas side panel, dialog element | slides in from edge, scrim behind | sidebar that is always visible |
| Skeleton | skeleton loader, shimmer placeholder, aria-busy | gray blocks matching content layout, shimmer animation | spinner |

## 易混淆對照

| 一組 | 怎麼分 |
| --- | --- |
| Modal vs Drawer | Modal 置中、阻擋整頁；Drawer 從邊緣滑出，可能是模態也可能不是 |
| Modal vs Popover | Modal 鎖定焦點、背景不可操作；Popover 依附觸發元素、點外面即關閉 |
| Popover vs Tooltip | Popover 可含互動內容、點擊開啟；Tooltip 只放簡短文字、hover 或聚焦時出現 |
| Toast vs Snackbar vs Alert | Toast 自動消失、通常無動作；Snackbar（Material 用語）可帶一個動作；Alert 是常駐頁面內的重要訊息 |
| Select vs Combobox | Select 只能選；Combobox 可輸入並篩選建議 |
| Combobox vs Listbox | Combobox 是輸入框加彈出清單；Listbox 是直接顯示的可選清單 |
| Accordion vs Disclosure | Disclosure 是單一展開收合；Accordion 是一組，常限制同時只開一個 |
| Tabs vs Segmented control | Tabs 切換面板內容並有 `tabpanel`；Segmented 是選項值，語意上是 radio group |
| Checkbox vs Switch | Checkbox 屬表單、送出才生效；Switch 立即生效 |
| Table vs Data grid | Table 是靜態資料；Data grid 可用方向鍵逐格操作、排序、編輯 |
| Menu vs Navigation | APG 的 `menu` 角色是應用程式動作選單；網站導覽列不應用 `menu`，用 `<nav>` 加連結 |
| Progress vs Meter | Progress 表示任務完成度；Meter 表示範圍內的量，例如磁碟用量 |

## 2026 新原生能力

許多過去要靠 JS 函式庫的組件，現在已有原生版本；辭典的 Web 欄應優先寫原生寫法，並標示支援程度。

| 能力 | 用途 | 支援狀況 | 對辭典的意義 |
| --- | --- | --- | --- |
| `popover` 屬性 | Popover、選單、tooltip 的開關、焦點與點外關閉 | [已達 Baseline](https://developer.chrome.com/blog/new-in-web-ui-io-2025-recap) | Popover、Menu button、Tooltip 可示範零 JS 寫法 |
| `<dialog>` | Modal、Alert dialog、Drawer | 主流瀏覽器皆支援 | 取代自製 modal |
| CSS anchor positioning | 浮出層定位於觸發元素旁 | [三大引擎皆已實作，但行為仍不一致](https://hex.pm/packages/slop_ui/0.1.0/files/docs/browser-support.md) | 示範時包在 `@supports (anchor-name: none)` 內並提供 fallback |
| `appearance: base-select` | 可完整自訂樣式的 `<select>` | [Chrome 與 Edge 134 起](https://modern-css.com/articles/build-a-styled-select-dropdown/)，Safari 27 跟進 | 正好用來重現 macOS Pop-up button 與 Android Exposed dropdown，不支援時仍是可用的原生 select |
| `<details name>` | 一次只開一個的 accordion | 主流瀏覽器皆支援 | Accordion 零 JS |
| `<input switch>` | 原生開關 | 僅 Safari | 其他瀏覽器用 `role="switch"` |

對專案本身：網站要重現 macOS 與 iOS 控制項，這些原生能力也是實作基礎。例如 Pop-up button 用 customizable select、Popover 用 `popover` 加 anchor positioning，可以少寫大量 JS，並在 README 當成技術亮點。

## 參考來源

- [WAI-ARIA APG：Patterns](https://www.w3.org/WAI/ARIA/apg/patterns)
- [ARIA 1.2 Authoring Patterns Reference](https://cdn.jsdelivr.net/npm/@softspark/ai-toolkit@4.20.0/app/skills/a11y-validate/reference/aria-patterns.md)
- [What's New in Web UI: I/O 2025 Recap（Chrome）](https://developer.chrome.com/blog/new-in-web-ui-io-2025-recap)
- [MDN：Customizable select elements](https://developer.mozilla.org/docs/Learn_web_development/Extensions/Forms/Customizable_select)
- [Build a styled select dropdown（modern-css.com）](https://modern-css.com/articles/build-a-styled-select-dropdown/)
- [slop_ui 瀏覽器支援表（2026-09 驗證）](https://hex.pm/packages/slop_ui/0.1.0/files/docs/browser-support.md)
- [The Component Gallery（別名參考）](https://www.everydev.ai/tools/the-component-gallery)
