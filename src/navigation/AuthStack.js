import { useEffect, useState } from 'react'

import { LoginScreen, OnboardingScreen, SignupScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AsyncStorage from '@react-native-community/async-storage'

const Stack = createNativeStackNavigator()

export default AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)

  let destinationRoute
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(val => {
      if (val == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })
  }, [])

  if (isFirstLaunch == null) return null
  else if (isFirstLaunch == true) {
    destinationRoute = 'Onboarding'
  } else {
    destinationRoute = 'Login'
  }

  return (
    <Stack.Navigator
      initialRouteName={destinationRoute}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen} options={{}} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{}} />
    </Stack.Navigator>
  )
}
