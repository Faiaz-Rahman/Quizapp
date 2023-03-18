import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, DIM } from '../constant'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ProfileComponent({ name, title, titleValue }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <MaterialCommunityIcons
          name={name}
          size={30}
          color={COLORS.lighter_primary}
        />
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={styles.innerSideContainer}>
        <Text style={styles.titleValueStyle}>{titleValue}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: DIM.height * 0.1,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.lighter_primary,
    justifyContent: 'center',
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.lighter_primary,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '40%',
    // backgroundColor: 'red',
  },
  innerSideContainer: {
    width: '60%',
    flexDirection: 'row',
    backgroundColor: COLORS.boxColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
  },
  titleStyle: {
    fontSize: 15,
    color: COLORS.light_primary,
    fontWeight: '800',
    letterSpacing: 1,
  },
  titleValueStyle: {
    fontSize: 16,
    color: 'grey',
  },
})
