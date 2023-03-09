/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Providers } from './src/navigation'

function App() {
  return <Providers />
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
})

export default App
