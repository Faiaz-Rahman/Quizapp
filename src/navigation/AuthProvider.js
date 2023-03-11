import React, { createContext, useState } from 'react'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

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
        signup: async (email, pass, firstName) => {
          try {
            await auth().createUserWithEmailAndPassword(email, pass)

            let user_uid_to_string = auth().currentUser.uid.toString()

            await firestore()
              .collection('users')
              .doc(user_uid_to_string)
              .set({
                userId: auth().currentUser.uid,
                name: firstName,
                createdAt: firestore.Timestamp.fromDate(new Date()),
                userImg: 'none',
                email: auth().currentUser.email,
              })
              .then(() => console.log('User added!'))
          } catch (error) {
            console.log(error)
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  )
}
