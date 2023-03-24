import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

//Custom Imports
import { Header } from '../components'
import { DIM, COLORS, data } from '../constant'

//Importing Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function QuizQuestion({ navigation, route }) {
  return (
    <>
      <Header
        dontShowLeftIcon
        headerText={route.params.name}
        dontShowRightIcon
      />
      <View
        style={{
          flex: 1,
          width: DIM.width,
          marginBottom: DIM.height * 0.14,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          {data.map((item, index) => {
            return (
              <>
                <View
                  key={item.id}
                  style={[styles.questionItem, { width: DIM.width * 0.9 }]}>
                  <View style={styles.indexItem}>
                    <Text style={styles.indexItemText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.question}>{item.question}</Text>
                </View>
                <View
                  key={item}
                  style={{
                    // backgroundColor: 'tomato',
                    paddingLeft: DIM.width * 0.1,
                    width: DIM.width * 0.9,
                    height: DIM.height * 0.55,
                    rowGap: 13,
                  }}>
                  {item.options.map((choice, ind) => {
                    return (
                      <TouchableOpacity
                        key={choice.id}
                        onPress={() => {}}
                        style={[
                          styles.questionItem,
                          {
                            borderBottomColor: choice.color,
                            borderLeftColor: choice.color,
                            borderBottomWidth: 4,
                            borderLeftWidth: 4,
                            borderTopColor: choice.color,
                            borderTopWidth: 1,
                            borderRightColor: choice.color,
                            borderRightWidth: 1,
                            width: DIM.width * 0.8,
                          },
                        ]}>
                        <View
                          style={[
                            styles.indexItem,
                            {
                              backgroundColor: choice.color,
                            },
                          ]}>
                          {!choice.check ? (
                            <Text style={styles.indexItemText}>
                              {choice.index}
                            </Text>
                          ) : (
                            <AntDesign
                              name="checkcircle"
                              size={30}
                              color={COLORS.primary}
                            />
                          )}
                        </View>
                        <Text style={styles.question}>{choice.val}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </>
            )
          })}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: DIM.height * 0.135,
    alignItems: 'center',
    paddingTop: DIM.height * 0.02,
    rowGap: 13,
  },
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
