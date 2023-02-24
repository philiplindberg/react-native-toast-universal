import toast from 'react-hot-toast'
import { ToastType } from './types'

export default {
  show: (text: string, type: ToastType, duration: number) => {
    switch (type) {
      case 'success':
        toast.success(text, { duration })
        break
      case 'error':
        toast.error(text, { duration })
        break
      default:
        toast(text, { duration })
        break
    }
  },
}
