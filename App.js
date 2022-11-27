import { StyleSheet, View } from 'react-native';
import Header  from './src/Header'
import Bottom from './src/Bottom'
import Content from './src/Content';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Bottom />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    flex: 1,
  }
})

