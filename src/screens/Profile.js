import React, { useEffect, useContext, useState } from 'react'
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native'

import { AuthContext } from '../navigation/AuthProvider'
import { COLORS, DIM } from '../constant'
import { Buttons, Header, ProfileComponent } from '../components'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

//Firestore functionality
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

import Lottie from 'lottie-react-native'

function Profile({ navigation }) {
  const { logout } = useContext(AuthContext)
  const [currentUserData, setCurrentUserData] = useState({
    name: '',
    point: '',
    email: '',
    createdAt: '',
  })

  const [showAnimation, setShowAnimation] = useState(false)

  const img = null

  const fetchUserData = async () => {
    let uid = auth().currentUser.uid
    setShowAnimation(true)

    await firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(val => {
        const { name, point, email, createdAt } = val.data()

        setCurrentUserData({
          name,
          point,
          email,
          createdAt,
        })
      })

    setTimeout(() => {
      setShowAnimation(false)
    }, 1500)
  }

  useEffect(() => {
    fetchUserData()

    return () => {}
  }, [])

  return (
    <>
      <Header
        headerText={'Profile'}
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
        onRightIconPress={() => {}}
        isProfile={true}
        extraStyles={styles.extraStyles}
      />
      {showAnimation ? (
        <Lottie
          loop
          autoPlay
          source={require('../assets/double_loader.json')}
        />
      ) : (
        <View style={styles.container}>
          {img === null ? (
            <FontAwesome
              name="user-circle-o"
              size={130}
              color={COLORS.lighter_primary}
              style={{
                marginBottom: 15,
              }}
            />
          ) : (
            <Image source={{}} />
          )}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <ProfileComponent
              name={'apps'}
              title={'User'}
              titleValue={currentUserData.name}
            />
            <ProfileComponent
              name="email"
              title="Email"
              titleValue={currentUserData.email}
            />
            <ProfileComponent
              name={'account-clock'}
              title={'Total Points'}
              titleValue={currentUserData.point}
            />

            <ProfileComponent
              name={'account-clock'}
              title={'User Since'}
              titleValue={currentUserData.createdAt}
            />
            <Buttons
              onPress={() => {
                logout()
              }}
              style={{
                width: '90%',
              }}
              title="Log out"
            />
          </ScrollView>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    paddingTop: DIM.height * 0.05,
    marginBottom: DIM.height * 0.135,
    alignItems: 'center',
  },
  extraStyles: {
    paddingRight: DIM.width * 0.05,
  },
  username: {
    fontSize: 17,
    letterSpacing: 3,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '800',
    color: COLORS.light_primary,
  },
  scrollContainer: {
    paddingTop: 20,
    width: DIM.width,
    alignItems: 'center',
    rowGap: 15,
    paddingBottom: 10,
  },
})

export default Profile
