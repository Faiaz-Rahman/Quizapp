import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { CustomTextInput, Buttons } from '../components'
import { DIM, COLORS } from '../constant'
import { AuthContext } from '../navigation/AuthProvider'

function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <>
      <View style={styles.container}>
        <StatusBar hidden />
        <View
          style={{
            height: 300,
            width: DIM.width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginTop: 200,
              fontSize: 26,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Your Appname
          </Text>
        </View>
        <CustomTextInput
          text="Enter your email"
          iconName="mail"
          onChangeText={text => setEmail(text)}
        />
        <CustomTextInput
          text="Enter password"
          iconName="key"
          pass={1}
          onChangeText={text => setPass(text)}
          color={COLORS.primary}
        />
        <Buttons
          title="Login"
          onPress={() => {
            console.log(email, pass)
            login(email, pass)
          }}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontStyle: 'italic',
              marginRight: 8,
              color: 'grey',
              fontWeight: '800',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup')
            }}>
            <Text
              style={{
                fontSize: 19,
                color: COLORS.primary,
                fontWeight: '700',
              }}>
              Sign Up !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
})

export default LoginScreen
