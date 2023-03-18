import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CardItem, Header } from '../components/'
import { DIM } from '../constant'

const icons = [
  {
    id: 1,
    cardTitle: 'Math',
    cardIcon: 'math-integral-box',
  },
  {
    id: 2,
    cardTitle: 'Physics',
    cardIcon: 'react',
  },
  {
    id: 3,
    cardTitle: 'Chemistry',
    cardIcon: 'lab-flask',
  },
  {
    id: 4,
    cardTitle: 'Javascript',
    cardIcon: 'language-javascript',
  },
  {
    id: 5,
    cardTitle: 'Kotlin',
    cardIcon: 'language-kotlin',
  },
  {
    id: 6,
    cardTitle: 'Python',
    cardIcon: 'language-python',
  },
]

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
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          numColumns={2}
          data={icons}
          renderItem={({ item, index }) => {
            return <CardItem card={item} />
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
    // backgroundColor: 'green',
    marginBottom: DIM.height * 0.135,
  },
})
