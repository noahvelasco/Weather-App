import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import City from './src/screens/City'
import UpcomingWeather from './src/screens/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
  },
})
export default App
