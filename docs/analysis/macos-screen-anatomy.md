# macOS 畫面基本元素分析

- 日期：2026-10-29
- 範圍：一個 macOS 26 桌面畫面由哪些元素組成，對照 UI Field Guide 目前 36 個 macOS 條目，找出缺口與擬真度問題。
- 來源：`docs/research.md` 的 HIG 對照表（約 57 項），以及 `content/component/*.yaml`。名稱與 API 都還沒對照官方文件驗證。

macOS 畫面可分成四層。第 2、3 層（視窗內的控制項、暫時浮出的層）大致已經齊全；缺口集中在第 1 層的系統框架和第 2 層的視窗骨架，也就是「視窗本身」和「放內容的容器」。

## 四層結構

| 層 | 說明 | 元素 | 已收錄 |
| --- | --- | --- | --- |
| 1. 系統框架 | 系統擁有、App 只能擴充 | 選單列（App 選單）、選單列附加項目、控制中心、Dock、桌面小工具、通知 | 選單列、通知 |
| 2. 視窗骨架 | 每個視窗的結構 | 視窗、標題列與紅黃綠按鈕、工具列、視窗分頁、側邊欄、分割視圖、內容區（捲動視圖）、檢閱器、底部狀態列 | 工具列、側邊欄、檢閱器 |
| 3. 內容與控制項 | 視窗內的資料視圖與輸入 | 表格、大綱、集合視圖、欄位瀏覽器、文字與圖片視圖、按鈕、各種選擇與輸入控制項、狀態指示器 | 大部分控制項 |
| 4. 暫時層 | 疊在畫面上、會消失 | 選單、右鍵選單、浮出框、表單視窗、警示框、面板與 HUD、說明標籤 | 除了面板與 HUD 都有 |

## 已收錄（36 項）

| 層 | 條目 |
| --- | --- |
| 系統框架 | Menu bar、Notification |
| 視窗骨架 | Toolbar、Sidebar、Inspector |
| 內容：資料 | Table view、Outline view、Box、Separator |
| 內容：動作 | Push button、Pop-up button、Pull-down button、Share menu |
| 內容：導覽與搜尋 | Search field、Path control、Token field、Tab view、Disclosure control |
| 內容：選擇與輸入 | Checkbox、Radio buttons、Switch、Segmented control、Slider、Stepper、Text field、Combo box、Date picker、Color well |
| 內容：狀態 | Progress indicator、Spinner、Level indicator |
| 暫時層 | Context menu、Popover、Sheet、Alert、Help tag |

handoff 的 macOS 首批 20 項中，只有「Menu」沒有獨立條目。它目前分散在 Menu bar、Pull-down button、Context menu 三個概念裡。

## 缺口

> 2026-10-29 更新：高優先的 Window、Scroll view、Split view、Collection view 已補上（Window 只有 macOS，其餘三個含 Web 範例），macOS 共 40 項。

依「使用者多常看到、多常需要叫出名字」排序。「Web 對應」欄是建立概念時可以一起填的 Web 欄。

