import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingScreen, QuizDemo, QuizQuestionDemo } from '../screens'

const Stack = createNativeStackNavigator()

const OnboardingNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboard" component={OnboardingScreen}></Stack.Screen>
      <Stack.Screen name="QuizDemo" component={QuizDemo} options={{}} />
      <Stack.Screen
        name="QuizQuestionDemo"
        component={QuizQuestionDemo}
        options={{}}
      />
    </Stack.Navigator>
  )
}

export default OnboardingNav
