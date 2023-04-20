import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { Header } from '../components'
import { HomeNavigator } from './HomeNavigator'
import { DIM, COLORS } from '../constant'

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
        <Text style={styles.drawerNavText}>
          Connect to the VPN of an American server.
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
        <Text style={styles.drawerNavText}>Quizapp</Text>
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
        <Text style={styles.drawerNavText}>Privacy</Text>
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
        <Text style={styles.drawerNavText}>Contact the developer</Text>
        <Text style={styles.drawerNavText}>faiazrahman70@gmail.com</Text>
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
        },
        drawerActiveTintColor: COLORS.white,
        drawerActiveBackgroundColor: COLORS.lighter_primary,
        drawerInactiveBackgroundColor: COLORS.gainsboro,
        drawerLabelStyle: ({ focused }) => ({
          color: focused ? 'white' : 'grey',
        }),
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
  drawerNavText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
})
export { Drawer }
