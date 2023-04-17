import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../components'
import { DIM, COLORS } from '../constant'

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import LinearGradient from 'react-native-linear-gradient'

import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

import Lottie from 'lottie-react-native'

export default function Wallet({ navigation }) {
  const [showAnimation, setShowAnimation] = useState(false)
  const [rate, setRate] = useState('')
  const [userPoint, setUserPoint] = useState('')

  const dataForWallet = async () => {
    let uid = auth().currentUser.uid

    setShowAnimation(true)

    try {
      await firestore()
        .collection('rate')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setRate(doc.data().rates)
          })
        })

      await firestore()
        .collection('users')
        .doc(uid)
        .get()
        .then(val => {
          const { point } = val.data()
          setUserPoint(point)
        })
    } catch (error) {
      console.log(error)
    }
    setShowAnimation(false)
  }
  useEffect(() => {
    dataForWallet()
  }, [])

  return (
    <>
      <Header
        headerText={'Wallet'}
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
        onRightIconPress={() => {}}
      />
      {showAnimation ? (
        <Lottie
          loop
          autoPlay
          source={require('../assets/double_loader.json')}
        />
      ) : (
        <View style={styles.container}>
          <LinearGradient
            start={{ x: 0.7, y: 0 }}
            colors={[
              COLORS.primary,
              COLORS.light_primary,
              COLORS.lighter_primary,
            ]}
            style={styles.card_container}>
            <View style={styles.leftSegmentCard}>
              <Entypo size={60} name="credit-card" color={'white'} />
            </View>
            <View style={styles.rightSegmentCard}>
              <Text style={styles.rightSegmentText}>
                The current Exchange Rate is {rate}
              </Text>
            </View>
          </LinearGradient>

          <LinearGradient
            start={{ x: 0.7, y: 0 }}
            colors={[
              COLORS.primary,
              COLORS.light_primary,
              COLORS.lighter_primary,
            ]}
            style={styles.card_container}>
            <View style={styles.leftSegmentCard}>
              <FontAwesome5 size={60} name="coins" color={'white'} />
            </View>
            <View style={styles.rightSegmentCard}>
              <Text style={styles.rightSegmentText}>
                The current balance is {userPoint}
              </Text>
            </View>
          </LinearGradient>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: DIM.height * 0.135,
  },
  card_container: {
    height: DIM.height * 0.2,
    width: DIM.width * 0.9,
    borderRadius: 10,
    marginTop: DIM.height * 0.014,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  leftSegmentCard: {
    height: '100%',
    width: '30%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSegmentCard: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  rightSegmentText: {
    fontSize: 21,
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
  },
})
