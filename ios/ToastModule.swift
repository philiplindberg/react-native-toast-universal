import ExpoModulesCore
import SPIndicator

public class ToastModule: Module {
  enum ToastType: String, Enumerable {
    case success
    case error
    case info
  }
  
  public func definition() -> ModuleDefinition {
    Name("Toast")
    
    AsyncFunction("show") { (text: String, type: ToastType?, duration: TimeInterval) in
      let icon: UIImage
      let haptic: SPIndicatorHaptic
      
      switch (type) {
      case .success:
        icon = UIImage(systemName: "checkmark.circle.fill")!
          .withTintColor(
            UIColor(red: 82 / 255, green: 189 / 255, blue: 86 / 255, alpha: 1),
            renderingMode: .alwaysOriginal
          )
        haptic = .success
        break
      case .error:
        icon = UIImage(systemName: "multiply.circle.fill")!
          .withTintColor(
            UIColor(red: 255 / 255, green: 59 / 255, blue: 47 / 255, alpha: 1),
            renderingMode: .alwaysOriginal
          )
        haptic = .error
        break
      case .info:
        icon = UIImage(systemName: "info.circle.fill")!
          .withTintColor(
            UIColor(red: 0 / 255, green: 122 / 255, blue: 255 / 255, alpha: 1),
            renderingMode: .alwaysOriginal
          )
        haptic = .none
        break
      default:
        icon = UIImage()
        haptic = .none
      }
      
      let view = SPIndicatorView(title: text, preset: .custom(icon))
      view.layout.iconSize = .init(width: 24, height: 24)
        
      view.present(duration: duration, haptic: haptic)
    }.runOnQueue(.main)
  }
}


