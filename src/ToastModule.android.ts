import { ToastType } from './types'
import { ToastAndroid } from 'react-native'

export default {
  show: (text: string, type: ToastType) => {
    ToastAndroid.show(text, type === 'success' ? ToastAndroid.SHORT : ToastAndroid.LONG)
  },
}
