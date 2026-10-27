// Prints AppKit control metrics and system colors (light + dark) as JSON on stdout.
// Consumed by scripts/build-tokens.ts; never hand-edit the generated CSS.
import AppKit

struct Metric: Encodable {
    let width: Double
    let height: Double
}

struct ColorValue: Encodable {
    let light: String
    let dark: String
}

struct Output: Encodable {
    let generator: String
    let macOS: String
    let controls: [String: [String: Metric]]
    let colors: [String: ColorValue]
}

let controlSizes: [(String, NSControl.ControlSize)] = [
    ("mini", .mini), ("small", .small), ("regular", .regular), ("large", .large),
]

func makeControls() -> [(String, () -> NSControl)] {
    [
        ("push-button", { NSButton(title: "Button", target: nil, action: nil) }),
        ("pop-up-button", {
            let button = NSPopUpButton(frame: .zero, pullsDown: false)
            button.addItems(withTitles: ["Option"])
            return button
        }),
        ("pull-down-button", {
            let button = NSPopUpButton(frame: .zero, pullsDown: true)
            button.addItems(withTitles: ["Actions"])
            return button
        }),
        ("combo-box", { NSComboBox() }),
        ("text-field", { NSTextField(string: "Text") }),
        ("search-field", { NSSearchField() }),
        ("segmented-control", {
            NSSegmentedControl(labels: ["One", "Two", "Three"], trackingMode: .selectOne, target: nil, action: nil)
        }),
        ("slider", { NSSlider(value: 0.5, minValue: 0, maxValue: 1, target: nil, action: nil) }),
        ("stepper", { NSStepper() }),
        ("switch", { NSSwitch() }),
        ("checkbox", { NSButton(checkboxWithTitle: "Check", target: nil, action: nil) }),
    ]
}

func measureControls() -> [String: [String: Metric]] {
    var result: [String: [String: Metric]] = [:]
    for (name, make) in makeControls() {
        var sizes: [String: Metric] = [:]
        for (label, size) in controlSizes {
            let control = make()
            control.controlSize = size
            // Interface Builder pairs each control size with its matching system font size.
            control.font = NSFont.systemFont(ofSize: NSFont.systemFontSize(for: size))
            control.sizeToFit()
            let fitting = control.fittingSize
            sizes[label] = Metric(width: Double(fitting.width), height: Double(fitting.height))
        }
        result[name] = sizes
    }
    return result
}

let systemColors: [(String, NSColor)] = [
    ("system-red", .systemRed), ("system-orange", .systemOrange), ("system-yellow", .systemYellow),
    ("system-green", .systemGreen), ("system-mint", .systemMint), ("system-teal", .systemTeal),
    ("system-cyan", .systemCyan), ("system-blue", .systemBlue), ("system-indigo", .systemIndigo),
    ("system-purple", .systemPurple), ("system-pink", .systemPink), ("system-brown", .systemBrown),
    ("system-gray", .systemGray),
    ("label", .labelColor), ("secondary-label", .secondaryLabelColor),
    ("tertiary-label", .tertiaryLabelColor), ("quaternary-label", .quaternaryLabelColor),
    ("text", .textColor), ("placeholder-text", .placeholderTextColor),
    ("selected-text", .selectedTextColor), ("text-background", .textBackgroundColor),
    ("selected-text-background", .selectedTextBackgroundColor),
    ("link", .linkColor), ("separator", .separatorColor),
    ("selected-content-background", .selectedContentBackgroundColor),
    ("unemphasized-selected-content-background", .unemphasizedSelectedContentBackgroundColor),
    ("window-background", .windowBackgroundColor), ("under-page-background", .underPageBackgroundColor),
    ("control-background", .controlBackgroundColor), ("control", .controlColor),
    ("control-text", .controlTextColor), ("disabled-control-text", .disabledControlTextColor),
    ("control-accent", .controlAccentColor), ("keyboard-focus-indicator", .keyboardFocusIndicatorColor),
    ("find-highlight", .findHighlightColor), ("grid", .gridColor), ("header-text", .headerTextColor),
    ("alternate-selected-control-text", .alternateSelectedControlTextColor),
]

func hex(_ color: NSColor, in appearanceName: NSAppearance.Name) -> String {
    guard let appearance = NSAppearance(named: appearanceName) else { return "#000000" }
    var resolved: NSColor = .black
    appearance.performAsCurrentDrawingAppearance {
        resolved = color.usingColorSpace(.sRGB) ?? .black
    }
    let channel = { (value: CGFloat) in Int((min(max(value, 0), 1) * 255).rounded()) }
    let rgb = String(
        format: "#%02x%02x%02x", channel(resolved.redComponent), channel(resolved.greenComponent),
        channel(resolved.blueComponent))
    let alpha = channel(resolved.alphaComponent)
    return alpha == 255 ? rgb : rgb + String(format: "%02x", alpha)
}

func measureColors() -> [String: ColorValue] {
    Dictionary(
        uniqueKeysWithValues: systemColors.map { name, color in
            (name, ColorValue(light: hex(color, in: .aqua), dark: hex(color, in: .darkAqua)))
        })
}

let version = ProcessInfo.processInfo.operatingSystemVersion
let output = Output(
    generator: "tools/measure-macos",
    macOS: "\(version.majorVersion).\(version.minorVersion).\(version.patchVersion)",
    controls: measureControls(),
    colors: measureColors()
)

let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
do {
    let data = try encoder.encode(output)
    FileHandle.standardOutput.write(data)
    FileHandle.standardOutput.write("\n".data(using: .utf8)!)
} catch {
    FileHandle.standardError.write("measure-macos: failed to encode output: \(error)\n".data(using: .utf8)!)
    exit(1)
}
