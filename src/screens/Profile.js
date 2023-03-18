import React, { useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native'

import auth from '@react-native-firebase/auth'
import { AuthContext } from '../navigation/AuthProvider'
import { COLORS, DIM } from '../constant'
import { Buttons, Header, ProfileComponent } from '../components'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

function Profile({ navigation }) {
  const { logout } = useContext(AuthContext)

  const img = null

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
            titleValue={'Username'}
          />
          <ProfileComponent
            name="email"
            title="Email"
            titleValue={'abc@gmail.com'}
          />
          <ProfileComponent
            name={'account-clock'}
            title={'User Since'}
            titleValue={'12th March, 2023'}
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
