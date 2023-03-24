import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Header } from '../components'
import { COLORS, DIM } from '../constant'

export default function LeaderBoard({ navigation }) {
  const leaderBoardTitle = 'Username has topped Score-Board'

  const data = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <Header
        headerText={'Leaderboard'}
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
        onRightIconPress={() => {}}
      />

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.image}
            source={require('../assets/trophy.png')}
          />
          <Text style={styles.headerText}>{leaderBoardTitle}</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.leaderBoardContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.leaderBoardCardComponent}>
              <FontAwesome
                size={50}
                color={COLORS.lighter_primary}
                name="user-circle-o"
              />

              <Text style={styles.leaderBoardCardComponentText}>
                {'User ' + item}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
    width: DIM.width * 0.95,
    height: DIM.height * 0.25,
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
  },
  image: {
    height: 90,
    width: 90,
    tintColor: COLORS.white,
  },
  leaderBoardContainer: {
    width: DIM.width * 0.96,
    marginTop: 10,
    rowGap: 13,
    paddingTop: 5,
    alignItems: 'center',
    paddingBottom: 20,
  },
  leaderBoardCardComponent: {
    flexDirection: 'row',
    width: '95%',
    height: DIM.height * 0.12,
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
