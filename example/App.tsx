import { Platform, Pressable, PressableProps, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Toast } from 'toast'
import { Toaster } from 'toast/web'

const colors = {
  success: '#35C759',
  error: '#FF3B2F',
  info: '#007AFF',
}

export default function App() {
  const colorScheme = useColorScheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'light' ? '#fff' : '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  return <>
    <View style={styles.container}>
      <Button
        text='Show Toast (Success)'
        type='success'
        onPress={() => Toast.success('I\'m a success toast!')}
      />
      <View style={{ height: 15 }} />
      <Button
        text='Show Toast (Error)'
        type='error'
        onPress={() => Toast.error('I\'m an error toast!')}
      />
      <View style={{ height: 15 }} />
      <Button
        text='Show Toast (Info)'
        type='info'
        onPress={() => Toast.info('I\'m an info toast!')}
      />
      <View style={{ height: 15 }} />
      <Button
        text='Show Toast (No Icon)'
        onPress={() => Toast.show({ text: 'I\'m a toast without an icon!' })}
      />
    </View>

    {Platform.OS === 'web' && (
      <Toaster
        position='bottom-center'
        containerStyle={{ bottom: 20 }}
        toastOptions={{
          style: {
            fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            fontSize: 16,
            fontWeight: 500,
          },
          success: {
            iconTheme: {
              primary: colors.success,
              secondary: '#FFFFFF',
            },
          },
          error: {
            iconTheme: {
              primary: colors.error,
              secondary: '#FFFFFF',
            },
          },
        }}
      />
    )}
  </>
}

type ButtonProps = PressableProps & {
  text: string
  type?: 'success' | 'error' | 'info'
}

const Button = ({ text, type, onPress }: ButtonProps) => {
  const colorScheme = useColorScheme()
  let color: string

  switch (type) {
    case 'success':
      color = colors.success
      break
    case 'error':
      color = colors.error
      break
    case 'info':
      color = colors.info
      break
    default:
      color = colorScheme === 'light' ? '#000000' : '#FFFFFF'
  }

  const styles = StyleSheet.create({
    wrapper: {
      width: 220,
      height: 44,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: color,
      fontWeight: '500',
      fontSize: 16,
    },
  })

  return (
    <Pressable
      style={({ pressed }) => [styles.wrapper, {
        backgroundColor: colorWithOpacity(color, type ? (pressed ? 0.3 : 0.15) : (pressed ? 0.15 : 0)),
      }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const colorWithOpacity = (color: string, opacity: number) => {
  if (color.length !== 7 || !color.startsWith('#')) {
    throw new Error('Color should be formatted as a 6 letter hex color (e.g. #ABCDEF)')
  }

  const intValue = Math.round(opacity * 255)
  const hexValue = intValue.toString(16)
  return color + hexValue.padStart(2, '0').toUpperCase()
}
