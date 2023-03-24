import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CardItem, Header } from '../components/'
import { DIM, icons } from '../constant'

import firestore from '@react-native-firebase/firestore'

export default function Quiz({ navigation }) {
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
          data={icons}
          renderItem={({ item, index }) => {
            return (
              <CardItem
                card={item}
                onPress={() => {
                  navigation.navigate('quiz_question', { name: item.cardTitle })
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
