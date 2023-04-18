import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
  Alert,
} from 'react-native'

//Custom Imports
import { Header, QuestionWithOptions } from '../components'
import { DIM, COLORS } from '../constant'

import CountDown from 'react-native-countdown-component'

export default function QuizQuestionDemo({ route, navigation }) {
  const warning_text =
    'Select one option for each question and submit it within time and once selected cannot be altered. Select carefully.'

  const { quesObj, title, timer } = route.params
  const [userPoints, setUserPoints] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [pauseTimer, setPauseTimer] = useState(false)
  const [submit, setSubmit] = useState(false)

  const handleSubmit = () => {
    setSubmit(true)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
    navigation.navigate('QuizDemo', {
      promptForLogin: true,
    })
  }

  return (
    <>
      <Header
        dontShowLeftIcon
        headerText={title}
        dontShowRightIcon
        extraStyles={{
          height: DIM.height * 0.135 + StatusBar.currentHeight,
        }}
      />

      <View
        style={{
          flex: 1,
          width: DIM.width,
          marginBottom: DIM.height * 0.14,
        }}>
        {showModal && (
          <Modal
            animationType="slide"
            transparent
            onRequestClose={() => {
              setShowModal(false)
            }}>
            <View style={styles.modal}>
              <Text style={styles.modalText}>
                You have earned {userPoints} points
              </Text>
              <TouchableOpacity
                onPress={() => {
                  onCloseModal()
                }}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'space-around',
          }}>
          <CountDown
            style={{ marginTop: 10 }}
            timeLabelStyle={{
              fontSize: 14,
              fontWeight: '800',
              color: COLORS.light_primary,
              marginRight: 2,
            }}
            digitStyle={{ backgroundColor: COLORS.light_primary }}
            digitTxtStyle={{
              color: 'white',
            }}
            until={30}
            size={20}
            onFinish={() => {
              if (!submit) {
                setTimeout(() => setShowModal(true), 1000)
              }
            }}
            timeToShow={['M', 'S']}
            running={pauseTimer}
          />
          <TouchableOpacity
            onPress={() => {
              setPauseTimer(true)
            }}
            style={[
              styles.modalButton,
              {
                width: '50%',
                marginTop: 0,
                alignSelf: 'center',
                borderRadius: 10,
              },
            ]}>
            <Text style={styles.modalButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notify_text_container}>
          <Text style={styles.notify_text}>{warning_text}</Text>
        </View>
        {!pauseTimer ? (
          <View
            style={{
              height: '60%',
              width: DIM.width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 19,
                color: COLORS.primary,
                fontWeight: '700',
              }}>
              Press the start button to start the quiz.
            </Text>
          </View>
        ) : (
          <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.container}>
              {quesObj.map((it, ind) => (
                <QuestionWithOptions
                  key={ind}
                  quesItem={it}
                  index={ind}
                  correctAns={it.correctAns}
                  userPoints={userPoints}
                  setUserPoints={setUserPoints}
                />
              ))}
              <TouchableOpacity
                onPress={() => {
                  handleSubmit()
                }}
                style={styles.quiz_submit_button}>
                <Text style={styles.quiz_submit_text}>Submit</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: DIM.height * 0.135,
    alignItems: 'center',
    paddingTop: DIM.height * 0.02,
    // backgroundColor: 'red',
    paddingBottom: DIM.height * 0.15,
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: DIM.height * 0.5,
    width: DIM.width * 0.8,
    backgroundColor: 'white',
    top: '25%',
    bottom: '25%',
    left: '10%',
    right: '10%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderRightColor: COLORS.light_primary,
    borderLeftColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    borderBottomColor: COLORS.lighter_primary,
    borderWidth: 10,
    opacity: 0.85,
    elevation: 4,
  },
  modalButton: {
    height: 60,
    width: '70%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1,
  },
  modalText: {
    fontSize: 23,
    fontWeight: '800',
    fontFamily: 'monospace',
    color: COLORS.primary,
    textAlign: 'center',
  },
  notify_text: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.primary,
    fontWeight: '700',
  },
  notify_text_container: {
    // backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    width: '90%',
    height: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  question: {
    fontSize: 15,
    fontWeight: '700',
  },
  quiz_submit_button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    borderRadius: 15,
    backgroundColor: COLORS.primary,
  },
  quiz_submit_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
})
