import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Wallet() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: '800',
        }}>
        Wallet
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
