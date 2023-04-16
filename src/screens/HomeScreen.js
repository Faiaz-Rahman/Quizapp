import React, { useContext, useEffect } from 'react'
import { View, Text, Button, StatusBar, StyleSheet } from 'react-native'

import Security from 'react-native-vpn-detect'

//Importing the custom components
import Header from '../components/Header'
import { COLORS, DIM } from '../constant/'

function HomeScreen({ navigation }) {
  const checkSecurity = async () => {
    await Security.detectVPN().then(response => {
      console.log('This is response: 1 ', response)
    })

    await Security.detectProxy().then(response => {
      console.log('This is response: 2 ', response)
    })
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      <Header
        headerText={'Home'}
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
          Home
        </Text>
        <Button
          color={COLORS.light_primary}
          title="Check the VPN"
          onPress={() => {
            checkSecurity()
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: DIM.height * 0.135,
  },
})

export default HomeScreen
