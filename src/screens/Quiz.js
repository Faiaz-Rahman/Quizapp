import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Quiz() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: '800',
        }}>
        Quiz
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
