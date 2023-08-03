import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native'

import ListItem from '../components/ListItem'
const DATA = [
  {
    dt_text: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: 'Clear' }],
  },
  {
    dt_text: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: 'Clear' }],
  },
  {
    dt_text: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [{ main: 'Rain' }],
  },
]
const Empty = () => (
  <View>
    <Text>Empty</Text>
  </View>
)

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/clouds.jpg')}
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: '#CCCCCC', height: 2 }} />
          )}
          ListEmptyComponent={Empty}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  image: {
    flex: 1,
  },
})
export default UpcomingWeather
