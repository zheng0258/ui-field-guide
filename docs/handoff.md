# UI Field Guide：Handoff 開工文件

> 匯出自 Claude Docs：<https://claude.ai/artifact/N1CB3ZqpYbkp4FQLHxduvF>（2026-10-27 版）。線上文件為準；這裡是給 agent 讀的快照。

**UI Field Guide — Spot it, name it, prompt it.** 跨平台 UI 組件圖鑑：一個概念，四個平台的名字。本文件彙整研究階段的所有決策，供開工與交給 Claude Code 使用。

## 已定案決策

以下決策已在研究階段確定，開工時不需重新討論；如需變更，先改這張表再動程式。

| 項目 | 決策 | 理由 |
| --- | --- | --- |
| 名稱 | **UI Field Guide**，repo `ui-field-guide` | 美式野外圖鑑意象，「看到 → 叫出名字」；不含 Apple 等商標字 |
| 標語 | Spot it, name it, prompt it. | 對應三功能：視覺辨識、正式名稱、AI prompt |
| 目的 | 自用參考 + GitHub 履歷作品 | 實用優先、做得精緻、展示技術深度 |
| 平台 | macOS、iOS、Android、Web 四平台 | — |
| iOS 與 Android | **不合併**為 mobile | 名稱、獨有元件、行為都不同；「Navigation bar」在兩邊指不同東西 |
| 資料單位 | 平台中立的「概念」，底下列各平台實作 | 一頁並列四平台；某平台沒有也是有用資訊 |
| 類別 | 組件、風格、模式與效果，三大類分開 | 欄位與示範方式差異大；搜尋與資料基礎共用 |
| AI prompt | 每條目含 `prompt` 欄位，coding 版必填、image 版選填（風格必填） | 讓使用者一鍵複製給 coding agent 或圖像生成 |
| 開發順序 | macOS → iOS → Android；Web 欄從第一天就填（2026-10-28 調整：示範先做 Web，見 `docs/decisions/0002`；2026-10-29 起優先序為 Web → macOS → iOS → Android） | Apple 兩平台共用詞彙與 token；Web 是大家最熟的參照 |
| 使用流程 | 平台 → 組件：先選平台，再從縮圖找組件（2026-10-28 新增，見 `docs/decisions/0002`） | 使用者通常知道自己在看哪個平台，且是先「看到」才知道名字 |
| 部署形式 | 純靜態網站，無後端 | 資料是版本控管的 YAML |

## 範圍

MVP 只做「組件」類別的 macOS 20 項；完整清單與各平台 API 對照都在平台文件裡，這裡只列首批。

| 類別 | 內容 | 時程 | 來源文件 |
| --- | --- | --- | --- |
| 組件 | 四平台對照，約 57（macOS）、45（iOS）、40（Android）、45（Web）項 | 第 1 至 3 期 | 四份平台文件 |
| 風格 | Glassmorphism、Neumorphism、Brutalism、Bento grid、Aurora gradient、Y2K 等 | 第 2 期後 | 尚未建檔 |
| 模式與效果 | 版面、狀態回饋、動態、視覺效果；排版與色彩術語當附錄 | 第 3 期後 | 尚未建檔 |

### 首批 MVP（macOS，20 項）

Disclosure control、Table view、Outline view、Button、Context menu、Menu、Pop-up button、Pull-down button、Toolbar、Search field、Sidebar、Alert、Popover、Sheet、Segmented control、Slider、Stepper、Text field、Toggle（Switch）、Progress indicator。

每項必須具備：四平台名稱欄（iOS、Android、Web 可先只填名稱與 API，不做示範）、可互動 CSS 示範、狀態切換、亮暗色、`prompt` 欄位、至少一組易混淆對照。

### 後續 MVP

