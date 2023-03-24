import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QuizQuestion, Quiz } from '../screens/'

const QuesStack = createNativeStackNavigator()

const QuestionNav = () => {
  return (
    <QuesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <QuesStack.Screen name="quiz_screen" component={Quiz} />
      <QuesStack.Screen name="quiz_question" component={QuizQuestion} />
    </QuesStack.Navigator>
  )
}

export { QuestionNav }
