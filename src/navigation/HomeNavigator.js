import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { COLORS, DIM } from '../constant'

import { HomeScreen, LeaderBoard, Profile, Quiz, Wallet } from '../screens/'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//importing the icons for the project
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.barStyle,
        tabBarInactiveTintColor: COLORS.slate,
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = 'home'
            return <FontAwesome5 name={iconName} size={25} color={color} />
          } else if (route.name === 'Quiz') {
            return (
              <Image
                source={require('../assets/q.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: color,
                }}
              />
            )
          } else if (route.name === 'LeaderBoard') {
            return (
              <Image
                source={require('../assets/podium.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: color,
                }}
              />
            )
          } else if (route.name === 'Wallet') {
            iconName = 'wallet'
            return <FontAwesome5 name={iconName} size={25} color={color} />
          } else {
            iconName = 'user-alt'
            return <FontAwesome5 name={iconName} color={color} size={25} />
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quiz" component={Quiz} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  barStyle: {
    position: 'absolute',
    bottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    overflow: 'hidden',
    height: 70,
    width: '90%',
    elevation: 2,
  },
})

export { HomeNavigator }
