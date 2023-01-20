import { Platform } from 'react-native'
import ToastModule from './ToastModule'
import { ToastProps } from './types'

export const Toast = {
  show: ({ text, type, duration = 3 }: ToastProps): void => {
    return Platform.OS === 'web'
     ? ToastModule.show({ text, type, duration })
     : ToastModule.show(text, type, duration)
  },
}

export { Toaster } from './Toaster'
