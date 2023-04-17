import React, { useContext, useState, useCallback, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Image,
} from 'react-native'

import { CustomTextInput, Buttons } from '../components'
import { COLORS, DIM } from '../constant'
import { AuthContext } from '../navigation/AuthProvider'

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { signup } = useContext(AuthContext)

  const imageLink =
    'https://img.freepik.com/free-vector/natural-scene-landscape_1308-99110.jpg?w=2000'

  return (
    <React.Fragment>
      {/* <Image
        source={{ uri: imageLink }}
        style={{ height: 220, width: DIM.width }}
      /> */}

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/heads_up.png')} />
        <Text style={styles.logoName}>Signup</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.formContainer}
        endFillColor="#000"
        overScrollMode="never">
        <CustomTextInput
          text="Enter full name"
          onChangeText={text => setFirstName(text)}
        />
        <CustomTextInput
          text="Enter your email"
          iconName="mail"
          onChangeText={text => setEmail(text)}
        />
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.keyboardAvoidingViewContainer}>
          <CustomTextInput
            text="New password"
            iconName="key"
            pass={1}
            color={COLORS.lightViolet}
            onChangeText={text => setPassword(text)}
          />
          <CustomTextInput
            text="Re-type new password"
            iconName="key"
            pass={1}
            onChangeText={text => setConfirmPassword(text)}
            color={COLORS.lightViolet}
          />
          <Buttons
            title="Sign up"
            onPress={() => {
              if (password === confirmPassword) {
                signup(email, password, firstName)
              } else {
                Alert.alert(
                  'Quizapp',
                  "Password and Confirm password doesn't match",
                  [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                )
              }
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    paddingTop: 10,
    height: DIM.height * 0.7,
    width: DIM.width,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  keyboardAvoidingViewContainer: {
    alignItems: 'center',
    width: DIM.width,
    backgroundColor: 'white',
  },
  logoContainer: {
    height: DIM.height * 0.3,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    elevation: 0,
    paddingBottom: DIM.height * 0.02,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  logoName: {
    fontSize: 25,
    marginTop: 10,
    color: COLORS.black,
    fontWeight: '800',
  },
  textInput: {
    backgroundColor: COLORS.boxColor,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: COLORS.lightViolet,
    borderWidth: 2,
  },
  button: {
    marginTop: 14,
    alignSelf: 'center',
    height: 50,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: COLORS.lightViolet,
    borderWidth: 3,
  },
})
