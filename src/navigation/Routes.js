import React, { useContext, useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'

import AuthStack from './AuthStack'
import { AuthContext } from './AuthProvider'
import { Drawer } from './Drawer'

const Routes = () => {
  const { user, setUser, showAnimation } = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true)

  const onAuthStateChanged = user => {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)

    return subscriber
  }, [])

  if (initializing) return null
  else {
    return (
      <NavigationContainer>
        {user && !showAnimation ? <Drawer /> : <AuthStack />}
      </NavigationContainer>
    )
  }
}

export { Routes }
