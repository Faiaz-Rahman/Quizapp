import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native'

import Onboarding from 'react-native-onboarding-swiper'

import { COLORS } from '../constant'

const imageUri = '../assets/amico.png'
const imageUri_second = '../assets/amico_2.png'

const skip = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.onboardingButtonStyle} {...props}>
      <Text style={{ fontSize: 17, color: 'white' }}>Back</Text>
    </TouchableOpacity>
  )
}

const next = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.onboardingButtonStyle} {...props}>
      <Text style={{ fontSize: 17, color: 'white' }}>Next</Text>
    </TouchableOpacity>
  )
}

const done = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.onboardingButtonStyle} {...props}>
      <Text style={{ fontSize: 17, color: 'white' }}>Done</Text>
    </TouchableOpacity>
  )
}

export default function OnboardingScreen({ navigation }) {
  return (
    <>
      <StatusBar hidden={true} />
      <Onboarding
        NextButtonComponent={next}
        SkipButtonComponent={skip}
        DoneButtonComponent={done}
        onDone={() => navigation.navigate('QuizDemo')}
        onSkip={() => {}}
        pages={[
          {
            backgroundColor: '#FFF',
            image: (
              <Image
                source={require(imageUri)}
                style={styles.image}
                resizeMode="cover"
              />
            ),
            title: 'Quizapp',
            subtitle: (
              <Text style={styles.subtitleTextSize}>
                Get in the Know - Quiz it Up!
              </Text>
            ),
          },
          {
            backgroundColor: '#FFF',
            image: (
              <Image source={require(imageUri_second)} style={styles.image} />
            ),
            title: 'Quizapp',
            subtitle: (
              <Text style={styles.subtitleTextSize}>Let's play a demo!</Text>
            ),
          },
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  onboardingButtonStyle: {
    height: 45,
    width: 60,
    marginRight: 10,
    borderRadius: 12,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 20,
  },
  subtitleTextSize: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: '400',
  },
})
