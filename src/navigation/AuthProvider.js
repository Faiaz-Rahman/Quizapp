import React, { createContext, useState } from 'react'

import auth from '@react-native-firebase/auth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, pass) => {
          try {
            await auth().signInWithEmailAndPassword(email, pass)
          } catch (error) {
            console.log(error)
          }
        },
        logout: async () => {
          try {
            await auth().signOut()
          } catch (error) {
            console.log(error)
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  )
}
