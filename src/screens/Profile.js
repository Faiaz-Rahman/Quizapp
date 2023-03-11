import React, { useEffect, useContext } from 'react'
import { View, Text, Button } from 'react-native'

import auth from '@react-native-firebase/auth'
import { AuthContext } from '../navigation/AuthProvider'
import { COLORS } from '../constant'

function Profile({ navigation }) {
  const { logout } = useContext(AuthContext)

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: '800',
        }}>
        {'Current Account: ' + auth().currentUser.email}
      </Text>

      <Button
        color={COLORS.primary}
        title="Sign out"
        onPress={() => {
          logout()
        }}
      />
    </View>
  )
}

export default Profile