- **iOS（17 項）**：List、Activity view、Button、Context menu、Menu、Navigation bar、Search field、Tab bar、Action sheet、Alert、Sheet、Picker、Segmented control、Slider、Text field、Toggle、Progress indicator。
- **Android（20 項）**：Button、FAB、Icon button、Segmented button、Card、List、Bottom sheet、Dialog、Progress indicator、Snackbar、Top app bar、Navigation bar、Tabs、Search、Chips、Date picker、Menu、Slider、Switch、Text field。

### 明確不做

- 不做 watchOS、tvOS、visionOS。
- 不提供可安裝的組件庫套件；示範程式碼只服務辭典本身。
- 不使用 Apple 截圖當主要視覺。

## 資料模型

一個概念一個 YAML 檔，放在 `content/<kind>/<id>.yaml`。共用基礎欄位，再依 `kind` 加專屬欄位，以 Zod discriminated union 驗證。

### 組件概念範例

見 [`content/component/popup-select.yaml`](../content/component/popup-select.yaml)（與原文件範例相同，`coding: null` 表示由 keywords、descriptors、avoid 自動組出）。

### 驗證規則（CI 必過）

| 規則 | 說明 |
| --- | --- |
| `id` 唯一且為 kebab-case | 與檔名一致 |
| `kind` 決定必填欄位 | component 必有 `platforms`；style 必有 `traits`、`cssKeys`、`prompt.image` |
| `platforms` 至少一個 | 某平台沒有就省略該鍵，不留空物件 |
| `confusedWith`、`prompt.avoid` 指向存在的 `id` | 防止斷鏈 |
| `prompt.keywords` 至少 2 個英文詞 | 第一個為最通用正式名稱 |
| `guideline` 必須是 Apple、Material 或 W3C 網域 | 確保來源權威 |
| `status: verified` 才會出現在正式站 | draft 只在 preview 部署顯示（2026-10-28 暫時調整：正式站也顯示 draft 並標註「草稿」，待足夠條目驗證後改回） |

## 技術棧與 repo 結構

| 層 | 選擇 | 備註 |
| --- | --- | --- |
| 框架 | Vue 3 + TypeScript + Vite | 主力技術棧 |
| 預渲染 | VitePress 或 `vite-ssg` | 第 0 期先做小型比較再定；每個概念一頁靜態 HTML（已定案 `vite-ssg`，見 `docs/decisions/0001`） |
| 資料 | YAML + Zod | 建置時載入並驗證 |
| 搜尋 | Fuse.js（模糊）或 Pagefind（建置時索引） | 需支援中英文、別名、白話描述 |
| 狀態 | XState v5 | 狀態面板與說明文字共用同一份機器定義 |
| 樣式 | 原生 CSS + 自訂屬性 | 不用 Tailwind；token 由 Swift 量測腳本產生 |
| 測試 | Vitest、Playwright 視覺回歸、axe | — |
| 部署 | GitHub Pages 或 Firebase Hosting + GitHub Actions | PR 產生 preview 部署 |
| 套件管理 | pnpm workspace | — |

## 硬性限制

違反這些等於返工或有法律風險，CLAUDE.md 也要寫進去。

### 授權（不是法律意見）

- **不嵌入 SF Pro 字型檔**：字型一律用 `system-ui, -apple-system, "Helvetica Neue", sans-serif`。
- **不使用 SF Symbols 圖形**：圖示用 Lucide、Phosphor 或自繪 SVG；SF Symbol 名稱只當文字資料。
- **Android 可用 Roboto 與 Material Symbols**：兩者為開源授權。
- **不放 Apple logo、裝置官方圖**，截圖僅少量說明用途並標來源。
- **頁尾聲明**：非 Apple、Google 官方，未獲背書；macOS、iOS、Material Design 為各自公司商標。
- **HIG、Material 文件只引用名稱並連結**，說明文字自己寫。

### 命名與內容

- 名稱以官方用詞為準，中文譯名可自訂但需一致；別名放 `aliases`。
- 每條 API 對應需對官方文件驗證後才能改為 `verified`。

### 無障礙

