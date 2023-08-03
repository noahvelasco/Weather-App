import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`Count Changed`)
    return () => {
      console.log('use effect clean up')
    }
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <Button
        color={'green'}
        title={'+'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Button
        color={'red'}
        title={'-'}
        onPress={() => {
          setCount(count - 1)
        }}
      />
      <Button
        color={'green'}
        title={'+'}
        onPress={() => {
          setNewCount(count + 1)
        }}
      />
      <Button
        color={'red'}
        title={'-'}
        onPress={() => {
          setNewCount(count - 1)
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    alignItems: 'center',
    fontSize: 25,
    marginTop: 25,
  },
})
export default Counter
