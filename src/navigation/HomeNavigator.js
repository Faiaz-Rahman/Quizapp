import React from 'react'
import { View, Text, Button } from 'react-native'
import { COLORS, DIM } from '../constant'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { HomeScreen, Profile } from '../screens/'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { TouchableOpacity, StyleSheet } from 'react-native'
import Temp from '../screens/Temp'

const Tab = createMaterialBottomTabNavigator()

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.slate}
      barStyle={styles.barStyle}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 size={25} name="user-alt" color={color} />
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tarBarIcon: ({ color }) => {
            return <Ionicons name="home" size={25} color={color} />
          },
        })}
      />
      <Tab.Screen
        name="Temp"
        component={Temp}
        options={() => ({
          tarBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="home" size={25} color={color} />
            )
          },
        })}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  barStyle: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    overflow: 'hidden',
    height: 70,
    width: '90%',
    elevation: 5,
  },
})

export { HomeNavigator }
