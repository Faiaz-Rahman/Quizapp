import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DIM, COLORS } from '../constant'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

export default function CardItem({ card }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        {card.cardIcon === 'lab-flask' ? (
          <Entypo
            name={card.cardIcon}
            size={40}
            color={COLORS.lighter_primary}
          />
        ) : (
          <MaterialCommunityIcons
            name={card.cardIcon}
            size={40}
            color={COLORS.lighter_primary}
          />
        )}

        <Text>{card.cardTitle ? card.cardTitle : 'Nothing'}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: DIM.width * 0.4,
    height: DIM.height * 0.23,
    backgroundColor: COLORS.lighter_primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
  },
  innerContainer: {
    backgroundColor: 'white',
    height: '80%',
    width: '80%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
