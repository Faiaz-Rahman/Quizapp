import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native'

import Security from 'react-native-vpn-detect'

//Icons
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import LinearGradient from 'react-native-linear-gradient'

//Lottie Json file for animation
import Lottie from 'lottie-react-native'

//Importing the custom components
import Header from '../components/Header'
import { COLORS, DIM } from '../constant'

import firestore from '@react-native-firebase/firestore'

function HomeScreen({ navigation }) {
  // const checkSecurity = async () => {
  //   await Security.detectVPN().then(response => {
  //     console.log('This is response: 1 ', response)
  //   })

  //   await Security.detectProxy().then(response => {
  //     console.log('This is response: 2 ', response)
  //   })
  // }

  // const checkVPN = (lat, lng) => {
  //   let request = new XMLHttpRequest()

  //   let method = 'GET'
  //   let url = `http://maps.googleapis.com/maps/api/geocode/json?latlng='
  //     ${lat}
  //     ','
  //     ${lng}
  //     '&sensor=true`

  //   let async = true
  //   request.open(method, url, async)

  //   request.onreadystatechange = function () {
  //     if (request.readyState == 4 && request.status == 200) {
  //       var data = JSON.parse(request.responseText)
  //       var address = data.results[0]
  //     }
  //     console.log(address)
  //   }
  // }

  //All states for the screen
  const [showAnimation, setShowAnimation] = useState(false)
  const [rate, setRate] = useState('')
  const [noOfUsers, setNoOfUsers] = useState('')
  const [noLeaderboard, setNoLeaderboard] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchHomeScreenData()
    wait(3500).then(() => setRefreshing(false))
  }, [])

  const fetchHomeScreenData = async () => {
    // let rate, noOfUsers, noLeaderboard
    setShowAnimation(true)

    try {
      await firestore()
        .collection('leaderboard')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setNoLeaderboard(doc.data().userArray.length)
          })
        })

      await firestore()
        .collection('users')
        .get()
        .then(querySnapshot => {
          setNoOfUsers(querySnapshot.size)
        })

      await firestore()
        .collection('rate')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setRate(doc.data().rates)
          })
        })
    } catch (error) {
      console.log('Error Occurred')
    }

    setShowAnimation(false)
  }

  useEffect(() => {
    fetchHomeScreenData()
    // checkVPN(22.80979, 89.56439)
    return () => {}
  }, [])

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.light_primary}
      />
      <Header
        headerText={'Home'}
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
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[
                COLORS.lighter_primary,
                COLORS.light_primary,
                COLORS.primary,
              ]}
            />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <LinearGradient
            start={{ x: -0.7, y: 0 }}
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
            start={{ x: -0.7, y: 0 }}
            colors={[
              COLORS.primary,
              COLORS.light_primary,
              COLORS.lighter_primary,
            ]}
            style={styles.card_container}>
            <View style={styles.leftSegmentCard}>
              <FontAwesome5 size={60} name="users" color={'white'} />
            </View>
            <View style={styles.rightSegmentCard}>
              <Text style={styles.rightSegmentText}>
                Total {noLeaderboard} users are in the leaderboard
              </Text>
            </View>
          </LinearGradient>

          <LinearGradient
            start={{ x: -0.7, y: 0 }}
            colors={[
              COLORS.primary,
              COLORS.light_primary,
              COLORS.lighter_primary,
            ]}
            style={styles.card_container}>
            <View style={styles.leftSegmentCard}>
              <FontAwesome5 size={60} name="users" color={'white'} />
            </View>
            <View style={styles.rightSegmentCard}>
              <Text style={styles.rightSegmentText}>
                Total {noOfUsers} users are now using Quizapp
              </Text>
            </View>
          </LinearGradient>

          {/* <Button
            color={COLORS.light_primary}
            title="Check the VPN"
            onPress={() => {
              checkSecurity()
            }}
          /> */}
        </ScrollView>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: DIM.height * 0.135,
    alignItems: 'center',
    paddingTop: DIM.height * 0.005,
    paddingBottom: DIM.height * 0.16,
    rowGap: 6,
  },
  card_container: {
    height: DIM.height * 0.27,
    width: DIM.width * 0.85,
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

export default HomeScreen
