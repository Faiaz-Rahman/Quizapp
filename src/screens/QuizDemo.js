import React, { useEffect, useState, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

import { CardItem, Header } from '../components'
import { COLORS, DIM, data } from '../constant'

const topics = ['Chemistry', 'History', 'Law', 'Math', 'Physics']

export default function QuizDemo({ navigation, route }) {
  const [showModal, setShowModal] = useState(false)
  let val

  try {
    val = route.params.promptForLogin
  } catch (error) {
    val = null
  }

  const onCloseModal = () => {
    navigation.navigate('Login')
  }

  return (
    <>
      <Header
        headerText={'Quizzes'}
        extraStyles={{
          height: DIM.height * 0.135 + StatusBar.currentHeight,
        }}
        onLeftIconPress={() => {
          console.log('Do nothing')
        }}
      />
      {val !== null && (
        <Modal
          animationType="slide"
          transparent
          onRequestClose={() => {
            setShowModal(false)
          }}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              Want to play the game? Login for more!
            </Text>
            <TouchableOpacity
              onPress={() => {
                onCloseModal()
              }}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
            width: DIM.width,
            paddingLeft: 25,
          }}
          numColumns={3}
          data={topics}
          renderItem={({ item, index }) => {
            return (
              <CardItem
                card={item}
                onPress={() => {
                  navigation.navigate('QuizQuestionDemo', {
                    quesObj: data[index],
                    title: item,
                    timer: 30,
                  })
                }}
              />
            )
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: DIM.height * 0.135,
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
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'monospace',
    color: COLORS.primary,
    textAlign: 'center',
  },
})
