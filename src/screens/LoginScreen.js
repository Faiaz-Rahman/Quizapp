import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native'

import { CustomTextInput, Buttons } from '../components'
import { DIM, COLORS } from '../constant'
import { AuthContext } from '../navigation/AuthProvider'

import Lottie from 'lottie-react-native'

function LoginScreen({ navigation }) {
  const { login, showAnimation, setShowAnimation, hasError, setHasError } =
    useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showAnimation ? (
        <>
          <StatusBar hidden />
          <Lottie
            loop
            autoPlay
            source={require('../assets/loading_custom.json')}
          />
        </>
      ) : (
        <>
          <View style={styles.container}>
            {(showModal || hasError) && (
              <Modal animationType="slide" transparent visible={showModal}>
                <View style={styles.modal}>
                  <View style={styles.innerContainerModal}>
                    <Text
                      style={{
                        fontSize: 17,
                        color: COLORS.light_primary,
                        fontWeight: 'bold',
                        marginBottom: 10,
                      }}>
                      Username, or Password Was Wrong.
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '600',
                        marginBottom: 15,
                      }}>
                      If you don't have an account, Sign Up!
                    </Text>
                    <Buttons
                      onPress={() => {
                        setShowModal(!showModal)
                      }}
                      title={'OK'}
                      color={COLORS.light_primary}
                      style={{
                        height: 50,
                        width: 130,
                      }}
                    />
                  </View>
                </View>
              </Modal>
            )}
            <StatusBar hidden />
            <View
              style={{
                height: DIM.height * 0.4,
                width: DIM.width,
                alignItems: 'center',
                justifyContent: 'flex-end',
                // backgroundColor: 'red',
                paddingBottom: 45,
              }}>
              <Image
                style={styles.logo}
                source={require('../assets/brain.png')}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 26,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Quizapp
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
                console.log(hasError)
                if (email === '' || pass === '') {
                  console.log('Enter a valid value')
                  setShowModal(true)
                } else {
                  setShowAnimation(true)

                  setTimeout(() => {
                    login(email, pass)
                  }, 3000)
                  setEmail('')
                  setPass('')
                  console.log(hasError)
                }
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
      )}
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
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    marginLeft: 13,
  },
  modal: {
    backgroundColor: COLORS.light_primary,
    position: 'absolute',
    height: DIM.height * 0.5,
    width: DIM.width * 0.8,
    top: '25%',
    bottom: '25%',
    left: '10%',
    right: '10%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  innerContainerModal: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoginScreen
