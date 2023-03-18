import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '../components'
import { DIM } from '../constant'

export default function Wallet({ navigation }) {
  return (
    <>
      <Header
        headerText={'Wallet'}
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
        onRightIconPress={() => {}}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '800',
          }}>
          Wallet
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: DIM.height * 0.135,
  },
})
