import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { CardItem, Header } from '../components/'
import { DIM, icons } from '../constant'

import firestore from '@react-native-firebase/firestore'

export default function Quiz({ navigation, route }) {
  const [data, setData] = useState([])
  const [topicList, setTopicList] = useState([])

  const fetchQuiz = async () => {
    let empty_arr = []
    let topics = []

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
      <View style={styles.container}>
        <FlatList
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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: DIM.height * 0.135,
  },
})
