import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { Header } from '../components'
import { HomeNavigator } from './HomeNavigator'
import { DIM } from '../constant'

const TheDrawer = createDrawerNavigator()

const HowToPlay = ({ navigation }) => {
  return (
    <>
      <Header
        headerText="How to play"
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '800',
          }}>
          How to play
        </Text>
      </View>
    </>
  )
}

const About = ({ navigation }) => {
  return (
    <>
      <Header
        headerText={'About Us'}
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '800',
          }}>
          About Us
        </Text>
      </View>
    </>
  )
}

const Privacy = ({ navigation }) => {
  return (
    <>
      <Header
        headerText="Privacy Policy"
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '800',
          }}>
          Privacy
        </Text>
      </View>
    </>
  )
}

const Contact = ({ navigation }) => {
  return (
    <>
      <Header
        headerText={'Contact Us'}
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '800',
          }}>
          Contact us
        </Text>
      </View>
    </>
  )
}

const Drawer = () => {
  return (
    <TheDrawer.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: false,
        drawerContentContainerStyle: {
          backgroundColor: 'white',
          height: DIM.height,
          start: 0,
        },
      }}>
      <TheDrawer.Screen name="Go Home" options={{}} component={HomeNavigator} />
      <TheDrawer.Screen name="How to play" options={{}} component={HowToPlay} />
      <TheDrawer.Screen name="About us" options={{}} component={About} />
      <TheDrawer.Screen
        name="Privacy policy"
        options={{}}
        component={Privacy}
      />
      <TheDrawer.Screen name="Contact us" options={{}} component={Contact} />
    </TheDrawer.Navigator>
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
export { Drawer }
