import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'

import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Tab = createBottomTabNavigator() //Initialize the tab object

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
})

export default App
