import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    hlWrapper,
    hl,
    bodyWrapper,
    description,
    message,
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="yellow" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>

        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyle={hlWrapper}
          messageOneStyle={hl}
          messageTwoStyle={hl}
        />
      </View>

      <RowText
        messageOne={'Its sunny'}
        messageTwo={'Its perfect T-shirt weather'}
        containerStyle={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
      />
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
