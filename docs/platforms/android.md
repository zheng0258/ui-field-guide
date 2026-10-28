<!-- Exported from Claude Docs: https://claude.ai/artifact/AGvk119bt7eJaPVP43R8Vu (rev 6). The online doc is the source of truth. -->

# Android UI 組件對照

2026-10-27 · @yobbo

本文件是「跨平台 UI 組件辭典」的 Android 篇，以 Material Design 3 為準，格式與 macOS、iOS 篇一致。

## 組件總表

Material 3 分為行動、容器、溝通、導覽、選擇、文字輸入六大類，[依此分類](https://www.skills.sh/shelbeely/shelbeely-agent-skills/material-design-3-components) 約 40 個組件，建議 MVP 首批 20 個。標「Expressive」者為 M3 Expressive 新增或改版。Compose 與 View（Material Components for Android）API 依官方函式庫整理，上線前需對 m3.material.io 與 developer.android.com 逐項驗證。

| 分類 | M3 名稱 | 中文 | Jetpack Compose | View（MDC） | 最接近的 iOS | MVP |
| --- | --- | --- | --- | --- | --- | --- |
| 行動 Action | Buttons（filled、tonal、outlined、elevated、text） | 按鈕 | `Button`、`FilledTonalButton`、`OutlinedButton` 等 | `MaterialButton` | Button | 是 |
| 行動 | Floating action button（FAB） | 浮動動作按鈕 | `FloatingActionButton` | `FloatingActionButton` | 無；以工具列主要按鈕取代 | 是 |
| 行動 | Extended FAB | 延伸浮動按鈕 | `ExtendedFloatingActionButton` | `ExtendedFloatingActionButton` | 無 |  |
| 行動 | FAB menu（Expressive） | 浮動按鈕選單 | `FloatingActionButtonMenu` | — | 無 |  |
| 行動 | Icon buttons | 圖示按鈕 | `IconButton` | `MaterialButton`（icon） | Button（僅圖示） | 是 |
| 行動 | Segmented buttons | 分段按鈕 | `SingleChoiceSegmentedButtonRow` | `MaterialButtonToggleGroup` | Segmented control | 是 |
| 行動 | Button groups（Expressive） | 按鈕群組 | `ButtonGroup` | — | 無官方元件 |  |
| 行動 | Split buttons（Expressive） | 分割按鈕 | `SplitButtonLayout` | — | 無；macOS 有類似分段下拉 |  |
| 容器 Containment | Cards | 卡片 | `Card`、`ElevatedCard`、`OutlinedCard` | `MaterialCardView` | GroupBox、inset grouped list | 是 |
| 容器 | Carousel | 輪播 | `HorizontalMultiBrowseCarousel` | `CarouselLayoutManager` | 無官方元件 |  |
| 容器 | Divider | 分隔線 | `HorizontalDivider` | `MaterialDivider` | `Divider` |  |
| 容器 | Lists | 列表 | `ListItem` | `RecyclerView` | List | 是 |
| 容器 | Bottom sheets | 底部表單 | `ModalBottomSheet` | `BottomSheetDialogFragment` | Sheet（detents） | 是 |
| 容器 | Side sheets | 側邊表單 | — | `SideSheetDialog` | Inspector（iPad） |  |
| 溝通 Communication | Badges | 徽章 | `BadgedBox`、`Badge` | `BadgeDrawable` | Badge |  |
| 溝通 | Dialogs | 對話框 | `AlertDialog` | `MaterialAlertDialogBuilder` | Alert | 是 |
| 溝通 | Progress indicators | 進度指示器 | `LinearProgressIndicator`、`CircularProgressIndicator` | `LinearProgressIndicator` | Progress view | 是 |
| 溝通 | Loading indicator（Expressive） | 載入指示器 | `LoadingIndicator` | — | Activity indicator |  |
| 溝通 | Snackbar | 底部提示列 | `Snackbar`、`SnackbarHost` | `Snackbar` | 無原生元件 | 是 |
| 溝通 | Tooltips（plain、rich） | 工具提示 | `PlainTooltip`、`RichTooltip` | `TooltipDrawable` | 無；iPad 指標懸停才有 |  |
| 導覽 Navigation | Top app bar（small、center、medium、large） | 頂部應用列 | `TopAppBar`、`CenterAlignedTopAppBar` 等 | `MaterialToolbar` | Navigation bar | 是 |
| 導覽 | Bottom app bar / Toolbars（Expressive 改為 docked 與 floating toolbar） | 底部應用列、工具列 | `BottomAppBar`、`HorizontalFloatingToolbar` | `BottomAppBar` | Toolbar |  |
| 導覽 | Navigation bar | 導覽列（底部） | `NavigationBar` | `BottomNavigationView` | Tab bar | 是 |
| 導覽 | Navigation drawer | 導覽抽屜 | `ModalNavigationDrawer` | `NavigationView` + `DrawerLayout` | Sidebar（iPad） |  |
| 導覽 | Navigation rail | 導覽軌 | `NavigationRail` | `NavigationRailView` | Sidebar（收合） |  |
| 導覽 | Tabs（primary、secondary） | 分頁標籤 | `PrimaryTabRow`、`SecondaryTabRow` | `TabLayout` | Segmented control | 是 |
| 導覽 | Search | 搜尋列 | `SearchBar`、`DockedSearchBar` | `SearchBar` + `SearchView` | Search field | 是 |
| 選擇 Selection | Checkbox | 核取方塊 | `Checkbox` | `MaterialCheckBox` | 無；iOS 用 Toggle 或勾號列 |  |
| 選擇 | Chips（assist、filter、input、suggestion） | 晶片標籤 | `AssistChip`、`FilterChip` 等 | `Chip` | Search tokens（部分） | 是 |
| 選擇 | Date pickers | 日期選擇器 | `DatePicker`、`DatePickerDialog` | `MaterialDatePicker` | Date picker | 是 |
| 選擇 | Time pickers | 時間選擇器 | `TimePicker` | `MaterialTimePicker` | Date picker（時間模式） |  |
| 選擇 | Menus | 選單 | `DropdownMenu`、`ExposedDropdownMenuBox` | `PopupMenu`、`MaterialAutoCompleteTextView` | Menu、Pop-up button | 是 |
| 選擇 | Radio button | 單選鈕 | `RadioButton` | `MaterialRadioButton` | 無；用勾號列表 |  |
| 選擇 | Sliders | 滑桿 | `Slider`、`RangeSlider` | `Slider`、`RangeSlider` | Slider | 是 |
| 選擇 | Switch | 開關 | `Switch` | `MaterialSwitch` | Toggle | 是 |
| 文字輸入 | Text fields（filled、outlined） | 文字欄 | `TextField`、`OutlinedTextField` | `TextInputLayout` | Text field | 是 |

## MVP 組件的 AI prompt 關鍵字

欄位規範同主研究報告；coding 句子格式為 Use a {keywords 第一項} that {descriptors}, not {avoid}.

| 組件 | keywords | descriptors | avoid |
| --- | --- | --- | --- |
| Button | Material 3 filled button, Compose Button, MaterialButton | full-pill shape, tonal or filled container, label in sentence case | iOS rounded rect button |
| FAB | Material 3 floating action button, FloatingActionButton | rounded square container, bottom-right, single primary icon | iOS toolbar button |
| Icon button | Material 3 icon button, Compose IconButton | 48dp touch target, circular state layer on press | plain clickable icon |
| Segmented button | Material 3 segmented button, SingleChoiceSegmentedButtonRow | outlined pill segments, checkmark on selected | iOS segmented control |
| Card | Material 3 card, ElevatedCard, OutlinedCard | rounded 12dp corners, tonal surface or outline | web card with drop shadow |
| List | Material 3 list item, Compose ListItem | leading icon or avatar, headline and supporting text, trailing action | iOS inset grouped list |
| Bottom sheet | Material 3 modal bottom sheet, ModalBottomSheet | drag handle, rounded top corners, scrim behind | iOS action sheet |
| Dialog | Material 3 dialog, AlertDialog | rounded 28dp corners, title, text buttons bottom-right | iOS alert with stacked buttons |
| Progress indicator | Material 3 progress indicator, LinearProgressIndicator, CircularProgressIndicator | rounded track, gap between active and inactive track | iOS spinner |
| Snackbar | Material 3 snackbar, Compose Snackbar | dark bar at bottom, short text, one optional action | toast |
| Top app bar | Material 3 top app bar, TopAppBar, CenterAlignedTopAppBar | navigation icon left, title, action icons right, color shift on scroll | iOS navigation bar |
| Navigation bar | Material 3 navigation bar, Compose NavigationBar | bottom bar, pill-shaped active indicator behind icon, labels | iOS tab bar |
| Tabs | Material 3 tabs, PrimaryTabRow | underline indicator, swipeable content | segmented button |
| Search | Material 3 search bar, Compose SearchBar | full-pill field, leading search icon, expands to search view | iOS search bar |
| Chips | Material 3 chips, FilterChip, AssistChip | small rounded rect, checkmark when selected | badge |
| Date picker | Material 3 date picker, DatePickerDialog | month calendar grid, circular selected day, header with date | iOS wheel picker |
| Menu | Material 3 dropdown menu, ExposedDropdownMenuBox | elevated surface, list of items, appears from anchor | iOS context menu |
| Slider | Material 3 slider, Compose Slider | thick track, vertical handle, value indicator on drag | iOS slider with round thumb |
| Switch | Material 3 switch, Compose Switch | wide track, handle grows when on, optional check icon | iOS switch |
| Text field | Material 3 outlined text field, OutlinedTextField | label floats to border on focus, supporting text below | iOS borderless text field |

## 常被問名稱的系統元素

| 名稱 | 中文 | API | 白話描述（搜尋用） |
| --- | --- | --- | --- |
| System navigation bar | 系統導覽列 | `WindowInsets.navigationBars` | 螢幕最下方的返回、主畫面鍵或手勢條 |
| Status bar | 狀態列 | `WindowInsets.statusBars` | 最上方顯示時間與電量 |
| Edge-to-edge | 全螢幕延伸 | `enableEdgeToEdge()` | 內容畫到狀態列與導覽列底下 |
| Predictive back | 預測式返回 | `PredictiveBackHandler` | 返回手勢時先預覽上一頁 |
| Toast | 吐司訊息 | `Toast.makeText` | 系統層級短暫小字提示，無按鈕 |
| Ripple | 漣漪效果 | `ripple()`、`indication` | 點擊時擴散的水波紋 |
| Pull to refresh | 下拉更新 | `PullToRefreshBox` | 往下拉轉圈重新整理 |
| Swipe to dismiss | 滑動移除 | `SwipeToDismissBox` | 列表項目滑掉刪除 |
| Scaffold | 頁面骨架 | `Scaffold` | 放 top bar、FAB、snackbar 的版面容器 |
| Quick Settings tile | 快速設定磚 | `TileService` | 下拉通知欄的開關方塊 |
| App widget | 桌面小工具 | Jetpack Glance、`AppWidgetProvider` | 主畫面上的資訊方塊 |
| Dynamic color | 動態配色 | `dynamicLightColorScheme` | App 顏色跟著桌布變 |
| Overflow menu | 溢出選單 | `DropdownMenu` + 三點圖示 | 右上角三個點 |
| Exposed dropdown | 外露式下拉選單 | `ExposedDropdownMenuBox` | 長得像輸入框的下拉選擇 |

## 易混淆對照、Expressive 與網頁重現

### 易混淆對照

| 一組 | 怎麼分 |
| --- | --- |
| Navigation bar（M3）vs System navigation bar | M3 的是 App 內底部分頁導覽；系統導覽列是作業系統的返回與主畫面區 |
| Navigation bar（M3）vs Navigation bar（iOS） | M3 在底部、對應 iOS Tab bar；iOS 的在頂部、對應 M3 Top app bar |
| Snackbar vs Toast | Snackbar 屬 App 版面、可帶一個動作按鈕；Toast 是系統層級、無互動 |
| Dialog vs Bottom sheet | Dialog 打斷流程要求決定；Bottom sheet 補充內容或列出動作 |
| Tabs vs Segmented buttons | Tabs 切換同層內容頁；Segmented buttons 是選項或篩選 |
| Navigation bar vs Navigation rail vs Navigation drawer | 依螢幕寬度：手機用 bar，平板用 rail，大螢幕或項目多用 drawer |
| Chips 四種 | Assist 觸發動作、Filter 切換篩選、Input 代表輸入值（可刪除）、Suggestion 給建議 |
| FAB vs Extended FAB | 一般 FAB 只有圖示；Extended 有文字標籤，捲動時常收合成 FAB |
| Menu vs Exposed dropdown | Menu 從按鈕或圖示彈出；Exposed dropdown 外觀是欄位、顯示目前值 |

### M3 Expressive 帶來的變化

M3 Expressive 新增 button groups、split buttons、FAB menu、loading indicator、floating toolbar，並加強形狀變形與彈簧動畫。辭典應同時收錄改版前後名稱（例如 bottom app bar 與 docked toolbar），以 `since` 欄位標註版本，避免使用者查舊名查不到。

### 網頁重現的優勢

Android 是四平台中網頁重現成本最低的：Roboto 字型與 Material Symbols 圖示皆為開源授權，可直接在網頁使用；M3 以公開的 design token（顏色、形狀、字級、動態）定義，可直接轉成 CSS 變數。相較之下，Apple 平台的字型與 SF Symbols 都不能嵌入網頁。

## 參考來源

- [Material Design 3 組件分類（skills.sh）](https://www.skills.sh/shelbeely/shelbeely-agent-skills/material-design-3-components)
- [Material Design 元件總覽（Android Developers）](https://developer.android.com/design/ui/mobile/guides/components/material-overview?hl=zh-cn)
- [iOS vs Android 元件命名對照（uxdesign.cc）](https://uxdesign.cc/nomenclature-of-mobile-app-visual-elements-android-vs-ios-93685e8ef085)
- [iOS 與 Android 32 項設計差異（uxdesign.cc）](https://uxdesign.cc/ios-vs-android-design-630340a73ee6)
- [Sheet、dialog、snackbar 的選擇（uxdesign.cc）](https://uxdesign.cc/65af3a0b4aeb)
