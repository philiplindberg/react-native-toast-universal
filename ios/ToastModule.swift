import ExpoModulesCore
import SPIndicator

public class ToastModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Toast")

    AsyncFunction("show") { (text: String) in
      let icon = UIImage.init(systemName: "checkmark.circle.fill")!
        .withTintColor(
          UIColor(red: 82 / 255, green: 189 / 255, blue: 86 / 255, alpha: 1),
          renderingMode: .alwaysOriginal
        )

      let indicator = SPIndicatorView(title: text, preset: .custom(icon))
      indicator.layout.iconSize = .init(width: 24, height: 24)
        
      indicator.present(duration: 3, haptic: .success)
    }.runOnQueue(.main)
  }
}
