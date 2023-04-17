import React, { useEffect, useState, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  Modal,
  TouchableOpacity,
} from 'react-native'

import { CardItem, Header } from '../components/'
import { COLORS, DIM } from '../constant'

import firestore from '@react-native-firebase/firestore'

import Lottie from 'lottie-react-native'

export default function Quiz({ navigation, route }) {
  //All states for the screen
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [topicList, setTopicList] = useState([])
  const [showAnimation, setShowAnimation] = useState(false)

  const [checkVPN, setCheckVPN] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [timer, setTimer] = useState(30)

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchQuiz()
    wait(3500).then(() => setRefreshing(false))
  }, [])

  const fetchQuiz = async () => {
    let empty_arr = []
    let topics = []
    setShowAnimation(true)

    try {
      await firestore()
        .collection('quizzes')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            topics.push(doc.id)
            empty_arr.push(doc.data().quesObj)
          })
        })

      const getTheTime = async () => {
        try {
          await firestore()
            .collection('timer')
            .doc('time')
            .get()
            .then(val => {
              setTimer(val.data().timeVal)

              // console.log(val.data().timeVal)
            })
        } catch (error) {
          console.log(error)
        }
      }

      const fetchLocationInfo = async () => {
        let response = await fetch('https://sobujbari.com/getIPDetails', {
          method: 'GET',
        })
        let json = await response.json()

        setCheckVPN(json)
      }
      fetchLocationInfo()
      getTheTime()
    } catch (error) {
      console.log('Error Occurred')
    }

    setData(empty_arr)
    setTopicList(topics)

    setTimeout(() => {
      setShowAnimation(false)
    }, 2500)
    // console.log(empty_arr)
  }

  useEffect(() => {
    fetchQuiz()

    return () => {
      fetchQuiz()
    }
  }, [])

  return (
    <>
      <Header
        headerText={'Quizzes'}
        onLeftIconPress={() => {
          navigation.toggleDrawer()
        }}
      />
      {showModal && (
        <Modal
          animationType="slide"
          transparent
          onRequestClose={() => {
            setShowModal(false)
          }}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              You need to use a VPN with American Server.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false)
              }}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      {showAnimation ? (
        <Lottie
          loop
          autoPlay
          source={require('../assets/double_loader.json')}
        />
      ) : (
        <View style={styles.container}>
          <FlatList
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
            contentContainerStyle={{
              paddingTop: 20,
              width: DIM.width,
              paddingLeft: 25,
              // backgroundColor: 'red',
            }}
            numColumns={3}
            data={topicList}
            renderItem={({ item, index }) => {
              return (
                <CardItem
                  card={item}
                  onPress={() => {
                    // console.log(data)
                    if (checkVPN.country !== 'United States') {
                      setShowModal(true)
                    } else {
                      navigation.navigate('quiz_question', {
                        quesObj: data[index],
                        title: item,
                      })
                    }

                    // navigation.navigate('quiz_question', {
                    //   quesObj: data[index],
                    //   title: item,
                    //   timer: timer,
                    // })
                  }}
                />
              )
            }}
            keyExtractor={(item, index) => index}
          />
        </View>
      )}
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
