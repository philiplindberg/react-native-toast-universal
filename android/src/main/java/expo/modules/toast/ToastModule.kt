package expo.modules.toast

import android.graphics.Color
import com.google.android.material.snackbar.BaseTransientBottomBar.ANIMATION_MODE_SLIDE
import com.google.android.material.snackbar.Snackbar
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.types.Enumerable

class ToastModule : Module() {
  private val rootView
  get() = requireNotNull(appContext.activityProvider?.currentActivity?.window?.decorView?.rootView)

  override fun definition() = ModuleDefinition {
    Name("Toast")

    Function("show") { text: String, type: ToastType?, duration: Int ->
      Snackbar.make(rootView, text, duration * 1000)
        .setTextColor(Color.parseColor("#FFFFFF"))
        .setAnimationMode(ANIMATION_MODE_SLIDE)
        .show()
    }
  }
}

enum class ToastType(val value: String) : Enumerable {
  SUCCESS("success"),
  ERROR("error"),
  INFO("info")
}