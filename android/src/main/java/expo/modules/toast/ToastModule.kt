package expo.modules.toast

import android.graphics.Color
import com.google.android.material.snackbar.BaseTransientBottomBar.ANIMATION_MODE_SLIDE
import com.google.android.material.snackbar.Snackbar
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.types.Enumerable

class ToastModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("Toast")

    Function("show") { text: String, type: ToastType?, duration: Int ->
      try {
        val view = requireNotNull(appContext.activityProvider?.currentActivity?.window?.decorView?.findViewById(android.R.id.content))

        // FIXME: displays on top of tab bar
        Snackbar.make(view, text, duration)
          .setTextColor(Color.WHITE)
          .setAnimationMode(ANIMATION_MODE_SLIDE)
          .show()
      } catch (e: Exception) {
        println(e)
      }
    }
  }
}

enum class ToastType(val value: String) : Enumerable {
  SUCCESS("success"),
  ERROR("error"),
  INFO("info")
}
