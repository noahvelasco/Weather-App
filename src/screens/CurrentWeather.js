import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utils/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    hlWrapper,
    hl,
    bodyWrapper,
    description,
    message,
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>

        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyle={hlWrapper}
          messageOneStyle={hl}
          messageTwoStyle={hl}
        />
      </View>

      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyle={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tempStyles: { color: 'white', fontSize: 48 },
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
  message: { fontSize: 25 },
})
export default CurrentWeather
