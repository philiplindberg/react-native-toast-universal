import ToastModule from './ToastModule'
import { ToastOptions } from './types'

export const Toast = {
  show: ({ text, type, duration = 3 }: ToastOptions): void => {
    return ToastModule.show(text, type, duration)
  },
}
