import ToastModule from './ToastModule'
import { ToastType } from './types'

type ToastProps = {
  text: string
  type?: ToastType
  duration?: number
}

export const Toast = {
  show: ({ text, type, duration }: ToastProps): void => {
    return ToastModule.show(text, type, duration ?? durationFromType(type))
  },
  success: (text: string, duration?: number): void => {
    return ToastModule.show(text, 'success', duration ?? durationFromType('success'))
  },
  error: (text: string, duration?: number): void => {
    return ToastModule.show(text, 'error', duration ?? durationFromType('error'))
  },
  info: (text: string, duration?: number): void => {
    return ToastModule.show(text, 'info', duration ?? durationFromType('info'))
  },
}

const durationFromType = (type?: ToastType): number => {
  return type === 'success' ? 3000 : 4000
}

export { Toaster } from 'react-hot-toast'
