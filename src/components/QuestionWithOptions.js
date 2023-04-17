import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DIM, COLORS } from '../constant'

import { Options } from '../components'

export default function QuestionWithOptions({
  index,
  quesItem,
  userPoints,
  setUserPoints,
}) {
  const [selectedAns, setSelectedAns] = useState({
    optionInd: '',
    disabled: [],
  })

  useEffect(() => {
    console.log(selectedAns)
  }, [selectedAns])

  return (
    <>
      <View style={[styles.questionItem, { width: DIM.width * 0.9 }]}>
        <View style={styles.indexItem}>
          <Text style={styles.indexItemText}>{index + 1}</Text>
        </View>
        <Text style={styles.question}>{quesItem.ques}</Text>
      </View>
      <View style={styles.optionContainer}>
        <Options
          item={quesItem.options[0]}
          indexOfItem={index}
          correctAns={quesItem.correctAns}
          userPoints={userPoints}
          setUserPoints={setUserPoints}
          selectedAns={selectedAns}
          setSelectedAns={setSelectedAns}
        />
        <Options
          correctAns={quesItem.correctAns}
          item={quesItem.options[1]}
          indexOfItem={index}
          userPoints={userPoints}
          setUserPoints={setUserPoints}
          selectedAns={selectedAns}
          setSelectedAns={setSelectedAns}
        />
        <Options
          correctAns={quesItem.correctAns}
          item={quesItem.options[2]}
          indexOfItem={index}
          userPoints={userPoints}
          setUserPoints={setUserPoints}
          selectedAns={selectedAns}
          setSelectedAns={setSelectedAns}
        />
        <Options
          correctAns={quesItem.correctAns}
          item={quesItem.options[3]}
          indexOfItem={index}
          userPoints={userPoints}
          setUserPoints={setUserPoints}
          selectedAns={selectedAns}
          setSelectedAns={setSelectedAns}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  optionContainer: {
    // backgroundColor: 'tomato',
    paddingLeft: DIM.width * 0.1,
    width: DIM.width * 0.9,
    height: DIM.height * 0.43,
    rowGap: 13,
  },
  questionItem: {
    height: DIM.height * 0.09,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 15,
    borderBottomColor: COLORS.primary,
    borderLeftColor: COLORS.primary,
    borderRightColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  indexItem: {
    backgroundColor: COLORS.primary,
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
    fontSize: 13,
    fontWeight: '700',
  },
})
