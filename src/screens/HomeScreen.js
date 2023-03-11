import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: '800',
        }}>
        Home
      </Text>
    </View>
  )
}

export default HomeScreen
