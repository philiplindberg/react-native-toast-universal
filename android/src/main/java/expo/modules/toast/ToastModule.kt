package expo.modules.toast

import android.widget.Toast
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ToastModule : Module() {
  private val context
  get() = requireNotNull(appContext.reactContext)

  override fun definition() = ModuleDefinition {
    Name("Toast")

    Function("show") { text: String ->
      // TODO: implement as snackbar: https://developer.android.com/reference/com/google/android/material/snackbar/Snackbar
      Toast.makeText(context, text, Toast.LENGTH_LONG).show()
    }
  }
}
