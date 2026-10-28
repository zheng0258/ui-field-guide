<!-- Exported from Claude Docs: https://claude.ai/artifact/5ZPBXKfZuVWg4xziu1sSYg (rev 14). The online doc is the source of truth. -->

# macOS UI 組件辭典網站：研究報告

2026-10-27 · @yobbo

## 摘要

值得做：目前沒有開源、以 macOS 為主、可互動切換狀態的組件辭典。最接近的 NameThatUI 只收錄 32 個 macOS 項目且不開源；MacVue 是 Vue 3 組件庫而非辭典。

- **定位**：跨平台 UI 組件互動辭典，涵蓋 macOS、iOS、Android、Web 四平台；以平台中立的概念為單位，並列各平台名稱與 API，中英對照，每個組件可切換狀態與亮暗色。iOS 與 Android 差異大，不合併為 mobile。
- **範圍**：Apple HIG 目前列出約 60 個適用 macOS 的組件，MVP 先做 20 個，完整版目標 50+。
- **技術**：Vue 3 + TypeScript + Vite，純 CSS 重現外觀，Liquid Glass 用 `backdrop-filter` 基礎版 + Chromium 才啟用的 SVG 折射。
- **最大風險是授權**：SF Pro 字型與 SF Symbols 都不能在網站上嵌入或散佈，必須用 `system-ui` 字型堆疊與自繪或開源圖示。
- **履歷價值**：同時展示 CSS 工藝、資料建模、搜尋、狀態機與 a11y，比一般 CRUD 專案更有辨識度。

## 競品與現有專案

沒有一個專案同時做到「macOS 為主 + 命名辭典 + 可互動展示 + 開源」，這就是切入點。

