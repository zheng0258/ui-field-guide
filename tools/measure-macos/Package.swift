// swift-tools-version:6.0
import PackageDescription

let package = Package(
    name: "measure-macos",
    platforms: [.macOS(.v14)],
    targets: [
        .executableTarget(name: "measure-macos", swiftSettings: [.swiftLanguageMode(.v5)])
    ]
)
