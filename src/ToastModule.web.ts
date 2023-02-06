import toast, { ToastOptions } from 'react-hot-toast'
import { ToastType } from './types'

export default {
  show: (text: string, type: ToastType, duration: number) => {
    const options: ToastOptions = {
      duration,
      position: 'bottom-center',
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
