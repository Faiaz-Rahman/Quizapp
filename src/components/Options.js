import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { COLORS, DIM } from '../constant'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Options({
  item,
  userPoints,
  setUserPoints,
  indexOfItem,
  correctAns,
  selectedAns,
  setSelectedAns,
}) {
  const [select, setSelect] = useState(false)
  let color

  let arr = ['A', 'B', 'C', 'D']

  if (item.optionInd === 'A') {
    color = 'brown'
  } else if (item.optionInd === 'B') {
    color = 'red'
  } else if (item.optionInd === 'C') {
    color = 'blue'
  } else {
    color = 'green'
  }

  useEffect(() => {
    // console.log(selectedAns)
    return () => {}
  }, [selectedAns])

  return (
    <>
      <TouchableOpacity
        disabled={selectedAns.disabled.includes(item.optionInd) ? true : false}
        onPress={() => {
          setSelect(prev => !prev)
          setSelectedAns({
            optionInd: item.optionInd,
            disabled: arr.filter(val => val !== item.optionInd),
          })
          if (item.optionInd === correctAns) {
            setUserPoints(userPoints + 10)
            console.log('Correct Answer')
          } else {
            console.log('Incorrect, Try again!')
          }

          // console.log(item, indexOfItem, '=>', correctAns)
        }}
        style={[
          styles.questionItem,
          {
            borderBottomColor: color,
            borderLeftColor: color,
            borderBottomWidth: 4,
            borderLeftWidth: 4,
            borderTopColor: color,
            borderTopWidth: 1,
            borderRightColor: color,
            borderRightWidth: 1,
            width: DIM.width * 0.8,
          },
        ]}>
        <View
          style={[
            styles.indexItem,
            {
              backgroundColor: color,
            },
          ]}>
          {!select ? (
            <Text style={styles.indexItemText}>{item.optionInd}</Text>
          ) : (
            <AntDesign name="checkcircle" size={35} color={COLORS.white} />
          )}
        </View>
        <Text style={styles.question}>{item.optionVal}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  questionItem: {
    height: DIM.height * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 15,
    borderBottomColor: COLORS.light_primary,
    borderLeftColor: COLORS.light_primary,
    borderRightColor: COLORS.lighter_primary,
    borderTopColor: COLORS.lighter_primary,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  indexItem: {
    backgroundColor: COLORS.light_primary,
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  indexItemText: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: '800',
  },
  question: {
    fontSize: 15,
    fontWeight: '700',
  },
})