| 專案 | 類型 | 規模 | 平台 | 開源 | 可借鏡 | 缺口 |
| --- | --- | --- | --- | --- | --- | --- |
| [NameThatUI](https://designcompass.org/en/2026/08/25/namethatui-visual-dictionary/) | 命名辭典網站，2026-07-12 上線 | 76 項（Web 44、macOS 32） | Web + macOS | 未見公開 repo | 白話描述搜尋、易混淆對照、可貼給 coding agent 的 prompt、對照 HIG/WAI-ARIA/MDN 驗證 | macOS 只有 32 項；無中文；非開源 |
| [The Component Gallery](https://www.everydev.ai/tools/the-component-gallery) | Web 組件參考 | 60 組件、95 個 design system、2,676 範例 | Web | 個人專案，資料在 Airtable | 別名對照（Accordion 又稱 Collapse/Disclosure）；Astro + Pagefind 靜態搜尋 | 不涵蓋 macOS 原生 |
| [MacVue](https://github.com/antonreshetov/macvue) | Vue 3 組件庫 | 19 組件，21 stars | Web | MIT | 量測自 AppKit 的 5 種 control size、單一屬性切亮暗色、Liquid Glass 折射 | 是組件庫不是辭典；1.0 前 token 不穩定 |
| [SwiftUI Catalog](https://github.com/barbaramartina/swiftuicatalog) | 原生 iOS/iPadOS 目錄 app | 數十個 SwiftUI 元件 | iOS/iPadOS | MIT | 分類方式（容器、階層視圖、手勢） | 不是網頁、不是 macOS |
| [compose-macos-ui](https://github.com/NucleusFramework/compose-macos-26-ui/wiki) | Compose Multiplatform 組件庫 | 30+ 組件 | 含 Web（JS/Wasm） | MIT | 範例 app 同時當 gallery，每個組件一頁 | Kotlin 生態，非辭典 |
| [macos-web](https://github.com/puruvj/macos-preact)、[react-desktop](https://github.com/langyo/react-desktop) | 桌面模擬 / 舊組件庫 | — | Web | 是 | Dock、視窗拖曳的視覺細節 | 模擬整個桌面或停在 High Sierra，無命名用途 |

**差異化**：macOS 覆蓋 50+ 項（NameThatUI 的 1.5 倍以上）、中英對照、每個組件可切狀態與亮暗、AppKit/SwiftUI/HIG 三欄連結、開源可貢獻。NameThatUI 的「易混淆對照」和「prompt 片段」值得直接採用。

## macOS 組件分類與命名對照

以 Apple HIG 的 Components 分類為骨架，剔除 iOS/tvOS/visionOS/watchOS 專屬項目後約 45 個，再補上 HIG 沒有獨立頁、但常被問名稱的 12 個，總計約 57 項。HIG 分類清單依 [2026-05 的 HIG 鏡像](https://zff.dev/sprint819/hig26)；AppKit 與 SwiftUI 對應為依官方 API 整理，上線前需逐項對 Apple 文件驗證。「MVP」欄標示建議首批 20 項。

### HIG 組件（macOS 適用）

| 分類 | HIG 名稱 | 中文 | AppKit | SwiftUI | MVP |
| --- | --- | --- | --- | --- | --- |
| 內容 Content | Charts | 圖表 | — | `Chart`（Swift Charts） |  |
| 內容 | Image views | 圖片視圖 | `NSImageView` | `Image` |  |
| 內容 | Text views | 文字視圖 | `NSTextView` | `TextEditor` |  |
| 內容 | Web views | 網頁視圖 | `WKWebView` | `WebView`（26 起） |  |
| 版面 Layout | Boxes | 群組框 | `NSBox` | `GroupBox` |  |
| 版面 | Collections | 集合視圖 | `NSCollectionView` | `LazyVGrid` |  |
| 版面 | Column views | 欄位瀏覽器 | `NSBrowser` | 無直接對應 |  |
| 版面 | Disclosure controls | 展開控制 | `NSButton`（disclosure bezel） | `DisclosureGroup` | 是 |
| 版面 | Labels | 標籤 | `NSTextField`（label） | `Text`、`Label` |  |
| 版面 | Lists and tables | 列表與表格 | `NSTableView` | `List`、`Table` | 是 |
| 版面 | Outline views | 大綱視圖 | `NSOutlineView` | `OutlineGroup` | 是 |
| 版面 | Split views | 分割視圖 | `NSSplitView` | `HSplitView`、`NavigationSplitView` |  |
| 版面 | Tab views | 分頁視圖 | `NSTabView` | `TabView` |  |
| 選單與動作 | Activity views | 分享面板 | `NSSharingServicePicker` | `ShareLink` |  |
| 選單與動作 | Buttons | 按鈕 | `NSButton` | `Button` | 是 |
| 選單與動作 | Context menus | 右鍵選單 | `NSMenu`（`menu` 屬性） | `.contextMenu` | 是 |
| 選單與動作 | Dock menus | Dock 選單 | `applicationDockMenu(_:)` | 無直接對應 |  |
| 選單與動作 | Menus | 選單 | `NSMenu`、`NSMenuItem` | `Menu` | 是 |
| 選單與動作 | Pop-up buttons | 彈出式按鈕 | `NSPopUpButton` | `Picker`（`.menu`） | 是 |
| 選單與動作 | Pull-down buttons | 下拉式按鈕 | `NSPopUpButton`（`pullsDown`） | `Menu` | 是 |
| 選單與動作 | The menu bar | 選單列 | `NSApp.mainMenu` | `.commands`、`CommandMenu` |  |
| 選單與動作 | Toolbars | 工具列 | `NSToolbar` | `.toolbar` | 是 |
| 導覽與搜尋 | Path controls | 路徑控制 | `NSPathControl` | 無直接對應 |  |
| 導覽與搜尋 | Search fields | 搜尋欄 | `NSSearchField` | `.searchable` | 是 |
| 導覽與搜尋 | Sidebars | 側邊欄 | `NSSplitViewItem`（sidebar） | `NavigationSplitView` | 是 |
| 導覽與搜尋 | Token fields | 標記欄位 | `NSTokenField` | `.searchable(tokens:)`（部分） |  |
| 呈現 Presentation | Alerts | 警示框 | `NSAlert` | `.alert` | 是 |
| 呈現 | Panels | 面板 | `NSPanel` | `UtilityWindow` |  |
| 呈現 | Popovers | 浮出框 | `NSPopover` | `.popover` | 是 |
| 呈現 | Scroll views | 捲動視圖 | `NSScrollView` | `ScrollView` |  |
| 呈現 | Sheets | 表單視窗 | `beginSheet(_:)` | `.sheet` | 是 |
| 呈現 | Windows | 視窗 | `NSWindow` | `WindowGroup`、`Window` |  |
| 選擇與輸入 | Color wells | 顏色井 | `NSColorWell` | `ColorPicker` |  |
| 選擇與輸入 | Combo boxes | 組合框 | `NSComboBox` | 無直接對應 |  |
| 選擇與輸入 | Image wells | 圖片井 | `NSImageView`（editable） | 無直接對應 |  |
| 選擇與輸入 | Pickers | 日期選擇器 | `NSDatePicker` | `DatePicker` |  |
| 選擇與輸入 | Segmented controls | 分段控制 | `NSSegmentedControl` | `Picker`（`.segmented`） | 是 |
| 選擇與輸入 | Sliders | 滑桿 | `NSSlider` | `Slider` | 是 |
| 選擇與輸入 | Steppers | 步進器 | `NSStepper` | `Stepper` | 是 |
| 選擇與輸入 | Text fields | 文字欄 | `NSTextField`、`NSSecureTextField` | `TextField`、`SecureField` | 是 |
| 選擇與輸入 | Toggles | 開關與核取方塊 | `NSSwitch`、`NSButton`（checkbox） | `Toggle`（`.switch`、`.checkbox`） | 是 |
| 狀態 Status | Gauges | 量表 | `NSLevelIndicator` | `Gauge` |  |
| 狀態 | Progress indicators | 進度指示器 | `NSProgressIndicator` | `ProgressView` | 是 |
| 狀態 | Rating indicators | 評分指示器 | `NSLevelIndicator`（rating） | 無直接對應 |  |
| 系統體驗 | Notifications | 通知 | `UNUserNotificationCenter` | 同左 |  |
| 系統體驗 | Widgets | 小工具 | WidgetKit | WidgetKit |  |

### HIG 未獨立成頁、但常被問名稱的項目

| 名稱 | 中文 | AppKit | SwiftUI | 白話描述（搜尋用） |
| --- | --- | --- | --- | --- |
| Window controls（traffic lights） | 視窗控制鈕 | `standardWindowButton(_:)` | — | 左上角紅黃綠三顆圓點 |
| Title bar | 標題列 | `NSWindow.titlebarAppearsTransparent` | `.windowStyle` | 視窗最上面那條 |
| Inspector | 檢閱器 | `NSSplitViewItem`（inspector） | `.inspector` | 右側屬性面板 |
| Source list | 來源列表 | `NSOutlineView`（source list style） | `List`（`.sidebar`） | Finder 左側那種清單 |
| Tooltip / Help tag | 工具提示 | `toolTip` | `.help()` | 滑鼠停住跳出的小字 |
| Help button | 說明按鈕 | `NSButton`（`.helpButton`） | `HelpLink` | 圓形問號按鈕 |
| Menu bar extra | 選單列附加項目 | `NSStatusItem` | `MenuBarExtra` | 右上角常駐小圖示 |
| HUD window | HUD 面板 | `NSPanel`（`.hudWindow`） | — | 深色半透明浮動面板 |
| Badge | 徽章 | `NSDockTile.badgeLabel` | `.badge` | 圖示上的紅色數字 |
| Spinner | 轉圈指示器 | `NSProgressIndicator`（spinning） | `ProgressView()` | 載入中的轉圈 |
| Focus ring | 焦點環 | `focusRingType` | `.focusable` | 被選中時的藍色外框 |
| Vibrancy / Material | 材質與活力效果 | `NSVisualEffectView` | `.background(.ultraThinMaterial)` | 透出背景的模糊底 |

### 易混淆對照（建議做成獨立頁）

| 一組 | 怎麼分 |
| --- | --- |
| Pop-up button vs Pull-down button | Pop-up 顯示「目前選中的值」並從中擇一；Pull-down 顯示固定標題，點開是一串動作 |
| Popover vs Tooltip | Popover 可互動、點擊開啟、有箭頭；Tooltip 只讀、停留觸發、自動消失 |
| Sheet vs Alert vs Panel | Sheet 依附單一視窗並阻擋它；Alert 是簡短確認；Panel 是不阻擋的輔助浮動視窗 |
| Segmented control vs Tab view | Segmented 是選項控制；Tab view 是切換整塊內容的容器 |
| Sidebar vs Inspector | Sidebar 在左，負責導覽；Inspector 在右，顯示選中物件的屬性 |
| Combo box vs Pop-up button | Combo box 可以自己打字，也可從清單選；Pop-up 只能選 |
| Switch vs Checkbox | Switch 立即生效的開關；Checkbox 多用於表單、需按確認才生效 |
| Outline view vs Table view | Outline 有階層可展開；Table 是平面多欄 |

### MVP 組件的 AI prompt 關鍵字（macOS）

欄位規範見「架構設計」中的 AI prompt 關鍵字欄位；coding 句子可由三欄組出。

| 組件 | keywords | descriptors | avoid |
| --- | --- | --- | --- |
| Disclosure control | macOS disclosure triangle, NSButton disclosure bezel, DisclosureGroup | small triangle rotates 90° when expanded, reveals content below | accordion with chevron header |
| Lists and tables | macOS table view, NSTableView, SwiftUI Table | column headers, alternating row background, sortable columns | web data grid with heavy borders |
| Outline view | macOS outline view, NSOutlineView, OutlineGroup | indented hierarchy, disclosure triangles per row | flat table view |
| Button | macOS push button, NSButton, bezelStyle push | rounded rect bezel, default button filled with accent color | iOS full-width filled button |
| Context menu | macOS context menu, right-click menu, NSMenu | appears at pointer, translucent material, keyboard shortcut hints right-aligned | dropdown menu attached to a button |
| Menu | macOS menu, NSMenu, SwiftUI Menu | separators between groups, checkmarks, submenu arrows | web navigation menu |
| Pop-up button | macOS pop-up button, NSPopUpButton, Picker menu style | shows current selection, up-down chevron on right | pull-down button |
| Pull-down button | macOS pull-down button, NSPopUpButton pullsDown, SwiftUI Menu | fixed title, single down chevron, list of actions | pop-up button showing a value |
| Toolbar | macOS window toolbar, NSToolbar, unified title bar | icon buttons in title bar area, grouped controls, flexible space | Android top app bar |
| Search field | macOS search field, NSSearchField, searchable | rounded field, magnifying glass on left, clear button on right | plain text field |
| Sidebar | macOS sidebar, source list, NavigationSplitView sidebar | translucent vibrancy background, section headers, SF-style icons per row | web hamburger drawer |
| Alert | macOS alert, NSAlert | app icon on top, bold message, informative text, buttons right-aligned | web modal with close X |
| Popover | macOS popover, NSPopover | anchored arrow pointing to source, closes on outside click | tooltip |
| Sheet | macOS sheet, window-modal sheet, beginSheet | slides down from title bar, attached to parent window | iOS bottom sheet |
| Segmented control | macOS segmented control, NSSegmentedControl, Picker segmented style | joined capsule segments, selected segment highlighted | tab view |
| Slider | macOS slider, NSSlider | thin track, round knob, optional tick marks | progress bar |
| Stepper | macOS stepper, NSStepper | tiny stacked up and down arrows beside a number field | number spinner with plus minus |
| Text field | macOS text field, NSTextField, SecureField | 1px bezel, focus ring in accent color, placeholder text | Material outlined text field with floating label |
| Toggle | macOS switch, NSSwitch, Toggle switch style | small pill switch, accent color when on | iOS-size large switch |
| Progress indicator | macOS progress indicator, NSProgressIndicator | thin bar or spinning gear-like spinner, indeterminate animation | Material linear progress with thick track |

## 擴充到四平台：iOS 與 Android 要不要合併成 mobile

不要合併。iOS 與 Android 在名稱、元件種類、互動行為三方面都不同，合併成「mobile」會讓辭典最核心的價值（精確名稱）失效。正確做法是「概念層 + 平台實作層」：一個平台中立的概念，底下列出 macOS、iOS、Android、Web 各自的名稱與 API。

### 差異一：同概念不同名，甚至同名不同物

| 概念（中立名） | macOS | iOS | Android（Material 3） | Web |
| --- | --- | --- | --- | --- |
| 頂部標題列 | Title bar / Toolbar | **Navigation bar**（`NavigationStack` toolbar） | Top app bar（`TopAppBar`） | header |
| 主要區塊切換 | Sidebar | Tab bar（`TabView`） | **Navigation bar**（`NavigationBar`，舊稱 Bottom navigation） | nav |
| 分段選擇 | Segmented control | Segmented control | Segmented button（`SegmentedButton`） | radio group |
| 確認對話 | Alert（`NSAlert`） | Alert | Dialog（`AlertDialog`） | `<dialog>` |
| 一組動作選項 | Pull-down / Context menu | Action sheet（`.confirmationDialog`） | Modal bottom sheet 或 Menu | menu |
| 底部滑出面板 | Sheet（依附視窗、由上滑下） | Sheet（`.sheet` + detents） | Bottom sheet（`ModalBottomSheet`） | drawer |
| 側邊導覽 | Sidebar | Sidebar（iPad） | Navigation drawer / Navigation rail | sidebar |
| 短暫提示訊息 | Notification | 無原生元件 | Snackbar | toast |
| 篩選標籤 | Token field | Search tokens | Chips（`FilterChip`） | tag |
| 日期選擇 | Date picker（欄位或日曆） | Date picker（滾輪、compact、graphical） | Date picker dialog（日曆） | `input type=date` |

「Navigation bar」在 iOS 指頂部標題列、在 Material 3 指底部導覽，是最典型的陷阱，正好適合放進「易混淆對照」。（對照依 [uxdesign.cc 命名比較](https://uxdesign.cc/nomenclature-of-mobile-app-visual-elements-android-vs-ios-93685e8ef085) 與 [32 項差異整理](https://uxdesign.cc/ios-vs-android-design-630340a73ee6)，上線前需對 HIG 與 m3.material.io 逐項確認。）

### 差異二：各自獨有的元件

- **只有 Android**：Floating action button（FAB）、Snackbar、Chips、Navigation rail、Bottom app bar、Banner。
- **只有 iOS**：Page control、Edit menu、Home Screen quick actions、Live Activities。
- **只有 macOS**：Menu bar、Dock menu、Path control、Combo box、Inspector、HUD panel。

### 差異三：規格與行為

| 項目 | iOS | Android |
| --- | --- | --- |
| 單位 | pt | dp |
| 最小觸控區 | 44 × 44 pt | 48 × 48 dp |
| 分隔線 | 0.5 pt | 1 dp |
| 返回 | 左上返回鈕 + 左緣滑動 | 系統返回手勢或按鈕（predictive back） |
| 文字欄標籤 | placeholder 在欄內 | 浮動標籤，輸入時上移 |
| 系統字型 | San Francisco（不可嵌入網頁） | Roboto（開源授權，可用於網頁） |

### 對專案的影響

- **資料模型**：schema 從「一個組件一個檔」改成「一個概念一個檔」，`platforms` 底下放 `macos`、`ios`、`android`、`web` 四組名稱、API、HIG 或 Material 連結；某平台沒有就留空，本身就是有用資訊。
- **展示**：每個概念頁並排四個平台的 CSS 重現，切換狀態時同步。Android 的 Roboto 與 Material 圖示是開源的，重現難度與授權風險都比 Apple 平台低。
- **工作量約為原本的 2.5 到 3 倍**：建議分期，macOS 與 iOS 先做（共用 Apple 詞彙與 token），Android 第二期，Web 欄從一開始就填，因為它是大家最熟的參照點。

## 技術實作

外觀用純 CSS + design token 重現，Liquid Glass 分兩層漸進增強；最難的不是畫出來，而是量測準確與跨瀏覽器降級。

### 外觀重現

- **量測而非目測**：參考 MacVue 的做法，控制項尺寸對齊 `NSControl.ControlSize` 的 mini、small、regular、large、extraLarge 五級。可在自己的 Mac 上寫一支 Swift 小程式，輸出各控制項的 `intrinsicContentSize` 與圓角，存成 JSON 當 token 來源。
- **系統色 token 化**：AppKit 的動態色（`labelColor`、`secondaryLabelColor`、`separatorColor`、`controlAccentColor` 等約 35 個）可用 Swift 讀出亮暗兩組 RGBA，轉成 CSS 變數。[這個 gist](https://gist.github.com/andrejilderda/8677c565cddc969e6aae7df48622d47c) 就是現成做法，例如淺色 `labelColor` 為黑色 84.7% 不透明度，強調色預設 `rgb(0 122 255)`。
- **不要依賴 CSS 系統色關鍵字**：`AccentColor`、`Highlight` 在各瀏覽器行為不一，[Firefox 正打算在 macOS 把它們換成固定值以防指紋追蹤](https://bugzilla.mozilla.org/show_bug.cgi?id=2046186)，Safari 也回傳固定藍色。全部改用自己的 token，並提供強調色切換器。
- **亮暗色**：仿 MacVue 用單一 `data-appearance` 屬性，可套在任一容器，讓同頁並排比較亮暗兩版。

### Liquid Glass

| 層級 | 做法 | 支援 | 用途 |
| --- | --- | --- | --- |
| 基礎材質 | `backdrop-filter: blur() saturate()`，需同時寫 `-webkit-` 前綴 | 2026 年主流瀏覽器皆支援 | 預設顯示，所有瀏覽器一致 |
| 邊緣折射 | `backdrop-filter: url(#svg)` 指向 `feDisplacementMap` 濾鏡，可加三通道錯位做色散 | 僅 Chromium | 偵測到才開啟的加強版 |
| 降級 | `prefers-reduced-transparency` → 不透明底；強制色彩模式 → 系統色 | 全部 | a11y |

兩個實作陷阱：Safari 會正常解析 `backdrop-filter: url(#f)` 卻什麼都不畫，所以 `@supports` 會誤判，[要用 UA 或實際渲染檢測](https://dev.to/devyatov/liquid-glass-on-the-web-6-ways-to-build-it-with-css-and-svg-3m07)；Safari 的 `-webkit-backdrop-filter` 內 [不吃 CSS 變數](https://www.buildmvpfast.com/blog/liquid-glass-css-backdrop-filter-recipes-2026)，數值要寫死。想在 Safari 也做出折射，[Aave 的工程筆記](https://aave.com/design/building-glass-for-the-web) 記錄了濾鏡 ID 快取、尺寸上限等坑，可當進階題目。

### 互動與狀態

- 每個組件提供狀態面板：hover、pressed、focus、disabled、selected，加上尺寸、亮暗、強調色、新舊樣式（Sequoia 與 Tahoe）。
- 狀態用 XState 定義成狀態機，同一份定義同時驅動展示與「目前狀態」說明文字，避免兩者不一致。
- 動畫以 120 到 200 ms ease-out 為基準，尊重 `prefers-reduced-motion`。
- 鍵盤行為要做：Tab 移焦點、空白鍵觸發、方向鍵在 segmented 與 radio 之間移動，這是 a11y 加分點也是辭典內容的一部分。

## 法律與授權

不能把 SF Pro 字型檔或 SF Symbols 圖示放進網站；改用系統字型堆疊與開源圖示，並加上非官方聲明即可安全上線。以下是整理，不是法律意見。

| 素材 | 限制 | 替代做法 |
| --- | --- | --- |
| SF Pro 字型檔 | 授權寫明只能用於製作 Apple 平台軟體的 UI mock-up，[Apple 論壇回覆明確表示不能用於網頁 app](https://developer.apple.com/forums/thread/733267)；也不可嵌入或散佈 | `font-family: system-ui, -apple-system, "Helvetica Neue", sans-serif`：在 Mac 上自動呈現 San Francisco，其他平台退回系統字，完全不碰字型檔 |
| SF Symbols | 授權限定 Apple 平台 app，[論壇回覆直接說網站不行](https://developer.apple.com/forums/thread/837003)；Apple 硬體與服務類符號另有限制 | 自繪 SVG，或用 Lucide、Phosphor 等開源圖示；在辭典裡只寫 SF Symbol 的名稱字串（例如 `gearshape`）當資料，不顯示圖形 |
| Apple 截圖 | 截圖含 Apple 的介面與圖示，著作權歸 Apple | 以自己用 CSS 重現的畫面為主；真要放截圖，限少量、標註來源、只作說明用途 |
| 商標名稱 | 可以描述性使用 macOS、AppKit、SwiftUI 等名稱 | 頁尾加聲明：非 Apple 官方、未獲背書；MacVue 的 README 就是這樣寫 |
| HIG 文字 | Apple 著作 | 只引用名稱、自己改寫說明、附原文連結，不複製段落 |

實務上：首頁與 README 都不放 Apple logo；網站名稱避免使用「Apple」或「Mac」開頭的品牌式命名，降低商標疑慮。

## 架構設計

純靜態網站即可：組件資料寫成版本控管的 YAML，建置時產生頁面與搜尋索引，不需要後端或資料庫。

### 資料 schema（每個組件一個檔案）

```yaml
id: pop-up-button
name: { en: Pop-up button, zh: 彈出式按鈕 }
aliases: [popup menu, dropdown, select, 下拉選單]
category: menus-and-actions
describe:                 # 白話描述，供模糊搜尋
  - 點開後選一個值，按鈕上會顯示目前選的那個
api:
  appkit: NSPopUpButton
  swiftui: "Picker(.menu)"
  web: "<select>"          # 最接近的 Web 對應
hig: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons
confusedWith: [pull-down-button, combo-box]
states: [default, hover, pressed, focus, disabled]
sizes: [mini, small, regular, large]
since: { macos: "10.0", swiftui: "macOS 11" }
prompt: >                  # 可複製給 coding agent
  A macOS-style pop-up button (NSPopUpButton) that shows the current selection...
status: verified           # draft | verified，對應是否已逐項核對 Apple 文件
```

### AI prompt 關鍵字欄位

每個條目都有 `prompt` 欄位，讓使用者一鍵複製給 AI。網站上的「Copy prompt」按鈕可切換 coding 與 image 兩種版本。

```yaml
prompt:
  keywords: [macOS pop-up button, NSPopUpButton, SwiftUI Picker menu style]
  descriptors: [shows current selection, up-down chevron on right, rounded rect bezel]
  avoid: [pull-down menu, unstyled web select]
  coding: >
    Use a macOS-style pop-up button (NSPopUpButton) that shows the current
    selection with an up-down chevron on the right, not a pull-down menu.
  image: >          # 選填；風格類條目必填
    macOS pop-up button, rounded rect, up-down chevron, light mode, crisp UI
```

| 欄位 | 寫法規範 | coding 版 | image 版 |
| --- | --- | --- | --- |
| `keywords` | 英文；第一個是最通用的正式名稱，後接平台 API 名、別名；3 到 5 個 | 全用 | 只用第一個 |
| `descriptors` | 外觀與行為特徵，每項 2 到 6 個英文字 | 外觀 + 行為 | 只用外觀 |
| `avoid` | 最容易被 AI 誤做成的相似元件，取自「易混淆對照」 | 寫成「not a …」 | 當 negative prompt |
| `coding` | 一句話，格式：Use a {keyword} that {descriptors}, not {avoid}. | 必填 | — |
| `image` | 逗號分隔的視覺關鍵字，不放 API 名稱 | — | 組件選填，風格必填 |

`coding` 與 `image` 可由前三個欄位自動組出，只在需要微調時才手寫；CI 檢查 `keywords` 不得為空，且 `avoid` 中的名稱必須是辭典裡存在的條目。

### 技術棧

| 層 | 選擇 | 理由 |
| --- | --- | --- |
| 框架 | Vue 3 + TypeScript + Vite | 你的主力；也可評估 VitePress 直接拿到路由與 SSG |
| 預渲染 | `vite-ssg` 或 VitePress | 每個組件一頁靜態 HTML，SEO 與分享連結都好 |
| 資料 | YAML + Zod 驗證 | CI 擋下缺欄位或壞連結 |
| 搜尋 | Fuse.js（模糊）或 Pagefind（全文、建置時索引） | 中英文、別名、白話描述都要能搜到 |
| 狀態 | XState v5 | 狀態切換與說明同源 |
| 樣式 | 原生 CSS + 自訂屬性，不用 Tailwind | 重現 macOS 需要精細控制，也更能展示 CSS 能力 |
| 測試 | Vitest + Playwright 視覺回歸 | 截圖比對防止樣式退化 |
| 部署 | Firebase Hosting 或 GitHub Pages + Actions | 你熟 Firebase；Pages 對開源專案最直覺 |

## 履歷化策略

招募者通常只看 README 首屏與線上 demo 30 秒，所以要讓「做得精緻」和「有技術深度」在首屏就看得到。

- **README 首屏**：一句定位、一張 GIF（切換平台與亮暗色的過程）、線上連結、技術棧徽章。
- **「How it's built」段落**：寫三個技術決策，例如「用 Swift 量測 AppKit 尺寸產生 token」「Liquid Glass 漸進增強與 Safari 偵測」「概念層資料模型讓一頁並列四平台」。這比功能清單更能證明思考能力。
- **可驗證的品質指標**：Lighthouse 四項分數、axe a11y 零錯誤、Playwright 視覺回歸覆蓋率、組件與概念數量，放進 README 並由 CI 自動更新。
- **工程紀律**：Conventional Commits、PR 模板、`CONTRIBUTING.md`（教人如何新增一個概念 YAML），以及 `good first issue` 標籤，讓專案看起來是可維護的開源，不是一次性作品。
- **寫一篇技術文章**：例如「在網頁上重現 macOS Tahoe 控制項的量測方法」，發在 dev.to 或 Medium 並連回 repo；這類文章常是流量與 star 的主要來源。
- **切入熱門話題**：每個概念頁提供一鍵複製的 prompt，給 Claude Code 等 coding agent 使用，這正是 NameThatUI 的主打情境。

## 路線圖

第 1 期是唯一必須完整做完才對外公開的階段；之後每期都能獨立上線。時程依你可投入的時間而定，所以這裡只列順序與驗收條件，不排日期。

## 參考來源

- [NameThatUI 介紹（Design Compass）](https://designcompass.org/en/2026/08/25/namethatui-visual-dictionary/)
- [NameThatUI 介紹（FutureTools）](https://futuretools.io/tools/namethatui-bpnutg)
- [The Component Gallery（EveryDev.ai）](https://www.everydev.ai/tools/the-component-gallery)
- [antonreshetov/macvue](https://github.com/antonreshetov/macvue)
- [barbaramartina/swiftuicatalog](https://github.com/barbaramartina/swiftuicatalog)
- [NucleusFramework/compose-macos-26-ui](https://github.com/NucleusFramework/compose-macos-26-ui/wiki)
- [PuruVJ/macos-preact](https://github.com/puruvj/macos-preact)、[react-desktop](https://github.com/langyo/react-desktop)
- [Apple HIG 2026-05 鏡像（組件分類）](https://zff.dev/sprint819/hig26)
- [macOS 系統色輸出 gist](https://gist.github.com/andrejilderda/8677c565cddc969e6aae7df48622d47c)
- [Firefox：macOS AccentColor 防指紋提案](https://bugzilla.mozilla.org/show_bug.cgi?id=2046186)
- [Liquid Glass on the Web: 6 Ways（DEV）](https://dev.to/devyatov/liquid-glass-on-the-web-6-ways-to-build-it-with-css-and-svg-3m07)
- [Liquid Glass backdrop-filter recipes](https://www.buildmvpfast.com/blog/liquid-glass-css-backdrop-filter-recipes-2026)
- [Aave：Building Glass for the Web](https://aave.com/design/building-glass-for-the-web)
- [Apple 論壇：SF 字型能否用於網頁](https://developer.apple.com/forums/thread/733267)
- [Apple 論壇：SF Symbols 用於網站](https://developer.apple.com/forums/thread/837003)
- [iOS vs Android 元件命名對照（uxdesign.cc）](https://uxdesign.cc/nomenclature-of-mobile-app-visual-elements-android-vs-ios-93685e8ef085)
- [iOS 與 Android 32 項設計差異（uxdesign.cc）](https://uxdesign.cc/ios-vs-android-design-630340a73ee6)
- [Material Design 元件總覽（Android Developers）](https://developer.android.com/design/ui/mobile/guides/components/material-overview?hl=zh-cn)