| 優先 | 元素 | AppKit / SwiftUI | Web 對應 | 為什麼重要 |
| --- | --- | --- | --- | --- |
| 高（已補） | Window（含 Title bar、traffic lights） | `NSWindow`、`standardWindowButton` / `WindowGroup` | — | 每個 App 都有，卻是最常被叫錯名字的部分 |
| 高（已補） | Scroll view（含捲軸） | `NSScrollView` / `ScrollView` | `overflow: auto` | 內容區的本體；捲軸會自動隱藏也是 macOS 特色 |
| 高（已補） | Split view | `NSSplitView` / `HSplitView`、`NavigationSplitView` | 可拖曳調整的分欄 | 側邊欄、內容、檢閱器三欄背後的容器 |
| 高（已補） | Collection view | `NSCollectionView` / `LazyVGrid` | CSS grid 卡片 | Finder 圖示檢視、照片格狀檢視 |
| 中 | Window tabs | `NSWindow.tabbingMode` / 系統內建 | 瀏覽器分頁 | 常與 Tab view 搞混，應列為易混淆對照 |
| 中 | Status bar / Path bar | 視窗底部的 `NSView` 區塊 | footer 狀態列 | Finder、Xcode 底部那條 |
| 中 | Column view（欄位瀏覽器） | `NSBrowser` | — | Finder 直欄檢視，macOS 特有 |
| 中 | Panel / HUD | `NSPanel`（`.hudWindow`）/ `UtilityWindow` | 非模態 `<dialog>` | 與 Sheet、Alert 容易混淆（研究文件已列） |
| 中 | Menu bar extra | `NSStatusItem` / `MenuBarExtra` | — | 選單列右上角的常駐圖示 |
| 中 | Dock（含 badge、Dock menu） | `NSDockTile`、`applicationDockMenu` | — | 畫面上最顯眼的系統元素 |
| 低 | Label、Text view、Image view、Image well、Web view | `NSTextField`（label）、`NSTextView`、`NSImageView`、`WKWebView` | `<label>`、`<textarea>`、`<img>`、`<iframe>` | 名稱直白，多半不需要查 |
| 低 | Rating indicator | `NSLevelIndicator`（rating） | 星等 radio group | 與 Level indicator 同一個類別、不同樣式 |
| 低 | Help button | `NSButton`（`.helpButton`）/ `HelpLink` | — | 圓形問號按鈕 |
| 低 | Widgets、Charts | WidgetKit、Swift Charts | — | 範圍大，比較適合放「模式與效果」類 |

## 跨元素特性（不是組件，但決定外觀）

這些應該歸到 `pattern` 或 `style` 類別，或做成範例的狀態切換，而不是新增組件：

| 特性 | 現況 | 建議 |
| --- | --- | --- |
| 作用中與非作用中視窗 | 範例只畫作用中視窗 | 加切換：非作用中時紅黃綠按鈕變灰，選取色改用 `--macos-color-unemphasized-selected-content-background`（token 已經量到） |
| Control size（mini / small / regular / large） | token 已量好四種尺寸，範例只用 regular | 給控制項範例加尺寸切換；這也是 macOS 和 iOS 最大的差別之一 |
| 強調色 | 寫死為系統藍 | 範例加強調色切換；`--macos-color-control-accent` 已經是變數 |
| 材質（vibrancy、Liquid Glass） | 選單與通知用了模糊，側邊欄沒有 | 建一個 `style` 條目「Material / Liquid Glass」，注意 Safari 的 `backdrop-filter` 限制（CLAUDE.md） |
| 焦點環 | 用 CSS outline 近似 | 建一個 `pattern` 條目「Focus ring」，示範鍵盤導覽 |

## 現有範例的擬真度問題

- **Switch**：四種 control size 量出來都是 54×24，可能是 `NSSwitch` 不照 `controlSize` 回報尺寸，需要確認。
- **側邊欄**：macOS 26 的側邊欄是浮在視窗內、帶圓角的玻璃面板，範例目前是貼齊左邊的平面欄。
- **工具列**：macOS 26 把工具列項目分組放進玻璃膠囊裡，範例目前是各自獨立的按鈕。
- **選單列**：macOS 26 的選單列預設是透明的，範例是半透明模糊。

## 建議順序

依目前的平台優先序（Web → macOS → iOS → Android），macOS 的缺口排在 Web 的工作之後。輪到 macOS 時：

1. 先補「高」優先的 4 個概念：Window、Scroll view、Split view、Collection view。它們都有 Web 對應，可以順便補強 Web。
2. 再為現有範例加上「作用中與非作用中視窗」和「control size」切換。token 已經量好，只差範例。
3. 再補「中」優先的缺口，同時把 Window tabs 與 Tab view、Panel 與 Sheet 加進易混淆對照。