- 示範組件須可鍵盤操作，焦點環可見。
- 尊重 `prefers-reduced-motion`、`prefers-reduced-transparency`、`forced-colors`。
- axe 掃描零錯誤才可合併。

### 瀏覽器支援

- 基礎：近兩版 Chrome、Safari、Firefox。
- Liquid Glass 折射只在 Chromium 啟用；Safari 會解析 `backdrop-filter: url()` 但不渲染，**不可只靠 `@supports` 偵測**。
- Safari 的 `-webkit-backdrop-filter` 內不可使用 CSS 變數。
- Anchor positioning、`appearance: base-select` 需包在 `@supports` 內並提供 fallback。

## 第 0 期：開工任務

目標是把地基做完：資料能驗證、token 能產生、網站能自動部署，還不做漂亮的示範。依序執行，前一項是後一項的前提。

- [x] 確認 GitHub repo、npm 套件名與網域可用，建立 `ui-field-guide` repo（MIT）
- [x] 初始化 pnpm + Vite + Vue 3 + TypeScript，加 ESLint、Prettier、commitlint
- [x] 比較 VitePress 與 `vite-ssg`（各做一頁概念頁），定案預渲染方案
- [x] 寫 Zod schema（`src/schema`），涵蓋 component、style、pattern 三種 `kind`
- [x] 建 `content/component/` 首批 10 個概念 YAML，四平台名稱與 API 從平台文件搬入
- [x] Schema 測試：所有 YAML 通過驗證，`confusedWith` 與 `avoid` 無斷鏈
- [x] 寫 `tools/measure-macos` Swift 腳本，輸出 control size 尺寸與約 35 個系統色的亮暗兩組數值
- [x] 由量測 JSON 產生 `src/tokens/*.css`
- [x] 做出概念頁骨架：四平台名稱並列、API 表、易混淆連結、prompt 複製按鈕（先無示範）
- [x] 接上搜尋（中英文、別名、白話描述）
- [x] GitHub Actions：lint、typecheck、schema 測試、建置、部署；PR 產生 preview
- [x] 從研究文件匯出 Markdown 放入 `docs/`，加上 `CLAUDE.md`

### 驗收條件

| 條件 | 驗收方式 |
| --- | --- |
| 10 個概念全部通過 schema 驗證 | CI 綠燈 |
| 每個概念頁可由網址直接開啟且為預渲染 HTML | 關閉 JS 仍看得到內容 |
| 搜尋「下拉」「dropdown」「點開選一個值」都能找到 Pop-up select | 手動測試（另有 `tests/schema/search.test.ts` 自動化） |
| token 由腳本產生，非手寫 | `src/tokens` 檔頭標註產生來源 |
| main 分支每次合併自動部署 | 部署網址可公開瀏覽 |

第 0 期完成後進入第 1 期：補滿 macOS 20 項、做出可互動 CSS 示範與狀態面板、亮暗色切換、README GIF。

## 文件索引

| 文件 | 放置路徑 | 內容 |
| --- | --- | --- |
| 本文件 | `docs/handoff.md` | 決策、範圍、schema、任務 |
| [研究報告](https://claude.ai/artifact/5ZPBXKfZuVWg4xziu1sSYg) | `docs/research.md` | 競品、macOS 對照、技術、授權、路線圖 |
| [iOS UI 組件對照](https://claude.ai/artifact/VGsW5SxSeUSt1VfsqawGuC) | `docs/platforms/ios.md` | iOS 組件、prompt 關鍵字 |
| [Android UI 組件對照](https://claude.ai/artifact/AGvk119bt7eJaPVP43R8Vu) | `docs/platforms/android.md` | Material 3 組件、prompt 關鍵字 |
| [Web UI 組件對照](https://claude.ai/artifact/H5x4bSUJQqZi1GzFNuUxW2) | `docs/platforms/web.md` | 原生 HTML、APG、prompt 關鍵字 |

研究報告標題仍寫「macOS UI 組件辭典網站」，是定名前的舊稱，內容以本文件為準。
