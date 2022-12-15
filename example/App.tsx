import { Button, StyleSheet, useColorScheme, View } from 'react-native'

import { Toast } from 'toast'

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

  return (
    <View style={styles.container}>
      <Button
        title='Show Toast'
        onPress={() => Toast.show('I\'m in a toast!')}
      />
    </View>
  )
}
