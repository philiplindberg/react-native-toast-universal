import { StyleSheet, Text, View } from 'react-native';

import * as Toast from 'toast';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Toast.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
