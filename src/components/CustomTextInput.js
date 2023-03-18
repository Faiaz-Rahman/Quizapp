import React, { useState, useRef } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS, DIM } from '../constant'

export default function CustomTextInput({
  text,
  iconName = null,
  pass = null,
  onChangeText,
  color,
}) {
  const [secure, setSecure] = useState(true)
  const textInput = useRef(null)

  if (pass === null) {
    return (
      <View style={styles.container}>
        {iconName !== null && (
          <Icon
            name={iconName}
            size={30}
            color={COLORS.primary}
            style={{ marginRight: 10 }}
          />
        )}
        <TextInput
          ref={textInput}
          onChangeText={onChangeText}
          autoCapitalize="none"
          placeholder={text}
          placeholderTextColor="slategrey"
          style={styles.textInputText}
          keyboardType="email-address"
          on
        />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        {iconName !== null && (
          <Icon
            name={iconName}
            size={30}
            color={COLORS.primary}
            style={{ marginRight: 10 }}
          />
        )}
        <TextInput
          onChangeText={onChangeText}
          placeholder={text}
          placeholderTextColor="slategrey"
          secureTextEntry={secure}
          style={[styles.textInputText, { flex: 1 }]}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Icon
            name={secure ? 'eye' : 'eye-off'}
            color={secure ? color : COLORS.light_primary}
            size={30}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: DIM.height * 0.08,
    width: DIM.width * 0.8,
    borderRadius: 10,
    backgroundColor: COLORS.boxColor,
    paddingLeft: 15,
    marginBottom: 20,
    opacity: 0.5,
  },
  textInputText: {
    fontSize: 17,
    color: 'slategrey',
    fontStyle: 'italic',
    flex: 1,
  },
})
