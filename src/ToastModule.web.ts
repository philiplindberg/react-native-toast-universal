import toast, { ToastOptions } from 'react-hot-toast'
import { ToastProps } from './types'

export default {
  show: ({ text, type, duration }: ToastProps) => {
    const options: ToastOptions = {
      position: 'bottom-center',
      duration: duration ? duration * 1000 : 3000,
      style: {
        fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      },
    }

    switch (type) {
      case 'success':
        toast.success(text, options)
        break
      case 'error':
        toast.error(text, options)
        break
      default:
        toast(text, options)
        break
    }
  },
}
