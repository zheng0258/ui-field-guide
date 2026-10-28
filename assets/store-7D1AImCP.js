var e=Object.assign({"./web/accordion.html":`<div class="accordion">
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
`}),t=/^\.\/(?<platform>[^/]+)\/(?<id>[^/.]+)(?<thumb>\.thumb)?\.html$/,n=new Map,r=new Map;for(let[i,a]of Object.entries(e)){let e=t.exec(i)?.groups;if(!e)continue;let o=`${e.platform}/${e.id}`;e.thumb?r.set(o,a):n.set(o,{html:a,thumb:a})}for(let[e,t]of r){let r=n.get(e);r&&n.set(e,{...r,thumb:t})}function i(e,t){return n.get(`${e}/${t}`)}function a(){return[...n.keys()]}var o=[`macos`,`ios`,`android`,`web`],s={macos:`macOS`,ios:`iOS`,android:`Android`,web:`Web`},c=[`actions`,`navigation`,`disclosure`,`overlays`,`input`,`data`,`status`,`containers`],l={actions:`動作`,navigation:`導覽`,disclosure:`展開收合`,overlays:`覆蓋層`,input:`輸入`,data:`資料`,status:`狀態`,containers:`容器`};function u(e){return typeof e==`string`&&o.includes(e)}var d=[{id:`accordion`,name:{en:`Accordion`,zh:`手風琴`},aliases:[`collapse`,`expander`,`摺疊面板`],describe:[`好幾段標題，一次只展開其中一段`],category:`disclosure`,confusedWith:[`disclosure`,`tabs`],prompt:{keywords:[`accordion`,`details summary with name attribute`],descriptors:[`one section open at a time`,`chevron rotates`],avoid:[`disclosure`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Accordion`,api:{html:`<details name> group`,aria:`button[aria-expanded] + region`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`}}},{id:`alert-banner`,name:{en:`Alert banner`,zh:`警示橫幅`},aliases:[`callout`,`notice`,`banner`,`提示橫幅`],describe:[`頁面上一條顯眼的訊息框，例如「付款失敗」`],category:`status`,confusedWith:[`toast`,`alert-dialog`],prompt:{keywords:[`alert banner`,`APG alert pattern`,`role alert`],descriptors:[`colored bar with icon and message`,`stays in page flow`],avoid:[`toast`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Alert`,api:{aria:`alert`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/alert/`}}},{id:`alert-dialog`,name:{en:`Alert dialog`,zh:`警示對話框`},aliases:[`alert`,`confirm dialog`,`確認視窗`],describe:[`跳出來問你「確定要刪除嗎？」的小視窗`],category:`overlays`,confusedWith:[`modal-dialog`,`toast`],prompt:{keywords:[`alert dialog`,`role alertdialog`,`confirmation dialog`],descriptors:[`short question with two buttons`,`destructive action in red`,`focus starts on the safe button`],avoid:[`toast`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Alert`,api:{appkit:`NSAlert`,swiftui:`.alert`},guideline:`https://developer.apple.com/design/human-interface-guidelines/alerts`},ios:{name:`Alert`,api:{uikit:`UIAlertController (.alert)`,swiftui:`.alert`},guideline:`https://developer.apple.com/design/human-interface-guidelines/alerts`},android:{name:`Dialog`,api:{compose:`AlertDialog`,view:`MaterialAlertDialogBuilder`},guideline:`https://m3.material.io/components/dialogs/overview`},web:{name:`Alert dialog`,api:{html:`<dialog> + showModal()`,aria:`alertdialog`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/`}}},{id:`avatar`,name:{en:`Avatar`,zh:`頭像`},aliases:[`profile picture`,`user icon`,`大頭貼`],describe:[`圓形的使用者照片或姓名縮寫`],category:`containers`,confusedWith:[`badge`],prompt:{keywords:[`avatar`,`profile picture`,`user initials circle`],descriptors:[`circular image`,`initials fallback`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Avatar`,api:{html:`<img alt>`}}}},{id:`badge`,name:{en:`Badge`,zh:`徽章`},aliases:[`chip`,`tag`,`pill`,`label`,`標籤`],describe:[`小小的圓角標籤，標示狀態或分類`],category:`containers`,confusedWith:[`avatar`],prompt:{keywords:[`badge`,`tag chip`,`status pill`],descriptors:[`small rounded label`,`short text or count`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Token`,api:{appkit:`NSTokenField`},guideline:`https://developer.apple.com/design/human-interface-guidelines/token-fields`},ios:{name:`Badge`,api:{uikit:`UITabBarItem.badgeValue`,swiftui:`.badge`}},android:{name:`Chip`,api:{compose:`AssistChip / FilterChip / InputChip`,view:`Chip`},guideline:`https://m3.material.io/components/chips/overview`},web:{name:`Badge`,api:{html:`<span>`}}}},{id:`breadcrumb`,name:{en:`Breadcrumb`,zh:`麵包屑`},aliases:[`path`,`路徑導覽`],describe:[`顯示「首頁 > 分類 > 目前頁面」的路徑`],category:`navigation`,confusedWith:[`pagination`],prompt:{keywords:[`breadcrumb`,`nav aria-label breadcrumb`,`ordered list`],descriptors:[`separators between links`,`current page with aria-current`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Path control`,api:{appkit:`NSPathControl`},guideline:`https://developer.apple.com/design/human-interface-guidelines/path-controls`},web:{name:`Breadcrumb`,api:{html:`<nav> + <ol>`,aria:`navigation + aria-current="page"`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/`}}},{id:`button`,name:{en:`Button`,zh:`按鈕`},aliases:[`push button`,`action button`,`CTA`,`按鍵`],describe:[`按一下就執行一個動作`],category:`actions`,confusedWith:[`pull-down-menu`,`link`],prompt:{keywords:[`push button`,`NSButton`,`SwiftUI Button`],descriptors:[`rounded rect bezel`,`single action`,`default button uses accent color`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Push button`,api:{appkit:`NSButton (bezelStyle .push)`,swiftui:`Button`},guideline:`https://developer.apple.com/design/human-interface-guidelines/buttons`,states:[`default`,`hover`,`pressed`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`,`large`]},ios:{name:`Button`,api:{uikit:`UIButton`,swiftui:`Button`},guideline:`https://developer.apple.com/design/human-interface-guidelines/buttons`},android:{name:`Button`,api:{compose:`Button / OutlinedButton / TextButton`,view:`MaterialButton`},guideline:`https://m3.material.io/components/buttons/overview`},web:{name:`Button`,api:{html:`<button>`,aria:`button`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`}}},{id:`card`,name:{en:`Card`,zh:`卡片`},aliases:[`tile`,`box`,`group box`,`卡片`],describe:[`一個有邊框或陰影的區塊，裝一組相關內容`],category:`containers`,confusedWith:[`feed`],prompt:{keywords:[`card`,`article element card layout`],descriptors:[`rounded corners`,`title, text and action`,`subtle border or shadow`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Box`,api:{appkit:`NSBox`,swiftui:`GroupBox`},guideline:`https://developer.apple.com/design/human-interface-guidelines/boxes`},ios:{name:`Group box`,api:{swiftui:`GroupBox`},guideline:`https://developer.apple.com/design/human-interface-guidelines/boxes`},android:{name:`Card`,api:{compose:`Card / ElevatedCard / OutlinedCard`,view:`MaterialCardView`},guideline:`https://m3.material.io/components/cards/overview`},web:{name:`Card`,api:{html:`<article>`}}}},{id:`carousel`,name:{en:`Carousel`,zh:`輪播`},aliases:[`slideshow`,`slider`,`輪播圖`],describe:[`一次顯示一張，可以左右切換的圖片或卡片`],category:`data`,confusedWith:[`feed`,`tabs`],prompt:{keywords:[`carousel`,`APG carousel pattern`,`slideshow`],descriptors:[`one slide visible`,`previous and next buttons`,`dot indicators`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Page control`,api:{uikit:`UIPageControl`,swiftui:`TabView(.page)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/page-controls`},android:{name:`Carousel`,api:{compose:`HorizontalMultiBrowseCarousel`,view:`CarouselLayoutManager`},guideline:`https://m3.material.io/components/carousel/overview`},web:{name:`Carousel`,api:{aria:`region + aria-roledescription="carousel"`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/carousel/`}}},{id:`checkbox`,name:{en:`Checkbox`,zh:`核取方塊`},aliases:[`check box`,`tick box`,`勾選框`],describe:[`一個小方框，點了會打勾`],category:`input`,confusedWith:[`toggle-switch`,`radio-group`],prompt:{keywords:[`checkbox`,`HTML input checkbox`],descriptors:[`square box with a check mark`,`label next to the box`],avoid:[`toggle-switch`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Checkbox`,api:{appkit:`NSButton (checkbox)`,swiftui:`Toggle(.checkbox)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`},android:{name:`Checkbox`,api:{compose:`Checkbox`,view:`MaterialCheckBox`},guideline:`https://m3.material.io/components/checkbox/overview`},web:{name:`Checkbox`,api:{html:`<input type="checkbox">`,aria:`checkbox`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/`}}},{id:`color-picker`,name:{en:`Color picker`,zh:`顏色選擇器`},aliases:[`color well`,`swatch`,`選色器`],describe:[`點了會出現調色盤，用來挑顏色`],category:`input`,confusedWith:[],prompt:{keywords:[`color picker`,`HTML input type color`,`color well`],descriptors:[`swatch showing current color`,`opens system color panel`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Color well`,api:{appkit:`NSColorWell`,swiftui:`ColorPicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/color-wells`},ios:{name:`Color picker`,api:{uikit:`UIColorPickerViewController`,swiftui:`ColorPicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/color-wells`},web:{name:`Color picker`,api:{html:`<input type="color">`}}}},{id:`combobox`,name:{en:`Combo box`,zh:`組合框`},aliases:[`autocomplete`,`typeahead`,`editable dropdown`,`自動完成`,`可輸入下拉`],describe:[`可以打字也可以從清單挑的輸入框`,`邊打字邊跳出建議選項`],category:`input`,confusedWith:[`popup-select`,`search-field`,`listbox`],prompt:{keywords:[`combo box`,`NSComboBox`,`autocomplete text field`],descriptors:[`editable text field`,`dropdown arrow`,`suggestion list`],avoid:[`popup-select`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Combo box`,api:{appkit:`NSComboBox`},guideline:`https://developer.apple.com/design/human-interface-guidelines/combo-boxes`,states:[`default`,`focus`,`expanded`,`disabled`]},android:{name:`Exposed dropdown menu (editable)`,api:{compose:`ExposedDropdownMenuBox + TextField`,view:`MaterialAutoCompleteTextView`},guideline:`https://m3.material.io/components/menus/overview`},web:{name:`Combobox`,api:{html:`<input list> + <datalist>`,aria:`combobox`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`}}},{id:`context-menu`,name:{en:`Context menu`,zh:`情境選單`},aliases:[`right-click menu`,`shortcut menu`,`long-press menu`,`右鍵選單`,`長按選單`],describe:[`按右鍵或長按才會跳出來的選單`,`針對你點的那個東西列出能做的事`],category:`overlays`,confusedWith:[`pull-down-menu`],prompt:{keywords:[`context menu`,`right-click menu`,`SwiftUI contextMenu`],descriptors:[`appears at pointer`,`actions for the clicked item`],avoid:[`pull-down-menu`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Context menu`,api:{appkit:`NSMenu (NSView.menu)`,swiftui:`.contextMenu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/context-menus`},ios:{name:`Context menu`,api:{uikit:`UIContextMenuInteraction`,swiftui:`.contextMenu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/context-menus`},android:{name:`Context menu`,api:{compose:`DropdownMenu (on long press)`,view:`View.OnCreateContextMenuListener`},guideline:`https://developer.android.com/develop/ui/views/components/menus`},web:{name:`Context menu`,api:{html:`contextmenu event`,aria:`menu`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/menubar/`}}},{id:`data-grid`,name:{en:`Data grid`,zh:`資料格`},aliases:[`grid`,`spreadsheet`,`資料表格`],describe:[`像試算表一樣，可以用方向鍵一格一格移動、排序`],category:`data`,confusedWith:[`table`,`treegrid`],prompt:{keywords:[`data grid`,`APG grid pattern`,`role grid`],descriptors:[`arrow key cell navigation`,`sortable headers`],avoid:[`table`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Data grid`,api:{html:`<table> + JavaScript`,aria:`grid`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/grid/`}}},{id:`date-picker`,name:{en:`Date picker`,zh:`日期選擇器`},aliases:[`calendar`,`日曆`,`選日期`],describe:[`點開會出現月曆，用來挑日期`],category:`input`,confusedWith:[`text-field`],prompt:{keywords:[`date picker`,`HTML input type date`,`calendar grid`],descriptors:[`month grid`,`today highlighted`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Date picker`,api:{appkit:`NSDatePicker`,swiftui:`DatePicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pickers`},ios:{name:`Date picker`,api:{uikit:`UIDatePicker`,swiftui:`DatePicker`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pickers`},android:{name:`Date picker`,api:{compose:`DatePicker`,view:`MaterialDatePicker`},guideline:`https://m3.material.io/components/date-pickers/overview`},web:{name:`Date picker`,api:{html:`<input type="date">`,aria:`dialog + grid`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/`}}},{id:`disclosure`,name:{en:`Disclosure`,zh:`展開收合`},aliases:[`show/hide`,`expander`,`toggle`,`收合區塊`],describe:[`點一下標題就展開或收起底下的內容`],category:`disclosure`,confusedWith:[`accordion`],prompt:{keywords:[`disclosure`,`details and summary elements`,`disclosure triangle`],descriptors:[`triangle rotates when expanded`,`content hidden until opened`],avoid:[`accordion`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Disclosure control`,api:{appkit:`NSButton (bezelStyle .disclosure)`,swiftui:`DisclosureGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/disclosure-controls`},ios:{name:`Disclosure group`,api:{swiftui:`DisclosureGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/disclosure-controls`},web:{name:`Disclosure`,api:{html:`<details> + <summary>`,aria:`button[aria-expanded]`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/`}}},{id:`drawer`,name:{en:`Drawer`,zh:`側滑面板`},aliases:[`side sheet`,`off-canvas`,`slide-over`,`抽屜`],describe:[`從畫面邊緣滑出來的一整條面板`],category:`overlays`,confusedWith:[`sidebar`,`modal-dialog`],prompt:{keywords:[`drawer`,`off-canvas side panel`,`dialog element`],descriptors:[`slides in from edge`,`scrim behind`],avoid:[`sidebar`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Inspector`,api:{swiftui:`.inspector`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sidebars`},android:{name:`Side sheet`,api:{view:`SideSheetDialog`},guideline:`https://m3.material.io/components/side-sheets/overview`},web:{name:`Drawer`,api:{html:`<dialog> + showModal()`,aria:`dialog`}}}},{id:`feed`,name:{en:`Feed`,zh:`動態牆`},aliases:[`infinite scroll`,`timeline`,`動態消息`],describe:[`一直往下滑會一直載入新文章的列表`],category:`data`,confusedWith:[`carousel`],prompt:{keywords:[`feed`,`APG feed pattern`,`infinite scroll list of articles`],descriptors:[`stack of article cards`,`loads more on scroll`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Feed`,api:{aria:`feed + article`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/feed/`}}},{id:`file-upload`,name:{en:`File upload`,zh:`檔案上傳`},aliases:[`dropzone`,`file input`,`上傳`],describe:[`選一個檔案或把檔案拖進來的區塊`],category:`input`,confusedWith:[],prompt:{keywords:[`file upload`,`HTML input type file`,`drag and drop zone`],descriptors:[`dashed drop area`,`Choose file button`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`File upload`,api:{html:`<input type="file">`}}}},{id:`link`,name:{en:`Link`,zh:`連結`},aliases:[`hyperlink`,`anchor`,`超連結`],describe:[`點了會跳到另一頁或另一個位置的文字`],category:`actions`,confusedWith:[`button`],prompt:{keywords:[`link`,`HTML anchor element`],descriptors:[`underlined text`,`navigates to a URL`],avoid:[`button`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Link`,api:{html:`<a href>`,aria:`link`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/link/`}}},{id:`listbox`,name:{en:`Listbox`,zh:`清單選擇`},aliases:[`multi-select`,`list box`,`多選清單`],describe:[`直接攤開在畫面上的選項清單，可以選一個或多個`],category:`input`,confusedWith:[`combobox`,`popup-select`],prompt:{keywords:[`listbox`,`APG listbox pattern`,`select multiple`],descriptors:[`always-visible list of options`,`selected options highlighted`],avoid:[`popup-select`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Listbox`,api:{html:`<select multiple>`,aria:`listbox + option`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/listbox/`}}},{id:`menubar`,name:{en:`Menubar`,zh:`選單列`},aliases:[`menu bar`,`mega menu`,`功能表列`],describe:[`最上面一排「檔案、編輯、顯示」的選單`],category:`navigation`,confusedWith:[`navigation`,`toolbar`],prompt:{keywords:[`menubar`,`APG menubar pattern`,`application menu bar`],descriptors:[`File Edit View menus`,`submenus open on arrow keys`],avoid:[`navigation`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Menu bar`,api:{appkit:`NSApplication.mainMenu`,swiftui:`.commands`},guideline:`https://developer.apple.com/design/human-interface-guidelines/the-menu-bar`},web:{name:`Menubar`,api:{aria:`menubar + menu + menuitem`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/menubar/`}}},{id:`meter`,name:{en:`Meter`,zh:`量表`},aliases:[`gauge`,`level indicator`,`儀表`],describe:[`顯示一個量落在範圍哪裡，例如硬碟用了多少`],category:`status`,confusedWith:[`progress-indicator`],prompt:{keywords:[`meter`,`HTML meter element`,`gauge`],descriptors:[`value within a known range`,`color changes past thresholds`],avoid:[`progress-indicator`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Level indicator`,api:{appkit:`NSLevelIndicator`},guideline:`https://developer.apple.com/design/human-interface-guidelines/gauges`},ios:{name:`Gauge`,api:{swiftui:`Gauge`},guideline:`https://developer.apple.com/design/human-interface-guidelines/gauges`},web:{name:`Meter`,api:{html:`<meter>`,aria:`meter`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/meter/`}}},{id:`modal-dialog`,name:{en:`Modal dialog`,zh:`對話框`},aliases:[`modal`,`lightbox`,`dialog`,`彈窗`,`跳窗`],describe:[`蓋在整個畫面上、要處理完才能回去的視窗`],category:`overlays`,confusedWith:[`drawer`,`popover`,`alert-dialog`],prompt:{keywords:[`modal dialog`,`HTML dialog element`,`showModal`,`APG dialog pattern`],descriptors:[`focus trapped inside`,`Escape closes`,`backdrop dims page`],avoid:[`popover`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Sheet`,api:{appkit:`NSWindow.beginSheet`,swiftui:`.sheet`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sheets`},ios:{name:`Sheet`,api:{uikit:`UISheetPresentationController`,swiftui:`.sheet`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sheets`},android:{name:`Dialog`,api:{compose:`Dialog`,view:`DialogFragment`},guideline:`https://m3.material.io/components/dialogs/overview`},web:{name:`Modal dialog`,api:{html:`<dialog> + showModal()`,aria:`dialog + aria-modal`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`}}},{id:`navigation`,name:{en:`Navigation`,zh:`導覽列`},aliases:[`navbar`,`header nav`,`導航列`],describe:[`網站最上面那排頁面連結`],category:`navigation`,confusedWith:[`pull-down-menu`,`tabs`],prompt:{keywords:[`site navigation bar`,`nav landmark`],descriptors:[`horizontal list of page links`,`current page highlighted with aria-current`],avoid:[`pull-down-menu`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Navigation`,api:{html:`<nav>`,aria:`navigation landmark`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/`}}},{id:`pagination`,name:{en:`Pagination`,zh:`分頁器`},aliases:[`pager`,`頁碼`],describe:[`一排頁碼，加上上一頁、下一頁`],category:`navigation`,confusedWith:[`breadcrumb`],prompt:{keywords:[`pagination`,`pager navigation`],descriptors:[`previous and next links`,`numbered page links, current page highlighted`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Pagination`,api:{html:`<nav> + <a>`,aria:`navigation + aria-current="page"`}}}},{id:`popover`,name:{en:`Popover`,zh:`浮出框`},aliases:[`flyout`,`popper`,`泡泡框`],describe:[`點了按鈕後在旁邊冒出來的小框，點外面就關掉`],category:`overlays`,confusedWith:[`tooltip`,`modal-dialog`],prompt:{keywords:[`popover`,`HTML popover attribute`,`anchor positioning`],descriptors:[`anchored to trigger`,`light dismiss on outside click`],avoid:[`modal-dialog`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Popover`,api:{appkit:`NSPopover`,swiftui:`.popover`},guideline:`https://developer.apple.com/design/human-interface-guidelines/popovers`},ios:{name:`Popover`,api:{uikit:`UIPopoverPresentationController`,swiftui:`.popover`},guideline:`https://developer.apple.com/design/human-interface-guidelines/popovers`},android:{name:`Rich tooltip`,api:{compose:`RichTooltip`},guideline:`https://m3.material.io/components/tooltips/overview`},web:{name:`Popover`,api:{html:`popover attribute`,aria:`depends on content`}}}},{id:`popup-select`,name:{en:`Pop-up select`,zh:`彈出式選擇`},aliases:[`dropdown`,`select`,`picker`,`下拉選單`,`下拉`],describe:[`點開後選一個值，按鈕上會顯示目前選的那個`,`一顆按鈕，右邊有上下箭頭，點開是選項清單`],category:`input`,confusedWith:[`pull-down-menu`,`combobox`],prompt:{keywords:[`macOS pop-up button`,`NSPopUpButton`,`SwiftUI Picker menu style`],descriptors:[`shows current selection`,`up-down chevron on right`],avoid:[`pull-down-menu`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Pop-up button`,api:{appkit:`NSPopUpButton`,swiftui:`Picker(.menu)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons`,states:[`default`,`hover`,`pressed`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`,`large`],demo:!0},ios:{name:`Pop-up button`,api:{uikit:`UIButton (changesSelectionAsPrimaryAction)`,swiftui:`Picker(.menu)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons`},android:{name:`Exposed dropdown menu`,api:{compose:`ExposedDropdownMenuBox`,view:`MaterialAutoCompleteTextView`},guideline:`https://m3.material.io/components/menus/overview`},web:{name:`Select`,api:{html:`<select>`,aria:`combobox (Select-Only)`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`}}},{id:`progress-indicator`,name:{en:`Progress bar`,zh:`進度條`},aliases:[`progress`,`loading bar`,`進度`],describe:[`一條慢慢填滿的橫條，表示完成多少`],category:`status`,confusedWith:[`meter`,`spinner`],prompt:{keywords:[`progress bar`,`HTML progress element`],descriptors:[`horizontal bar filling left to right`,`percentage label`],avoid:[`meter`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Progress indicator`,api:{appkit:`NSProgressIndicator`,swiftui:`ProgressView(value:)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},ios:{name:`Progress view`,api:{uikit:`UIProgressView`,swiftui:`ProgressView(value:)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},android:{name:`Progress indicator`,api:{compose:`LinearProgressIndicator`,view:`LinearProgressIndicator`},guideline:`https://m3.material.io/components/progress-indicators/overview`},web:{name:`Progress bar`,api:{html:`<progress>`,aria:`progressbar`}}}},{id:`pull-down-menu`,name:{en:`Pull-down menu`,zh:`下拉式動作選單`},aliases:[`menu button`,`dropdown menu`,`actions menu`,`更多選單`,`動作選單`],describe:[`按鈕點開是一串動作，按鈕上的字不會變`,`「更多」按鈕點開的指令清單`],category:`actions`,confusedWith:[`popup-select`,`context-menu`],prompt:{keywords:[`pull-down button`,`menu button`,`SwiftUI Menu`],descriptors:[`button label stays fixed`,`opens a list of commands`,`chevron down`],avoid:[`popup-select`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Pull-down button`,api:{appkit:`NSPopUpButton (pullsDown = true)`,swiftui:`Menu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons`,states:[`default`,`hover`,`pressed`,`focus`,`disabled`]},ios:{name:`Pull-down button`,api:{uikit:`UIButton (menu + showsMenuAsPrimaryAction)`,swiftui:`Menu`},guideline:`https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons`},android:{name:`Dropdown menu`,api:{compose:`DropdownMenu`,view:`PopupMenu`},guideline:`https://m3.material.io/components/menus/overview`},web:{name:`Menu button`,api:{html:`<button> + popover`,aria:`button[aria-haspopup=menu] + menu`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/`}}},{id:`radio-group`,name:{en:`Radio group`,zh:`單選群組`},aliases:[`radio buttons`,`option buttons`,`單選鈕`],describe:[`一組小圓圈，只能選其中一個`],category:`input`,confusedWith:[`checkbox`,`segmented-control`],prompt:{keywords:[`radio group`,`HTML radio inputs in a fieldset`],descriptors:[`round buttons`,`exactly one option selected`],avoid:[`checkbox`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Radio buttons`,api:{appkit:`NSButton (radio)`,swiftui:`Picker(.radioGroup)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`},android:{name:`Radio button`,api:{compose:`RadioButton`,view:`MaterialRadioButton`},guideline:`https://m3.material.io/components/radio-button/overview`},web:{name:`Radio group`,api:{html:`<fieldset> + <input type="radio">`,aria:`radiogroup + radio`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`}}},{id:`search-field`,name:{en:`Search field`,zh:`搜尋欄`},aliases:[`search bar`,`search box`,`搜尋框`],describe:[`前面有放大鏡圖示、可以打字搜尋的欄位`,`打字後右邊會出現清除按鈕`],category:`input`,confusedWith:[`combobox`,`text-field`],prompt:{keywords:[`search field`,`NSSearchField`,`SwiftUI searchable`],descriptors:[`magnifying glass icon`,`rounded text field`,`clear button when filled`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Search field`,api:{appkit:`NSSearchField`,swiftui:`.searchable`},guideline:`https://developer.apple.com/design/human-interface-guidelines/search-fields`,states:[`empty`,`focus`,`filled`,`disabled`],sizes:[`mini`,`small`,`regular`,`large`]},ios:{name:`Search field`,api:{uikit:`UISearchController / UISearchBar`,swiftui:`.searchable`},guideline:`https://developer.apple.com/design/human-interface-guidelines/search-fields`},android:{name:`Search bar`,api:{compose:`SearchBar`,view:`com.google.android.material.search.SearchBar`},guideline:`https://m3.material.io/components/search/overview`},web:{name:`Search`,api:{html:`<input type="search"> in <search>`,aria:`searchbox + search landmark`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/search.html`}}},{id:`segmented-control`,name:{en:`Segmented control`,zh:`分段控制`},aliases:[`segmented button`,`button group`,`toggle group`,`分段按鈕`],describe:[`幾顆並排黏在一起的按鈕，一次選一個`,`一條橫向膠囊切成好幾格，選中的那格會反白`],category:`input`,confusedWith:[`popup-select`,`toggle-switch`,`tabs`,`radio-group`],prompt:{keywords:[`segmented control`,`NSSegmentedControl`,`SwiftUI Picker segmented style`],descriptors:[`joined segments`,`one selected segment highlighted`],avoid:[`toggle-switch`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Segmented control`,api:{appkit:`NSSegmentedControl`,swiftui:`Picker(.segmented)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/segmented-controls`,states:[`default`,`selected`,`pressed`,`focus`,`disabled`]},ios:{name:`Segmented control`,api:{uikit:`UISegmentedControl`,swiftui:`Picker(.segmented)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/segmented-controls`},android:{name:`Segmented button`,api:{compose:`SingleChoiceSegmentedButtonRow`,view:`MaterialButtonToggleGroup`},guideline:`https://m3.material.io/components/segmented-buttons/overview`},web:{name:`Segmented control`,api:{html:`radio group styled as joined buttons`,aria:`radiogroup`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`}}},{id:`separator`,name:{en:`Separator`,zh:`分隔線`},aliases:[`divider`,`rule`,`分隔`],describe:[`一條細線，把上下兩塊內容分開`],category:`containers`,confusedWith:[],prompt:{keywords:[`separator`,`HTML hr element`,`divider line`],descriptors:[`thin horizontal line`,`low contrast`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Separator`,api:{appkit:`NSBox (separator)`,swiftui:`Divider`}},ios:{name:`Divider`,api:{swiftui:`Divider`}},android:{name:`Divider`,api:{compose:`HorizontalDivider`,view:`MaterialDivider`},guideline:`https://m3.material.io/components/divider/overview`},web:{name:`Separator`,api:{html:`<hr>`,aria:`separator`}}}},{id:`sidebar`,name:{en:`Sidebar`,zh:`側邊欄`},aliases:[`side navigation`,`側欄`],describe:[`畫面左邊一直在的導覽清單`],category:`navigation`,confusedWith:[`drawer`,`navigation`],prompt:{keywords:[`sidebar`,`side navigation`,`navigation split view`],descriptors:[`vertical list of sections on the left`,`selected item highlighted`],avoid:[`drawer`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Sidebar`,api:{appkit:`NSSplitViewController (sidebar)`,swiftui:`NavigationSplitView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sidebars`},ios:{name:`Sidebar`,api:{uikit:`UISplitViewController`,swiftui:`NavigationSplitView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sidebars`},android:{name:`Navigation drawer`,api:{compose:`ModalNavigationDrawer`,view:`NavigationView`},guideline:`https://m3.material.io/components/navigation-drawer/overview`},web:{name:`Sidebar`,api:{html:`<aside> + <nav>`,aria:`complementary`}}}},{id:`skeleton`,name:{en:`Skeleton`,zh:`骨架屏`},aliases:[`placeholder`,`shimmer`,`載入佔位`],describe:[`內容還沒載入前先顯示的灰色方塊`],category:`status`,confusedWith:[`spinner`],prompt:{keywords:[`skeleton loader`,`shimmer placeholder`,`aria-busy`],descriptors:[`gray blocks matching content layout`,`shimmer animation`],avoid:[`spinner`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{ios:{name:`Redacted placeholder`,api:{swiftui:`.redacted(reason: .placeholder)`}},web:{name:`Skeleton`,api:{aria:`aria-busy="true"`}}}},{id:`slider`,name:{en:`Slider`,zh:`滑桿`},aliases:[`range`,`range slider`,`scrubber`,`拉桿`,`滑動條`],describe:[`拖動圓點在一條線上調整數值`,`調音量、亮度那種橫條`],category:`input`,confusedWith:[`stepper`],prompt:{keywords:[`slider`,`NSSlider`,`SwiftUI Slider`],descriptors:[`horizontal track`,`draggable round knob`,`filled portion uses accent color`],avoid:[`stepper`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Slider`,api:{appkit:`NSSlider`,swiftui:`Slider`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sliders`,states:[`default`,`dragging`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`]},ios:{name:`Slider`,api:{uikit:`UISlider`,swiftui:`Slider`},guideline:`https://developer.apple.com/design/human-interface-guidelines/sliders`},android:{name:`Slider`,api:{compose:`Slider`,view:`com.google.android.material.slider.Slider`},guideline:`https://m3.material.io/components/sliders/overview`},web:{name:`Range input`,api:{html:`<input type="range">`,aria:`slider`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/slider/`}}},{id:`spinner`,name:{en:`Spinner`,zh:`載入指示`},aliases:[`loader`,`activity indicator`,`轉圈圈`],describe:[`一直轉圈圈，表示正在載入`],category:`status`,confusedWith:[`progress-indicator`,`skeleton`],prompt:{keywords:[`loading spinner`,`role status`,`indeterminate progress`],descriptors:[`rotating ring`,`respects reduced motion`],avoid:[`skeleton`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Spinner`,api:{appkit:`NSProgressIndicator (.spinning)`,swiftui:`ProgressView()`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},ios:{name:`Activity indicator`,api:{uikit:`UIActivityIndicatorView`,swiftui:`ProgressView()`},guideline:`https://developer.apple.com/design/human-interface-guidelines/progress-indicators`},android:{name:`Loading indicator`,api:{compose:`CircularProgressIndicator`,view:`CircularProgressIndicator`},guideline:`https://m3.material.io/components/progress-indicators/overview`},web:{name:`Spinner`,api:{aria:`status`}}}},{id:`stepper`,name:{en:`Stepper`,zh:`步進器`},aliases:[`spin button`,`number spinner`,`increment decrement`,`加減按鈕`],describe:[`一組加和減的小按鈕，一次調一格`,`上下兩個小箭頭，旁邊通常有數字欄`],category:`input`,confusedWith:[`slider`],prompt:{keywords:[`stepper`,`NSStepper`,`SwiftUI Stepper`],descriptors:[`small up and down arrows`,`paired with a number field`,`discrete increments`],avoid:[`slider`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Stepper`,api:{appkit:`NSStepper`,swiftui:`Stepper`},guideline:`https://developer.apple.com/design/human-interface-guidelines/steppers`,states:[`default`,`pressed`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`]},ios:{name:`Stepper`,api:{uikit:`UIStepper`,swiftui:`Stepper`},guideline:`https://developer.apple.com/design/human-interface-guidelines/steppers`},web:{name:`Number input`,api:{html:`<input type="number">`,aria:`spinbutton`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/`}}},{id:`table`,name:{en:`Table`,zh:`表格`},aliases:[`data table`,`表格視圖`],describe:[`一列一列的資料，有欄位標題`],category:`data`,confusedWith:[`data-grid`,`listbox`],prompt:{keywords:[`table`,`HTML table with caption and th scope`],descriptors:[`header row`,`zebra striped rows`],avoid:[`data-grid`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Table view`,api:{appkit:`NSTableView`,swiftui:`Table`},guideline:`https://developer.apple.com/design/human-interface-guidelines/lists-and-tables`},ios:{name:`List`,api:{uikit:`UITableView`,swiftui:`List`},guideline:`https://developer.apple.com/design/human-interface-guidelines/lists-and-tables`},web:{name:`Table`,api:{html:`<table>`,aria:`table`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/table/`}}},{id:`tabs`,name:{en:`Tabs`,zh:`分頁標籤`},aliases:[`tab bar`,`tab view`,`頁籤`],describe:[`一排標籤，點哪個就顯示哪一頁的內容`],category:`navigation`,confusedWith:[`segmented-control`,`navigation`],prompt:{keywords:[`tabs`,`APG tabs pattern`,`tablist tab tabpanel`],descriptors:[`arrow keys switch tabs`,`only active panel visible`],avoid:[`segmented-control`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Tab view`,api:{appkit:`NSTabView`,swiftui:`TabView`},guideline:`https://developer.apple.com/design/human-interface-guidelines/tab-views`},android:{name:`Tabs`,api:{compose:`PrimaryTabRow + Tab`,view:`TabLayout`},guideline:`https://m3.material.io/components/tabs/overview`},web:{name:`Tabs`,api:{aria:`tablist + tab + tabpanel`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`}}},{id:`text-field`,name:{en:`Text field`,zh:`文字輸入框`},aliases:[`input`,`text input`,`textarea`,`輸入框`],describe:[`可以打字的一格方框`],category:`input`,confusedWith:[`search-field`,`combobox`],prompt:{keywords:[`text field`,`HTML input element`,`labelled text input`],descriptors:[`visible label above the field`,`focus ring when active`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Text field`,api:{appkit:`NSTextField`,swiftui:`TextField`},guideline:`https://developer.apple.com/design/human-interface-guidelines/text-fields`},ios:{name:`Text field`,api:{uikit:`UITextField`,swiftui:`TextField`},guideline:`https://developer.apple.com/design/human-interface-guidelines/text-fields`},android:{name:`Text field`,api:{compose:`TextField / OutlinedTextField`,view:`TextInputLayout`},guideline:`https://m3.material.io/components/text-fields/overview`},web:{name:`Text input`,api:{html:`<input type="text"> / <textarea>`,aria:`textbox`}}}},{id:`toast`,name:{en:`Toast`,zh:`吐司通知`},aliases:[`snackbar`,`notification`,`通知`],describe:[`角落跳出一則訊息，幾秒後自己消失`],category:`overlays`,confusedWith:[`alert-banner`,`alert-dialog`],prompt:{keywords:[`toast notification`,`aria-live status region`],descriptors:[`auto-dismiss after a few seconds`,`stacked in a corner`],avoid:[`alert-dialog`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Notification`,api:{usernotifications:`UNUserNotificationCenter`},guideline:`https://developer.apple.com/design/human-interface-guidelines/notifications`},android:{name:`Snackbar`,api:{compose:`Snackbar`,view:`Snackbar`},guideline:`https://m3.material.io/components/snackbar/overview`},web:{name:`Toast`,api:{aria:`status live region`}}}},{id:`toggle-switch`,name:{en:`Switch`,zh:`開關`},aliases:[`toggle`,`on/off switch`,`切換開關`,`撥動開關`],describe:[`左右撥動的開關，切換開或關`,`一個膠囊形狀，裡面圓點會滑到另一邊`],category:`input`,confusedWith:[`segmented-control`,`checkbox`],prompt:{keywords:[`toggle switch`,`NSSwitch`,`SwiftUI Toggle switch style`],descriptors:[`pill-shaped track`,`sliding knob`,`takes effect immediately`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Switch`,api:{appkit:`NSSwitch`,swiftui:`Toggle(.switch)`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`,states:[`off`,`on`,`focus`,`disabled`],sizes:[`mini`,`small`,`regular`]},ios:{name:`Switch`,api:{uikit:`UISwitch`,swiftui:`Toggle`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toggles`},android:{name:`Switch`,api:{compose:`Switch`,view:`MaterialSwitch`},guideline:`https://m3.material.io/components/switch/overview`},web:{name:`Switch`,api:{html:`<input type="checkbox" switch>`,aria:`switch`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/switch/`}}},{id:`toolbar`,name:{en:`Toolbar`,zh:`工具列`},aliases:[`action bar`,`工具欄`],describe:[`一排圖示按鈕，放常用動作`],category:`actions`,confusedWith:[`navigation`],prompt:{keywords:[`toolbar`,`APG toolbar pattern`,`role toolbar`],descriptors:[`row of icon buttons`,`arrow keys move focus between controls`],avoid:[],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Toolbar`,api:{appkit:`NSToolbar`,swiftui:`.toolbar`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toolbars`},ios:{name:`Toolbar`,api:{uikit:`UIToolbar`,swiftui:`.toolbar`},guideline:`https://developer.apple.com/design/human-interface-guidelines/toolbars`},android:{name:`Bottom app bar`,api:{compose:`BottomAppBar`,view:`BottomAppBar`},guideline:`https://m3.material.io/components/bottom-app-bar/overview`},web:{name:`Toolbar`,api:{html:`<div role="toolbar">`,aria:`toolbar`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/`}}},{id:`tooltip`,name:{en:`Tooltip`,zh:`工具提示`},aliases:[`hint`,`help tag`,`提示框`],describe:[`滑鼠停在按鈕上時冒出的一小段說明文字`],category:`overlays`,confusedWith:[`popover`],prompt:{keywords:[`tooltip`,`popover hint`,`APG tooltip pattern`],descriptors:[`short text`,`shows on hover and keyboard focus`],avoid:[`popover`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Help tag`,api:{appkit:`NSView.toolTip`,swiftui:`.help`},guideline:`https://developer.apple.com/design/human-interface-guidelines/offering-help`},android:{name:`Plain tooltip`,api:{compose:`PlainTooltip`,view:`TooltipCompat`},guideline:`https://m3.material.io/components/tooltips/overview`},web:{name:`Tooltip`,api:{html:`popover="hint"`,aria:`tooltip`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/`}}},{id:`tree-view`,name:{en:`Tree view`,zh:`樹狀視圖`},aliases:[`file tree`,`outline`,`樹狀清單`],describe:[`可以一層一層展開的清單，像檔案總管`],category:`data`,confusedWith:[`treegrid`,`disclosure`],prompt:{keywords:[`tree view`,`APG treeview pattern`,`role tree`],descriptors:[`nested expandable nodes`,`arrow keys expand and collapse`],avoid:[`disclosure`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{macos:{name:`Outline view`,api:{appkit:`NSOutlineView`,swiftui:`OutlineGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/outline-views`},ios:{name:`Outline group`,api:{swiftui:`OutlineGroup`},guideline:`https://developer.apple.com/design/human-interface-guidelines/outline-views`},web:{name:`Tree view`,api:{aria:`tree + treeitem + group`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/treeview/`}}},{id:`treegrid`,name:{en:`Treegrid`,zh:`樹狀表格`},aliases:[`tree table`,`可展開表格`],describe:[`有很多欄位、每一列又能展開子列的表格`],category:`data`,confusedWith:[`tree-view`,`data-grid`],prompt:{keywords:[`treegrid`,`APG treegrid pattern`,`expandable table rows`],descriptors:[`rows expand to show child rows`,`multiple columns`],avoid:[`tree-view`],coding:null,image:null},status:`draft`,kind:`component`,platforms:{web:{name:`Treegrid`,api:{aria:`treegrid`},guideline:`https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/`}}}];function f(e){return Array.isArray?Array.isArray(e):S(e)===`[object Array]`}function p(e){if(typeof e==`string`)return e;if(typeof e==`bigint`)return e.toString();let t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function m(e){return e==null?``:p(e)}function h(e){return typeof e==`string`}function g(e){return typeof e==`number`}function _(e){return e===!0||e===!1||y(e)&&S(e)==`[object Boolean]`}function v(e){return typeof e==`object`}function y(e){return v(e)&&e!==null}function b(e){return e!=null}function x(e){return!e.trim().length}function S(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}var C=`Incorrect 'index' type`,w=`Invalid doc index: must be a non-negative integer within the bounds of the docs array`,ee=e=>`Invalid value for key ${e}`,te=e=>`Pattern length exceeds max of ${e}.`,ne=e=>`Missing ${e} property in key`,re=e=>`Property 'weight' in key '${e}' must be a positive integer`,ie=`Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.`,ae=Object.prototype.hasOwnProperty,oe=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=T(e);this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function T(e){let t=null,n=null,r=null,i=1,a=null;if(h(e)||f(e))r=e,t=E(e),n=D(e);else{if(!ae.call(e,`name`))throw Error(ne(`name`));let o=e.name;if(r=o,ae.call(e,`weight`)&&e.weight!==void 0&&(i=e.weight,i<=0))throw Error(re(D(o)));t=E(o),n=D(o),a=e.getFn??null}return{path:t,id:n,weight:i,src:r,getFn:a}}function E(e){return f(e)?e:e.split(`.`)}function D(e){return f(e)?e.join(`.`):e}function se(e,t){let n=[],r=!1,i=(e,t,a,o)=>{if(b(e)){if(!t[a])n.push(o===void 0?e:{v:e,i:o});else{let s=e[t[a]];if(!b(s))return;if(a===t.length-1&&(h(s)||g(s)||_(s)||typeof s==`bigint`))n.push(o===void 0?m(s):{v:m(s),i:o});else if(f(s)){r=!0;for(let e=0,n=s.length;e<n;e+=1)i(s[e],t,a+1,e)}else t.length&&i(s,t,a+1,o)}}};return i(e,h(t)?t.split(`.`):t,0),r?n:n[0]}var ce={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},le={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ue={location:0,threshold:.6,distance:100},de={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:`any`,getFn:se,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},O=Object.freeze({...le,...ce,...ue,...de});function fe(e){return e>=9&&e<=13||e===32||e===160}function pe(e=1,t=3){let n=new Map,r=10**t;return{get(t){let i=0,a=!1;for(let e=0;e<t.length;e++)fe(t.charCodeAt(e))?a=!1:a||=(i++,!0);if(i===0&&(i=1),n.has(i))return n.get(i);let o=Math.round(r/i**(.5*e))/r;return n.set(i,o),o},clear(){n.clear()}}}var k=class{constructor({getFn:e=O.getFn,fieldNormWeight:t=O.fieldNormWeight}={}){this.norm=pe(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;let e=this.docs.length;this.records=Array(e);let t=0;if(h(this.docs[0]))for(let n=0;n<e;n++){let e=this._createStringRecord(this.docs[n],n);e&&(this.records[t++]=e)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw Error(w);if(h(e)){let n=this._createStringRecord(e,t);return n&&this.records.push(n),n}let n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw Error(w);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&--this.records[t].i}removeAll(e){let t=new Set;for(let n of e)Number.isInteger(n)&&n>=0&&t.add(n);if(t.size===0)return;this.records=this.records.filter(e=>!t.has(e.i));let n=Array.from(t).sort((e,t)=>e-t);for(let e of this.records){let t=0,r=n.length;for(;t<r;){let i=t+r>>>1;n[i]<e.i?t=i+1:r=i}e.i-=t}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!b(e)||x(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){let n={i:t,$:{}};for(let t=0,r=this.keys.length;t<r;t++){let r=this.keys[t],i=r.getFn?r.getFn(e):this.getFn(e,r.path);if(b(i)){if(f(i)){let e=[];for(let t=0,n=i.length;t<n;t+=1){let n=i[t];if(b(n)){if(h(n)){if(!x(n)){let r={v:n,i:t,n:this.norm.get(n)};e.push(r)}}else if(b(n.v)){let t=h(n.v)?n.v:m(n.v);if(!x(t)){let r={v:t,i:n.i,n:this.norm.get(t)};e.push(r)}}}}n.$[t]=e}else if(h(i)&&!x(i)){let e={v:i,n:this.norm.get(i)};n.$[t]=e}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function A(e,t,{getFn:n=O.getFn,fieldNormWeight:r=O.fieldNormWeight}={}){let i=new k({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(T)),i.setSources(t),i.create(),i}function me(e,{getFn:t=O.getFn,fieldNormWeight:n=O.fieldNormWeight}={}){let{keys:r,records:i}=e,a=new k({getFn:t,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function he(e=[],t=O.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let o=e.length;a<o;a+=1){let o=e[a];o&&r===-1?r=a:!o&&r!==-1&&(i=a-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[a-1]&&a-r>=t&&n.push([r,a-1]),n}function ge(e,t,n,{location:r=O.location,distance:i=O.distance,threshold:a=O.threshold,findAllMatches:o=O.findAllMatches,minMatchCharLength:s=O.minMatchCharLength,includeMatches:c=O.includeMatches,ignoreLocation:l=O.ignoreLocation}={}){if(t.length>32)throw Error(te(32));let u=t.length,d=e.length,f=Math.max(0,Math.min(r,d)),p=a,m=f,h=(e,t)=>{let n=e/u;if(l)return n;let r=Math.abs(f-t);return i?n+r/i:r?1:n},g=s>1||c,_=g?Array(d):[],v;for(;(v=e.indexOf(t,m))>-1;){let e=h(0,v);if(p=Math.min(e,p),m=v+u,g){let e=0;for(;e<u;)_[v+e]=1,e+=1}}m=-1;let y=[],b=1,x=0,S=u+d,C=1<<u-1;for(let t=0;t<u;t+=1){let r=0,i=S;for(;r<i;)h(t,f+i)<=p?r=i:S=i,i=Math.floor((S-r)/2+r);S=i;let a=Math.max(1,f-i+1),s=o?d:Math.min(f+i,d)+u,c=Array(s+2);c[s+1]=(1<<t)-1;for(let r=s;r>=a;--r){let i=r-1,o=n[e[i]];if(c[r]=(c[r+1]<<1|1)&o,t&&(c[r]|=(y[r+1]|y[r])<<1|1|y[r+1]),c[r]&C&&(b=h(t,i),b<=p)){if(p=b,m=i,x=t,m<=f)break;a=Math.max(1,2*f-m)}}if(h(t+1,f)>p)break;y=c}if(g&&m>=0){let t=Math.min(d-1,m+u-1+x);for(let r=m;r<=t;r+=1)n[e[r]]&&(_[r]=1)}let w={isMatch:m>=0,score:Math.max(.001,b)};if(g){let e=he(_,s);e.length?c&&(w.indices=e):w.isMatch=!1}return w}function _e(e){let t={};for(let n=0,r=e.length;n<r;n+=1){let i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}function j(e){if(e.length<=1)return e;e.sort((e,t)=>e[0]-t[0]||e[1]-t[1]);let t=[e[0]];for(let n=1,r=e.length;n<r;n+=1){let r=t[t.length-1],i=e[n];i[0]<=r[1]+1?r[1]=Math.max(r[1],i[1]):t.push(i)}return t}var M={ł:`l`,Ł:`L`,đ:`d`,Đ:`D`,ø:`o`,Ø:`O`,ħ:`h`,Ħ:`H`,ŧ:`t`,Ŧ:`T`,ı:`i`,ß:`ss`},ve=RegExp(`[`+Object.keys(M).join(``)+`]`,`g`),N=typeof String.prototype.normalize==`function`?e=>e.normalize(`NFD`).replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,``).replace(ve,e=>M[e]):e=>e,P=class{constructor(e,{location:t=O.location,threshold:n=O.threshold,distance:r=O.distance,includeMatches:i=O.includeMatches,findAllMatches:a=O.findAllMatches,minMatchCharLength:o=O.minMatchCharLength,isCaseSensitive:s=O.isCaseSensitive,ignoreDiacritics:c=O.ignoreDiacritics,ignoreLocation:l=O.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:o,isCaseSensitive:s,ignoreDiacritics:c,ignoreLocation:l},e=s?e:e.toLowerCase(),e=c?N(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;let u=(e,t)=>{this.chunks.push({pattern:e,alphabet:_e(e),startIndex:t})},d=this.pattern.length;if(d>32){let e=0,t=d%32,n=d-t;for(;e<n;)u(this.pattern.substr(e,32),e),e+=32;if(t){let e=d-32;u(this.pattern.substr(e),e)}}else u(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r}=this.options;if(e=t?e:e.toLowerCase(),e=n?N(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:i,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,ignoreLocation:l}=this.options,u=[],d=0,f=!1;this.chunks.forEach(({pattern:t,alphabet:n,startIndex:p})=>{let{isMatch:m,score:h,indices:g}=ge(e,t,n,{location:i+p,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,includeMatches:r,ignoreLocation:l});m&&(f=!0),d+=h,m&&g&&u.push(...g)});let p={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(p.indices=j(u)),p}},ye=new Set([`fuzzy`,`include`]);function be(e){return e.startsWith(`inverse`)}var F=[{type:`exact`,multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:`exact`,search(t){let n=t===e;return{isMatch:n,score:+!n,indices:[0,e.length-1]}}})},{type:`include`,multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:`include`,search(t){let n=0,r,i=[],a=e.length;for(;(r=t.indexOf(e,n))>-1;)n=r+a,i.push([r,n-1]);let o=!!i.length;return{isMatch:o,score:+!o,indices:i}}})},{type:`prefix-exact`,multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:`prefix-exact`,search(t){let n=t.startsWith(e);return{isMatch:n,score:+!n,indices:[0,e.length-1]}}})},{type:`inverse-prefix-exact`,multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:`inverse-prefix-exact`,search(t){let n=!t.startsWith(e);return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`inverse-suffix-exact`,multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:`inverse-suffix-exact`,search(t){let n=!t.endsWith(e);return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`suffix-exact`,multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:`suffix-exact`,search(t){let n=t.endsWith(e);return{isMatch:n,score:+!n,indices:[t.length-e.length,t.length-1]}}})},{type:`inverse-exact`,multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:`inverse-exact`,search(t){let n=t.indexOf(e)===-1;return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`fuzzy`,multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{let n=new P(e,{location:t.location??O.location,threshold:t.threshold??O.threshold,distance:t.distance??O.distance,includeMatches:t.includeMatches??O.includeMatches,findAllMatches:t.findAllMatches??O.findAllMatches,minMatchCharLength:t.minMatchCharLength??O.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??O.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??O.ignoreDiacritics,ignoreLocation:t.ignoreLocation??O.ignoreLocation});return{type:`fuzzy`,search(e){return n.searchIn(e)}}}}],I=F.length,xe=`\0`,Se=`|`;function Ce(e){let t=[],n=e.length,r=0;for(;r<n;){for(;r<n&&e[r]===` `;)r++;if(r>=n)break;let i=r;for(;i<n&&e[i]!==` `&&e[i]!==`"`;)i++;if(i<n&&e[i]===`"`){for(i++;i<n;){if(e[i]===`"`){let t=i+1;if(t>=n||e[t]===` `){i++;break}if(e[t]===`$`&&(t+1>=n||e[t+1]===` `)){i+=2;break}}i++}t.push(e.substring(r,i)),r=i}else{for(;i<n&&e[i]!==` `;)i++;t.push(e.substring(r,i)),r=i}}return t}function L(e,t){let n=e.match(t);return n?n[1]:null}function we(e,t={}){return e.replace(/\\\|/g,xe).split(Se).map(e=>{let n=Ce(e.replace(/\u0000/g,`|`).trim()).filter(e=>e&&!!e.trim()),r=[];for(let e=0,i=n.length;e<i;e+=1){let i=n[e],a=!1,o=-1;for(;!a&&++o<I;){let e=F[o],n=L(i,e.multiRegex);n&&(r.push(e.create(n,t)),a=!0)}if(!a)for(o=-1;++o<I;){let e=F[o],n=L(i,e.singleRegex);if(n){r.push(e.create(n,t));break}}}return r})}var Te=class{constructor(e,{isCaseSensitive:t=O.isCaseSensitive,ignoreDiacritics:n=O.ignoreDiacritics,includeMatches:r=O.includeMatches,minMatchCharLength:i=O.minMatchCharLength,ignoreLocation:a=O.ignoreLocation,findAllMatches:o=O.findAllMatches,location:s=O.location,threshold:c=O.threshold,distance:l=O.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r,minMatchCharLength:i,findAllMatches:o,ignoreLocation:a,location:s,threshold:c,distance:l},e=t?e:e.toLowerCase(),e=n?N(e):e,this.pattern=e,this.query=we(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:r,ignoreDiacritics:i}=this.options;e=r?e:e.toLowerCase(),e=i?N(e):e;let a=0,o=[],s=0,c=!1;for(let r=0,i=t.length;r<i;r+=1){let i=t[r];o.length=0,a=0,c=!1;for(let t=0,r=i.length;t<r;t+=1){let r=i[t],{isMatch:l,indices:u,score:d}=r.search(e);if(l)a+=1,s+=d,be(r.type)&&(c=!0),n&&(ye.has(r.type)?o.push(...u):o.push(u));else{s=0,a=0,o.length=0,c=!1;break}}if(a){let e={isMatch:!0,score:s/a};return c&&(e.hasInverse=!0),n&&(e.indices=j(o)),e}}return{isMatch:!1,score:1}}},R=[];function z(...e){R.push(...e)}function B(e,t){for(let n=0,r=R.length;n<r;n+=1){let r=R[n];if(r.condition(e,t))return new r(e,t)}return new P(e,t)}var V={AND:`$and`,OR:`$or`},H={PATH:`$path`,PATTERN:`$val`},U=e=>!!(e[V.AND]||e[V.OR]),Ee=e=>!!e[H.PATH],De=e=>!f(e)&&v(e)&&!U(e),W=e=>({[V.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function G(e,t,{auto:n=!0}={}){let r=e=>{if(h(e)){let r={keyId:null,pattern:e};return n&&(r.searcher=B(e,t)),r}let i=Object.keys(e),a=Ee(e);if(!a&&i.length>1&&!U(e))return r(W(e));if(De(e)){let r=a?e[H.PATH]:i[0],o=a?e[H.PATTERN]:e[r];if(!h(o))throw Error(ee(r));let s={keyId:D(r),pattern:o};return n&&(s.searcher=B(o,t)),s}let o={children:[],operator:i[0]};return i.forEach(t=>{let n=e[t];f(n)&&n.forEach(e=>{o.children.push(r(e))})}),o};return U(e)||(e=W(e)),r(e)}function K(e,{ignoreFieldNorm:t=O.ignoreFieldNorm}){let n=1;return e.forEach(({key:e,norm:r,score:i})=>{let a=e?e.weight:null;n*=(i===0&&a?2**-52:i)**+((a||1)*(t?1:r))}),n}function Oe(e,{ignoreFieldNorm:t=O.ignoreFieldNorm}){e.forEach(e=>{e.score=K(e.matches,{ignoreFieldNorm:t})})}var ke=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){let t=this.heap;for(;e>0;){let n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;let r=t[e];t[e]=t[n],t[n]=r,e=n}}_sinkDown(e){let t=this.heap,n=t.length,r=e;do{e=r;let i=2*e+1,a=2*e+2;if(i<n&&this.comparator(t[i],t[r])>0&&(r=i),a<n&&this.comparator(t[a],t[r])>0&&(r=a),r!==e){let n=t[e];t[e]=t[r],t[r]=n}}while(r!==e)}};function Ae(e){let t=[];return e.matches.forEach(e=>{if(!b(e.indices)||!e.indices.length)return;let n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.id),e.idx>-1&&(n.refIndex=e.idx),t.push(n)}),t}function je(e,t,{includeMatches:n=O.includeMatches,includeScore:r=O.includeScore}={}){return e.map(e=>{let{idx:i}=e,a={item:t[i],refIndex:i};return n&&(a.matches=Ae(e)),r&&(a.score=e.score),a})}var Me=/[\p{L}\p{M}\p{N}_]+/gu,q=new WeakSet;function Ne(e){q.has(e)||(q.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function Pe(e){if(typeof e==`function`){let t=!1;return n=>{let r=e(n);if(!t&&(t=!0,!Array.isArray(r)||r.some(e=>typeof e!=`string`)))throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r)?`array containing non-strings`:typeof r}.`);return r}}return e instanceof RegExp?(e.global||Ne(e),t=>t.match(e)||[]):e=>e.match(Me)||[]}function J({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){let r=Pe(n);return{tokenize(n){return e||(n=n.toLowerCase()),t&&(n=N(n)),r(n)}}}var Fe=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=J({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});let n=this.analyzer.tokenize(e),{df:r,fieldCount:i}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(let e of n){this.termSearchers.push(new P(e,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));let n=r.get(e)||0,a=Math.log(1+(i-n+.5)/(n+.5));this.idfWeights.push(a)}this.combineAll=t.tokenMatch===`all`,this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};let t=[],n=0,r=0,i=0,a=0,o=this.combineAll&&!this.useMask?new Set:null;for(let s=0;s<this.termSearchers.length;s++){let c=this.termSearchers[s].searchIn(e),l=this.idfWeights[s];r+=l,c.isMatch&&(i++,n+=l*(1-c.score),c.indices&&t.push(...c.indices),this.combineAll&&(this.useMask?a|=1<<s:o.add(s)))}if(i===0)return{isMatch:!1,score:1};let s=r>0?1-n/r:0,c={isMatch:!0,score:Math.max(.001,s)};return this.options.includeMatches&&t.length&&(c.indices=j(t)),this.combineAll&&(this.useMask?c.matchedMask=a:c.matchedTerms=o,c.termCount=this.numTerms),c}};function Y(e,t,n,r){let i=r.tokenize(t);if(!i.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);let a=new Set(i),o=e.docTermFieldHits.get(n);o||(o=new Map,e.docTermFieldHits.set(n,o));for(let t of a)o.set(t,(o.get(t)||0)+1),e.df.set(t,(e.df.get(t)||0)+1)}function X(e,t,n,r){let{i,v:a,$:o}=t;if(a!==void 0)Y(e,a,i,r);else if(o)for(let t=0;t<n;t++){let n=o[t];if(n){if(Array.isArray(n))for(let t of n)Y(e,t.v,i,r);else Y(e,n.v,i,r)}}}function Ie(e,t,n){let r={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(let i of e)X(r,i,t,n);return r}function Le(e,t,n,r){X(e,t,n,r)}function Re(e,t){let n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);let r=e.docTermFieldHits.get(t);if(r){for(let[t,n]of r){let r=(e.df.get(t)||0)-n;r<=0?e.df.delete(t):e.df.set(t,r)}e.docTermFieldHits.delete(t)}}function Z(e,t){if(t.length===0)return;let n=Array.from(new Set(t)).sort((e,t)=>e-t);for(let t of n)Re(e,t);let r=e=>{let t=0,r=n.length;for(;t<r;){let i=t+r>>>1;n[i]<e?t=i+1:r=i}return e-t},i=n[0],a=new Map;for(let[t,n]of e.docFieldCount)a.set(t>i?r(t):t,n);e.docFieldCount=a;let o=new Map;for(let[t,n]of e.docTermFieldHits)o.set(t>i?r(t):t,n);e.docTermFieldHits=o}var Q=class{constructor(e,t,n){this.options={...O,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new oe(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;let t=B(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof k))throw Error(C);if(this._myIndex=t||A(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){let e=J({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=Ie(this._myIndex.records,this._myIndex.keys.length,e)}this._invalidateSearcherCache()}add(e){if(!b(e))return;this._docs.push(e);let t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){let e=J({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});Le(this._invertedIndex,t,this._myIndex.keys.length,e)}this._invalidateSearcherCache()}remove(e=()=>!1){let t=[],n=[];for(let r=0,i=this._docs.length;r<i;r+=1)e(this._docs[r],r)&&(t.push(this._docs[r]),n.push(r));if(n.length){this._invertedIndex&&Z(this._invertedIndex,n);let e=new Set(n);this._docs=this._docs.filter((t,n)=>!e.has(n)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw Error(w);this._invertedIndex&&Z(this._invertedIndex,[e]);let t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){let{limit:n=-1}=t||{},{includeMatches:r,includeScore:i,shouldSort:a,sortFn:o,ignoreFieldNorm:s}=this.options;if(h(e)&&!e.trim()){let e=this._docs.map((e,t)=>({item:e,refIndex:t}));return g(n)&&n>-1&&(e=e.slice(0,n)),e}let c=a&&g(n)&&n>0&&h(e),l=o,u=(e,t)=>l(e,t)||e.idx-t.idx,d;if(c){let t=new ke(n,u);h(this._docs[0])?this._searchStringList(e,{heap:t,ignoreFieldNorm:s}):this._searchObjectList(e,{heap:t,ignoreFieldNorm:s}),d=t.extractSorted()}else d=h(e)?h(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),Oe(d,{ignoreFieldNorm:s}),a&&d.sort(h(e)?u:l),g(n)&&n>-1&&(d=d.slice(0,n));return je(d,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){let r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch===`all`,{records:a}=this._myIndex,o=t?null:[];return a.forEach(({v:e,i:a,n:s})=>{if(!b(e))return;let c=r.searchIn(e);if(c.isMatch){let r={score:c.score,value:e,norm:s,indices:c.indices};i&&(r.matchedMask=c.matchedMask,r.matchedTerms=c.matchedTerms,r.termCount=c.termCount);let l=[r];if(!i||this._coversAllTokens(l)){let r={item:e,idx:a,matches:l};t?(r.score=K(r.matches,{ignoreFieldNorm:n}),t.insert(r)):o.push(r)}}}),o}_searchLogical(e){let t=G(e,this.options),n=this._normalizedKeys(),r=(e,t,i)=>{if(!(`children`in e)){let{keyId:r,searcher:a}=e,o;return r===null?(o=[],n.forEach((e,n)=>{o.push(...this._findMatches({key:e,value:t[n],searcher:a}))})):o=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:a}),o&&o.length?[{idx:i,item:t,matches:o}]:[]}let{children:a,operator:o}=e,s=[];for(let e=0,n=a.length;e<n;e+=1){let n=a[e],c=r(n,t,i);if(c.length)s.push(...c);else if(o===V.AND)return[]}return s},i=this._myIndex.records,a=new Map,o=[];return i.forEach(({$:e,i:n})=>{if(b(e)){let i=r(t,e,n);i.length&&(a.has(n)||(a.set(n,{idx:n,item:e,matches:[]}),o.push(a.get(n))),i.forEach(({matches:e})=>{a.get(n).matches.push(...e)}))}}),o}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){let r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch===`all`,{records:a}=this._myIndex,o=this._normalizedKeys(),s=t?null:[];return a.forEach(({$:e,i:a})=>{if(!b(e))return;let c=[],l=!1,u=!1;if(o.forEach((t,n)=>{let i=this._findMatches({key:t,value:e[n],searcher:r});i.length?(c.push(...i),i[0].hasInverse&&(u=!0)):l=!0}),!(u&&l)&&c.length&&(!i||this._coversAllTokens(c))){let r={idx:a,item:e,matches:c};t?(r.score=K(r.matches,{ignoreFieldNorm:n}),t.insert(r)):s.push(r)}}),s}_findMatches({key:e,value:t,searcher:n}){if(!b(t))return[];let r=[];if(f(t))t.forEach(({v:t,i,n:a})=>{if(!b(t))return;let o=n.searchIn(t);if(o.isMatch){let n={score:o.score,key:e,value:t,idx:i,norm:a,indices:o.indices,hasInverse:o.hasInverse};o.termCount!==void 0&&(n.matchedMask=o.matchedMask,n.matchedTerms=o.matchedTerms,n.termCount=o.termCount),r.push(n)}});else{let{v:i,n:a}=t,o=n.searchIn(i);if(o.isMatch){let t={score:o.score,key:e,value:i,norm:a,indices:o.indices,hasInverse:o.hasInverse};o.termCount!==void 0&&(t.matchedMask=o.matchedMask,t.matchedTerms=o.matchedTerms,t.termCount=o.termCount),r.push(t)}}return r}_coversAllTokens(e){let t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let n=0;for(let t=0;t<e.length;t++)n|=e[t].matchedMask||0;return n===2**t-1}let n=new Set;for(let t=0;t<e.length;t++){let r=e[t].matchedTerms;if(r)for(let e of r)n.add(e)}return n.size===t}};Q.version=`7.5.0`,Q.createIndex=A,Q.parseIndex=me,Q.config=O,Q.match=function(e,t,n){if(n&&n.useTokenSearch)throw Error(ie);return B(e,{...O,...n}).searchIn(t)},Q.parseQuery=G,z(Te),z(Fe),Q.use=function(...e){e.forEach(e=>z(e))};var ze=Q;function Be(e){let t=`platforms`in e&&e.platforms?e.platforms:{};return{id:e.id,names:[e.name.en,e.name.zh],aliases:e.aliases,describe:e.describe,platformNames:o.flatMap(e=>{let n=t[e];return n?[n.name,...Object.values(n.api)]:[]}),keywords:e.prompt.keywords}}var Ve=[{name:`names`,weight:3},{name:`aliases`,weight:3},{name:`platformNames`,weight:2},{name:`keywords`,weight:1.5},{name:`describe`,weight:1}];function He(e){let t=new Map(e.map(e=>[e.id,e])),n=new ze(e.map(Be),{keys:Ve,threshold:.4,ignoreLocation:!0,includeScore:!0});return{search(e,r=10){let i=e.trim();return i?n.search(i,{limit:r}).flatMap(e=>{let n=t.get(e.item.id);return n?[n]:[]}):[]}}}var Ue=new Map(d.map(e=>[e.id,e]));function We(e){return Ue.get(e)}function $(e,t){return`platforms`in e?e.platforms?.[t]:void 0}function Ge(e){return o.filter(t=>$(e,t))}function Ke(e){return d.filter(t=>$(t,e))}function qe(e){let t=Ke(e),n=t=>$(t,e)?.name??t.name.en;return c.map(e=>({category:e,concepts:t.filter(t=>t.category===e).sort((e,t)=>n(e).localeCompare(n(t)))})).filter(e=>e.concepts.length>0)}var Je=He(d);export{We as a,l as c,u as d,a as f,Ke as i,o as l,Je as n,$ as o,i as p,qe as r,d as s,Ge as t,s as u};