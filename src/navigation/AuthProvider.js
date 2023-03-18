import React, { createContext, useState } from 'react'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [showAnimation, setShowAnimation] = useState()
  const [hasError, setHasError] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        hasError,
        setHasError,
        showAnimation,
        setShowAnimation,
        user,
        setUser,
        login: async (email, pass) => {
          try {
            await auth().signInWithEmailAndPassword(email, pass)
            setShowAnimation(false)
          } catch (error) {
            setHasError(prevState => !prevState)
            setShowAnimation(false)
            console.log('The hasError: ', hasError)
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
