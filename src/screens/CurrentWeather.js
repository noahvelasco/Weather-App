import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="yellow" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.hlWrapper}>
          <Text style={styles.hl}>High: 8 </Text>
          <Text style={styles.hl}>Low: 6</Text>
        </View>
      </View>

      <View styles={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect T-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: 'gray' },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  temp: { color: 'white', fontSize: 48 },
  feels: { color: 'white', fontSize: 30 },
  hlWrapper: {
    flexDirection: 'row',
  },
  hl: {
    color: 'white',
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: { fontSize: 38 },
  message: { fontSize: 30 },
})
export default CurrentWeather
