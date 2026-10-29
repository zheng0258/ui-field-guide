var e=Object.assign({"./android/alert-dialog.html":`<button type="button" class="btn btn-tonal" data-open="and-alert">刪除對話</button>
<dialog id="and-alert" class="dialog" role="alertdialog" aria-labelledby="and-alert-title">
  <h3 id="and-alert-title">要刪除這則對話嗎？</h3>
  <p class="muted">刪除後無法復原。</p>
  <div class="actions">
    <button type="button" class="btn btn-text" data-close autofocus>取消</button
    ><button type="button" class="btn btn-text" data-close>刪除</button>
  </div>
</dialog>
`,"./android/alert-dialog.thumb.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="dialog">
    <h3>要刪除這則對話嗎？</h3>
    <p class="muted">刪除後無法復原。</p>
    <div class="actions">
      <button type="button" class="btn btn-text">取消</button><button type="button" class="btn btn-text">刪除</button>
    </div>
  </div>
</div>
`,"./android/badge.html":`<div class="row" role="group" aria-label="篩選">
  <label class="chip"><input class="chip-input" type="checkbox" checked /> 未讀</label>
  <label class="chip"><input class="chip-input" type="checkbox" /> 有附件</label>
  <label class="chip"><input class="chip-input" type="checkbox" /> 已加星號</label>
</div>
`,"./android/bottom-navigation.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content muted">首頁內容</div>
  <nav class="navbar" aria-label="主要導覽">
    <a href="#and-nav" aria-current="page"
      ><span class="indicator"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M4 11 12 4l8 7M6.5 9v11h11V9" /></svg></span
      >首頁</a
    >
    <a href="#and-nav"
      ><span class="indicator"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m20 20-4.8-4.8" /></svg></span
      >探索</a
    >
    <a href="#and-nav"
      ><span class="indicator"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg></span
      >收藏</a
    >
    <a href="#and-nav"
      ><span class="indicator"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20.5c1.2-4 4.3-6 8-6s6.8 2 8 6" /></svg></span
      >個人</a
    >
  </nav>
</div>
`,"./android/bottom-sheet.html":`<button type="button" class="btn btn-tonal" data-open="and-sheet">相片選項</button>
<dialog id="and-sheet" class="sheet" aria-labelledby="and-sheet-title">
  <div class="handle" aria-hidden="true"></div>
  <ul class="list" style="width: auto" aria-labelledby="and-sheet-title">
    <li id="and-sheet-title" class="visually-hidden">相片選項</li>
    <li>
      <button
        type="button"
        class="list-item"
        style="min-height: 56px; width: 100%; border: 0; background: none; font: inherit; color: inherit"
        data-close
      >
        設為桌布
      </button>
    </li>
    <li>
      <button
        type="button"
        class="list-item"
        style="min-height: 56px; width: 100%; border: 0; background: none; font: inherit; color: inherit"
        data-close
      >
        加入相簿
      </button>
    </li>
    <li>
      <button
        type="button"
        class="list-item"
        style="min-height: 56px; width: 100%; border: 0; background: none; font: inherit; color: inherit"
        data-close
      >
        移到垃圾桶
      </button>
    </li>
  </ul>
</dialog>
`,"./android/bottom-sheet.thumb.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="sheet">
    <div class="handle" aria-hidden="true"></div>
    <ul class="list" style="width: auto" aria-labelledby="and-sheet-title">
      <li id="and-sheet-title" class="visually-hidden">相片選項</li>
      <li>
        <button
          type="button"
          class="list-item"
          style="min-height: 56px; width: 100%; border: 0; background: none; font: inherit; color: inherit"
        >
          設為桌布
        </button>
      </li>
      <li>
        <button
          type="button"
          class="list-item"
          style="min-height: 56px; width: 100%; border: 0; background: none; font: inherit; color: inherit"
        >
          加入相簿
        </button>
      </li>
      <li>
        <button
          type="button"
          class="list-item"
          style="min-height: 56px; width: 100%; border: 0; background: none; font: inherit; color: inherit"
        >
          移到垃圾桶
        </button>
      </li>
    </ul>
  </div>
</div>
`,"./android/button.html":`<div class="stack" style="justify-items: center">
  <div class="row">
    <button type="button" class="btn">Filled</button>
    <button type="button" class="btn btn-tonal">Tonal</button>
  </div>
  <div class="row">
    <button type="button" class="btn btn-elevated">Elevated</button>
    <button type="button" class="btn btn-outlined">Outlined</button>
    <button type="button" class="btn btn-text">Text</button>
  </div>
</div>
`,"./android/card.html":`<div class="stack">
  <article class="card card-elevated">
    <h3>週末市集</h3>
    <p class="muted">週六 10:00 · 華山文創園區</p>
    <div class="row">
      <button type="button" class="btn btn-text">略過</button><button type="button" class="btn">報名</button>
    </div>
  </article>
</div>
`,"./android/carousel.html":`<div class="carousel" tabindex="0" role="region" aria-roledescription="carousel" aria-label="精選相片">
  <div class="carousel-item" role="group" aria-label="1 / 6"></div>
  <div class="carousel-item" role="group" aria-label="2 / 6"></div>
  <div class="carousel-item" role="group" aria-label="3 / 6"></div>
  <div class="carousel-item" role="group" aria-label="4 / 6"></div>
  <div class="carousel-item" role="group" aria-label="5 / 6"></div>
  <div class="carousel-item" role="group" aria-label="6 / 6"></div>
</div>
`,"./android/checkbox.html":`<div>
  <label class="check"><input type="checkbox" checked /> 接收電子報</label>
  <label class="check"><input type="checkbox" /> 同意使用條款</label>
</div>
`,"./android/combobox.html":`<label class="tf tf-dropdown">
  <input list="and-combo-list" placeholder=" " />
  <span>國家或地區</span>
  <span class="trailing"
    ><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10h10l-5 5z" /></svg
  ></span>
</label>
<datalist id="and-combo-list">
  <option value="台灣"></option>
  <option value="日本"></option>
  <option value="韓國"></option>
</datalist>
`,"./android/context-menu.html":`<div tabindex="0" data-contextmenu="and-context" class="card card-outlined" style="text-align: center">
  長按這則訊息
  <p class="muted" style="font-size: 12px">（右鍵或 Shift+F10）</p>
</div>
<div id="and-context" popover role="menu" class="menu menu-floating">
  <button type="button" role="menuitem">複製</button>
  <button type="button" role="menuitem">回覆</button>
  <button type="button" role="menuitem">轉寄</button>
  <button type="button" role="menuitem">刪除</button>
</div>
`,"./android/context-menu.thumb.html":`<div class="stack" style="justify-items: start">
  <div class="card card-outlined">長按這則訊息</div>
  <div class="menu menu-static" style="margin: -24px 0 0 90px">
    <button type="button" role="menuitem">複製</button>
    <button type="button" role="menuitem">回覆</button>
    <button type="button" role="menuitem">刪除</button>
  </div>
</div>
`,"./android/date-picker.html":`<div class="datepicker">
  <div class="datepicker-head">
    <span id="and-month">2026 年 11 月</span>
    <span class="row" style="gap: 0">
      <button type="button" class="icon-btn" aria-label="上個月">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m15 6-6 6 6 6" />
        </svg>
      </button>
      <button type="button" class="icon-btn" aria-label="下個月">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>
    </span>
  </div>
  <fieldset class="days" aria-labelledby="and-month">
    <span class="dow" aria-hidden="true">日</span>
    <span class="dow" aria-hidden="true">一</span>
    <span class="dow" aria-hidden="true">二</span>
    <span class="dow" aria-hidden="true">三</span>
    <span class="dow" aria-hidden="true">四</span>
    <span class="dow" aria-hidden="true">五</span>
    <span class="dow" aria-hidden="true">六</span>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 1 日" />1</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 2 日" />2</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 3 日" />3</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 4 日" />4</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 5 日" />5</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 6 日" />6</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 7 日" />7</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 8 日" />8</label>
    <label class="today"><input class="day-input" type="radio" name="and-day" aria-label="11 月 9 日" />9</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 10 日" />10</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 11 日" />11</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 12 日" />12</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 13 日" />13</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 14 日" checked />14</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 15 日" />15</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 16 日" />16</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 17 日" />17</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 18 日" />18</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 19 日" />19</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 20 日" />20</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 21 日" />21</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 22 日" />22</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 23 日" />23</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 24 日" />24</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 25 日" />25</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 26 日" />26</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 27 日" />27</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 28 日" />28</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 29 日" />29</label>
    <label><input class="day-input" type="radio" name="and-day" aria-label="11 月 30 日" />30</label>
  </fieldset>
</div>
`,"./android/drawer.html":`<button type="button" class="btn btn-tonal" data-open="and-sidesheet">篩選</button>
<dialog id="and-sidesheet" class="sidesheet" aria-labelledby="and-side-title">
  <h3 id="and-side-title">篩選</h3>
  <label class="check"><input type="checkbox" checked /> 有庫存</label>
  <label class="check"><input type="checkbox" /> 免運費</label>
  <div class="row" style="margin-top: 16px">
    <button type="button" class="btn" data-close>套用</button
    ><button type="button" class="btn btn-outlined" data-close>取消</button>
  </div>
</dialog>
`,"./android/drawer.thumb.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="sidesheet">
    <h3>篩選</h3>
    <label class="check"><input type="checkbox" checked /> 有庫存</label>
    <label class="check"><input type="checkbox" /> 免運費</label>
  </div>
</div>
`,"./android/fab.html":`<div class="row" style="align-items: end">
  <button type="button" class="fab" aria-label="撰寫">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20h4L19 9l-4-4L4 16z" />
    </svg>
  </button>
  <button type="button" class="fab">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20h4L19 9l-4-4L4 16z" />
    </svg>
    撰寫
  </button>
  <button type="button" class="fab fab-large" aria-label="新增">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  </button>
</div>
`,"./android/icon-button.html":`<div class="row">
  <button type="button" class="icon-btn" aria-label="編輯">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20h4L19 9l-4-4L4 16z" />
    </svg>
  </button>
  <button type="button" class="icon-btn icon-btn-filled" aria-label="新增">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  </button>
  <button type="button" class="icon-btn icon-btn-tonal" aria-label="分享">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5.5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4" />
    </svg>
  </button>
  <button type="button" class="icon-btn icon-btn-outlined" aria-label="刪除">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13" />
    </svg>
  </button>
</div>
`,"./android/modal-dialog.html":`<button type="button" class="btn" data-open="and-dialog">重設設定</button>
<dialog id="and-dialog" class="dialog dialog-centered" aria-labelledby="and-dialog-title">
  <div class="dialog-icon">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4" />
    </svg>
  </div>
  <h3 id="and-dialog-title">重設設定？</h3>
  <p class="muted">所有偏好設定會回到預設值，已下載的資料不受影響。</p>
  <div class="actions">
    <button type="button" class="btn btn-text" data-close>取消</button
    ><button type="button" class="btn btn-text" data-close>重設</button>
  </div>
</dialog>
`,"./android/modal-dialog.thumb.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="dialog dialog-centered">
    <div class="dialog-icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4" />
      </svg>
    </div>
    <h3>重設設定？</h3>
    <p class="muted">所有偏好設定會回到預設值，已下載的資料不受影響。</p>
    <div class="actions">
      <button type="button" class="btn btn-text">取消</button><button type="button" class="btn btn-text">重設</button>
    </div>
  </div>
</div>
`,"./android/popover.html":`<button type="button" class="icon-btn" popovertarget="and-rich-tip" aria-label="關於自動備份">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6M12 7.5v.5" />
  </svg>
</button>
<div id="and-rich-tip" popover class="rich-tooltip">
  <strong>自動備份</strong>
  連上 Wi‑Fi 且充電時，相片會自動備份到雲端。
  <br /><button type="button" class="btn btn-text" popovertarget="and-rich-tip" popovertargetaction="hide">了解</button>
</div>
`,"./android/popover.thumb.html":`<div class="stack" style="justify-items: start; gap: 4px">
  <span class="icon-btn"
    ><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5v.5" /></svg
  ></span>
  <div class="rich-tooltip static"><strong>自動備份</strong>連上 Wi‑Fi 且充電時，相片會自動備份到雲端。</div>
</div>
`,"./android/popup-select.html":`<div class="tf tf-outlined tf-dropdown" style="anchor-name: --and-exposed">
  <input id="and-exposed" readonly value="台北" placeholder=" " tabindex="-1" aria-hidden="true" />
  <span>城市</span>
  <span class="trailing"
    ><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10h10l-5 5z" /></svg
  ></span>
  <button
    type="button"
    popovertarget="and-exposed-list"
    aria-haspopup="listbox"
    aria-label="城市：台北"
    style="position: absolute; inset: 0; border: 0; border-radius: 4px; background: none; cursor: pointer"
  ></button>
</div>
<div id="and-exposed-list" popover role="listbox" class="menu menu-dropdown" data-for="and-exposed" aria-label="城市">
  <button type="button" role="option" aria-selected="true">台北</button>
  <button type="button" role="option" aria-selected="false">台中</button>
  <button type="button" role="option" aria-selected="false">高雄</button>
</div>
`,"./android/progress-indicator.html":`<div class="stack">
  <span>正在上傳 3 張相片</span>
  <div class="linear" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="上傳進度">
    <span class="active" style="width: 60%"></span><span class="track"></span><span class="stop"></span>
  </div>
</div>
`,"./android/pull-down-menu.html":`<button type="button" class="icon-btn" popovertarget="and-overflow" aria-haspopup="menu" aria-label="更多選項">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="5.5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="18.5" r="2" />
  </svg>
</button>
<div id="and-overflow" popover role="menu" class="menu">
  <button type="button" role="menuitem">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20h4L19 9l-4-4L4 16z" />
    </svg>
    編輯
  </button>
  <button type="button" role="menuitem">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5.5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4" />
    </svg>
    分享
  </button>
  <hr />
  <button type="button" role="menuitem">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13" />
    </svg>
    刪除
  </button>
</div>
`,"./android/pull-down-menu.thumb.html":`<div class="stack" style="justify-items: start; gap: 4px">
  <span class="icon-btn"
    ><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="5.5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="18.5" r="2" /></svg
  ></span>
  <div class="menu menu-static">
    <button type="button" role="menuitem">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20h4L19 9l-4-4L4 16z" />
      </svg>
      編輯
    </button>
    <button type="button" role="menuitem">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5.5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="18.5" r="2.5" />
        <path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4" />
      </svg>
      分享
    </button>
    <hr />
    <button type="button" role="menuitem">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13" />
      </svg>
      刪除
    </button>
  </div>
</div>
`,"./android/radio-group.html":`<div role="radiogroup" aria-label="主題">
  <label class="check"><input type="radio" name="and-theme" checked /> 跟隨系統</label>
  <label class="check"><input type="radio" name="and-theme" /> 淺色</label>
  <label class="check"><input type="radio" name="and-theme" /> 深色</label>
</div>
`,"./android/search-field.html":`<search class="searchbar">
  <button type="button" class="icon-btn" aria-label="選單">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  </button>
  <input type="search" placeholder="搜尋郵件" aria-label="搜尋郵件" />
  <span class="avatar" aria-hidden="true">Y</span>
</search>
`,"./android/segmented-control.html":`<fieldset class="segmented">
  <legend class="visually-hidden">交通方式</legend>
  <label><input class="seg-input" type="radio" name="and-seg" checked /> 開車</label>
  <label><input class="seg-input" type="radio" name="and-seg" /> 大眾運輸</label>
  <label><input class="seg-input" type="radio" name="and-seg" /> 步行</label>
</fieldset>
`,"./android/separator.html":`<ul class="list" aria-label="設定">
  <li><span class="list-item" style="min-height: 56px">網路和網際網路</span></li>
  <li><hr /></li>
  <li><span class="list-item" style="min-height: 56px">已連結的裝置</span></li>
</ul>
`,"./android/share-sheet.html":`<button type="button" class="icon-btn icon-btn-tonal" data-open="and-share" aria-label="分享">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="18" cy="5.5" r="2.5" />
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="18.5" r="2.5" />
    <path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4" />
  </svg>
</button>
<dialog id="and-share" class="sheet" aria-labelledby="and-share-title">
  <div class="handle" aria-hidden="true"></div>
  <p id="and-share-title" style="margin: 0 16px 16px; font-size: 16px">分享「旅行相簿」</p>
  <div class="share-targets">
    <span class="share-target"><span></span>Messages</span>
    <span class="share-target"><span></span>Gmail</span>
    <span class="share-target"><span></span>雲端硬碟</span>
    <span class="share-target"><span></span>附近分享</span>
  </div>
  <div class="row" style="justify-content: center; margin-top: 16px">
    <button type="button" class="btn btn-text" data-close>取消</button>
  </div>
</dialog>
`,"./android/share-sheet.thumb.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="sheet">
    <div class="handle" aria-hidden="true"></div>
    <p style="margin: 0 16px 16px; font-size: 16px">分享「旅行相簿」</p>
    <div class="share-targets">
      <span class="share-target"><span></span>Messages</span>
      <span class="share-target"><span></span>Gmail</span>
      <span class="share-target"><span></span>雲端硬碟</span>
      <span class="share-target"><span></span>附近分享</span>
    </div>
  </div>
</div>
`,"./android/sidebar.html":`<button type="button" class="icon-btn" data-open="and-drawer-dialog" aria-label="開啟導覽匣">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
</button>
<dialog id="and-drawer-dialog" class="drawer" aria-labelledby="and-drawer-title">
  <h3 id="and-drawer-title">郵件</h3>
  <a href="#and-drawer" aria-current="page"
    ><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 13.5 6 5h12l2.5 8.5V19h-17zM3.5 13.5H8l1.5 2.5h5l1.5-2.5h4.5" />
    </svg>
    收件匣</a
  >
  <a href="#and-drawer"
    ><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12 20 4l-6 16-3-7z" />
    </svg>
    寄件備份</a
  >
  <a href="#and-drawer"
    ><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" />
    </svg>
    已加星號</a
  >
  <button type="button" class="btn btn-text" data-close>關閉</button>
</dialog>
`,"./android/sidebar.thumb.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <nav class="drawer">
    <h3>郵件</h3>
    <a href="#and-drawer" aria-current="page"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 13.5 6 5h12l2.5 8.5V19h-17zM3.5 13.5H8l1.5 2.5h5l1.5-2.5h4.5" />
      </svg>
      收件匣</a
    >
    <a href="#and-drawer"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12 20 4l-6 16-3-7z" />
      </svg>
      寄件備份</a
    >
    <a href="#and-drawer"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" />
      </svg>
      已加星號</a
    >
  </nav>
</div>
`,"./android/slider.html":`<label class="stack"
  >媒體音量
  <input type="range" min="0" max="100" value="55" style="--fill: 55%" />
</label>
`,"./android/spinner.html":`<div role="status" class="stack" style="justify-items: center">
  <span class="circular" aria-hidden="true"></span>
  <span class="muted">載入中…</span>
</div>
`,"./android/table.html":`<ul class="list" aria-label="聯絡人">
  <li>
    <a class="list-item" href="#and-list"
      ><span class="avatar avatar-large" aria-hidden="true">A</span
      ><span class="text"
        ><span class="headline">Amy Chen</span><span class="supporting">明天的會議改到 3 點</span></span
      ><span class="trailing">10:42</span></a
    >
  </li>
  <li>
    <a class="list-item" href="#and-list"
      ><span class="avatar avatar-large" aria-hidden="true">B</span
      ><span class="text"><span class="headline">Ben Lin</span><span class="supporting">照片已上傳</span></span
      ><span class="trailing">昨天</span></a
    >
  </li>
</ul>
`,"./android/tabs.html":`<div class="tabs">
  <div role="tablist" aria-label="相簿">
    <button type="button" role="tab" id="and-tab-1" aria-selected="true" aria-controls="and-panel-1">相片</button>
    <button type="button" role="tab" id="and-tab-2" aria-selected="false" aria-controls="and-panel-2" tabindex="-1">
      相簿
    </button>
    <button type="button" role="tab" id="and-tab-3" aria-selected="false" aria-controls="and-panel-3" tabindex="-1">
      回憶
    </button>
  </div>
  <div role="tabpanel" id="and-panel-1" aria-labelledby="and-tab-1">1,204 張相片</div>
  <div role="tabpanel" id="and-panel-2" aria-labelledby="and-tab-2" hidden>12 個相簿</div>
  <div role="tabpanel" id="and-panel-3" aria-labelledby="and-tab-3" hidden>去年的今天</div>
</div>
`,"./android/text-field.html":`<div class="stack">
  <label class="tf"><input placeholder=" " value="王小明" /><span>姓名</span></label>
  <label class="tf tf-outlined"><input type="email" placeholder=" " /><span>Email</span></label>
</div>
`,"./android/toast.html":`<button type="button" class="btn btn-tonal" data-toast="and-snackbars" data-message="已封存 1 則對話">封存</button>
<div id="and-snackbars" role="status" aria-live="polite" class="snackbar-region"></div>
`,"./android/toast.thumb.html":`<div class="snackbar">已封存 1 則對話<button type="button" class="btn btn-text">復原</button></div>
`,"./android/toggle-switch.html":`<div class="stack">
  <label class="switch">Wi‑Fi <input type="checkbox" role="switch" checked /></label>
  <label class="switch">藍牙 <input type="checkbox" role="switch" /></label>
</div>
`,"./android/toolbar.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <div class="content muted">備忘錄內容</div>
  <div class="bottombar" role="toolbar" aria-label="動作">
    <button type="button" class="icon-btn" aria-label="核取清單">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m4 7 2 2 3-3M4 15l2 2 3-3M12 8h8M12 16h8" />
      </svg>
    </button>
    <button type="button" class="icon-btn" aria-label="繪圖">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20h4L19 9l-4-4L4 16z" />
      </svg>
    </button>
    <button type="button" class="icon-btn" aria-label="分享">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5.5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="18.5" r="2.5" />
        <path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4" />
      </svg>
    </button>
    <button type="button" class="fab" aria-label="新增">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </button>
  </div>
</div>
`,"./android/tooltip.html":`<span class="tooltip-wrap">
  <button type="button" class="icon-btn icon-btn-tonal" aria-label="新增至收藏" aria-describedby="and-tip">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" />
    </svg>
  </button>
  <span id="and-tip" role="tooltip" class="plain-tooltip">新增至收藏</span>
</span>
`,"./android/tooltip.thumb.html":`<span class="tooltip-wrap open">
  <span class="icon-btn icon-btn-tonal"
    ><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg
  ></span>
  <span class="plain-tooltip">新增至收藏</span>
</span>
`,"./android/top-app-bar.html":`<div class="phone">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>▾ ▮</span></div>
  <header class="topbar">
    <a href="#and-topbar" class="icon-btn" aria-label="返回"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M20 12H5M11 5l-7 7 7 7" /></svg
    ></a>
    <h3>相簿</h3>
    <button type="button" class="icon-btn" aria-label="搜尋">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20 20-4.8-4.8" />
      </svg>
    </button>
    <button type="button" class="icon-btn" aria-label="更多選項">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="5.5" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="18.5" r="2" />
      </svg>
    </button>
  </header>
  <div class="content muted">12 個相簿</div>
</div>
`,"./android/wheel-picker.html":`<div class="wheel-wrap">
  <ul class="wheel" data-wheel role="listbox" tabindex="0" aria-label="小時" aria-activedescendant="and-wheel-9">
    <li role="option" id="and-wheel-7" aria-selected="false">07</li>
    <li role="option" id="and-wheel-8" aria-selected="false">08</li>
    <li role="option" id="and-wheel-9" aria-selected="true">09</li>
    <li role="option" id="and-wheel-10" aria-selected="false">10</li>
    <li role="option" id="and-wheel-11" aria-selected="false">11</li>
  </ul>
</div>
`,"./android/wheel-picker.thumb.html":`<div class="wheel-wrap">
  <ul class="wheel" style="padding: 0; overflow: hidden">
    <li role="option">08</li>
    <li role="option">09</li>
    <li role="option">10</li>
  </ul>
</div>
`,"./ios/action-sheet.html":`<button type="button" class="btn" data-open="ios-actionsheet">清除歷史記錄…</button>
<dialog id="ios-actionsheet" class="actionsheet" aria-label="清除歷史記錄">
  <div class="actionsheet-group">
    <p>這會清除所有瀏覽記錄。</p>
    <button type="button" data-close>清除最近一小時</button>
    <button type="button" class="danger" data-close>清除全部</button>
  </div>
  <div class="actionsheet-group actionsheet-cancel">
    <button type="button" data-close autofocus>取消</button>
  </div>
</dialog>
`,"./ios/action-sheet.thumb.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="actionsheet">
    <div class="actionsheet-group">
      <p>這會清除所有瀏覽記錄。</p>
      <button type="button">清除最近一小時</button><button type="button" class="danger">清除全部</button>
    </div>
    <div class="actionsheet-group actionsheet-cancel"><button type="button">取消</button></div>
  </div>
</div>
`,"./ios/alert-dialog.html":`<button type="button" class="btn" data-open="ios-alert">刪除照片</button>
<dialog
  id="ios-alert"
  class="alert"
  role="alertdialog"
  aria-labelledby="ios-alert-title"
  aria-describedby="ios-alert-desc"
>
  <div class="alert-body">
    <h3 id="ios-alert-title">要刪除這張照片嗎？</h3>
    <p id="ios-alert-desc">照片會從所有裝置上移除。</p>
  </div>
  <div class="alert-actions">
    <button type="button" data-close autofocus>取消</button>
    <button type="button" class="danger" data-close>刪除</button>
  </div>
</dialog>
`,"./ios/alert-dialog.thumb.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="alert">
    <div class="alert-body">
      <h3>要刪除這張照片嗎？</h3>
      <p>照片會從所有裝置上移除。</p>
    </div>
    <div class="alert-actions">
      <button type="button">取消</button><button type="button" class="danger">刪除</button>
    </div>
  </div>
</div>
`,"./ios/badge.html":`<div class="list" style="width: 260px">
  <a class="cell" href="#ios-badge"
    >軟體更新<span class="trailing"
      ><span class="badge badge-inline">1</span
      ><svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m1.5 1.5 5 5-5 5" /></svg></span
  ></a>
  <a class="cell" href="#ios-badge"
    >收件匣<span class="trailing"
      >12<svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m1.5 1.5 5 5-5 5" /></svg></span
  ></a>
</div>
`,"./ios/bottom-navigation.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <div class="content"><p class="muted" style="padding-top: 40px; text-align: center">首頁內容</p></div>
  <nav class="tabbar" aria-label="分頁">
    <a href="#ios-tab" aria-current="page"
      ><svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M3 10 12 2.5 21 10M5.5 8v12h13V8" /></svg
      >首頁</a
    >
    <a href="#ios-tab"
      ><svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="9.5" cy="9.5" r="7" />
        <path d="m15 15 5.5 5.5" /></svg
      >搜尋</a
    >
    <a href="#ios-tab"
      ><svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20s-8.5-5-8.5-11A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 3c0 6-8.5 11-8.5 11z" /></svg
      >收藏<span class="badge">3</span></a
    >
    <a href="#ios-tab"
      ><svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="7" r="4" />
        <path d="M3 20.5c1-4 4.2-6 8-6s7 2 8 6" /></svg
      >帳號</a
    >
  </nav>
</div>
`,"./ios/bottom-sheet.html":`<button type="button" class="btn" data-open="ios-detent">顯示附近地點</button>
<dialog id="ios-detent" class="sheet sheet-medium" aria-labelledby="ios-detent-title">
  <div class="grabber" aria-hidden="true"></div>
  <h3 id="ios-detent-title" style="margin: 4px 0 12px; font-size: 22px">附近地點</h3>
  <ul class="list" style="background: var(--i-fill)">
    <li>
      <span class="cell">咖啡廳<span class="trailing">120 公尺</span></span>
    </li>
    <li>
      <span class="cell">書店<span class="trailing">350 公尺</span></span>
    </li>
  </ul>
  <button type="button" class="btn btn-plain" data-close>關閉</button>
</dialog>
`,"./ios/bottom-sheet.thumb.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <div class="content" style="background: linear-gradient(160deg, #cde8c8, #a9d4f5)"></div>
  <div class="sheet sheet-medium">
    <div class="grabber" aria-hidden="true"></div>
    <h3 style="margin: 4px 0 12px; font-size: 22px">附近地點</h3>
    <ul class="list" style="background: var(--i-fill)">
      <li>
        <span class="cell">咖啡廳<span class="trailing">120 公尺</span></span>
      </li>
      <li>
        <span class="cell">書店<span class="trailing">350 公尺</span></span>
      </li>
    </ul>
  </div>
</div>
`,"./ios/button.html":`<div class="stack" style="justify-items: center">
  <button type="button" class="btn btn-filled">繼續</button>
  <button type="button" class="btn">稍後再說</button>
  <button type="button" class="btn btn-plain">略過</button>
</div>
`,"./ios/card.html":`<section class="groupbox" aria-labelledby="ios-groupbox">
  <span id="ios-groupbox" class="groupbox-label">今日活動</span>
  <span>步數 6,240 · 爬樓 8 層</span>
</section>
`,"./ios/carousel.html":`<section aria-roledescription="carousel" aria-label="精選" class="carousel">
  <div class="slide slide-a" role="group" aria-roledescription="slide" aria-label="1 / 3">夏日歌單</div>
  <div class="slide slide-b" role="group" aria-roledescription="slide" aria-label="2 / 3" hidden>專注模式</div>
  <div class="slide slide-c" role="group" aria-roledescription="slide" aria-label="3 / 3" hidden>夜晚放鬆</div>
  <div class="page-dots">
    <button type="button" data-slide="0" aria-label="第 1 頁" aria-current="true"></button>
    <button type="button" data-slide="1" aria-label="第 2 頁" aria-current="false"></button>
    <button type="button" data-slide="2" aria-label="第 3 頁" aria-current="false"></button>
  </div>
</section>
`,"./ios/color-picker.html":`<div class="list" style="width: 280px">
  <label class="cell"
    >背景顏色 <span class="trailing"><input type="color" class="colorwell" value="#34c759" /></span
  ></label>
</div>
`,"./ios/context-menu.html":`<div
  tabindex="0"
  data-contextmenu="ios-context"
  class="stack"
  style="justify-items: center; padding: 16px 24px; border-radius: 16px; background: var(--i-cell)"
>
  <span
    style="width: 120px; height: 80px; border-radius: 10px; background: linear-gradient(135deg, #5ac8fa, #007aff)"
  ></span>
  <span class="small muted">長按（或右鍵、Shift+F10）</span>
</div>
<div id="ios-context" popover role="menu" class="menu menu-floating">
  <button type="button" role="menuitem">拷貝</button>
  <button type="button" role="menuitem">
    分享
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M9 1.5v12M5 5.5l4-4 4 4M6 9H3v11.5h12V9h-3" />
    </svg>
  </button>
  <button type="button" role="menuitem">
    加入喜好項目
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20s-8.5-5-8.5-11A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 3c0 6-8.5 11-8.5 11z" />
    </svg>
  </button>
  <hr />
  <button type="button" role="menuitem" class="danger">
    刪除
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M2 4.5h14M7 4.5V2.5h4v2M4 4.5l1 13.5h8l1-13.5" />
    </svg>
  </button>
</div>
`,"./ios/context-menu.thumb.html":`<div class="stack" style="justify-items: center">
  <span
    style="
      width: 150px;
      height: 100px;
      border-radius: 14px;
      background: linear-gradient(135deg, #5ac8fa, #007aff);
      box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);
    "
  ></span>
  <div class="menu menu-static">
    <button type="button">拷貝</button>
    <button type="button">
      分享
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M9 1.5v12M5 5.5l4-4 4 4M6 9H3v11.5h12V9h-3" />
      </svg>
    </button>
    <hr />
    <button type="button" class="danger">
      刪除
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M2 4.5h14M7 4.5V2.5h4v2M4 4.5l1 13.5h8l1-13.5" />
      </svg>
    </button>
  </div>
</div>
`,"./ios/date-picker.html":`<div class="list" style="width: 290px">
  <label class="cell"
    >日期 <span class="trailing"><input type="date" class="date-chip" value="2026-11-14" /></span
  ></label>
  <label class="cell"
    >時間 <span class="trailing"><input type="time" class="date-chip" value="09:30" /></span
  ></label>
</div>
`,"./ios/disclosure.html":`<details>
  <summary>進階設定</summary>
  <label class="switch">低耗電模式 <input type="checkbox" role="switch" /></label>
</details>
`,"./ios/meter.html":`<div class="gauge">
  <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
    <circle
      cx="48"
      cy="48"
      r="40"
      fill="none"
      stroke="var(--i-fill-strong)"
      stroke-width="8"
      stroke-linecap="round"
      stroke-dasharray="188.5 251.3"
    />
    <circle
      cx="48"
      cy="48"
      r="40"
      fill="none"
      stroke="var(--i-green)"
      stroke-width="8"
      stroke-linecap="round"
      stroke-dasharray="135.7 251.3"
    />
  </svg>
  <meter class="visually-hidden" min="0" max="100" value="72" aria-label="空氣品質">72</meter>
  <strong aria-hidden="true">72</strong>
</div>
`,"./ios/modal-dialog.html":`<button type="button" class="btn btn-filled" data-open="ios-sheet">新增提醒事項</button>
<dialog id="ios-sheet" class="sheet" aria-labelledby="ios-sheet-title">
  <div class="grabber" aria-hidden="true"></div>
  <div class="sheet-header">
    <button type="button" class="btn btn-plain" data-close>取消</button>
    <h3 id="ios-sheet-title">新增提醒事項</h3>
    <button type="button" class="btn btn-plain" data-close><strong>完成</strong></button>
  </div>
  <input class="field" placeholder="標題" aria-label="標題" style="width: 100%; background: var(--i-fill)" />
</dialog>
`,"./ios/modal-dialog.thumb.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="sheet">
    <div class="grabber" aria-hidden="true"></div>
    <div class="sheet-header">
      <button type="button" class="btn btn-plain">取消</button>
      <h3>新增提醒事項</h3>
      <button type="button" class="btn btn-plain"><strong>完成</strong></button>
    </div>
    <input class="field" placeholder="標題" aria-label="標題" style="width: 100%; background: var(--i-fill)" />
  </div>
</div>
`,"./ios/popover.html":`<button type="button" class="btn" popovertarget="ios-popover">文字格式</button>
<div id="ios-popover" popover class="popover">
  <p style="font-weight: 600; margin-bottom: 10px">格式</p>
  <label class="switch">粗體 <input type="checkbox" role="switch" /></label>
</div>
`,"./ios/popover.thumb.html":`<div class="stack" style="justify-items: start; gap: 4px">
  <span class="btn">文字格式</span>
  <div class="popover popover-static">
    <p style="font-weight: 600; margin-bottom: 10px">格式</p>
    <label class="switch">粗體 <input type="checkbox" role="switch" /></label>
  </div>
</div>
`,"./ios/popup-select.html":`<div class="list" style="width: 290px">
  <div class="cell">
    排序方式
    <span class="trailing">
      <button type="button" class="popup-trigger" popovertarget="ios-popup" aria-haspopup="menu">
        最近加入
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M1.5 4.5 4 2l2.5 2.5M1.5 8.5 4 11l2.5-2.5" />
        </svg>
      </button>
    </span>
  </div>
</div>
<div id="ios-popup" popover role="menu" class="menu">
  <button type="button" role="menuitemradio" aria-checked="false">
    <span>名稱</span><span class="check-slot"></span>
  </button>
  <button type="button" role="menuitemradio" aria-checked="true">
    <span>最近加入</span
    ><span class="check-slot"
      ><svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m1.5 6.5 4 4 7-9" /></svg
    ></span>
  </button>
  <button type="button" role="menuitemradio" aria-checked="false">
    <span>評分</span><span class="check-slot"></span>
  </button>
</div>
`,"./ios/progress-indicator.html":`<label class="stack"
  >正在下載更新…
  <progress max="100" value="40">40%</progress>
  <span class="small muted">還剩約 3 分鐘</span>
</label>
`,"./ios/pull-down-menu.html":`<button type="button" class="btn btn-glass" popovertarget="ios-pull-down" aria-haspopup="menu" aria-label="更多">
  <svg width="20" height="4" viewBox="0 0 20 4" fill="currentColor" aria-hidden="true">
    <circle cx="2" cy="2" r="2" />
    <circle cx="10" cy="2" r="2" />
    <circle cx="18" cy="2" r="2" />
  </svg>
</button>
<div id="ios-pull-down" popover role="menu" class="menu">
  <button type="button" role="menuitem">
    選取
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m1.5 6.5 4 4 7-9" />
    </svg>
  </button>
  <button type="button" role="menuitem">
    編輯
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12.5 2.5l3 3L6 15H3v-3z" />
    </svg>
  </button>
  <hr />
  <button type="button" role="menuitem" class="danger">
    刪除
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M2 4.5h14M7 4.5V2.5h4v2M4 4.5l1 13.5h8l1-13.5" />
    </svg>
  </button>
</div>
`,"./ios/pull-down-menu.thumb.html":`<div class="stack" style="justify-items: start">
  <span class="btn btn-glass"
    ><svg width="20" height="4" viewBox="0 0 20 4" fill="currentColor" aria-hidden="true">
      <circle cx="2" cy="2" r="2" />
      <circle cx="10" cy="2" r="2" />
      <circle cx="18" cy="2" r="2" /></svg
  ></span>
  <div class="menu menu-static">
    <button type="button">
      選取
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m1.5 6.5 4 4 7-9" />
      </svg>
    </button>
    <button type="button">
      編輯
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12.5 2.5l3 3L6 15H3v-3z" />
      </svg>
    </button>
    <hr />
    <button type="button" class="danger">
      刪除
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M2 4.5h14M7 4.5V2.5h4v2M4 4.5l1 13.5h8l1-13.5" />
      </svg>
    </button>
  </div>
</div>
`,"./ios/search-field.html":`<search class="search">
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="6.5" cy="6.5" r="5" />
    <path d="m10.3 10.3 3.7 3.7" />
  </svg>
  <input type="search" placeholder="搜尋" aria-label="搜尋" />
</search>
`,"./ios/segmented-control.html":`<fieldset class="segmented">
  <legend class="visually-hidden">期間</legend>
  <label><input type="radio" name="ios-seg" /> 日</label>
  <label><input type="radio" name="ios-seg" checked /> 週</label>
  <label><input type="radio" name="ios-seg" /> 月</label>
  <label><input type="radio" name="ios-seg" /> 年</label>
</fieldset>
`,"./ios/separator.html":`<div class="list" style="width: 260px; padding: 0 16px">
  <p style="padding: 12px 0">上午會議</p>
  <hr />
  <p style="padding: 12px 0">下午報告</p>
</div>
`,"./ios/share-sheet.html":`<button type="button" class="btn btn-glass" data-open="ios-share" aria-label="分享">
  <svg
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M9 1.5v12M5 5.5l4-4 4 4M6 9H3v11.5h12V9h-3" />
  </svg>
</button>
<dialog id="ios-share" class="sheet sheet-medium" aria-labelledby="ios-share-title">
  <div class="grabber" aria-hidden="true"></div>
  <p id="ios-share-title" class="small muted" style="text-align: center">分享「旅行相簿」</p>
  <div class="share-targets">
    <span class="share-target"><span></span>訊息</span>
    <span class="share-target"><span></span>郵件</span>
    <span class="share-target"><span></span>備忘錄</span>
    <span class="share-target"><span></span>更多</span>
  </div>
  <ul class="list" style="background: var(--i-fill)">
    <li><button type="button" class="cell" data-close>拷貝連結</button></li>
    <li><button type="button" class="cell" data-close>加入共享相簿</button></li>
  </ul>
</dialog>
`,"./ios/share-sheet.thumb.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <div class="content"></div>
  <div class="dim"></div>
  <div class="sheet sheet-medium">
    <div class="grabber" aria-hidden="true"></div>
    <p class="small muted" style="text-align: center">分享「旅行相簿」</p>
    <div class="share-targets">
      <span class="share-target"><span></span>訊息</span>
      <span class="share-target"><span></span>郵件</span>
      <span class="share-target"><span></span>備忘錄</span>
      <span class="share-target"><span></span>更多</span>
    </div>
    <ul class="list" style="background: var(--i-fill)">
      <li><button type="button" class="cell">拷貝連結</button></li>
      <li><button type="button" class="cell">加入共享相簿</button></li>
    </ul>
  </div>
</div>
`,"./ios/sidebar.html":`<div class="screen screen-wide">
  <div class="sidebar-layout">
    <nav class="ipad-sidebar" aria-label="側邊欄">
      <h3>郵件</h3>
      <a href="#ios-sidebar" aria-current="page">收件匣</a>
      <a href="#ios-sidebar">已傳送</a>
      <a href="#ios-sidebar">草稿</a>
      <a href="#ios-sidebar">垃圾桶</a>
    </nav>
    <div class="ipad-detail"><p class="muted">收件匣（12）</p></div>
  </div>
</div>
`,"./ios/skeleton.html":`<div class="list" style="width: 280px" aria-busy="true" aria-label="載入中">
  <div class="cell">
    <span class="redacted" style="width: 29px; height: 29px; border-radius: 7px"></span
    ><span class="redacted" style="width: 140px"></span>
  </div>
  <div class="cell">
    <span class="redacted" style="width: 29px; height: 29px; border-radius: 7px"></span
    ><span class="redacted" style="width: 100px"></span>
  </div>
</div>
`,"./ios/slider.html":`<label class="stack" style="justify-items: center"
  >亮度
  <input type="range" min="0" max="100" value="65" style="--fill: 65%" />
</label>
`,"./ios/spinner.html":`<div role="status" class="stack" style="justify-items: center">
  <span class="spinner" aria-hidden="true"></span>
  <span class="muted">載入中</span>
</div>
`,"./ios/stepper.html":`<label class="stepper" data-stepper>
  數量
  <input type="number" min="0" max="10" value="2" readonly />
  <span class="stepper-buttons">
    <button type="button" data-step="-1" aria-label="減少">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M2 8h12" />
      </svg>
    </button>
    <button type="button" data-step="1" aria-label="增加">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M8 2v12M2 8h12" />
      </svg>
    </button>
  </span>
</label>
`,"./ios/table.html":`<div class="screen screen-short">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <nav class="navbar">
    <div class="navbar-row"></div>
    <h3>設定</h3>
  </nav>
  <div class="content">
    <ul class="list">
      <li>
        <a class="cell" href="#ios-list"
          ><span class="cell-icon"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              aria-hidden="true"
            >
              <circle cx="8.5" cy="8.5" r="2.5" />
              <path
                d="M8.5 1v2.2M8.5 13.8V16M1 8.5h2.2M13.8 8.5H16M3.2 3.2l1.6 1.6M12.2 12.2l1.6 1.6M3.2 13.8l1.6-1.6M12.2 4.8l1.6-1.6"
              /></svg></span
          >一般<span class="trailing"
            ><svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m1.5 1.5 5 5-5 5" /></svg></span
        ></a>
      </li>
      <li>
        <a class="cell" href="#ios-list"
          ><span class="cell-icon" style="background: var(--i-orange)"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              aria-hidden="true"
            >
              <circle cx="8.5" cy="8.5" r="2.5" />
              <path
                d="M8.5 1v2.2M8.5 13.8V16M1 8.5h2.2M13.8 8.5H16M3.2 3.2l1.6 1.6M12.2 12.2l1.6 1.6M3.2 13.8l1.6-1.6M12.2 4.8l1.6-1.6"
              /></svg></span
          >通知<span class="trailing"
            ><svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m1.5 1.5 5 5-5 5" /></svg></span
        ></a>
      </li>
      <li>
        <a class="cell" href="#ios-list"
          ><span class="cell-icon" style="background: var(--i-green)"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              aria-hidden="true"
            >
              <circle cx="8.5" cy="8.5" r="2.5" />
              <path
                d="M8.5 1v2.2M8.5 13.8V16M1 8.5h2.2M13.8 8.5H16M3.2 3.2l1.6 1.6M12.2 12.2l1.6 1.6M3.2 13.8l1.6-1.6M12.2 4.8l1.6-1.6"
              /></svg></span
          >電池<span class="trailing"
            >87%<svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m1.5 1.5 5 5-5 5" /></svg></span
        ></a>
      </li>
    </ul>
  </div>
</div>
`,"./ios/text-field.html":`<div class="stack">
  <input class="field" placeholder="姓名" aria-label="姓名" />
  <input class="field" type="email" placeholder="Email" aria-label="Email" />
</div>
`,"./ios/toggle-switch.html":`<div class="list" style="width: 280px">
  <label class="cell switch">飛航模式 <input type="checkbox" role="switch" /></label>
  <label class="cell switch">Wi‑Fi <input type="checkbox" role="switch" checked /></label>
</div>
`,"./ios/toolbar.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <div class="content"><p class="muted" style="padding-top: 40px; text-align: center">備忘錄內容</p></div>
  <div class="toolbar" role="toolbar" aria-label="工具列">
    <button type="button" class="btn btn-glass" aria-label="分享">
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M9 1.5v12M5 5.5l4-4 4 4M6 9H3v11.5h12V9h-3" />
      </svg>
    </button>
    <button type="button" class="btn btn-glass" aria-label="刪除">
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M2 4.5h14M7 4.5V2.5h4v2M4 4.5l1 13.5h8l1-13.5" />
      </svg>
    </button>
    <button type="button" class="btn btn-glass" aria-label="新增">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12.5 2.5l3 3L6 15H3v-3z" />
      </svg>
    </button>
  </div>
</div>
`,"./ios/top-app-bar.html":`<div class="screen">
  <div class="statusbar" aria-hidden="true"><span>9:41</span><span>●●● ▮</span></div>
  <nav class="navbar" aria-label="導覽列">
    <div class="navbar-row">
      <a href="#ios-nav" class="back popup-trigger"
        ><svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          stroke="currentColor"
          stroke-width="2.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M9 2 2 9l7 7" />
        </svg>
        設定</a
      >
      <button type="button" class="btn btn-plain">編輯</button>
    </div>
    <h3>一般</h3>
  </nav>
  <div class="content">
    <ul class="list">
      <li>
        <a class="cell" href="#ios-list"
          ><span class="cell-icon"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              aria-hidden="true"
            >
              <circle cx="8.5" cy="8.5" r="2.5" />
              <path
                d="M8.5 1v2.2M8.5 13.8V16M1 8.5h2.2M13.8 8.5H16M3.2 3.2l1.6 1.6M12.2 12.2l1.6 1.6M3.2 13.8l1.6-1.6M12.2 4.8l1.6-1.6"
              /></svg></span
          >一般<span class="trailing"
            ><svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m1.5 1.5 5 5-5 5" /></svg></span
        ></a>
      </li>
      <li>
        <a class="cell" href="#ios-list"
          ><span class="cell-icon" style="background: var(--i-orange)"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              aria-hidden="true"
            >
              <circle cx="8.5" cy="8.5" r="2.5" />
              <path
                d="M8.5 1v2.2M8.5 13.8V16M1 8.5h2.2M13.8 8.5H16M3.2 3.2l1.6 1.6M12.2 12.2l1.6 1.6M3.2 13.8l1.6-1.6M12.2 4.8l1.6-1.6"
              /></svg></span
          >通知<span class="trailing"
            ><svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m1.5 1.5 5 5-5 5" /></svg></span
        ></a>
      </li>
      <li>
        <a class="cell" href="#ios-list"
          ><span class="cell-icon" style="background: var(--i-green)"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              aria-hidden="true"
            >
              <circle cx="8.5" cy="8.5" r="2.5" />
              <path
                d="M8.5 1v2.2M8.5 13.8V16M1 8.5h2.2M13.8 8.5H16M3.2 3.2l1.6 1.6M12.2 12.2l1.6 1.6M3.2 13.8l1.6-1.6M12.2 4.8l1.6-1.6"
              /></svg></span
          >電池<span class="trailing"
            >87%<svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m1.5 1.5 5 5-5 5" /></svg></span
        ></a>
      </li>
    </ul>
  </div>
</div>
`,"./ios/tree-view.html":`<ul role="tree" aria-label="資料夾" class="tree">
  <li role="treeitem" aria-expanded="true" tabindex="0">
    <span class="tree-label">iCloud 雲碟</span>
    <ul role="group">
      <li role="treeitem" aria-expanded="false" tabindex="-1">
        <span class="tree-label">文件</span>
        <ul role="group">
          <li role="treeitem" tabindex="-1"><span class="tree-label">履歷.pdf</span></li>
        </ul>
      </li>
      <li role="treeitem" tabindex="-1"><span class="tree-label">照片</span></li>
    </ul>
  </li>
</ul>
`,"./ios/wheel-picker.html":`<div class="wheel-wrap">
  <ul class="wheel" data-wheel role="listbox" tabindex="0" aria-label="分鐘" aria-activedescendant="ios-wheel-15">
    <li role="option" id="ios-wheel-0" aria-selected="false">0 分鐘</li>
    <li role="option" id="ios-wheel-5" aria-selected="false">5 分鐘</li>
    <li role="option" id="ios-wheel-10" aria-selected="false">10 分鐘</li>
    <li role="option" id="ios-wheel-15" aria-selected="true">15 分鐘</li>
    <li role="option" id="ios-wheel-20" aria-selected="false">20 分鐘</li>
    <li role="option" id="ios-wheel-25" aria-selected="false">25 分鐘</li>
    <li role="option" id="ios-wheel-30" aria-selected="false">30 分鐘</li>
  </ul>
</div>
`,"./ios/wheel-picker.thumb.html":`<div class="wheel-wrap">
  <ul class="wheel" style="padding: 10px 0; overflow: hidden">
    <li role="option">5 分鐘</li>
    <li role="option">10 分鐘</li>
    <li role="option">15 分鐘</li>
    <li role="option">20 分鐘</li>
    <li role="option">25 分鐘</li>
    <li role="option">30 分鐘</li>
  </ul>
</div>
`,"./macos/alert-dialog.html":`<button type="button" class="btn" data-open="mac-alert">清空垃圾桶…</button>
<dialog
  id="mac-alert"
  class="alert"
  role="alertdialog"
  aria-labelledby="mac-alert-title"
  aria-describedby="mac-alert-desc"
>
  <div class="alert-icon" aria-hidden="true"></div>
  <h3 id="mac-alert-title">確定要永久刪除垃圾桶中的項目嗎？</h3>
  <p id="mac-alert-desc">此動作無法復原。</p>
  <div class="actions">
    <button type="button" class="btn btn-default" data-close>清空垃圾桶</button>
    <button type="button" class="btn" data-close autofocus>取消</button>
  </div>
</dialog>
`,"./macos/alert-dialog.thumb.html":`<div class="alert">
  <div class="alert-icon" aria-hidden="true"></div>
  <h3>確定要永久刪除垃圾桶中的項目嗎？</h3>
  <p>此動作無法復原。</p>
  <div class="actions"><span class="btn btn-default">清空垃圾桶</span><span class="btn">取消</span></div>
</div>
`,"./macos/badge.html":`<label class="stack"
  >收件人：
  <span class="tokens">
    <span class="token">王小明</span>
    <span class="token">Amy Chen</span>
    <input aria-label="新增收件人" />
  </span>
</label>
`,"./macos/breadcrumb.html":`<nav aria-label="路徑">
  <ol class="pathcontrol">
    <li>
      <a href="#mac-path"
        ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        使用者</a
      >
    </li>
    <li>
      <a href="#mac-path"
        ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        文件</a
      >
    </li>
    <li>
      <a href="#mac-path" aria-current="page"
        ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        專案</a
      >
    </li>
  </ol>
</nav>
`,"./macos/button.html":`<div class="row">
  <button type="button" class="btn">取消</button>
  <button type="button" class="btn btn-default">好</button>
  <button type="button" class="btn" disabled>停用</button>
  <button type="button" class="btn btn-small">小型</button>
</div>
`,"./macos/card.html":`<fieldset class="box">
  <legend>網路</legend>
  <div class="stack">
    <label class="check"><input type="checkbox" checked /> 使用代理伺服器</label>
    <label class="check"><input type="checkbox" /> 略過本機位址</label>
  </div>
</fieldset>
`,"./macos/checkbox.html":`<div class="stack">
  <label class="check"><input type="checkbox" checked /> 在選單列中顯示</label>
  <label class="check"><input type="checkbox" /> 開機時自動開啟</label>
  <label class="check"><input type="checkbox" disabled /> 需要管理者權限</label>
</div>
`,"./macos/collection-view.html":`<div class="collection" role="radiogroup" aria-label="資料夾">
  <label class="collection-item"
    ><input type="radio" name="mac-collection" />
    <svg class="folder" width="52" height="42" viewBox="0 0 14 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
      /></svg
    ><span>文件</span></label
  >
  <label class="collection-item"
    ><input type="radio" name="mac-collection" />
    <svg class="folder" width="52" height="42" viewBox="0 0 14 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
      /></svg
    ><span>下載項目</span></label
  >
  <label class="collection-item"
    ><input type="radio" name="mac-collection" checked />
    <svg class="folder" width="52" height="42" viewBox="0 0 14 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
      /></svg
    ><span>照片</span></label
  >
  <label class="collection-item"
    ><input type="radio" name="mac-collection" />
    <svg class="folder" width="52" height="42" viewBox="0 0 14 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
      /></svg
    ><span>音樂</span></label
  >
  <label class="collection-item"
    ><input type="radio" name="mac-collection" />
    <svg class="folder" width="52" height="42" viewBox="0 0 14 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
      /></svg
    ><span>專案</span></label
  >
  <label class="collection-item"
    ><input type="radio" name="mac-collection" />
    <svg class="folder" width="52" height="42" viewBox="0 0 14 12" aria-hidden="true">
      <path
        fill="currentColor"
        d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
      /></svg
    ><span>備份</span></label
  >
</div>
`,"./macos/color-picker.html":`<label class="row"
  >標記顏色：
  <input type="color" class="colorwell" value="#ff9500" />
</label>
`,"./macos/combobox.html":`<label class="row"
  >字體大小：
  <span class="combo">
    <input class="field" list="mac-combo-sizes" value="13" style="min-width: 80px; width: 80px" />
    <span aria-hidden="true"
      ><svg
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m1 1 3.5 3.5L8 1" /></svg
    ></span>
  </span>
</label>
<datalist id="mac-combo-sizes">
  <option value="11"></option>
  <option value="13"></option>
  <option value="16"></option>
  <option value="24"></option>
</datalist>
`,"./macos/context-menu.html":`<div class="window" style="width: 300px">
  <div class="window-body">
    <div
      tabindex="0"
      data-contextmenu="mac-context"
      class="stack"
      style="place-items: center; padding: 18px; border-radius: 8px; border: 1px dashed var(--m-separator)"
    >
      報告.pdf
      <small class="muted">按右鍵或 Shift+F10</small>
    </div>
  </div>
</div>
<div id="mac-context" popover role="menu" class="menu menu-floating">
  <button type="button" role="menuitem">打開</button>
  <button type="button" role="menuitem">取得資訊 <kbd>⌘I</kbd></button>
  <hr />
  <button type="button" role="menuitem">拷貝「報告.pdf」</button>
  <button type="button" role="menuitem">移到垃圾桶</button>
</div>
`,"./macos/context-menu.thumb.html":`<div class="row" style="align-items: start">
  <div
    class="stack"
    style="place-items: center; padding: 18px; border-radius: 8px; border: 1px dashed var(--m-separator)"
  >
    報告.pdf
  </div>
  <div class="menu menu-static" style="margin-top: 30px">
    <button type="button">打開</button>
    <button type="button">取得資訊 <kbd>⌘I</kbd></button>
    <hr />
    <button type="button">移到垃圾桶</button>
  </div>
</div>
`,"./macos/date-picker.html":`<label class="datepicker" data-stepper
  >日期：
  <input class="field" type="date" value="2026-11-14" />
  <span class="stepper-buttons">
    <button type="button" data-step="1" aria-label="下一天">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M1 4 4 1l3 3" />
      </svg>
    </button>
    <button type="button" data-step="-1" aria-label="前一天">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="m1 1 3 3 3-3" />
      </svg>
    </button>
  </span>
</label>
`,"./macos/disclosure.html":`<details>
  <summary>詳細資訊</summary>
  <div class="stack">
    <span class="muted">種類：PDF 文件</span>
    <span class="muted">大小：2.4 MB</span>
  </div>
</details>
`,"./macos/drawer.html":`<div class="window">
  <div class="titlebar">
    <div class="lights" aria-hidden="true"><span></span><span></span><span></span></div>
    <span class="window-title">簡報</span>
  </div>
  <div class="split" style="height: 150px">
    <div class="split-main">投影片 3</div>
    <aside class="inspector" aria-label="檢閱器">
      <span class="inspector-heading">格式</span>
      <label class="check"><input type="checkbox" checked /> 顯示標題</label>
      <label class="stack">不透明度<input type="range" value="70" style="--fill: 70%; width: 120px" /></label>
    </aside>
  </div>
</div>
`,"./macos/menubar.html":`<ul role="menubar" aria-label="選單列" class="menubar">
  <li role="none"><button type="button" role="menuitem" class="app-name">預覽程式</button></li>
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu" popovertarget="mac-menu-file">檔案</button>
  </li>
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu" popovertarget="mac-menu-edit">編輯</button>
  </li>
  <li role="none"><button type="button" role="menuitem">顯示方式</button></li>
  <li role="none"><button type="button" role="menuitem">視窗</button></li>
</ul>
<div id="mac-menu-file" popover role="menu" class="menu">
  <button type="button" role="menuitem">新增 <kbd>⌘N</kbd></button>
  <button type="button" role="menuitem">打開… <kbd>⌘O</kbd></button>
  <hr />
  <button type="button" role="menuitem">關閉 <kbd>⌘W</kbd></button>
</div>
<div id="mac-menu-edit" popover role="menu" class="menu">
  <button type="button" role="menuitem">還原 <kbd>⌘Z</kbd></button>
  <button type="button" role="menuitem">拷貝 <kbd>⌘C</kbd></button>
  <button type="button" role="menuitem">貼上 <kbd>⌘V</kbd></button>
</div>
`,"./macos/meter.html":`<label class="stack"
  >電池健康度
  <meter min="0" max="100" low="30" high="70" optimum="100" value="80">80%</meter>
</label>
`,"./macos/modal-dialog.html":`<button type="button" class="btn" data-open="mac-sheet">匯出…</button>
<dialog id="mac-sheet" class="sheet" aria-labelledby="mac-sheet-title">
  <h3 id="mac-sheet-title">匯出為 PDF</h3>
  <div class="form">
    <label class="label" for="mac-sheet-name">名稱：</label>
    <input id="mac-sheet-name" class="field" value="報告.pdf" />
  </div>
  <div class="row">
    <button type="button" class="btn" data-close>取消</button>
    <button type="button" class="btn btn-default" data-close>儲存</button>
  </div>
</dialog>
`,"./macos/modal-dialog.thumb.html":`<div class="window window-sheet">
  <div class="titlebar">
    <div class="lights" aria-hidden="true"><span></span><span></span><span></span></div>
    <span class="window-title">報告</span>
  </div>
  <div class="window-dim"></div>
  <div class="sheet">
    <h3>匯出為 PDF</h3>
    <input class="field" value="報告.pdf" style="width: 100%" />
    <div class="row"><span class="btn">取消</span><span class="btn btn-default">儲存</span></div>
  </div>
</div>
`,"./macos/popover.html":`<button type="button" class="btn" popovertarget="mac-popover">字體</button>
<div id="mac-popover" popover class="popover">
  <h3>字體</h3>
  <div class="stack">
    <label class="row">大小 <input type="range" min="9" max="36" value="13" style="--fill: 15%; width: 140px" /></label>
    <label class="check"><input type="checkbox" checked /> 平滑字體</label>
  </div>
</div>
`,"./macos/popover.thumb.html":`<div class="stack" style="justify-items: start">
  <span class="btn">字體</span>
  <div class="popover popover-static" style="margin-top: 6px">
    <h3>字體</h3>
    <div class="stack">
      <label class="row">大小 <input type="range" value="15" style="--fill: 15%; width: 140px" /></label>
      <label class="check"><input type="checkbox" checked /> 平滑字體</label>
    </div>
  </div>
</div>
`,"./macos/popup-select.html":`<label class="row"
  >排序方式：
  <span class="popup">
    <select>
      <option>名稱</option>
      <option selected>修改日期</option>
      <option>大小</option>
      <option>種類</option>
    </select>
    <span class="chevrons"
      ><svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M1.5 4.5 4 2l2.5 2.5M1.5 7.5 4 10l2.5-2.5" /></svg
    ></span>
  </span>
</label>
`,"./macos/progress-indicator.html":`<label class="stack"
  >正在拷貝 3 個項目…
  <progress max="100" value="45">45%</progress>
</label>
`,"./macos/pull-down-menu.html":`<button type="button" class="popup-button" popovertarget="mac-pull-down" aria-haspopup="menu">
  動作
  <svg
    width="9"
    height="6"
    viewBox="0 0 9 6"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="m1 1 3.5 3.5L8 1" />
  </svg>
</button>
<div id="mac-pull-down" popover role="menu" class="menu">
  <button type="button" role="menuitem">重新命名… <kbd>⌘R</kbd></button>
  <button type="button" role="menuitem">複製 <kbd>⌘D</kbd></button>
  <hr />
  <button type="button" role="menuitem">移到垃圾桶 <kbd>⌘⌫</kbd></button>
</div>
`,"./macos/pull-down-menu.thumb.html":`<div class="stack">
  <span class="popup-button"
    >動作
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m1 1 3.5 3.5L8 1" /></svg
  ></span>
  <div class="menu menu-static">
    <button type="button">重新命名… <kbd>⌘R</kbd></button>
    <button type="button">複製 <kbd>⌘D</kbd></button>
    <hr />
    <button type="button">移到垃圾桶 <kbd>⌘⌫</kbd></button>
  </div>
</div>
`,"./macos/radio-group.html":`<div class="form" role="radiogroup" aria-labelledby="mac-radio-label">
  <span id="mac-radio-label" class="label">外觀：</span>
  <label class="check"><input type="radio" name="mac-appearance" /> 淺色</label>
  <span></span>
  <label class="check"><input type="radio" name="mac-appearance" checked /> 深色</label>
  <span></span>
  <label class="check"><input type="radio" name="mac-appearance" /> 自動</label>
</div>
`,"./macos/scroll-view.html":`<div class="window" style="width: 300px">
  <div class="titlebar">
    <div class="lights" aria-hidden="true"><span></span><span></span><span></span></div>
    <span class="window-title">文件</span>
  </div>
  <div class="scroller" tabindex="0" role="region" aria-label="檔案清單">
    <ul class="scroll-list">
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        報告.pdf
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        預算.numbers
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        照片.heic
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        筆記.txt
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        簡報.key
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        合約.pdf
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        草稿.pages
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        截圖.png
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        錄音.m4a
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        備份.zip
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        清單.csv
      </li>
      <li>
        <svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        設計.sketch
      </li>
    </ul>
  </div>
</div>
`,"./macos/search-field.html":`<search class="search">
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    aria-hidden="true"
  >
    <circle cx="5" cy="5" r="3.6" />
    <path d="M7.7 7.7 11 11" stroke-linecap="round" />
  </svg>
  <input type="search" placeholder="搜尋" aria-label="搜尋" />
</search>
`,"./macos/segmented-control.html":`<fieldset class="segmented">
  <legend class="visually-hidden">檢視方式</legend>
  <label><input type="radio" name="mac-seg" checked /> 圖示</label>
  <label><input type="radio" name="mac-seg" /> 列表</label>
  <label><input type="radio" name="mac-seg" /> 直欄</label>
  <label><input type="radio" name="mac-seg" /> 圖庫</label>
</fieldset>
`,"./macos/separator.html":`<div class="stack">
  <span>一般</span>
  <hr />
  <span class="muted">進階</span>
</div>
`,"./macos/share-sheet.html":`<button type="button" class="btn btn-icon" popovertarget="mac-share" aria-haspopup="menu" aria-label="分享">
  <svg
    width="13"
    height="15"
    viewBox="0 0 13 15"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M6.5 1v8.5M3.5 4l3-3 3 3M4 6.5H2v7.5h9V6.5H9" />
  </svg>
</button>
<div id="mac-share" popover role="menu" class="menu">
  <button type="button" role="menuitem">郵件</button>
  <button type="button" role="menuitem">訊息</button>
  <button type="button" role="menuitem">備忘錄</button>
  <hr />
  <button type="button" role="menuitem">拷貝連結</button>
  <button type="button" role="menuitem">編輯延伸功能…</button>
</div>
`,"./macos/share-sheet.thumb.html":`<div class="stack" style="justify-items: start">
  <span class="btn btn-icon"
    ><svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 1v8.5M3.5 4l3-3 3 3M4 6.5H2v7.5h9V6.5H9" /></svg
  ></span>
  <div class="menu menu-static">
    <button type="button">郵件</button>
    <button type="button">訊息</button>
    <button type="button">備忘錄</button>
    <hr />
    <button type="button">拷貝連結</button>
  </div>
</div>
`,"./macos/sidebar.html":`<div class="window">
  <div class="split">
    <nav class="sidebar" aria-label="側邊欄">
      <div class="lights" aria-hidden="true" style="margin: 4px 4px 12px"><span></span><span></span><span></span></div>
      <p class="sidebar-heading">喜好項目</p>
      <a href="#mac-sidebar" aria-current="page"
        ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        文件</a
      >
      <a href="#mac-sidebar"
        ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        下載項目</a
      >
      <a href="#mac-sidebar"
        ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        桌面</a
      >
      <p class="sidebar-heading">位置</p>
      <a href="#mac-sidebar"
        ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
          />
        </svg>
        共享</a
      >
    </nav>
    <div class="split-main">文件（24 個項目）</div>
  </div>
</div>
`,"./macos/slider.html":`<label class="row"
  >音量
  <input type="range" min="0" max="100" value="60" style="--fill: 60%" />
</label>
`,"./macos/spinner.html":`<div role="status" class="row">
  <span class="spinner" aria-hidden="true"></span>
  正在連線…
</div>
`,"./macos/split-view.html":`<div class="window" style="width: 420px">
  <div class="titlebar">
    <div class="lights" aria-hidden="true"><span></span><span></span><span></span></div>
    <span class="window-title">郵件</span>
  </div>
  <div class="splitview">
    <div class="pane pane-sidebar">
      <p class="sidebar-heading">信箱</p>
      <p>收件匣</p>
      <p>已傳送</p>
    </div>
    <div
      class="divider"
      role="separator"
      tabindex="0"
      aria-orientation="vertical"
      aria-label="調整信箱欄寬度"
      aria-valuenow="28"
      aria-valuemin="15"
      aria-valuemax="45"
      data-split
    ></div>
    <div class="pane">
      <p><strong>Amy</strong></p>
      <p class="muted">會議改到 3 點</p>
    </div>
    <div
      class="divider"
      role="separator"
      tabindex="0"
      aria-orientation="vertical"
      aria-label="調整郵件列表寬度"
      aria-valuenow="34"
      aria-valuemin="20"
      aria-valuemax="55"
      data-split
    ></div>
    <div class="pane pane-detail muted">選一封郵件來閱讀</div>
  </div>
</div>
`,"./macos/stepper.html":`<label class="stepper" data-stepper
  >份數：
  <input class="field" type="number" min="1" max="99" value="2" />
  <span class="stepper-buttons">
    <button type="button" data-step="1" aria-label="增加">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M1 4 4 1l3 3" />
      </svg>
    </button>
    <button type="button" data-step="-1" aria-label="減少">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="m1 1 3 3 3-3" />
      </svg>
    </button>
  </span>
</label>
`,"./macos/table.html":`<table class="table" data-selectable aria-label="檔案">
  <thead>
    <tr>
      <th scope="col">名稱</th>
      <th scope="col">修改日期</th>
      <th scope="col">大小</th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false">
      <td>報告.pdf</td>
      <td>今天 10:24</td>
      <td>2.4 MB</td>
    </tr>
    <tr aria-selected="true">
      <td>預算.numbers</td>
      <td>昨天</td>
      <td>310 KB</td>
    </tr>
    <tr aria-selected="false">
      <td>照片.heic</td>
      <td>10/21</td>
      <td>3.1 MB</td>
    </tr>
    <tr aria-selected="false">
      <td>筆記.txt</td>
      <td>10/18</td>
      <td>4 KB</td>
    </tr>
  </tbody>
</table>
`,"./macos/tabs.html":`<div class="tabview">
  <div role="tablist" aria-label="偏好設定" class="segmented">
    <button type="button" role="tab" id="mac-tab-1" aria-selected="true" aria-controls="mac-panel-1">一般</button>
    <button type="button" role="tab" id="mac-tab-2" aria-selected="false" aria-controls="mac-panel-2" tabindex="-1">
      帳號
    </button>
    <button type="button" role="tab" id="mac-tab-3" aria-selected="false" aria-controls="mac-panel-3" tabindex="-1">
      進階
    </button>
  </div>
  <div role="tabpanel" id="mac-panel-1" aria-labelledby="mac-tab-1">預設瀏覽器與啟動行為。</div>
  <div role="tabpanel" id="mac-panel-2" aria-labelledby="mac-tab-2" hidden>登入的帳號與同步。</div>
  <div role="tabpanel" id="mac-panel-3" aria-labelledby="mac-tab-3" hidden>開發者選項。</div>
</div>
`,"./macos/text-field.html":`<div class="form">
  <label class="label" for="mac-name">名稱：</label>
  <input id="mac-name" class="field" value="UI Field Guide" />
  <label class="label" for="mac-tags">標籤：</label>
  <input id="mac-tags" class="field" placeholder="選填" />
</div>
`,"./macos/toast.html":`<button type="button" class="btn" data-toast="mac-notifications" data-message="下載完成：報告.pdf">傳送通知</button>
<div id="mac-notifications" role="status" aria-live="polite" class="notification-region"></div>
`,"./macos/toast.thumb.html":`<div class="notification">
  <span class="app-icon" aria-hidden="true"></span>
  <span><strong>下載項目</strong><small>報告.pdf 已下載完成</small></span>
</div>
`,"./macos/toggle-switch.html":`<div class="stack">
  <label class="switch"><input type="checkbox" role="switch" checked /> Wi‑Fi</label>
  <label class="switch"><input type="checkbox" role="switch" /> 藍牙</label>
</div>
`,"./macos/toolbar.html":`<div class="window">
  <div class="titlebar titlebar-tall">
    <div class="lights" aria-hidden="true"><span></span><span></span><span></span></div>
    <span class="window-title">文件</span>
    <div class="toolbar-items" role="toolbar" aria-label="工具列">
      <button type="button" class="btn btn-plain btn-icon" aria-label="側邊欄">
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          stroke="currentColor"
          stroke-width="1.3"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="14" height="11" rx="2.5" />
          <path d="M6 1v11" />
        </svg>
      </button>
      <button type="button" class="btn btn-plain btn-icon" aria-label="新增">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M6 1.5v9M1.5 6h9" />
        </svg>
      </button>
      <button type="button" class="btn btn-plain btn-icon" aria-label="分享">
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M6.5 1v8.5M3.5 4l3-3 3 3M4 6.5H2v7.5h9V6.5H9" />
        </svg>
      </button>
      <search class="search">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
        >
          <circle cx="5" cy="5" r="3.6" />
          <path d="M7.7 7.7 11 11" stroke-linecap="round" /></svg
        ><input type="search" placeholder="搜尋" aria-label="搜尋" />
      </search>
    </div>
  </div>
  <div class="window-body muted">內容區域</div>
</div>
`,"./macos/tooltip.html":`<span class="helptag-wrap">
  <button type="button" class="btn btn-icon" aria-label="分享" aria-describedby="mac-help">
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 1v8.5M3.5 4l3-3 3 3M4 6.5H2v7.5h9V6.5H9" />
    </svg>
  </button>
  <span id="mac-help" role="tooltip" class="helptag">分享這份文件</span>
</span>
`,"./macos/tooltip.thumb.html":`<span class="helptag-wrap helptag-open" style="margin-bottom: 30px">
  <span class="btn btn-icon"
    ><svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 1v8.5M3.5 4l3-3 3 3M4 6.5H2v7.5h9V6.5H9" /></svg
  ></span>
  <span class="helptag">分享這份文件</span>
</span>
`,"./macos/tree-view.html":`<ul role="tree" aria-label="專案" class="tree">
  <li role="treeitem" aria-expanded="true" tabindex="0">
    <span class="tree-label"
      ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
        <path
          fill="currentColor"
          d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
        />
      </svg>
      設計稿</span
    >
    <ul role="group">
      <li role="treeitem" aria-expanded="false" tabindex="-1">
        <span class="tree-label"
          ><svg class="folder" width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
            <path
              fill="currentColor"
              d="M1 2.2C1 1.5 1.5 1 2.2 1h3l1.3 1.4h5.3c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H2.2C1.5 11 1 10.5 1 9.8z"
            />
          </svg>
          圖示</span
        >
        <ul role="group">
          <li role="treeitem" tabindex="-1"><span class="tree-label">app.svg</span></li>
        </ul>
      </li>
      <li role="treeitem" tabindex="-1"><span class="tree-label">首頁.sketch</span></li>
    </ul>
  </li>
  <li role="treeitem" tabindex="-1"><span class="tree-label">說明.txt</span></li>
</ul>
`,"./macos/window.html":`<div class="window-stack" data-window-stack>
  <div class="window" data-active="false">
    <div class="titlebar">
      <div class="lights lights-buttons">
        <button type="button" aria-label="關閉"></button>
        <button type="button" aria-label="縮到最小"></button>
        <button type="button" aria-label="放到最大"></button>
      </div>
      <span class="window-title">下載項目</span>
    </div>
    <div class="window-body muted">非作用中視窗</div>
  </div>
  <div class="window" data-active="true">
    <div class="titlebar">
      <div class="lights lights-buttons">
        <button type="button" aria-label="關閉"></button>
        <button type="button" aria-label="縮到最小"></button>
        <button type="button" aria-label="放到最大"></button>
      </div>
      <span class="window-title">文件</span>
    </div>
    <div class="window-body muted">作用中視窗。點後面的視窗試試看。</div>
  </div>
</div>
`,"./web/accordion.html":`<div class="accordion">
  <details name="accordion-faq" open>
    <summary>可以退款嗎？</summary>
    <p>購買後 14 天內可全額退款。</p>
  </details>
  <details name="accordion-faq">
    <summary>支援哪些付款方式？</summary>
    <p>信用卡與銀行轉帳。</p>
  </details>
  <details name="accordion-faq">
    <summary>如何取消訂閱？</summary>
    <p>在帳號設定的「訂閱」頁面取消。</p>
  </details>
</div>
`,"./web/alert-banner.html":`<div role="alert" class="banner banner-error">
  <strong>付款失敗</strong>
  <span>信用卡已過期，請更新付款資訊。</span>
</div>
`,"./web/alert-dialog.html":`<button type="button" class="btn btn-danger" data-open="alert-dialog-box">刪除專案</button>
<dialog
  id="alert-dialog-box"
  role="alertdialog"
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-desc"
  class="dialog dialog-small"
>
  <h3 id="alert-dialog-title">刪除「Field Guide」？</h3>
  <p id="alert-dialog-desc">這個動作無法復原。</p>
  <div class="row end">
    <button type="button" class="btn" data-close autofocus>取消</button>
    <button type="button" class="btn btn-danger" data-close="delete">刪除</button>
  </div>
</dialog>
`,"./web/alert-dialog.thumb.html":`<div class="scrim">
  <div class="dialog dialog-small dialog-static">
    <h3>刪除「Field Guide」？</h3>
    <p>這個動作無法復原。</p>
    <div class="row end">
      <button type="button" class="btn">取消</button><button type="button" class="btn btn-danger">刪除</button>
    </div>
  </div>
</div>
`,"./web/avatar.html":`<div class="row">
  <span class="avatar" role="img" aria-label="王小明">王</span>
  <span class="avatar avatar-b" role="img" aria-label="Amy Chen">AC</span>
  <span class="avatar avatar-c" role="img" aria-label="Ben Lin">BL</span>
</div>
`,"./web/badge.html":`<div class="row">
  <span class="badge-demo">新功能</span>
  <span class="badge-demo badge-success">已完成</span>
  <span class="badge-demo badge-warning">審核中</span>
  <span class="badge-demo badge-count" aria-label="3 則未讀">3</span>
</div>
`,"./web/breadcrumb.html":`<nav aria-label="麵包屑" class="breadcrumb">
  <ol>
    <li><a href="#breadcrumb-demo">首頁</a></li>
    <li><a href="#breadcrumb-demo">文件</a></li>
    <li><a href="#breadcrumb-demo" aria-current="page">安裝指南</a></li>
  </ol>
</nav>
`,"./web/button.html":`<div class="row">
  <button type="button" class="btn btn-primary">儲存</button>
  <button type="button" class="btn">取消</button>
  <button type="button" class="btn" disabled>停用</button>
</div>
`,"./web/card.html":`<article class="card card-demo">
  <h3>Pro 方案</h3>
  <p>無限專案、優先支援與團隊協作。</p>
  <p class="price">NT$290 <small>/ 月</small></p>
  <button type="button" class="btn btn-primary">升級</button>
</article>
`,"./web/carousel.html":`<section aria-roledescription="carousel" aria-label="精選作品" class="carousel">
  <div class="slide slide-a" role="group" aria-roledescription="slide" aria-label="1 / 3">山景</div>
  <div class="slide slide-b" role="group" aria-roledescription="slide" aria-label="2 / 3" hidden>海岸</div>
  <div class="slide slide-c" role="group" aria-roledescription="slide" aria-label="3 / 3" hidden>城市</div>
  <div class="carousel-controls">
    <button type="button" data-slide="prev" aria-label="上一張">‹</button>
    <span class="dots">
      <button type="button" data-slide="0" aria-label="第 1 張" aria-current="true"></button>
      <button type="button" data-slide="1" aria-label="第 2 張" aria-current="false"></button>
      <button type="button" data-slide="2" aria-label="第 3 張" aria-current="false"></button>
    </span>
    <button type="button" data-slide="next" aria-label="下一張">›</button>
  </div>
</section>
`,"./web/checkbox.html":`<fieldset class="stack">
  <legend>通知方式</legend>
  <label class="check"><input type="checkbox" checked /> Email</label>
  <label class="check"><input type="checkbox" /> 簡訊</label>
  <label class="check"><input type="checkbox" disabled /> 電話（停用）</label>
</fieldset>
`,"./web/collection-view.html":`<fieldset class="gallery">
  <legend class="visually-hidden">選擇封面</legend>
  <label><input type="radio" name="web-gallery" /><span class="slide-a"></span>山景</label>
  <label><input type="radio" name="web-gallery" checked /><span class="slide-b"></span>海岸</label>
  <label><input type="radio" name="web-gallery" /><span class="slide-c"></span>城市</label>
  <label><input type="radio" name="web-gallery" /><span class="slide-a"></span>森林</label>
  <label><input type="radio" name="web-gallery" /><span class="slide-b"></span>湖泊</label>
  <label><input type="radio" name="web-gallery" /><span class="slide-c"></span>夜景</label>
</fieldset>
`,"./web/color-picker.html":`<label class="field field-inline"
  >主題色
  <input type="color" value="#0a84ff" />
</label>
`,"./web/combobox.html":`<label class="field"
  >城市
  <input list="combobox-cities" placeholder="輸入或選擇" />
</label>
<datalist id="combobox-cities">
  <option value="台北"></option>
  <option value="台中"></option>
  <option value="台南"></option>
  <option value="高雄"></option>
</datalist>
`,"./web/context-menu.html":`<div class="context-area" tabindex="0" data-contextmenu="context-menu-list" aria-describedby="context-menu-hint">
  report-final.pdf
  <small id="context-menu-hint">按右鍵或 Shift+F10</small>
</div>
<div id="context-menu-list" popover role="menu" class="menu menu-floating">
  <button type="button" role="menuitem">開啟</button>
  <button type="button" role="menuitem">重新命名</button>
  <button type="button" role="menuitem">移到垃圾桶</button>
</div>
`,"./web/context-menu.thumb.html":`<div class="stack-start">
  <div class="context-area">report-final.pdf</div>
  <div class="menu menu-static menu-offset">
    <button type="button">開啟</button>
    <button type="button">重新命名</button>
    <button type="button">移到垃圾桶</button>
  </div>
</div>
`,"./web/data-grid.html":`<table role="grid" aria-label="庫存" class="table grid">
  <thead>
    <tr>
      <th scope="col"><button type="button" data-sort>品名</button></th>
      <th scope="col" aria-sort="ascending"><button type="button" data-sort>數量</button></th>
      <th scope="col"><button type="button" data-sort>價格</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td tabindex="0">鍵盤</td>
      <td>3</td>
      <td>2400</td>
    </tr>
    <tr>
      <td tabindex="-1">滑鼠</td>
      <td>12</td>
      <td>890</td>
    </tr>
    <tr>
      <td tabindex="-1">螢幕</td>
      <td>5</td>
      <td>7600</td>
    </tr>
  </tbody>
</table>
`,"./web/date-picker.html":`<label class="field"
  >出發日期
  <input type="date" value="2026-11-14" />
</label>
`,"./web/disclosure.html":`<details class="disclosure">
  <summary>進階選項</summary>
  <label class="check"><input type="checkbox" /> 啟用實驗功能</label>
  <label class="check"><input type="checkbox" checked /> 傳送使用統計</label>
</details>
`,"./web/drawer.html":`<button type="button" class="btn" data-open="drawer-panel">篩選條件</button>
<dialog id="drawer-panel" aria-labelledby="drawer-title" class="drawer">
  <h3 id="drawer-title">篩選條件</h3>
  <label class="check"><input type="checkbox" checked /> 有庫存</label>
  <label class="check"><input type="checkbox" /> 免運費</label>
  <button type="button" class="btn btn-primary" data-close>套用</button>
</dialog>
`,"./web/drawer.thumb.html":`<div class="scrim scrim-end">
  <div class="drawer drawer-static">
    <h3>篩選條件</h3>
    <label class="check"><input type="checkbox" checked /> 有庫存</label>
    <label class="check"><input type="checkbox" /> 免運費</label>
    <button type="button" class="btn btn-primary">套用</button>
  </div>
</div>
`,"./web/feed.html":`<div role="feed" aria-label="最新動態" aria-busy="false" class="feed">
  <article aria-posinset="1" aria-setsize="-1" tabindex="0" class="card">
    <h3>新版發布</h3>
    <p>v2.4 加入深色模式。</p>
  </article>
  <article aria-posinset="2" aria-setsize="-1" tabindex="0" class="card">
    <h3>活動預告</h3>
    <p>11 月線上分享會。</p>
  </article>
</div>
`,"./web/file-upload.html":`<label class="dropzone">
  <input type="file" accept="image/*" />
  <span>拖曳圖片到這裡，或<u>選擇檔案</u></span>
</label>
`,"./web/icon-button.html":`<div class="row">
  <button type="button" class="btn icon-btn" aria-label="編輯">✎</button>
  <button type="button" class="btn icon-btn" aria-label="分享">⇪</button>
  <button type="button" class="btn icon-btn btn-primary" aria-label="新增">＋</button>
</div>
`,"./web/link.html":`<p>
  詳細規則請見<a href="#link-demo">使用條款</a>，或<a
    href="https://www.w3.org/WAI/ARIA/apg/"
    target="_blank"
    rel="noopener"
    >在新分頁開啟 APG</a
  >。
</p>
`,"./web/listbox.html":`<label class="field"
  >技能（可多選）
  <select multiple size="4">
    <option selected>Vue</option>
    <option>React</option>
    <option selected>TypeScript</option>
    <option>Swift</option>
  </select>
</label>
`,"./web/menubar.html":`<ul role="menubar" aria-label="編輯器" class="menubar">
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu" popovertarget="menubar-file">檔案</button>
  </li>
  <li role="none">
    <button type="button" role="menuitem" aria-haspopup="menu" popovertarget="menubar-edit">編輯</button>
  </li>
  <li role="none"><button type="button" role="menuitem">顯示</button></li>
</ul>
<div id="menubar-file" popover role="menu" class="menu">
  <button type="button" role="menuitem">新增 <kbd>⌘N</kbd></button>
  <button type="button" role="menuitem">開啟… <kbd>⌘O</kbd></button>
  <button type="button" role="menuitem">儲存 <kbd>⌘S</kbd></button>
</div>
<div id="menubar-edit" popover role="menu" class="menu">
  <button type="button" role="menuitem">復原 <kbd>⌘Z</kbd></button>
  <button type="button" role="menuitem">拷貝 <kbd>⌘C</kbd></button>
  <button type="button" role="menuitem">貼上 <kbd>⌘V</kbd></button>
</div>
`,"./web/meter.html":`<label class="field"
  >儲存空間：已使用 82 GB / 100 GB
  <meter min="0" max="100" low="60" high="80" optimum="20" value="82">82%</meter>
</label>
`,"./web/modal-dialog.html":`<button type="button" class="btn btn-primary" data-open="modal-dialog-box">編輯個人資料</button>
<dialog id="modal-dialog-box" aria-labelledby="modal-dialog-title" class="dialog">
  <form method="dialog">
    <h3 id="modal-dialog-title">編輯個人資料</h3>
    <label class="field">顯示名稱 <input type="text" value="Yobbo" /></label>
    <div class="row end">
      <button type="button" class="btn" data-close>取消</button>
      <button type="submit" class="btn btn-primary">儲存</button>
    </div>
  </form>
</dialog>
`,"./web/modal-dialog.thumb.html":`<div class="scrim">
  <div class="dialog dialog-static">
    <h3>編輯個人資料</h3>
    <label class="field">顯示名稱 <input type="text" value="Yobbo" /></label>
    <div class="row end">
      <button type="button" class="btn">取消</button><button type="button" class="btn btn-primary">儲存</button>
    </div>
  </div>
</div>
`,"./web/navigation.html":`<nav aria-label="主要導覽" class="navbar">
  <a href="#navigation-demo" class="navbar-brand">Acme</a>
  <ul>
    <li><a href="#navigation-demo" aria-current="page">首頁</a></li>
    <li><a href="#navigation-demo">產品</a></li>
    <li><a href="#navigation-demo">價格</a></li>
    <li><a href="#navigation-demo">聯絡</a></li>
  </ul>
</nav>
`,"./web/pagination.html":`<nav aria-label="分頁" class="pagination">
  <a href="#pagination-demo" aria-label="上一頁">‹</a>
  <a href="#pagination-demo">1</a>
  <a href="#pagination-demo" aria-current="page">2</a>
  <a href="#pagination-demo">3</a>
  <span aria-hidden="true">…</span>
  <a href="#pagination-demo">12</a>
  <a href="#pagination-demo" aria-label="下一頁">›</a>
</nav>
`,"./web/popover.html":`<button type="button" class="btn" popovertarget="popover-share">分享</button>
<div id="popover-share" popover class="popover">
  <p><strong>分享這份文件</strong></p>
  <label class="field">連結 <input type="text" value="https://example.com/doc/42" readonly /></label>
  <button type="button" class="btn btn-primary" popovertarget="popover-share" popovertargetaction="hide">完成</button>
</div>
`,"./web/popover.thumb.html":`<div class="stack-center">
  <button type="button" class="btn">分享</button>
  <div class="popover popover-static">
    <p><strong>分享這份文件</strong></p>
    <label class="field">連結 <input type="text" value="https://example.com/doc/42" readonly /></label>
  </div>
</div>
`,"./web/popup-select.html":`<label class="field"
  >排序方式
  <select>
    <option>最新</option>
    <option selected>最熱門</option>
    <option>價格由低到高</option>
  </select>
</label>
`,"./web/progress-indicator.html":`<label class="field"
  >上傳中（64%）
  <progress max="100" value="64">64%</progress>
</label>
`,"./web/pull-down-menu.html":`<button type="button" class="btn" popovertarget="pull-down-menu-list" aria-haspopup="menu">
  動作 <span aria-hidden="true">▾</span>
</button>
<div id="pull-down-menu-list" popover role="menu" class="menu">
  <button type="button" role="menuitem">重新命名</button>
  <button type="button" role="menuitem">複製</button>
  <hr />
  <button type="button" role="menuitem" class="danger">刪除</button>
</div>
`,"./web/pull-down-menu.thumb.html":`<div class="stack-start">
  <button type="button" class="btn">動作 <span aria-hidden="true">▾</span></button>
  <div class="menu menu-static">
    <button type="button">重新命名</button>
    <button type="button">複製</button>
    <hr />
    <button type="button" class="danger">刪除</button>
  </div>
</div>
`,"./web/radio-group.html":`<fieldset class="stack">
  <legend>運送方式</legend>
  <label class="check"><input type="radio" name="radio-group-ship" checked /> 宅配</label>
  <label class="check"><input type="radio" name="radio-group-ship" /> 超商取貨</label>
  <label class="check"><input type="radio" name="radio-group-ship" /> 自取</label>
</fieldset>
`,"./web/scroll-view.html":`<div class="scroll-box" tabindex="0" role="region" aria-label="最近的檔案">
  <ul>
    <li>報告</li>
    <li>預算</li>
    <li>照片</li>
    <li>筆記</li>
    <li>簡報</li>
    <li>合約</li>
    <li>草稿</li>
    <li>截圖</li>
    <li>錄音</li>
    <li>備份</li>
    <li>清單</li>
    <li>設計</li>
  </ul>
</div>
`,"./web/search-field.html":`<search>
  <label class="field"
    >搜尋文件
    <input type="search" placeholder="關鍵字" />
  </label>
</search>
`,"./web/segmented-control.html":`<fieldset class="segmented">
  <legend class="visually-hidden">檢視方式</legend>
  <label><input type="radio" name="segmented-view" checked /> 清單</label>
  <label><input type="radio" name="segmented-view" /> 格狀</label>
  <label><input type="radio" name="segmented-view" /> 欄位</label>
</fieldset>
`,"./web/separator.html":`<div class="stack">
  <p>上一段內容</p>
  <hr />
  <p>下一段內容</p>
</div>
`,"./web/sidebar.html":`<div class="sidebar-layout">
  <aside aria-label="資料夾" class="sidebar">
    <nav>
      <p class="sidebar-heading">收藏</p>
      <a href="#sidebar-demo" aria-current="page">全部檔案</a>
      <a href="#sidebar-demo">最近使用</a>
      <a href="#sidebar-demo">共享</a>
      <p class="sidebar-heading">標籤</p>
      <a href="#sidebar-demo">工作</a>
    </nav>
  </aside>
  <div class="sidebar-content">全部檔案（128）</div>
</div>
`,"./web/skeleton.html":`<div aria-busy="true" aria-label="載入中" class="skeleton-card">
  <span class="skeleton skeleton-avatar"></span>
  <span class="skeleton-lines">
    <span class="skeleton skeleton-line"></span>
    <span class="skeleton skeleton-line short"></span>
  </span>
</div>
`,"./web/slider.html":`<label class="field"
  >音量
  <input type="range" min="0" max="100" value="60" />
</label>
`,"./web/spinner.html":`<div role="status" class="spinner-row">
  <span class="spinner" aria-hidden="true"></span>
  載入中…
</div>
`,"./web/split-view.html":`<div class="split">
  <div class="split-pane">
    <strong>目錄</strong>
    <p>1. 安裝</p>
    <p>2. 設定</p>
  </div>
  <div
    class="split-divider"
    role="separator"
    tabindex="0"
    aria-orientation="vertical"
    aria-label="調整目錄寬度"
    aria-valuenow="35"
    aria-valuemin="20"
    aria-valuemax="70"
    data-split
  ></div>
  <div class="split-pane split-main">拖曳中間的分隔線，或聚焦後按左右鍵。</div>
</div>
`,"./web/stepper.html":`<label class="field"
  >數量
  <input type="number" min="1" max="10" value="2" class="number" />
</label>
`,"./web/table.html":`<table class="table">
  <caption>
    本月訂單
  </caption>
  <thead>
    <tr>
      <th scope="col">編號</th>
      <th scope="col">客戶</th>
      <th scope="col">金額</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#1042</td>
      <td>王小明</td>
      <td>NT$1,200</td>
    </tr>
    <tr>
      <td>#1043</td>
      <td>陳美玲</td>
      <td>NT$860</td>
    </tr>
    <tr>
      <td>#1044</td>
      <td>林大偉</td>
      <td>NT$3,450</td>
    </tr>
  </tbody>
</table>
`,"./web/tabs.html":`<div class="tabs">
  <div role="tablist" aria-label="帳號設定">
    <button type="button" role="tab" id="tabs-t1" aria-selected="true" aria-controls="tabs-p1">一般</button>
    <button type="button" role="tab" id="tabs-t2" aria-selected="false" aria-controls="tabs-p2" tabindex="-1">
      安全性
    </button>
    <button type="button" role="tab" id="tabs-t3" aria-selected="false" aria-controls="tabs-p3" tabindex="-1">
      通知
    </button>
  </div>
  <div role="tabpanel" id="tabs-p1" aria-labelledby="tabs-t1">名稱、語言與時區。</div>
  <div role="tabpanel" id="tabs-p2" aria-labelledby="tabs-t2" hidden>密碼與雙重驗證。</div>
  <div role="tabpanel" id="tabs-p3" aria-labelledby="tabs-t3" hidden>Email 與推播通知。</div>
</div>
`,"./web/text-field.html":`<div class="stack">
  <label class="field">Email <input type="email" placeholder="you@example.com" autocomplete="email" /></label>
  <label class="field">備註 <textarea rows="2" placeholder="選填"></textarea></label>
</div>
`,"./web/toast.html":`<button type="button" class="btn" data-toast="toast-region" data-message="變更已儲存">儲存變更</button>
<div id="toast-region" role="status" aria-live="polite" class="toast-region"></div>
`,"./web/toast.thumb.html":`<div class="toast-region toast-region-static">
  <div class="toast">變更已儲存</div>
  <div class="toast">已複製連結</div>
</div>
`,"./web/toggle-switch.html":`<label class="switch">
  <input type="checkbox" role="switch" switch checked />
  <span class="switch-track" aria-hidden="true"></span>
  Wi-Fi
</label>
`,"./web/toolbar.html":`<div role="toolbar" aria-label="文字格式" class="toolbar">
  <button type="button" aria-pressed="true" aria-label="粗體"><b>B</b></button>
  <button type="button" aria-pressed="false" aria-label="斜體"><i>I</i></button>
  <button type="button" aria-pressed="false" aria-label="底線"><u>U</u></button>
  <span role="separator" aria-orientation="vertical"></span>
  <button type="button" aria-label="靠左對齊">≡</button>
  <button type="button" aria-label="插入連結">🔗</button>
</div>
`,"./web/tooltip.html":`<div class="tooltip-wrap">
  <button type="button" class="btn icon-btn" aria-describedby="tooltip-tip" aria-label="同步">⟳</button>
  <span id="tooltip-tip" role="tooltip" class="tooltip">與雲端同步</span>
</div>
`,"./web/tooltip.thumb.html":`<div class="tooltip-wrap tooltip-open">
  <button type="button" class="btn icon-btn">⟳</button>
  <span class="tooltip">與雲端同步</span>
</div>
`,"./web/tree-view.html":`<ul role="tree" aria-label="專案檔案" class="tree">
  <li role="treeitem" aria-expanded="true" tabindex="0">
    <span class="tree-label">src</span>
    <ul role="group">
      <li role="treeitem" aria-expanded="false" tabindex="-1">
        <span class="tree-label">components</span>
        <ul role="group">
          <li role="treeitem" tabindex="-1">Button.vue</li>
        </ul>
      </li>
      <li role="treeitem" tabindex="-1">main.ts</li>
    </ul>
  </li>
  <li role="treeitem" tabindex="-1">README.md</li>
</ul>
`,"./web/treegrid.html":`<table role="treegrid" aria-label="郵件串" class="table">
  <thead>
    <tr>
      <th scope="col">主旨</th>
      <th scope="col">寄件者</th>
      <th scope="col">日期</th>
    </tr>
  </thead>
  <tbody>
    <tr role="row" id="treegrid-r1" aria-level="1" aria-expanded="true">
      <td><button type="button" class="row-toggle" data-toggle-row aria-label="展開或收合">▾</button> 下週會議</td>
      <td>Amy</td>
      <td>10/27</td>
    </tr>
    <tr role="row" aria-level="2" data-parent="treegrid-r1">
      <td class="indent">Re: 下週會議</td>
      <td>Ben</td>
      <td>10/27</td>
    </tr>
    <tr role="row" aria-level="2" data-parent="treegrid-r1">
      <td class="indent">Re: 下週會議</td>
      <td>Amy</td>
      <td>10/28</td>
    </tr>
    <tr role="row" aria-level="1">
      <td>發票寄送</td>
      <td>會計部</td>
      <td>10/26</td>
    </tr>
  </tbody>
</table>
`}),t=/^\.\/(?<platform>[^/]+)\/(?<id>[^/.]+)(?<thumb>\.thumb)?\.html$/,n=new Map,r=new Map;for(let[i,a]of Object.entries(e)){let e=t.exec(i)?.groups;if(!e)continue;let o=`${e.platform}/${e.id}`;e.thumb?r.set(o,a):n.set(o,{html:a,thumb:a})}for(let[e,t]of r){let r=n.get(e);r&&n.set(e,{...r,thumb:t})}function i(e,t){return n.get(`${e}/${t}`)}function a(){return[...n.keys()]}var o=[`macos`,`ios`,`android`,`web`],s={macos:`macOS`,ios:`iOS`,android:`Android`,web:`Web`},c=[`actions`,`navigation`,`disclosure`,`overlays`,`input`,`data`,`status`,`containers`],l={actions:`動作`,navigation:`導覽`,disclosure:`展開收合`,overlays:`覆蓋層`,input:`輸入`,data:`資料`,status:`狀態`,containers:`容器`};function u(e){return typeof e==`string`&&o.includes(e)}var d=[{id:`accordion`,name:{en:`Accordion`,zh:`手風琴`},aliases:[`collapse`,`expander`,`摺疊面板`],describe:[`好幾段標題，一次只展開其中一段`],category:`disclosure`,confusedWith:[`disclosure`,`tabs`],prompt:{keywords:[`accordion`,`details summary with name attribute`],descriptors:[`one section open at a time`,`chevron rotates`],avoid:[`disclosure`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Accordion`,api:{html:`<details name> group`,aria:`button[aria-expanded] + region`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`}}},{id:`action-sheet`,name:{en:`Action sheet`,zh:`動作表`},aliases:[`confirmation dialog`,`action menu`,`動作清單`],describe:[`從下方跳出的一串選項，最下面通常是「取消」`],category:`overlays`,confusedWith:[`alert-dialog`,`bottom-sheet`],prompt:{keywords:[`action sheet`,`SwiftUI confirmationDialog`,`UIAlertController actionSheet`],descriptors:[`list of choices slides up from bottom`,`destructive option in red`,`separate Cancel button`],avoid:[`alert-dialog`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Action sheet`,api:{uikit:`UIAlertController (.actionSheet)`,swiftui:`.confirmationDialog`},guideline:`https://developer.apple.com/design/human-interface-guidelines/action-sheets`}}},{id:`alert-banner`,name:{en:`Alert banner`,zh:`警示橫幅`},aliases:[`callout`,`notice`,`banner`,`提示橫幅`],describe:[`頁面上一條顯眼的訊息框，例如「付款失敗」`],category:`status`,confusedWith:[`toast`,`alert-dialog`],prompt:{keywords:[`alert banner`,`APG alert pattern`,`role alert`],descriptors:[`colored bar with icon and message`,`stays in page flow`],avoid:[`toast`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Alert`,api:{aria:`alert`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/alert/`}}},{id:`alert-dialog`,name:{en:`Alert dialog`,zh:`警示對話框`},aliases:[`alert`,`confirm dialog`,`確認視窗`],describe:[`跳出來問你「確定要刪除嗎？」的小視窗`],category:`overlays`,confusedWith:[`modal-dialog`,`toast`],prompt:{keywords:[`alert dialog`,`role alertdialog`,`confirmation dialog`],descriptors:[`short question with two buttons`,`destructive action in red`,`focus starts on the safe button`],avoid:[`toast`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Alert`,api:{appkit:`NSAlert`,swiftui:`.alert`},guideline:`https://developer.apple.com/design/human-interface-guidelines/alerts`},ios:{name:`Alert`,api:{uikit:`UIAlertController (.alert)`,swiftui:`.alert`},guideline:`https://developer.apple.com/design/human-interface-guidelines/alerts`},android:{name:`Dialog`,api:{compose:`AlertDialog`,view:`MaterialAlertDialogBuilder`},guideline:`https://m3.material.io/components/dialogs/overview`},web:{name:`Alert dialog`,api:{html:`<dialog> + showModal()`,aria:`alertdialog`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/`}}},{id:`avatar`,name:{en:`Avatar`,zh:`頭像`},aliases:[`profile picture`,`user icon`,`大頭貼`],describe:[`圓形的使用者照片或姓名縮寫`],category:`containers`,confusedWith:[`badge`],prompt:{keywords:[`avatar`,`profile picture`,`user initials circle`],descriptors:[`circular image`,`initials fallback`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Avatar`,api:{html:`<img alt>`}}}},{id:`badge`,name:{en:`Badge`,zh:`徽章`},aliases:[`chip`,`tag`,`pill`,`label`,`標籤`],describe:[`小小的圓角標籤，標示狀態或分類`],category:`containers`,confusedWith:[`avatar`],prompt:{keywords:[`badge`,`tag chip`,`status pill`],descriptors:[`small rounded label`,`short text or count`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Token`,api:{appkit:`NSTokenField`},guideline:`https://developer.apple.com/design/human-interface-guidelines/token-fields`},ios:{name:`Badge`,api:{uikit:`UITabBarItem.badgeValue`,swiftui:`.badge`}},android:{name:`Chip`,api:{compose:`AssistChip / FilterChip / InputChip`,view:`Chip`},guideline:`https://m3.material.io/components/chips/overview`},web:{name:`Badge`,api:{html:`<span>`}}}},{id:`bottom-navigation`,name:{en:`Bottom navigation`,zh:`底部導覽列`},aliases:[`tab bar`,`navigation bar`,`bottom tabs`,`底部分頁`],describe:[`畫面最下面一排圖示，切換 App 的幾個主要區塊`],category:`navigation`,confusedWith:[`top-app-bar`,`tabs`],prompt:{keywords:[`bottom navigation bar`,`iOS tab bar`,`Material navigation bar`],descriptors:[`3 to 5 icon destinations with labels`,`selected destination highlighted`],avoid:[`tabs`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Tab bar`,api:{uikit:`UITabBar`,swiftui:`TabView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/tab-bars`},android:{name:`Navigation bar`,api:{compose:`NavigationBar + NavigationBarItem`,view:`BottomNavigationView`},guideline:`https://m3.material.io/components/navigation-bar/overview`}}},{id:`bottom-sheet`,name:{en:`Bottom sheet`,zh:`底部面板`},aliases:[`sheet`,`half sheet`,`drawer`,`底部抽屜`],describe:[`從畫面下方拉上來、只蓋住一部分的面板`],category:`overlays`,confusedWith:[`action-sheet`,`modal-dialog`],prompt:{keywords:[`bottom sheet`,`Material modal bottom sheet`,`half-height sheet`],descriptors:[`drag handle on top`,`covers the lower half`,`scrim behind`],avoid:[`modal-dialog`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Sheet (detents)`,api:{uikit:`UISheetPresentationController.detents`,swiftui:`.presentationDetents([.medium])`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sheets`},android:{name:`Bottom sheet`,api:{compose:`ModalBottomSheet`,view:`BottomSheetDialogFragment`},guideline:`https://m3.material.io/components/bottom-sheets/overview`}}},{id:`breadcrumb`,name:{en:`Breadcrumb`,zh:`麵包屑`},aliases:[`path`,`路徑導覽`],describe:[`顯示「首頁 > 分類 > 目前頁面」的路徑`],category:`navigation`,confusedWith:[`pagination`],prompt:{keywords:[`breadcrumb`,`nav aria-label breadcrumb`,`ordered list`],descriptors:[`separators between links`,`current page with aria-current`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Path control`,api:{appkit:`NSPathControl`},guideline:`https://developer.apple.com/design/human-interface-guidelines/path-controls`},web:{name:`Breadcrumb`,api:{html:`<nav> + <ol>`,aria:`navigation + aria-current="page"`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/`}}},{id:`button`,name:{en:`Button`,zh:`按鈕`},aliases:[`push button`,`action button`,`CTA`,`按鍵`],describe:[`按一下就執行一個動作`],category:`actions`,confusedWith:[`pull-down-menu`,`link`],prompt:{keywords:[`push button`,`NSButton`,`SwiftUI Button`],descriptors:[`rounded rect bezel`,`single action`,`default button uses accent color`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Push button`,api:{appkit:`NSButton (bezelStyle .push)`,swiftui:`Button`},guideline:`https://developer.apple.com/design/human-interface-guidelines/buttons`,states:[`default`,`hover`,`pressed`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`,`large`]},ios:{name:`Button`,api:{uikit:`UIButton`,swiftui:`Button`},guideline:`https://developer.apple.com/design/human-interface-guidelines/buttons`},android:{name:`Button`,api:{compose:`Button / OutlinedButton / TextButton`,view:`MaterialButton`},guideline:`https://m3.material.io/components/buttons/overview`},web:{name:`Button`,api:{html:`<button>`,aria:`button`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`}}},{id:`card`,name:{en:`Card`,zh:`卡片`},aliases:[`tile`,`box`,`group box`,`卡片`],describe:[`一個有邊框或陰影的區塊，裝一組相關內容`],category:`containers`,confusedWith:[`feed`],prompt:{keywords:[`card`,`article element card layout`],descriptors:[`rounded corners`,`title, text and action`,`subtle border or shadow`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Box`,api:{appkit:`NSBox`,swiftui:`GroupBox`},guideline:`https://developer.apple.com/design/human-interface-guidelines/boxes`},ios:{name:`Group box`,api:{swiftui:`GroupBox`},guideline:`https://developer.apple.com/design/human-interface-guidelines/boxes`},android:{name:`Card`,api:{compose:`Card / ElevatedCard / OutlinedCard`,view:`MaterialCardView`},guideline:`https://m3.material.io/components/cards/overview`},web:{name:`Card`,api:{html:`<article>`}}}},{id:`carousel`,name:{en:`Carousel`,zh:`輪播`},aliases:[`slideshow`,`slider`,`輪播圖`],describe:[`一次顯示一張，可以左右切換的圖片或卡片`],category:`data`,confusedWith:[`feed`,`tabs`],prompt:{keywords:[`carousel`,`APG carousel pattern`,`slideshow`],descriptors:[`one slide visible`,`previous and next buttons`,`dot indicators`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Page control`,api:{uikit:`UIPageControl`,swiftui:`TabView(.page)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/page-controls`},android:{name:`Carousel`,api:{compose:`HorizontalMultiBrowseCarousel`,view:`CarouselLayoutManager`},guideline:`https://m3.material.io/components/carousel/overview`},web:{name:`Carousel`,api:{aria:`region + aria-roledescription="carousel"`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/carousel/`}}},{id:`checkbox`,name:{en:`Checkbox`,zh:`核取方塊`},aliases:[`check box`,`tick box`,`勾選框`],describe:[`一個小方框，點了會打勾`],category:`input`,confusedWith:[`toggle-switch`,`radio-group`],prompt:{keywords:[`checkbox`,`HTML input checkbox`],descriptors:[`square box with a check mark`,`label next to the box`],avoid:[`toggle-switch`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Checkbox`,api:{appkit:`NSButton (checkbox)`,swiftui:`Toggle(.checkbox)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`},android:{name:`Checkbox`,api:{compose:`Checkbox`,view:`MaterialCheckBox`},guideline:`https://m3.material.io/components/checkbox/overview`},web:{name:`Checkbox`,api:{html:`<input type="checkbox">`,aria:`checkbox`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/`}}},{id:`collection-view`,name:{en:`Collection view`,zh:`集合視圖`},aliases:[`icon view`,`grid view`,`gallery`,`格狀檢視`,`圖示檢視`],describe:[`一格一格排好的圖示或縮圖，例如 Finder 的圖示檢視`],category:`data`,confusedWith:[`table`,`card`],prompt:{keywords:[`collection view`,`NSCollectionView`,`icon grid`],descriptors:[`items in a wrapping grid`,`selected item highlighted`,`labels under each icon`],avoid:[`table`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Collection view`,api:{appkit:`NSCollectionView`,swiftui:`LazyVGrid`},guideline:`https://developer.apple.com/design/human-interface-guidelines/collections`},web:{name:`Grid gallery`,api:{html:`CSS grid of items`,aria:`listbox or grid`}}}},{id:`color-picker`,name:{en:`Color picker`,zh:`顏色選擇器`},aliases:[`color well`,`swatch`,`選色器`],describe:[`點了會出現調色盤，用來挑顏色`],category:`input`,confusedWith:[],prompt:{keywords:[`color picker`,`HTML input type color`,`color well`],descriptors:[`swatch showing current color`,`opens system color panel`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Color well`,api:{appkit:`NSColorWell`,swiftui:`ColorPicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/color-wells`},ios:{name:`Color picker`,api:{uikit:`UIColorPickerViewController`,swiftui:`ColorPicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/color-wells`},web:{name:`Color picker`,api:{html:`<input type="color">`}}}},{id:`combobox`,name:{en:`Combo box`,zh:`組合框`},aliases:[`autocomplete`,`typeahead`,`editable dropdown`,`自動完成`,`可輸入下拉`],describe:[`可以打字也可以從清單挑的輸入框`,`邊打字邊跳出建議選項`],category:`input`,confusedWith:[`popup-select`,`search-field`,`listbox`],prompt:{keywords:[`combo box`,`NSComboBox`,`autocomplete text field`],descriptors:[`editable text field`,`dropdown arrow`,`suggestion list`],avoid:[`popup-select`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Combo box`,api:{appkit:`NSComboBox`},guideline:`https://developer.apple.com/design/human-interface-guidelines/combo-boxes`,states:[`default`,`focus`,`expanded`,`disabled`]},android:{name:`Exposed dropdown menu (editable)`,api:{compose:`ExposedDropdownMenuBox + TextField`,view:`MaterialAutoCompleteTextView`},guideline:`https://m3.material.io/components/menus/overview`},web:{name:`Combobox`,api:{html:`<input list> + <datalist>`,aria:`combobox`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`}}},{id:`context-menu`,name:{en:`Context menu`,zh:`情境選單`},aliases:[`right-click menu`,`shortcut menu`,`long-press menu`,`右鍵選單`,`長按選單`],describe:[`按右鍵或長按才會跳出來的選單`,`針對你點的那個東西列出能做的事`],category:`overlays`,confusedWith:[`pull-down-menu`],prompt:{keywords:[`context menu`,`right-click menu`,`SwiftUI contextMenu`],descriptors:[`appears at pointer`,`actions for the clicked item`],avoid:[`pull-down-menu`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Context menu`,api:{appkit:`NSMenu (NSView.menu)`,swiftui:`.contextMenu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/context-menus`},ios:{name:`Context menu`,api:{uikit:`UIContextMenuInteraction`,swiftui:`.contextMenu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/context-menus`},android:{name:`Context menu`,api:{compose:`DropdownMenu (on long press)`,view:`View.OnCreateContextMenuListener`},guideline:`https://developer.android.com/develop/ui/views/components/menus`},web:{name:`Context menu`,api:{html:`contextmenu event`,aria:`menu`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/menubar/`}}},{id:`data-grid`,name:{en:`Data grid`,zh:`資料格`},aliases:[`grid`,`spreadsheet`,`資料表格`],describe:[`像試算表一樣，可以用方向鍵一格一格移動、排序`],category:`data`,confusedWith:[`table`,`treegrid`],prompt:{keywords:[`data grid`,`APG grid pattern`,`role grid`],descriptors:[`arrow key cell navigation`,`sortable headers`],avoid:[`table`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Data grid`,api:{html:`<table> + JavaScript`,aria:`grid`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/grid/`}}},{id:`date-picker`,name:{en:`Date picker`,zh:`日期選擇器`},aliases:[`calendar`,`日曆`,`選日期`],describe:[`點開會出現月曆，用來挑日期`],category:`input`,confusedWith:[`text-field`],prompt:{keywords:[`date picker`,`HTML input type date`,`calendar grid`],descriptors:[`month grid`,`today highlighted`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Date picker`,api:{appkit:`NSDatePicker`,swiftui:`DatePicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pickers`},ios:{name:`Date picker`,api:{uikit:`UIDatePicker`,swiftui:`DatePicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pickers`},android:{name:`Date picker`,api:{compose:`DatePicker`,view:`MaterialDatePicker`},guideline:`https://m3.material.io/components/date-pickers/overview`},web:{name:`Date picker`,api:{html:`<input type="date">`,aria:`dialog + grid`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/`}}},{id:`disclosure`,name:{en:`Disclosure`,zh:`展開收合`},aliases:[`show/hide`,`expander`,`toggle`,`收合區塊`],describe:[`點一下標題就展開或收起底下的內容`],category:`disclosure`,confusedWith:[`accordion`],prompt:{keywords:[`disclosure`,`details and summary elements`,`disclosure triangle`],descriptors:[`triangle rotates when expanded`,`content hidden until opened`],avoid:[`accordion`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Disclosure control`,api:{appkit:`NSButton (bezelStyle .disclosure)`,swiftui:`DisclosureGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/disclosure-controls`},ios:{name:`Disclosure group`,api:{swiftui:`DisclosureGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/disclosure-controls`},web:{name:`Disclosure`,api:{html:`<details> + <summary>`,aria:`button[aria-expanded]`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/`}}},{id:`drawer`,name:{en:`Drawer`,zh:`側滑面板`},aliases:[`side sheet`,`off-canvas`,`slide-over`,`抽屜`],describe:[`從畫面邊緣滑出來的一整條面板`],category:`overlays`,confusedWith:[`sidebar`,`modal-dialog`],prompt:{keywords:[`drawer`,`off-canvas side panel`,`dialog element`],descriptors:[`slides in from edge`,`scrim behind`],avoid:[`sidebar`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Inspector`,api:{swiftui:`.inspector`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sidebars`},android:{name:`Side sheet`,api:{view:`SideSheetDialog`},guideline:`https://m3.material.io/components/side-sheets/overview`},web:{name:`Drawer`,api:{html:`<dialog> + showModal()`,aria:`dialog`}}}},{id:`fab`,name:{en:`Floating action button`,zh:`浮動動作按鈕`},aliases:[`FAB`,`floating button`,`懸浮按鈕`],describe:[`浮在畫面右下角的大圓角按鈕，放最主要的動作`],category:`actions`,confusedWith:[`button`,`icon-button`],prompt:{keywords:[`floating action button`,`Material FAB`],descriptors:[`large rounded square with an icon`,`fixed at the bottom trailing corner`],avoid:[`icon-button`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{android:{name:`FAB`,api:{compose:`FloatingActionButton / ExtendedFloatingActionButton`,view:`FloatingActionButton`},guideline:`https://m3.material.io/components/floating-action-button/overview`}}},{id:`feed`,name:{en:`Feed`,zh:`動態牆`},aliases:[`infinite scroll`,`timeline`,`動態消息`],describe:[`一直往下滑會一直載入新文章的列表`],category:`data`,confusedWith:[`carousel`],prompt:{keywords:[`feed`,`APG feed pattern`,`infinite scroll list of articles`],descriptors:[`stack of article cards`,`loads more on scroll`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Feed`,api:{aria:`feed + article`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/feed/`}}},{id:`file-upload`,name:{en:`File upload`,zh:`檔案上傳`},aliases:[`dropzone`,`file input`,`上傳`],describe:[`選一個檔案或把檔案拖進來的區塊`],category:`input`,confusedWith:[],prompt:{keywords:[`file upload`,`HTML input type file`,`drag and drop zone`],descriptors:[`dashed drop area`,`Choose file button`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`File upload`,api:{html:`<input type="file">`}}}},{id:`icon-button`,name:{en:`Icon button`,zh:`圖示按鈕`},aliases:[`icon-only button`,`圖示鍵`],describe:[`只有圖示、沒有文字的按鈕`],category:`actions`,confusedWith:[`button`,`fab`],prompt:{keywords:[`icon button`,`icon-only button with aria-label`],descriptors:[`single icon`,`circular hit target`,`accessible name from aria-label`],avoid:[`fab`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{android:{name:`Icon button`,api:{compose:`IconButton / FilledIconButton`,view:`MaterialButton (icon only)`},guideline:`https://m3.material.io/components/icon-buttons/overview`},web:{name:`Icon button`,api:{html:`<button aria-label>`,aria:`button`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`}}},{id:`link`,name:{en:`Link`,zh:`連結`},aliases:[`hyperlink`,`anchor`,`超連結`],describe:[`點了會跳到另一頁或另一個位置的文字`],category:`actions`,confusedWith:[`button`],prompt:{keywords:[`link`,`HTML anchor element`],descriptors:[`underlined text`,`navigates to a URL`],avoid:[`button`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Link`,api:{html:`<a href>`,aria:`link`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/link/`}}},{id:`listbox`,name:{en:`Listbox`,zh:`清單選擇`},aliases:[`multi-select`,`list box`,`多選清單`],describe:[`直接攤開在畫面上的選項清單，可以選一個或多個`],category:`input`,confusedWith:[`combobox`,`popup-select`],prompt:{keywords:[`listbox`,`APG listbox pattern`,`select multiple`],descriptors:[`always-visible list of options`,`selected options highlighted`],avoid:[`popup-select`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Listbox`,api:{html:`<select multiple>`,aria:`listbox + option`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/listbox/`}}},{id:`menubar`,name:{en:`Menubar`,zh:`選單列`},aliases:[`menu bar`,`mega menu`,`功能表列`],describe:[`最上面一排「檔案、編輯、顯示」的選單`],category:`navigation`,confusedWith:[`navigation`,`toolbar`],prompt:{keywords:[`menubar`,`APG menubar pattern`,`application menu bar`],descriptors:[`File Edit View menus`,`submenus open on arrow keys`],avoid:[`navigation`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Menu bar`,api:{appkit:`NSApplication.mainMenu`,swiftui:`.commands`},guideline:`https://developer.apple.com/design/human-interface-guidelines/the-menu-bar`},web:{name:`Menubar`,api:{aria:`menubar + menu + menuitem`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/menubar/`}}},{id:`meter`,name:{en:`Meter`,zh:`量表`},aliases:[`gauge`,`level indicator`,`儀表`],describe:[`顯示一個量落在範圍哪裡，例如硬碟用了多少`],category:`status`,confusedWith:[`progress-indicator`],prompt:{keywords:[`meter`,`HTML meter element`,`gauge`],descriptors:[`value within a known range`,`color changes past thresholds`],avoid:[`progress-indicator`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Level indicator`,api:{appkit:`NSLevelIndicator`},guideline:`https://developer.apple.com/design/human-interface-guidelines/gauges`},ios:{name:`Gauge`,api:{swiftui:`Gauge`},guideline:`https://developer.apple.com/design/human-interface-guidelines/gauges`},web:{name:`Meter`,api:{html:`<meter>`,aria:`meter`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/meter/`}}},{id:`modal-dialog`,name:{en:`Modal dialog`,zh:`對話框`},aliases:[`modal`,`lightbox`,`dialog`,`彈窗`,`跳窗`],describe:[`蓋在整個畫面上、要處理完才能回去的視窗`],category:`overlays`,confusedWith:[`drawer`,`popover`,`alert-dialog`],prompt:{keywords:[`modal dialog`,`HTML dialog element`,`showModal`,`APG dialog pattern`],descriptors:[`focus trapped inside`,`Escape closes`,`backdrop dims page`],avoid:[`popover`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Sheet`,api:{appkit:`NSWindow.beginSheet`,swiftui:`.sheet`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sheets`},ios:{name:`Sheet`,api:{uikit:`UISheetPresentationController`,swiftui:`.sheet`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sheets`},android:{name:`Dialog`,api:{compose:`Dialog`,view:`DialogFragment`},guideline:`https://m3.material.io/components/dialogs/overview`},web:{name:`Modal dialog`,api:{html:`<dialog> + showModal()`,aria:`dialog + aria-modal`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`}}},{id:`navigation`,name:{en:`Navigation`,zh:`導覽列`},aliases:[`navbar`,`header nav`,`導航列`],describe:[`網站最上面那排頁面連結`],category:`navigation`,confusedWith:[`pull-down-menu`,`tabs`],prompt:{keywords:[`site navigation bar`,`nav landmark`],descriptors:[`horizontal list of page links`,`current page highlighted with aria-current`],avoid:[`pull-down-menu`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Navigation`,api:{html:`<nav>`,aria:`navigation landmark`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/`}}},{id:`pagination`,name:{en:`Pagination`,zh:`分頁器`},aliases:[`pager`,`頁碼`],describe:[`一排頁碼，加上上一頁、下一頁`],category:`navigation`,confusedWith:[`breadcrumb`],prompt:{keywords:[`pagination`,`pager navigation`],descriptors:[`previous and next links`,`numbered page links, current page highlighted`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Pagination`,api:{html:`<nav> + <a>`,aria:`navigation + aria-current="page"`}}}},{id:`popover`,name:{en:`Popover`,zh:`浮出框`},aliases:[`flyout`,`popper`,`泡泡框`],describe:[`點了按鈕後在旁邊冒出來的小框，點外面就關掉`],category:`overlays`,confusedWith:[`tooltip`,`modal-dialog`],prompt:{keywords:[`popover`,`HTML popover attribute`,`anchor positioning`],descriptors:[`anchored to trigger`,`light dismiss on outside click`],avoid:[`modal-dialog`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Popover`,api:{appkit:`NSPopover`,swiftui:`.popover`},guideline:`https://developer.apple.com/design/human-interface-guidelines/popovers`},ios:{name:`Popover`,api:{uikit:`UIPopoverPresentationController`,swiftui:`.popover`},guideline:`https://developer.apple.com/design/human-interface-guidelines/popovers`},android:{name:`Rich tooltip`,api:{compose:`RichTooltip`},guideline:`https://m3.material.io/components/tooltips/overview`},web:{name:`Popover`,api:{html:`popover attribute`,aria:`depends on content`}}}},{id:`popup-select`,name:{en:`Pop-up select`,zh:`彈出式選擇`},aliases:[`dropdown`,`select`,`picker`,`下拉選單`,`下拉`],describe:[`點開後選一個值，按鈕上會顯示目前選的那個`,`一顆按鈕，右邊有上下箭頭，點開是選項清單`],category:`input`,confusedWith:[`pull-down-menu`,`combobox`],prompt:{keywords:[`macOS pop-up button`,`NSPopUpButton`,`SwiftUI Picker menu style`],descriptors:[`shows current selection`,`up-down chevron on right`],avoid:[`pull-down-menu`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Pop-up button`,api:{appkit:`NSPopUpButton`,swiftui:`Picker(.menu)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons`,states:[`default`,`hover`,`pressed`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`,`large`],demo:!0},ios:{name:`Pop-up button`,api:{uikit:`UIButton (changesSelectionAsPrimaryAction)`,swiftui:`Picker(.menu)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons`},android:{name:`Exposed dropdown menu`,api:{compose:`ExposedDropdownMenuBox`,view:`MaterialAutoCompleteTextView`},guideline:`https://m3.material.io/components/menus/overview`},web:{name:`Select`,api:{html:`<select>`,aria:`combobox (Select-Only)`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`}}},{id:`progress-indicator`,name:{en:`Progress bar`,zh:`進度條`},aliases:[`progress`,`loading bar`,`進度`],describe:[`一條慢慢填滿的橫條，表示完成多少`],category:`status`,confusedWith:[`meter`,`spinner`],prompt:{keywords:[`progress bar`,`HTML progress element`],descriptors:[`horizontal bar filling left to right`,`percentage label`],avoid:[`meter`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Progress indicator`,api:{appkit:`NSProgressIndicator`,swiftui:`ProgressView(value:)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},ios:{name:`Progress view`,api:{uikit:`UIProgressView`,swiftui:`ProgressView(value:)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},android:{name:`Progress indicator`,api:{compose:`LinearProgressIndicator`,view:`LinearProgressIndicator`},guideline:`https://m3.material.io/components/progress-indicators/overview`},web:{name:`Progress bar`,api:{html:`<progress>`,aria:`progressbar`}}}},{id:`pull-down-menu`,name:{en:`Pull-down menu`,zh:`下拉式動作選單`},aliases:[`menu button`,`dropdown menu`,`actions menu`,`更多選單`,`動作選單`],describe:[`按鈕點開是一串動作，按鈕上的字不會變`,`「更多」按鈕點開的指令清單`],category:`actions`,confusedWith:[`popup-select`,`context-menu`],prompt:{keywords:[`pull-down button`,`menu button`,`SwiftUI Menu`],descriptors:[`button label stays fixed`,`opens a list of commands`,`chevron down`],avoid:[`popup-select`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Pull-down button`,api:{appkit:`NSPopUpButton (pullsDown = true)`,swiftui:`Menu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons`,states:[`default`,`hover`,`pressed`,`focus`,`disabled`]},ios:{name:`Pull-down button`,api:{uikit:`UIButton (menu + showsMenuAsPrimaryAction)`,swiftui:`Menu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons`},android:{name:`Dropdown menu`,api:{compose:`DropdownMenu`,view:`PopupMenu`},guideline:`https://m3.material.io/components/menus/overview`},web:{name:`Menu button`,api:{html:`<button> + popover`,aria:`button[aria-haspopup=menu] + menu`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/`}}},{id:`radio-group`,name:{en:`Radio group`,zh:`單選群組`},aliases:[`radio buttons`,`option buttons`,`單選鈕`],describe:[`一組小圓圈，只能選其中一個`],category:`input`,confusedWith:[`checkbox`,`segmented-control`],prompt:{keywords:[`radio group`,`HTML radio inputs in a fieldset`],descriptors:[`round buttons`,`exactly one option selected`],avoid:[`checkbox`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Radio buttons`,api:{appkit:`NSButton (radio)`,swiftui:`Picker(.radioGroup)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`},android:{name:`Radio button`,api:{compose:`RadioButton`,view:`MaterialRadioButton`},guideline:`https://m3.material.io/components/radio-button/overview`},web:{name:`Radio group`,api:{html:`<fieldset> + <input type="radio">`,aria:`radiogroup + radio`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`}}},{id:`scroll-view`,name:{en:`Scroll view`,zh:`捲動視圖`},aliases:[`scroll area`,`scroller`,`scrollbar`,`捲軸`,`捲動區`],describe:[`內容比框框大時可以上下捲動的區域`,`捲軸平常隱藏，捲動時才出現`],category:`containers`,confusedWith:[`collection-view`,`table`],prompt:{keywords:[`scroll view`,`NSScrollView`,`overlay scrollbar`],descriptors:[`content clipped to a frame`,`thin overlay scroller that fades out`,`keyboard scrollable when focused`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Scroll view`,api:{appkit:`NSScrollView`,swiftui:`ScrollView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/scroll-views`},web:{name:`Scroll container`,api:{html:`overflow: auto + tabindex="0"`,aria:`region with aria-label`}}}},{id:`search-field`,name:{en:`Search field`,zh:`搜尋欄`},aliases:[`search bar`,`search box`,`搜尋框`],describe:[`前面有放大鏡圖示、可以打字搜尋的欄位`,`打字後右邊會出現清除按鈕`],category:`input`,confusedWith:[`combobox`,`text-field`],prompt:{keywords:[`search field`,`NSSearchField`,`SwiftUI searchable`],descriptors:[`magnifying glass icon`,`rounded text field`,`clear button when filled`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Search field`,api:{appkit:`NSSearchField`,swiftui:`.searchable`},guideline:`https://developer.apple.com/design/human-interface-guidelines/search-fields`,states:[`empty`,`focus`,`filled`,`disabled`],sizes:[`mini`,`small`,`regular`,`large`]},ios:{name:`Search field`,api:{uikit:`UISearchController / UISearchBar`,swiftui:`.searchable`},guideline:`https://developer.apple.com/design/human-interface-guidelines/search-fields`},android:{name:`Search bar`,api:{compose:`SearchBar`,view:`com.google.android.material.search.SearchBar`},guideline:`https://m3.material.io/components/search/overview`},web:{name:`Search`,api:{html:`<input type="search"> in <search>`,aria:`searchbox + search landmark`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/search.html`}}},{id:`segmented-control`,name:{en:`Segmented control`,zh:`分段控制`},aliases:[`segmented button`,`button group`,`toggle group`,`分段按鈕`],describe:[`幾顆並排黏在一起的按鈕，一次選一個`,`一條橫向膠囊切成好幾格，選中的那格會反白`],category:`input`,confusedWith:[`popup-select`,`toggle-switch`,`tabs`,`radio-group`],prompt:{keywords:[`segmented control`,`NSSegmentedControl`,`SwiftUI Picker segmented style`],descriptors:[`joined segments`,`one selected segment highlighted`],avoid:[`toggle-switch`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Segmented control`,api:{appkit:`NSSegmentedControl`,swiftui:`Picker(.segmented)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/segmented-controls`,states:[`default`,`selected`,`pressed`,`focus`,`disabled`]},ios:{name:`Segmented control`,api:{uikit:`UISegmentedControl`,swiftui:`Picker(.segmented)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/segmented-controls`},android:{name:`Segmented button`,api:{compose:`SingleChoiceSegmentedButtonRow`,view:`MaterialButtonToggleGroup`},guideline:`https://m3.material.io/components/segmented-buttons/overview`},web:{name:`Segmented control`,api:{html:`radio group styled as joined buttons`,aria:`radiogroup`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`}}},{id:`separator`,name:{en:`Separator`,zh:`分隔線`},aliases:[`divider`,`rule`,`分隔`],describe:[`一條細線，把上下兩塊內容分開`],category:`containers`,confusedWith:[],prompt:{keywords:[`separator`,`HTML hr element`,`divider line`],descriptors:[`thin horizontal line`,`low contrast`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Separator`,api:{appkit:`NSBox (separator)`,swiftui:`Divider`}},ios:{name:`Divider`,api:{swiftui:`Divider`}},android:{name:`Divider`,api:{compose:`HorizontalDivider`,view:`MaterialDivider`},guideline:`https://m3.material.io/components/divider/overview`},web:{name:`Separator`,api:{html:`<hr>`,aria:`separator`}}}},{id:`share-sheet`,name:{en:`Share sheet`,zh:`分享面板`},aliases:[`activity view`,`share menu`,`分享選單`],describe:[`按分享後跳出來，列出可以傳給誰、用哪個 App 開`],category:`overlays`,confusedWith:[`action-sheet`],prompt:{keywords:[`share sheet`,`UIActivityViewController`,`SwiftUI ShareLink`],descriptors:[`row of app targets`,`list of actions below`],avoid:[`action-sheet`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Share menu`,api:{appkit:`NSSharingServicePicker`,swiftui:`ShareLink`},guideline:`https://developer.apple.com/design/human-interface-guidelines/activity-views`},ios:{name:`Activity view`,api:{uikit:`UIActivityViewController`,swiftui:`ShareLink`},guideline:`https://developer.apple.com/design/human-interface-guidelines/activity-views`},android:{name:`Sharesheet`,api:{view:`Intent.createChooser(ACTION_SEND)`},guideline:`https://developer.android.com/training/sharing/send`}}},{id:`sidebar`,name:{en:`Sidebar`,zh:`側邊欄`},aliases:[`side navigation`,`側欄`],describe:[`畫面左邊一直在的導覽清單`],category:`navigation`,confusedWith:[`drawer`,`navigation`],prompt:{keywords:[`sidebar`,`side navigation`,`navigation split view`],descriptors:[`vertical list of sections on the left`,`selected item highlighted`],avoid:[`drawer`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Sidebar`,api:{appkit:`NSSplitViewController (sidebar)`,swiftui:`NavigationSplitView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sidebars`},ios:{name:`Sidebar`,api:{uikit:`UISplitViewController`,swiftui:`NavigationSplitView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sidebars`},android:{name:`Navigation drawer`,api:{compose:`ModalNavigationDrawer`,view:`NavigationView`},guideline:`https://m3.material.io/components/navigation-drawer/overview`},web:{name:`Sidebar`,api:{html:`<aside> + <nav>`,aria:`complementary`}}}},{id:`skeleton`,name:{en:`Skeleton`,zh:`骨架屏`},aliases:[`placeholder`,`shimmer`,`載入佔位`],describe:[`內容還沒載入前先顯示的灰色方塊`],category:`status`,confusedWith:[`spinner`],prompt:{keywords:[`skeleton loader`,`shimmer placeholder`,`aria-busy`],descriptors:[`gray blocks matching content layout`,`shimmer animation`],avoid:[`spinner`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Redacted placeholder`,api:{swiftui:`.redacted(reason: .placeholder)`}},web:{name:`Skeleton`,api:{aria:`aria-busy="true"`}}}},{id:`slider`,name:{en:`Slider`,zh:`滑桿`},aliases:[`range`,`range slider`,`scrubber`,`拉桿`,`滑動條`],describe:[`拖動圓點在一條線上調整數值`,`調音量、亮度那種橫條`],category:`input`,confusedWith:[`stepper`],prompt:{keywords:[`slider`,`NSSlider`,`SwiftUI Slider`],descriptors:[`horizontal track`,`draggable round knob`,`filled portion uses accent color`],avoid:[`stepper`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Slider`,api:{appkit:`NSSlider`,swiftui:`Slider`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sliders`,states:[`default`,`dragging`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`]},ios:{name:`Slider`,api:{uikit:`UISlider`,swiftui:`Slider`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sliders`},android:{name:`Slider`,api:{compose:`Slider`,view:`com.google.android.material.slider.Slider`},guideline:`https://m3.material.io/components/sliders/overview`},web:{name:`Range input`,api:{html:`<input type="range">`,aria:`slider`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/slider/`}}},{id:`spinner`,name:{en:`Spinner`,zh:`載入指示`},aliases:[`loader`,`activity indicator`,`轉圈圈`],describe:[`一直轉圈圈，表示正在載入`],category:`status`,confusedWith:[`progress-indicator`,`skeleton`],prompt:{keywords:[`loading spinner`,`role status`,`indeterminate progress`],descriptors:[`rotating ring`,`respects reduced motion`],avoid:[`skeleton`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Spinner`,api:{appkit:`NSProgressIndicator (.spinning)`,swiftui:`ProgressView()`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},ios:{name:`Activity indicator`,api:{uikit:`UIActivityIndicatorView`,swiftui:`ProgressView()`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},android:{name:`Loading indicator`,api:{compose:`CircularProgressIndicator`,view:`CircularProgressIndicator`},guideline:`https://m3.material.io/components/progress-indicators/overview`},web:{name:`Spinner`,api:{aria:`status`}}}},{id:`split-view`,name:{en:`Split view`,zh:`分割視圖`},aliases:[`split pane`,`resizable panes`,`divider`,`分欄`,`可拖曳分隔線`],describe:[`把視窗切成好幾欄，中間的分隔線可以拖曳調整寬度`],category:`containers`,confusedWith:[`sidebar`,`window`],prompt:{keywords:[`split view`,`NSSplitView`,`resizable pane divider`],descriptors:[`two or three panes side by side`,`draggable divider between panes`,`arrow keys move a focused divider`],avoid:[`sidebar`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Split view`,api:{appkit:`NSSplitView / NSSplitViewController`,swiftui:`HSplitView / NavigationSplitView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/split-views`},web:{name:`Resizable panes`,api:{html:`flex panes + focusable divider`,aria:`separator with aria-valuenow (window splitter)`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/`}}},{id:`stepper`,name:{en:`Stepper`,zh:`步進器`},aliases:[`spin button`,`number spinner`,`increment decrement`,`加減按鈕`],describe:[`一組加和減的小按鈕，一次調一格`,`上下兩個小箭頭，旁邊通常有數字欄`],category:`input`,confusedWith:[`slider`],prompt:{keywords:[`stepper`,`NSStepper`,`SwiftUI Stepper`],descriptors:[`small up and down arrows`,`paired with a number field`,`discrete increments`],avoid:[`slider`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Stepper`,api:{appkit:`NSStepper`,swiftui:`Stepper`},guideline:`https://developer.apple.com/design/human-interface-guidelines/steppers`,states:[`default`,`pressed`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`]},ios:{name:`Stepper`,api:{uikit:`UIStepper`,swiftui:`Stepper`},guideline:`https://developer.apple.com/design/human-interface-guidelines/steppers`},web:{name:`Number input`,api:{html:`<input type="number">`,aria:`spinbutton`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/`}}},{id:`table`,name:{en:`Table`,zh:`表格`},aliases:[`data table`,`表格視圖`],describe:[`一列一列的資料，有欄位標題`],category:`data`,confusedWith:[`data-grid`,`listbox`],prompt:{keywords:[`table`,`HTML table with caption and th scope`],descriptors:[`header row`,`zebra striped rows`],avoid:[`data-grid`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Table view`,api:{appkit:`NSTableView`,swiftui:`Table`},guideline:`https://developer.apple.com/design/human-interface-guidelines/lists-and-tables`},ios:{name:`List`,api:{uikit:`UITableView`,swiftui:`List`},guideline:`https://developer.apple.com/design/human-interface-guidelines/lists-and-tables`},android:{name:`List`,api:{compose:`LazyColumn + ListItem`,view:`RecyclerView`},guideline:`https://m3.material.io/components/lists/overview`},web:{name:`Table`,api:{html:`<table>`,aria:`table`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/table/`}}},{id:`tabs`,name:{en:`Tabs`,zh:`分頁標籤`},aliases:[`tab bar`,`tab view`,`頁籤`],describe:[`一排標籤，點哪個就顯示哪一頁的內容`],category:`navigation`,confusedWith:[`segmented-control`,`navigation`],prompt:{keywords:[`tabs`,`APG tabs pattern`,`tablist tab tabpanel`],descriptors:[`arrow keys switch tabs`,`only active panel visible`],avoid:[`segmented-control`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Tab view`,api:{appkit:`NSTabView`,swiftui:`TabView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/tab-views`},android:{name:`Tabs`,api:{compose:`PrimaryTabRow + Tab`,view:`TabLayout`},guideline:`https://m3.material.io/components/tabs/overview`},web:{name:`Tabs`,api:{aria:`tablist + tab + tabpanel`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`}}},{id:`text-field`,name:{en:`Text field`,zh:`文字輸入框`},aliases:[`input`,`text input`,`textarea`,`輸入框`],describe:[`可以打字的一格方框`],category:`input`,confusedWith:[`search-field`,`combobox`],prompt:{keywords:[`text field`,`HTML input element`,`labelled text input`],descriptors:[`visible label above the field`,`focus ring when active`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Text field`,api:{appkit:`NSTextField`,swiftui:`TextField`},guideline:`https://developer.apple.com/design/human-interface-guidelines/text-fields`},ios:{name:`Text field`,api:{uikit:`UITextField`,swiftui:`TextField`},guideline:`https://developer.apple.com/design/human-interface-guidelines/text-fields`},android:{name:`Text field`,api:{compose:`TextField / OutlinedTextField`,view:`TextInputLayout`},guideline:`https://m3.material.io/components/text-fields/overview`},web:{name:`Text input`,api:{html:`<input type="text"> / <textarea>`,aria:`textbox`}}}},{id:`toast`,name:{en:`Toast`,zh:`吐司通知`},aliases:[`snackbar`,`notification`,`通知`],describe:[`角落跳出一則訊息，幾秒後自己消失`],category:`overlays`,confusedWith:[`alert-banner`,`alert-dialog`],prompt:{keywords:[`toast notification`,`aria-live status region`],descriptors:[`auto-dismiss after a few seconds`,`stacked in a corner`],avoid:[`alert-dialog`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Notification`,api:{usernotifications:`UNUserNotificationCenter`},guideline:`https://developer.apple.com/design/human-interface-guidelines/notifications`},android:{name:`Snackbar`,api:{compose:`Snackbar`,view:`Snackbar`},guideline:`https://m3.material.io/components/snackbar/overview`},web:{name:`Toast`,api:{aria:`status live region`}}}},{id:`toggle-switch`,name:{en:`Switch`,zh:`開關`},aliases:[`toggle`,`on/off switch`,`切換開關`,`撥動開關`],describe:[`左右撥動的開關，切換開或關`,`一個膠囊形狀，裡面圓點會滑到另一邊`],category:`input`,confusedWith:[`segmented-control`,`checkbox`],prompt:{keywords:[`toggle switch`,`NSSwitch`,`SwiftUI Toggle switch style`],descriptors:[`pill-shaped track`,`sliding knob`,`takes effect immediately`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Switch`,api:{appkit:`NSSwitch`,swiftui:`Toggle(.switch)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`,states:[`off`,`on`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`]},ios:{name:`Switch`,api:{uikit:`UISwitch`,swiftui:`Toggle`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`},android:{name:`Switch`,api:{compose:`Switch`,view:`MaterialSwitch`},guideline:`https://m3.material.io/components/switch/overview`},web:{name:`Switch`,api:{html:`<input type="checkbox" switch>`,aria:`switch`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/switch/`}}},{id:`toolbar`,name:{en:`Toolbar`,zh:`工具列`},aliases:[`action bar`,`工具欄`],describe:[`一排圖示按鈕，放常用動作`],category:`actions`,confusedWith:[`navigation`],prompt:{keywords:[`toolbar`,`APG toolbar pattern`,`role toolbar`],descriptors:[`row of icon buttons`,`arrow keys move focus between controls`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Toolbar`,api:{appkit:`NSToolbar`,swiftui:`.toolbar`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toolbars`},ios:{name:`Toolbar`,api:{uikit:`UIToolbar`,swiftui:`.toolbar`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toolbars`},android:{name:`Bottom app bar`,api:{compose:`BottomAppBar`,view:`BottomAppBar`},guideline:`https://m3.material.io/components/bottom-app-bar/overview`},web:{name:`Toolbar`,api:{html:`<div role="toolbar">`,aria:`toolbar`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/`}}},{id:`tooltip`,name:{en:`Tooltip`,zh:`工具提示`},aliases:[`hint`,`help tag`,`提示框`],describe:[`滑鼠停在按鈕上時冒出的一小段說明文字`],category:`overlays`,confusedWith:[`popover`],prompt:{keywords:[`tooltip`,`popover hint`,`APG tooltip pattern`],descriptors:[`short text`,`shows on hover and keyboard focus`],avoid:[`popover`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Help tag`,api:{appkit:`NSView.toolTip`,swiftui:`.help`},guideline:`https://developer.apple.com/design/human-interface-guidelines/offering-help`},android:{name:`Plain tooltip`,api:{compose:`PlainTooltip`,view:`TooltipCompat`},guideline:`https://m3.material.io/components/tooltips/overview`},web:{name:`Tooltip`,api:{html:`popover="hint"`,aria:`tooltip`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/`}}},{id:`top-app-bar`,name:{en:`Top app bar`,zh:`頂部導覽列`},aliases:[`navigation bar`,`app bar`,`title bar`,`標題列`],describe:[`畫面最上面一條，放標題、返回鍵和動作按鈕`],category:`navigation`,confusedWith:[`bottom-navigation`,`toolbar`],prompt:{keywords:[`top app bar`,`iOS navigation bar`,`title with back button`],descriptors:[`page title`,`back button on the leading edge`,`action icons on the trailing edge`],avoid:[`bottom-navigation`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Navigation bar`,api:{uikit:`UINavigationBar`,swiftui:`.navigationTitle + .toolbar`},guideline:`https://developer.apple.com/design/human-interface-guidelines/navigation-bars`},android:{name:`Top app bar`,api:{compose:`TopAppBar / CenterAlignedTopAppBar`,view:`MaterialToolbar`},guideline:`https://m3.material.io/components/app-bars/overview`}}},{id:`tree-view`,name:{en:`Tree view`,zh:`樹狀視圖`},aliases:[`file tree`,`outline`,`樹狀清單`],describe:[`可以一層一層展開的清單，像檔案總管`],category:`data`,confusedWith:[`treegrid`,`disclosure`],prompt:{keywords:[`tree view`,`APG treeview pattern`,`role tree`],descriptors:[`nested expandable nodes`,`arrow keys expand and collapse`],avoid:[`disclosure`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Outline view`,api:{appkit:`NSOutlineView`,swiftui:`OutlineGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/outline-views`},ios:{name:`Outline group`,api:{swiftui:`OutlineGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/outline-views`},web:{name:`Tree view`,api:{aria:`tree + treeitem + group`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/treeview/`}}},{id:`treegrid`,name:{en:`Treegrid`,zh:`樹狀表格`},aliases:[`tree table`,`可展開表格`],describe:[`有很多欄位、每一列又能展開子列的表格`],category:`data`,confusedWith:[`tree-view`,`data-grid`],prompt:{keywords:[`treegrid`,`APG treegrid pattern`,`expandable table rows`],descriptors:[`rows expand to show child rows`,`multiple columns`],avoid:[`tree-view`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Treegrid`,api:{aria:`treegrid`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/`}}},{id:`wheel-picker`,name:{en:`Wheel picker`,zh:`滾輪選擇器`},aliases:[`picker`,`spinner`,`number picker`,`滾輪`],describe:[`上下滾動的滾輪，中間那格就是選到的值`],category:`input`,confusedWith:[`popup-select`,`date-picker`],prompt:{keywords:[`wheel picker`,`UIPickerView`,`SwiftUI Picker wheel style`],descriptors:[`vertical scrolling wheel`,`selected row in the center band`],avoid:[`popup-select`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Picker (wheel)`,api:{uikit:`UIPickerView`,swiftui:`Picker(.wheel)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pickers`},android:{name:`Number picker`,api:{view:`NumberPicker`}}}},{id:`window`,name:{en:`Window`,zh:`視窗`},aliases:[`app window`,`title bar`,`traffic lights`,`視窗標題列`,`紅黃綠按鈕`],describe:[`一個 App 的框框，最上面有紅黃綠三顆圓點和標題`,`點到別的視窗時，紅黃綠會變灰`],category:`containers`,confusedWith:[`modal-dialog`,`split-view`],prompt:{keywords:[`macOS window`,`NSWindow`,`traffic light window controls`],descriptors:[`title bar with red, yellow and green buttons`,`controls turn gray when the window is inactive`,`rounded corners and soft shadow`],avoid:[`modal-dialog`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Window`,api:{appkit:`NSWindow + standardWindowButton`,swiftui:`WindowGroup / Window`},guideline:`https://developer.apple.com/design/human-interface-guidelines/windows`}}}];function f(e){return Array.isArray?Array.isArray(e):S(e)===`[object Array]`}function p(e){if(typeof e==`string`)return e;if(typeof e==`bigint`)return e.toString();let t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function m(e){return e==null?``:p(e)}function h(e){return typeof e==`string`}function g(e){return typeof e==`number`}function _(e){return e===!0||e===!1||y(e)&&S(e)==`[object Boolean]`}function v(e){return typeof e==`object`}function y(e){return v(e)&&e!==null}function b(e){return e!=null}function x(e){return!e.trim().length}function S(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}var C=`Incorrect 'index' type`,w=`Invalid doc index: must be a non-negative integer within the bounds of the docs array`,ee=e=>`Invalid value for key ${e}`,te=e=>`Pattern length exceeds max of ${e}.`,ne=e=>`Missing ${e} property in key`,re=e=>`Property 'weight' in key '${e}' must be a positive integer`,ie=`Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.`,ae=Object.prototype.hasOwnProperty,oe=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=T(e);this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function T(e){let t=null,n=null,r=null,i=1,a=null;if(h(e)||f(e))r=e,t=E(e),n=D(e);else{if(!ae.call(e,`name`))throw Error(ne(`name`));let o=e.name;if(r=o,ae.call(e,`weight`)&&e.weight!==void 0&&(i=e.weight,i<=0))throw Error(re(D(o)));t=E(o),n=D(o),a=e.getFn??null}return{path:t,id:n,weight:i,src:r,getFn:a}}function E(e){return f(e)?e:e.split(`.`)}function D(e){return f(e)?e.join(`.`):e}function se(e,t){let n=[],r=!1,i=(e,t,a,o)=>{if(b(e)){if(!t[a])n.push(o===void 0?e:{v:e,i:o});else{let s=e[t[a]];if(!b(s))return;if(a===t.length-1&&(h(s)||g(s)||_(s)||typeof s==`bigint`))n.push(o===void 0?m(s):{v:m(s),i:o});else if(f(s)){r=!0;for(let e=0,n=s.length;e<n;e+=1)i(s[e],t,a+1,e)}else t.length&&i(s,t,a+1,o)}}};return i(e,h(t)?t.split(`.`):t,0),r?n:n[0]}var ce={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},le={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ue={location:0,threshold:.6,distance:100},de={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:`any`,getFn:se,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},O=Object.freeze({...le,...ce,...ue,...de});function fe(e){return e>=9&&e<=13||e===32||e===160}function pe(e=1,t=3){let n=new Map,r=10**t;return{get(t){let i=0,a=!1;for(let e=0;e<t.length;e++)fe(t.charCodeAt(e))?a=!1:a||=(i++,!0);if(i===0&&(i=1),n.has(i))return n.get(i);let o=Math.round(r/i**(.5*e))/r;return n.set(i,o),o},clear(){n.clear()}}}var k=class{constructor({getFn:e=O.getFn,fieldNormWeight:t=O.fieldNormWeight}={}){this.norm=pe(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;let e=this.docs.length;this.records=Array(e);let t=0;if(h(this.docs[0]))for(let n=0;n<e;n++){let e=this._createStringRecord(this.docs[n],n);e&&(this.records[t++]=e)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw Error(w);if(h(e)){let n=this._createStringRecord(e,t);return n&&this.records.push(n),n}let n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw Error(w);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&--this.records[t].i}removeAll(e){let t=new Set;for(let n of e)Number.isInteger(n)&&n>=0&&t.add(n);if(t.size===0)return;this.records=this.records.filter(e=>!t.has(e.i));let n=Array.from(t).sort((e,t)=>e-t);for(let e of this.records){let t=0,r=n.length;for(;t<r;){let i=t+r>>>1;n[i]<e.i?t=i+1:r=i}e.i-=t}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!b(e)||x(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){let n={i:t,$:{}};for(let t=0,r=this.keys.length;t<r;t++){let r=this.keys[t],i=r.getFn?r.getFn(e):this.getFn(e,r.path);if(b(i)){if(f(i)){let e=[];for(let t=0,n=i.length;t<n;t+=1){let n=i[t];if(b(n)){if(h(n)){if(!x(n)){let r={v:n,i:t,n:this.norm.get(n)};e.push(r)}}else if(b(n.v)){let t=h(n.v)?n.v:m(n.v);if(!x(t)){let r={v:t,i:n.i,n:this.norm.get(t)};e.push(r)}}}}n.$[t]=e}else if(h(i)&&!x(i)){let e={v:i,n:this.norm.get(i)};n.$[t]=e}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function A(e,t,{getFn:n=O.getFn,fieldNormWeight:r=O.fieldNormWeight}={}){let i=new k({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(T)),i.setSources(t),i.create(),i}function me(e,{getFn:t=O.getFn,fieldNormWeight:n=O.fieldNormWeight}={}){let{keys:r,records:i}=e,a=new k({getFn:t,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function he(e=[],t=O.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let o=e.length;a<o;a+=1){let o=e[a];o&&r===-1?r=a:!o&&r!==-1&&(i=a-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[a-1]&&a-r>=t&&n.push([r,a-1]),n}function ge(e,t,n,{location:r=O.location,distance:i=O.distance,threshold:a=O.threshold,findAllMatches:o=O.findAllMatches,minMatchCharLength:s=O.minMatchCharLength,includeMatches:c=O.includeMatches,ignoreLocation:l=O.ignoreLocation}={}){if(t.length>32)throw Error(te(32));let u=t.length,d=e.length,f=Math.max(0,Math.min(r,d)),p=a,m=f,h=(e,t)=>{let n=e/u;if(l)return n;let r=Math.abs(f-t);return i?n+r/i:r?1:n},g=s>1||c,_=g?Array(d):[],v;for(;(v=e.indexOf(t,m))>-1;){let e=h(0,v);if(p=Math.min(e,p),m=v+u,g){let e=0;for(;e<u;)_[v+e]=1,e+=1}}m=-1;let y=[],b=1,x=0,S=u+d,C=1<<u-1;for(let t=0;t<u;t+=1){let r=0,i=S;for(;r<i;)h(t,f+i)<=p?r=i:S=i,i=Math.floor((S-r)/2+r);S=i;let a=Math.max(1,f-i+1),s=o?d:Math.min(f+i,d)+u,c=Array(s+2);c[s+1]=(1<<t)-1;for(let r=s;r>=a;--r){let i=r-1,o=n[e[i]];if(c[r]=(c[r+1]<<1|1)&o,t&&(c[r]|=(y[r+1]|y[r])<<1|1|y[r+1]),c[r]&C&&(b=h(t,i),b<=p)){if(p=b,m=i,x=t,m<=f)break;a=Math.max(1,2*f-m)}}if(h(t+1,f)>p)break;y=c}if(g&&m>=0){let t=Math.min(d-1,m+u-1+x);for(let r=m;r<=t;r+=1)n[e[r]]&&(_[r]=1)}let w={isMatch:m>=0,score:Math.max(.001,b)};if(g){let e=he(_,s);e.length?c&&(w.indices=e):w.isMatch=!1}return w}function _e(e){let t={};for(let n=0,r=e.length;n<r;n+=1){let i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}function j(e){if(e.length<=1)return e;e.sort((e,t)=>e[0]-t[0]||e[1]-t[1]);let t=[e[0]];for(let n=1,r=e.length;n<r;n+=1){let r=t[t.length-1],i=e[n];i[0]<=r[1]+1?r[1]=Math.max(r[1],i[1]):t.push(i)}return t}var M={ł:`l`,Ł:`L`,đ:`d`,Đ:`D`,ø:`o`,Ø:`O`,ħ:`h`,Ħ:`H`,ŧ:`t`,Ŧ:`T`,ı:`i`,ß:`ss`},ve=RegExp(`[`+Object.keys(M).join(``)+`]`,`g`),N=typeof String.prototype.normalize==`function`?e=>e.normalize(`NFD`).replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,``).replace(ve,e=>M[e]):e=>e,P=class{constructor(e,{location:t=O.location,threshold:n=O.threshold,distance:r=O.distance,includeMatches:i=O.includeMatches,findAllMatches:a=O.findAllMatches,minMatchCharLength:o=O.minMatchCharLength,isCaseSensitive:s=O.isCaseSensitive,ignoreDiacritics:c=O.ignoreDiacritics,ignoreLocation:l=O.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:o,isCaseSensitive:s,ignoreDiacritics:c,ignoreLocation:l},e=s?e:e.toLowerCase(),e=c?N(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;let u=(e,t)=>{this.chunks.push({pattern:e,alphabet:_e(e),startIndex:t})},d=this.pattern.length;if(d>32){let e=0,t=d%32,n=d-t;for(;e<n;)u(this.pattern.substr(e,32),e),e+=32;if(t){let e=d-32;u(this.pattern.substr(e),e)}}else u(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r}=this.options;if(e=t?e:e.toLowerCase(),e=n?N(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:i,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,ignoreLocation:l}=this.options,u=[],d=0,f=!1;this.chunks.forEach(({pattern:t,alphabet:n,startIndex:p})=>{let{isMatch:m,score:h,indices:g}=ge(e,t,n,{location:i+p,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,includeMatches:r,ignoreLocation:l});m&&(f=!0),d+=h,m&&g&&u.push(...g)});let p={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(p.indices=j(u)),p}},ye=new Set([`fuzzy`,`include`]);function be(e){return e.startsWith(`inverse`)}var F=[{type:`exact`,multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:`exact`,search(t){let n=t===e;return{isMatch:n,score:+!n,indices:[0,e.length-1]}}})},{type:`include`,multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:`include`,search(t){let n=0,r,i=[],a=e.length;for(;(r=t.indexOf(e,n))>-1;)n=r+a,i.push([r,n-1]);let o=!!i.length;return{isMatch:o,score:+!o,indices:i}}})},{type:`prefix-exact`,multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:`prefix-exact`,search(t){let n=t.startsWith(e);return{isMatch:n,score:+!n,indices:[0,e.length-1]}}})},{type:`inverse-prefix-exact`,multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:`inverse-prefix-exact`,search(t){let n=!t.startsWith(e);return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`inverse-suffix-exact`,multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:`inverse-suffix-exact`,search(t){let n=!t.endsWith(e);return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`suffix-exact`,multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:`suffix-exact`,search(t){let n=t.endsWith(e);return{isMatch:n,score:+!n,indices:[t.length-e.length,t.length-1]}}})},{type:`inverse-exact`,multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:`inverse-exact`,search(t){let n=t.indexOf(e)===-1;return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`fuzzy`,multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{let n=new P(e,{location:t.location??O.location,threshold:t.threshold??O.threshold,distance:t.distance??O.distance,includeMatches:t.includeMatches??O.includeMatches,findAllMatches:t.findAllMatches??O.findAllMatches,minMatchCharLength:t.minMatchCharLength??O.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??O.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??O.ignoreDiacritics,ignoreLocation:t.ignoreLocation??O.ignoreLocation});return{type:`fuzzy`,search(e){return n.searchIn(e)}}}}],I=F.length,xe=`\0`,Se=`|`;function Ce(e){let t=[],n=e.length,r=0;for(;r<n;){for(;r<n&&e[r]===` `;)r++;if(r>=n)break;let i=r;for(;i<n&&e[i]!==` `&&e[i]!==`"`;)i++;if(i<n&&e[i]===`"`){for(i++;i<n;){if(e[i]===`"`){let t=i+1;if(t>=n||e[t]===` `){i++;break}if(e[t]===`$`&&(t+1>=n||e[t+1]===` `)){i+=2;break}}i++}t.push(e.substring(r,i)),r=i}else{for(;i<n&&e[i]!==` `;)i++;t.push(e.substring(r,i)),r=i}}return t}function L(e,t){let n=e.match(t);return n?n[1]:null}function we(e,t={}){return e.replace(/\\\|/g,xe).split(Se).map(e=>{let n=Ce(e.replace(/\u0000/g,`|`).trim()).filter(e=>e&&!!e.trim()),r=[];for(let e=0,i=n.length;e<i;e+=1){let i=n[e],a=!1,o=-1;for(;!a&&++o<I;){let e=F[o],n=L(i,e.multiRegex);n&&(r.push(e.create(n,t)),a=!0)}if(!a)for(o=-1;++o<I;){let e=F[o],n=L(i,e.singleRegex);if(n){r.push(e.create(n,t));break}}}return r})}var Te=class{constructor(e,{isCaseSensitive:t=O.isCaseSensitive,ignoreDiacritics:n=O.ignoreDiacritics,includeMatches:r=O.includeMatches,minMatchCharLength:i=O.minMatchCharLength,ignoreLocation:a=O.ignoreLocation,findAllMatches:o=O.findAllMatches,location:s=O.location,threshold:c=O.threshold,distance:l=O.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r,minMatchCharLength:i,findAllMatches:o,ignoreLocation:a,location:s,threshold:c,distance:l},e=t?e:e.toLowerCase(),e=n?N(e):e,this.pattern=e,this.query=we(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:r,ignoreDiacritics:i}=this.options;e=r?e:e.toLowerCase(),e=i?N(e):e;let a=0,o=[],s=0,c=!1;for(let r=0,i=t.length;r<i;r+=1){let i=t[r];o.length=0,a=0,c=!1;for(let t=0,r=i.length;t<r;t+=1){let r=i[t],{isMatch:l,indices:u,score:d}=r.search(e);if(l)a+=1,s+=d,be(r.type)&&(c=!0),n&&(ye.has(r.type)?o.push(...u):o.push(u));else{s=0,a=0,o.length=0,c=!1;break}}if(a){let e={isMatch:!0,score:s/a};return c&&(e.hasInverse=!0),n&&(e.indices=j(o)),e}}return{isMatch:!1,score:1}}},R=[];function z(...e){R.push(...e)}function B(e,t){for(let n=0,r=R.length;n<r;n+=1){let r=R[n];if(r.condition(e,t))return new r(e,t)}return new P(e,t)}var V={AND:`$and`,OR:`$or`},H={PATH:`$path`,PATTERN:`$val`},U=e=>!!(e[V.AND]||e[V.OR]),Ee=e=>!!e[H.PATH],De=e=>!f(e)&&v(e)&&!U(e),W=e=>({[V.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function G(e,t,{auto:n=!0}={}){let r=e=>{if(h(e)){let r={keyId:null,pattern:e};return n&&(r.searcher=B(e,t)),r}let i=Object.keys(e),a=Ee(e);if(!a&&i.length>1&&!U(e))return r(W(e));if(De(e)){let r=a?e[H.PATH]:i[0],o=a?e[H.PATTERN]:e[r];if(!h(o))throw Error(ee(r));let s={keyId:D(r),pattern:o};return n&&(s.searcher=B(o,t)),s}let o={children:[],operator:i[0]};return i.forEach(t=>{let n=e[t];f(n)&&n.forEach(e=>{o.children.push(r(e))})}),o};return U(e)||(e=W(e)),r(e)}function K(e,{ignoreFieldNorm:t=O.ignoreFieldNorm}){let n=1;return e.forEach(({key:e,norm:r,score:i})=>{let a=e?e.weight:null;n*=(i===0&&a?2**-52:i)**+((a||1)*(t?1:r))}),n}function Oe(e,{ignoreFieldNorm:t=O.ignoreFieldNorm}){e.forEach(e=>{e.score=K(e.matches,{ignoreFieldNorm:t})})}var ke=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){let t=this.heap;for(;e>0;){let n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;let r=t[e];t[e]=t[n],t[n]=r,e=n}}_sinkDown(e){let t=this.heap,n=t.length,r=e;do{e=r;let i=2*e+1,a=2*e+2;if(i<n&&this.comparator(t[i],t[r])>0&&(r=i),a<n&&this.comparator(t[a],t[r])>0&&(r=a),r!==e){let n=t[e];t[e]=t[r],t[r]=n}}while(r!==e)}};function Ae(e){let t=[];return e.matches.forEach(e=>{if(!b(e.indices)||!e.indices.length)return;let n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.id),e.idx>-1&&(n.refIndex=e.idx),t.push(n)}),t}function je(e,t,{includeMatches:n=O.includeMatches,includeScore:r=O.includeScore}={}){return e.map(e=>{let{idx:i}=e,a={item:t[i],refIndex:i};return n&&(a.matches=Ae(e)),r&&(a.score=e.score),a})}var Me=/[\p{L}\p{M}\p{N}_]+/gu,q=new WeakSet;function Ne(e){q.has(e)||(q.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function Pe(e){if(typeof e==`function`){let t=!1;return n=>{let r=e(n);if(!t&&(t=!0,!Array.isArray(r)||r.some(e=>typeof e!=`string`)))throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r)?`array containing non-strings`:typeof r}.`);return r}}return e instanceof RegExp?(e.global||Ne(e),t=>t.match(e)||[]):e=>e.match(Me)||[]}function J({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){let r=Pe(n);return{tokenize(n){return e||(n=n.toLowerCase()),t&&(n=N(n)),r(n)}}}var Fe=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=J({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});let n=this.analyzer.tokenize(e),{df:r,fieldCount:i}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(let e of n){this.termSearchers.push(new P(e,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));let n=r.get(e)||0,a=Math.log(1+(i-n+.5)/(n+.5));this.idfWeights.push(a)}this.combineAll=t.tokenMatch===`all`,this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};let t=[],n=0,r=0,i=0,a=0,o=this.combineAll&&!this.useMask?new Set:null;for(let s=0;s<this.termSearchers.length;s++){let c=this.termSearchers[s].searchIn(e),l=this.idfWeights[s];r+=l,c.isMatch&&(i++,n+=l*(1-c.score),c.indices&&t.push(...c.indices),this.combineAll&&(this.useMask?a|=1<<s:o.add(s)))}if(i===0)return{isMatch:!1,score:1};let s=r>0?1-n/r:0,c={isMatch:!0,score:Math.max(.001,s)};return this.options.includeMatches&&t.length&&(c.indices=j(t)),this.combineAll&&(this.useMask?c.matchedMask=a:c.matchedTerms=o,c.termCount=this.numTerms),c}};function Y(e,t,n,r){let i=r.tokenize(t);if(!i.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);let a=new Set(i),o=e.docTermFieldHits.get(n);o||(o=new Map,e.docTermFieldHits.set(n,o));for(let t of a)o.set(t,(o.get(t)||0)+1),e.df.set(t,(e.df.get(t)||0)+1)}function X(e,t,n,r){let{i,v:a,$:o}=t;if(a!==void 0)Y(e,a,i,r);else if(o)for(let t=0;t<n;t++){let n=o[t];if(n){if(Array.isArray(n))for(let t of n)Y(e,t.v,i,r);else Y(e,n.v,i,r)}}}function Ie(e,t,n){let r={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(let i of e)X(r,i,t,n);return r}function Le(e,t,n,r){X(e,t,n,r)}function Re(e,t){let n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);let r=e.docTermFieldHits.get(t);if(r){for(let[t,n]of r){let r=(e.df.get(t)||0)-n;r<=0?e.df.delete(t):e.df.set(t,r)}e.docTermFieldHits.delete(t)}}function Z(e,t){if(t.length===0)return;let n=Array.from(new Set(t)).sort((e,t)=>e-t);for(let t of n)Re(e,t);let r=e=>{let t=0,r=n.length;for(;t<r;){let i=t+r>>>1;n[i]<e?t=i+1:r=i}return e-t},i=n[0],a=new Map;for(let[t,n]of e.docFieldCount)a.set(t>i?r(t):t,n);e.docFieldCount=a;let o=new Map;for(let[t,n]of e.docTermFieldHits)o.set(t>i?r(t):t,n);e.docTermFieldHits=o}var Q=class{constructor(e,t,n){this.options={...O,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new oe(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;let t=B(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof k))throw Error(C);if(this._myIndex=t||A(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){let e=J({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=Ie(this._myIndex.records,this._myIndex.keys.length,e)}this._invalidateSearcherCache()}add(e){if(!b(e))return;this._docs.push(e);let t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){let e=J({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});Le(this._invertedIndex,t,this._myIndex.keys.length,e)}this._invalidateSearcherCache()}remove(e=()=>!1){let t=[],n=[];for(let r=0,i=this._docs.length;r<i;r+=1)e(this._docs[r],r)&&(t.push(this._docs[r]),n.push(r));if(n.length){this._invertedIndex&&Z(this._invertedIndex,n);let e=new Set(n);this._docs=this._docs.filter((t,n)=>!e.has(n)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw Error(w);this._invertedIndex&&Z(this._invertedIndex,[e]);let t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){let{limit:n=-1}=t||{},{includeMatches:r,includeScore:i,shouldSort:a,sortFn:o,ignoreFieldNorm:s}=this.options;if(h(e)&&!e.trim()){let e=this._docs.map((e,t)=>({item:e,refIndex:t}));return g(n)&&n>-1&&(e=e.slice(0,n)),e}let c=a&&g(n)&&n>0&&h(e),l=o,u=(e,t)=>l(e,t)||e.idx-t.idx,d;if(c){let t=new ke(n,u);h(this._docs[0])?this._searchStringList(e,{heap:t,ignoreFieldNorm:s}):this._searchObjectList(e,{heap:t,ignoreFieldNorm:s}),d=t.extractSorted()}else d=h(e)?h(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),Oe(d,{ignoreFieldNorm:s}),a&&d.sort(h(e)?u:l),g(n)&&n>-1&&(d=d.slice(0,n));return je(d,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){let r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch===`all`,{records:a}=this._myIndex,o=t?null:[];return a.forEach(({v:e,i:a,n:s})=>{if(!b(e))return;let c=r.searchIn(e);if(c.isMatch){let r={score:c.score,value:e,norm:s,indices:c.indices};i&&(r.matchedMask=c.matchedMask,r.matchedTerms=c.matchedTerms,r.termCount=c.termCount);let l=[r];if(!i||this._coversAllTokens(l)){let r={item:e,idx:a,matches:l};t?(r.score=K(r.matches,{ignoreFieldNorm:n}),t.insert(r)):o.push(r)}}}),o}_searchLogical(e){let t=G(e,this.options),n=this._normalizedKeys(),r=(e,t,i)=>{if(!(`children`in e)){let{keyId:r,searcher:a}=e,o;return r===null?(o=[],n.forEach((e,n)=>{o.push(...this._findMatches({key:e,value:t[n],searcher:a}))})):o=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:a}),o&&o.length?[{idx:i,item:t,matches:o}]:[]}let{children:a,operator:o}=e,s=[];for(let e=0,n=a.length;e<n;e+=1){let n=a[e],c=r(n,t,i);if(c.length)s.push(...c);else if(o===V.AND)return[]}return s},i=this._myIndex.records,a=new Map,o=[];return i.forEach(({$:e,i:n})=>{if(b(e)){let i=r(t,e,n);i.length&&(a.has(n)||(a.set(n,{idx:n,item:e,matches:[]}),o.push(a.get(n))),i.forEach(({matches:e})=>{a.get(n).matches.push(...e)}))}}),o}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){let r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch===`all`,{records:a}=this._myIndex,o=this._normalizedKeys(),s=t?null:[];return a.forEach(({$:e,i:a})=>{if(!b(e))return;let c=[],l=!1,u=!1;if(o.forEach((t,n)=>{let i=this._findMatches({key:t,value:e[n],searcher:r});i.length?(c.push(...i),i[0].hasInverse&&(u=!0)):l=!0}),!(u&&l)&&c.length&&(!i||this._coversAllTokens(c))){let r={idx:a,item:e,matches:c};t?(r.score=K(r.matches,{ignoreFieldNorm:n}),t.insert(r)):s.push(r)}}),s}_findMatches({key:e,value:t,searcher:n}){if(!b(t))return[];let r=[];if(f(t))t.forEach(({v:t,i,n:a})=>{if(!b(t))return;let o=n.searchIn(t);if(o.isMatch){let n={score:o.score,key:e,value:t,idx:i,norm:a,indices:o.indices,hasInverse:o.hasInverse};o.termCount!==void 0&&(n.matchedMask=o.matchedMask,n.matchedTerms=o.matchedTerms,n.termCount=o.termCount),r.push(n)}});else{let{v:i,n:a}=t,o=n.searchIn(i);if(o.isMatch){let t={score:o.score,key:e,value:i,norm:a,indices:o.indices,hasInverse:o.hasInverse};o.termCount!==void 0&&(t.matchedMask=o.matchedMask,t.matchedTerms=o.matchedTerms,t.termCount=o.termCount),r.push(t)}}return r}_coversAllTokens(e){let t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let n=0;for(let t=0;t<e.length;t++)n|=e[t].matchedMask||0;return n===2**t-1}let n=new Set;for(let t=0;t<e.length;t++){let r=e[t].matchedTerms;if(r)for(let e of r)n.add(e)}return n.size===t}};Q.version=`7.5.0`,Q.createIndex=A,Q.parseIndex=me,Q.config=O,Q.match=function(e,t,n){if(n&&n.useTokenSearch)throw Error(ie);return B(e,{...O,...n}).searchIn(t)},Q.parseQuery=G,z(Te),z(Fe),Q.use=function(...e){e.forEach(e=>z(e))};var ze=Q;function Be(e){let t=`platforms`in e&&e.platforms?e.platforms:{};return{id:e.id,names:[e.name.en,e.name.zh],aliases:e.aliases,describe:e.describe,platformNames:o.flatMap(e=>{let n=t[e];return n?[n.name,...Object.values(n.api)]:[]}),keywords:e.prompt.keywords}}var Ve=[{name:`names`,weight:3},{name:`aliases`,weight:3},{name:`platformNames`,weight:2},{name:`keywords`,weight:1.5},{name:`describe`,weight:1}];function He(e){let t=new Map(e.map(e=>[e.id,e])),n=new ze(e.map(Be),{keys:Ve,threshold:.4,ignoreLocation:!0,includeScore:!0});return{search(e,r=10){let i=e.trim();return i?n.search(i,{limit:r}).flatMap(e=>{let n=t.get(e.item.id);return n?[n]:[]}):[]}}}var Ue=new Map(d.map(e=>[e.id,e]));function We(e){return Ue.get(e)}function $(e,t){return`platforms`in e?e.platforms?.[t]:void 0}function Ge(e){return o.filter(t=>$(e,t))}function Ke(e){return d.filter(t=>$(t,e))}function qe(e){let t=Ke(e),n=t=>$(t,e)?.name??t.name.en;return c.map(e=>({category:e,concepts:t.filter(t=>t.category===e).sort((e,t)=>n(e).localeCompare(n(t)))})).filter(e=>e.concepts.length>0)}var Je=He(d);export{We as a,l as c,u as d,a as f,Ke as i,o as l,Je as n,$ as o,i as p,qe as r,d as s,Ge as t,s as u};