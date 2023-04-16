import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native'

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
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            numColumns={2}
            data={topicList}
            renderItem={({ item, index }) => {
              return (
                <CardItem
                  card={item}
                  onPress={() => {
                    // console.log(data)
                    navigation.navigate('quiz_question', {
                      quesObj: data[index],
                      title: item,
                    })
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
})
