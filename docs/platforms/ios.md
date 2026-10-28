<!-- Exported from Claude Docs: https://claude.ai/artifact/VGsW5SxSeUSt1VfsqawGuC (rev 6). The online doc is the source of truth. -->

# iOS UI 組件對照

2026-10-27 · @yobbo

本文件是「跨平台 UI 組件辭典」的 iOS 篇，格式與 macOS 研究報告一致，供網站資料建檔使用。

## 組件總表

iOS 適用的 HIG 組件約 45 個，建議 MVP 首批 17 個。分類依 [2026-05 的 HIG 鏡像](https://zff.dev/sprint819/hig26)；UIKit、SwiftUI 與 Android 對應為依官方 API 整理，上線前需逐項對 Apple 與 Material 文件驗證。「僅 iPad」表示 iPhone 上不常見或行為不同。

| 分類 | HIG 名稱 | 中文 | UIKit | SwiftUI | 最接近的 Android | MVP |
| --- | --- | --- | --- | --- | --- | --- |
| 內容 | Charts | 圖表 | — | `Chart` | 無官方元件 |  |
| 內容 | Image views | 圖片視圖 | `UIImageView` | `Image` | `Image` |  |
| 內容 | Text views | 文字視圖 | `UITextView` | `TextEditor` | 多行 `TextField` |  |
| 內容 | Web views | 網頁視圖 | `WKWebView` | `WebView`（26 起） | `WebView` |  |
| 版面 | Boxes | 群組框 | — | `GroupBox` | Card |  |
| 版面 | Collections | 集合視圖 | `UICollectionView` | `LazyVGrid` | `LazyVerticalGrid` |  |
| 版面 | Disclosure controls | 展開控制 | — | `DisclosureGroup` | 無官方元件 |  |
| 版面 | Labels | 標籤 | `UILabel` | `Text`、`Label` | `Text` |  |
| 版面 | Lists and tables | 列表 | `UITableView`、`UICollectionView` list | `List` | Lists（`ListItem`） | 是 |
| 版面 | Split views | 分割視圖（僅 iPad） | `UISplitViewController` | `NavigationSplitView` | List-detail 版面 |  |
| 選單與動作 | Activity views | 分享表單 | `UIActivityViewController` | `ShareLink` | 系統分享表單 | 是 |
| 選單與動作 | Buttons | 按鈕 | `UIButton` | `Button` | Buttons | 是 |
| 選單與動作 | Context menus | 長按選單 | `UIContextMenuInteraction` | `.contextMenu` | Menu（長按觸發） | 是 |
| 選單與動作 | Edit menus | 編輯選單 | `UIEditMenuInteraction` | 系統提供 | 文字選取工具列 |  |
| 選單與動作 | Home Screen quick actions | 主畫面快速動作 | `UIApplicationShortcutItem` | — | App shortcuts |  |
| 選單與動作 | Menus | 選單 | `UIMenu` | `Menu` | Menus | 是 |
| 選單與動作 | Pop-up buttons | 彈出式按鈕 | `UIButton`（`changesSelectionAsPrimaryAction`） | `Picker`（`.menu`） | Exposed dropdown menu |  |
| 選單與動作 | Pull-down buttons | 下拉式按鈕 | `UIButton`（`menu`） | `Menu` | Menu |  |
| 選單與動作 | Toolbars | 工具列（含頂部導覽列） | `UIToolbar`、`UINavigationBar` | `.toolbar`、`NavigationStack` | Top app bar、Bottom app bar | 是 |
| 導覽與搜尋 | Page controls | 頁面指示點 | `UIPageControl` | `TabView`（`.page`） | Pager 指示點（無官方元件） |  |
| 導覽與搜尋 | Search fields | 搜尋欄 | `UISearchController` | `.searchable` | Search bar | 是 |
| 導覽與搜尋 | Sidebars | 側邊欄（僅 iPad） | `UISplitViewController`（sidebar） | `NavigationSplitView` | Navigation drawer、rail |  |
| 導覽與搜尋 | Tab bars | 分頁列 | `UITabBarController` | `TabView` | Navigation bar | 是 |
| 呈現 | Action sheets | 動作表 | `UIAlertController`（`.actionSheet`） | `.confirmationDialog` | Modal bottom sheet | 是 |
| 呈現 | Alerts | 警示框 | `UIAlertController`（`.alert`） | `.alert` | Dialog | 是 |
| 呈現 | Popovers | 浮出框（主要 iPad） | `UIPopoverPresentationController` | `.popover` | Rich tooltip、Menu |  |
| 呈現 | Scroll views | 捲動視圖 | `UIScrollView` | `ScrollView` | 可捲動容器 |  |
| 呈現 | Sheets | 表單 | `UISheetPresentationController` | `.sheet` + `.presentationDetents` | Bottom sheet | 是 |
| 選擇與輸入 | Color wells | 顏色井 | `UIColorWell` | `ColorPicker` | 無官方元件 |  |
| 選擇與輸入 | Pickers | 選擇器（滾輪、日期） | `UIPickerView`、`UIDatePicker` | `Picker`（`.wheel`）、`DatePicker` | Date picker、Time picker | 是 |
| 選擇與輸入 | Segmented controls | 分段控制 | `UISegmentedControl` | `Picker`（`.segmented`） | Segmented button | 是 |
| 選擇與輸入 | Sliders | 滑桿 | `UISlider` | `Slider` | Slider | 是 |
| 選擇與輸入 | Steppers | 步進器 | `UIStepper` | `Stepper` | 無官方元件 |  |
| 選擇與輸入 | Text fields | 文字欄 | `UITextField` | `TextField`、`SecureField` | Text field（filled、outlined） | 是 |
| 選擇與輸入 | Toggles | 開關 | `UISwitch` | `Toggle` | Switch | 是 |
| 選擇與輸入 | Virtual keyboards | 螢幕鍵盤 | `keyboardType` | `.keyboardType` | IME |  |
| 狀態 | Activity rings | 活動圓環 | `HKActivityRingView` | — | 無 |  |
| 狀態 | Gauges | 量表 | — | `Gauge` | 無官方元件 |  |
| 狀態 | Progress indicators | 進度指示器 | `UIProgressView`、`UIActivityIndicatorView` | `ProgressView` | Progress indicators（linear、circular） | 是 |
| 系統體驗 | App Shortcuts | App 捷徑 | App Intents | App Intents | App shortcuts |  |
| 系統體驗 | Controls | 控制中心控制項 | — | `ControlWidget` | Quick Settings tile |  |
| 系統體驗 | Live Activities | 即時動態 | ActivityKit | ActivityKit | Live Updates 通知 |  |
| 系統體驗 | Notifications | 通知 | UserNotifications | UserNotifications | Notifications |  |
| 系統體驗 | Status bars | 狀態列 | `prefersStatusBarHidden` | `.statusBarHidden` | Status bar |  |
| 系統體驗 | Widgets | 小工具 | WidgetKit | WidgetKit | App widgets（Glance） |  |

## MVP 組件的 AI prompt 關鍵字

欄位規範同主研究報告；coding 句子格式為 Use a {keywords 第一項} that {descriptors}, not {avoid}.

| 組件 | keywords | descriptors | avoid |
| --- | --- | --- | --- |
| List | iOS inset grouped list, UITableView, SwiftUI List | rounded section cards, chevron accessory, hairline separators | Android Material list with dividers |
| Activity view | iOS share sheet, UIActivityViewController, ShareLink | app icon row, action list below, slides up from bottom | custom share modal |
| Button | iOS button, UIButton configuration, SwiftUI Button | filled, tinted, gray or plain style, capsule or rounded rect | Material elevated button |
| Context menu | iOS context menu, long-press menu, contextMenu | blurred background, lifted preview, action list | right-click menu |
| Menu | iOS menu, UIMenu, SwiftUI Menu | popup list from button, icons on right, inline sections | action sheet |
| Navigation bar | iOS navigation bar, UINavigationBar, NavigationStack toolbar | large title collapses on scroll, back chevron on left | Android top app bar |
| Search field | iOS search bar, UISearchController, searchable | rounded gray field, magnifying glass, Cancel button | Material search bar |
| Tab bar | iOS tab bar, UITabBarController, SwiftUI TabView | bottom bar, icon above label, floating glass style on iOS 26 | Material navigation bar |
| Action sheet | iOS action sheet, confirmationDialog | stacked action buttons, separate Cancel button at bottom | alert dialog |
| Alert | iOS alert, UIAlertController alert | centered card, title and message, side-by-side buttons | action sheet |
| Sheet | iOS sheet, UISheetPresentationController, presentationDetents | medium and large detents, grabber, swipe down to dismiss | full-screen modal |
| Picker | iOS wheel picker, UIDatePicker, SwiftUI DatePicker | rotating wheel columns or compact date button | Android calendar date picker dialog |
| Segmented control | iOS segmented control, UISegmentedControl, Picker segmented | sliding selected thumb, equal-width segments | Material tabs |
| Slider | iOS slider, UISlider | thin track, large round thumb with shadow | Material slider with value label |
| Text field | iOS text field, UITextField, SwiftUI TextField | rounded border or borderless in list, clear button | Material floating label field |
| Toggle | iOS switch, UISwitch, Toggle | green pill when on, white knob | checkbox |
| Progress indicator | iOS progress view, UIActivityIndicatorView, ProgressView | thin linear bar or spoked spinner | Material circular progress |

## 常被問名稱、但 HIG 未獨立成頁的項目

| 名稱 | 中文 | API | 白話描述（搜尋用） |
| --- | --- | --- | --- |
| Dynamic Island | 動態島 | ActivityKit（Live Activities 的呈現位置） | 螢幕上方黑色膠囊會變形 |
| Home indicator | 主畫面指示條 | `prefersHomeIndicatorAutoHidden` | 螢幕最下方那條橫線 |
| Safe area | 安全區域 | `safeAreaInsets`、`.safeAreaInset` | 避開瀏海與底部橫線的可用範圍 |
| Large title | 大標題 | `prefersLargeTitles`、`.navigationBarTitleDisplayMode(.large)` | 捲動時會縮小的粗大頁面標題 |
| Back button | 返回按鈕 | `UINavigationItem.backBarButtonItem` | 左上角的「〈 上一頁」 |
| Swipe actions | 滑動動作 | `UIContextualAction`、`.swipeActions` | 列表項目左滑出現刪除 |
| Pull to refresh | 下拉更新 | `UIRefreshControl`、`.refreshable` | 往下拉會轉圈重新整理 |
| Badge | 徽章 | `UITabBarItem.badgeValue`、`.badge` | 圖示右上角紅色數字 |
| Detents | 停駐高度 | `.presentationDetents` | 底部表單停在一半或全高 |
| Grabber | 抓取條 | `prefersGrabberVisible`、`.presentationDragIndicator` | 表單頂端那條小橫桿 |
| Disclosure indicator | 展開指示箭頭 | `accessoryType = .disclosureIndicator` | 列表右側的灰色「〉」 |
| Scope bar | 範圍列 | `scopeButtonTitles`、`.searchScopes` | 搜尋欄下方的分類切換 |
| Haptics | 觸覺回饋 | `UIFeedbackGenerator`、`.sensoryFeedback` | 按下時手機輕震 |
| Liquid Glass | 液態玻璃材質 | `.glassEffect`（26 起） | 會折射背景的半透明按鈕與列 |

## 易混淆對照與規格

### 易混淆對照

| 一組 | 怎麼分 |
| --- | --- |
| Navigation bar（iOS）vs Navigation bar（Android） | iOS 指頂部標題列；Material 3 指底部分頁導覽，對應 iOS 的 Tab bar |
| Action sheet vs Alert | Action sheet 給 2 個以上動作選項，從底部出現；Alert 是需要確認的訊息，置中出現 |
| Sheet vs Full-screen cover | Sheet 可停在部分高度、可下滑關閉；Full-screen cover 蓋滿螢幕，需明確關閉 |
| Context menu vs Edit menu | Context menu 長按物件出現動作；Edit menu 是選取文字後的剪下、拷貝、貼上列 |
| Pop-up button vs Pull-down button | Pop-up 顯示目前選的值；Pull-down 顯示固定標題、點開是動作 |
| Segmented control vs Tab bar | Segmented 在同一畫面切換檢視；Tab bar 切換 App 的頂層區塊 |
| Popover vs Sheet | iPhone 上 popover 預設會變成 sheet；iPad 上才是帶箭頭的浮出框 |
| Page control vs Segmented control | Page control 只顯示位置、可滑動翻頁；Segmented 是可點選的選項 |

### iOS 專屬規格（與 Android 對照）

| 項目 | iOS | Android |
| --- | --- | --- |
| 單位 | pt | dp |
| 最小觸控區 | 44 × 44 pt | 48 × 48 dp |
| 分隔線 | 0.5 pt（hairline） | 1 dp |
| 頂層導覽 | Tab bar 為主 | Navigation bar、drawer、rail |
| 返回 | 左上返回鈕 + 左緣滑動 | 系統返回手勢或按鈕 |
| 日期選擇 | 滾輪、compact、graphical 三種 | 日曆對話框 |
| 系統字型 | San Francisco（不可嵌入網頁，用 `system-ui`） | Roboto（開源） |
| 材質 | Liquid Glass、blur material | Tonal elevation、surface 色階 |

網頁重現 iOS 時，安全區域可用 `env(safe-area-inset-*)` 模擬，裝置外框用自繪 SVG，不要使用 Apple 官方裝置圖。

## 參考來源

- [Apple HIG 2026-05 鏡像（組件分類）](https://zff.dev/sprint819/hig26)
- [HIG：Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields.md)
- [iOS vs Android 元件命名對照（uxdesign.cc）](https://uxdesign.cc/nomenclature-of-mobile-app-visual-elements-android-vs-ios-93685e8ef085)
- [iOS 與 Android 32 項設計差異（uxdesign.cc）](https://uxdesign.cc/ios-vs-android-design-630340a73ee6)
- [Sheet、dialog、snackbar 的選擇（uxdesign.cc）](https://uxdesign.cc/65af3a0b4aeb)
- [Apple 論壇：SF 字型能否用於網頁](https://developer.apple.com/forums/thread/733267)
