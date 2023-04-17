import React, { useEffect, useState, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Lottie from 'lottie-react-native'

import { Header } from '../components'
import { COLORS, DIM } from '../constant'

//Firestore functions
import firestore from '@react-native-firebase/firestore'

export default function LeaderBoard({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)
  const [topUser, setTopUser] = useState('')
  const [leaderboardData, setLeaderboardData] = useState([])

  const [showAnimation, setShowAnimation] = useState(false)

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const fetchLeaderboardUsers = async () => {
    let list = []

    setShowAnimation(true)

    await firestore()
      .collection('leaderboard')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(item => {
          let tmp = item.data().userArray
          list.push(...tmp)
        })
      })

    // console.log(list)

    setLeaderboardData(list)
    setTopUser(list[0].name)

    setTimeout(() => {
      setShowAnimation(false)
    }, 1500)
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchLeaderboardUsers()
    wait(3500).then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    fetchLeaderboardUsers()
  }, [])

  return (
    <>
      <Header
        headerText={'Leaderboard'}
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
          <View style={styles.headerContainer}>
            <Image
              style={styles.image}
              source={require('../assets/trophy.png')}
            />
            <View style={styles.headerTextContainer}>
              <Text
                style={
                  styles.headerText
                }>{`${topUser} has topped Score-Board`}</Text>
            </View>
          </View>
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
            contentContainerStyle={styles.leaderBoardContainer}>
            {leaderboardData.map((item, index) => (
              <View key={index} style={styles.leaderBoardCardComponent}>
                <FontAwesome
                  size={40}
                  color={COLORS.lighter_primary}
                  name="user-circle-o"
                />

                <Text style={styles.leaderBoardCardComponentText}>
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: DIM.height * 0.145,
    backgroundColor: '#f1f1f1',
  },
  headerContainer: {
    backgroundColor: COLORS.light_primary,
    marginTop: 10,
    width: DIM.width * 0.9,
    height: DIM.height * 0.18,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.white,
    fontSize: 16,
    marginTop: 10,
    letterSpacing: 1.5,
    fontWeight: '800',
    textAlign: 'center',
  },
  headerTextContainer: {
    width: '80%',
    // backgroundColor: 'red',
  },
  image: {
    height: 60,
    width: 60,
    tintColor: COLORS.white,
  },
  leaderBoardContainer: {
    width: DIM.width * 0.96,
    marginTop: 10,
    rowGap: 9,
    paddingTop: 5,
    alignItems: 'center',
    paddingBottom: 20,
  },
  leaderBoardCardComponent: {
    flexDirection: 'row',
    width: '90%',
    height: DIM.height * 0.1,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    alignItems: 'center',
    paddingLeft: 25,
    elevation: 1,
    borderBottomColor: COLORS.lighter_primary,
    borderBottomWidth: 2,
    borderLeftColor: COLORS.lighter_primary,
    borderLeftWidth: 2,
  },
  leaderBoardCardComponentText: {
    fontSize: 18,
    color: COLORS.lighter_primary,
    fontWeight: '800',
    marginLeft: 10,
  },
})
