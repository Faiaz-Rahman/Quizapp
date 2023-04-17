import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { COLORS, DIM } from '../constant'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Header({
  onLeftIconPress,
  isProfile = null,
  extraStyles,
  headerText,
  dontShowLeftIcon = false,
  dontShowRightIcon = false,
}) {
  return (
    <View
      style={[
        styles.container,
        { ...extraStyles },
        { justifyContent: dontShowLeftIcon ? 'center' : 'space-between' },
      ]}>
      {!dontShowLeftIcon && (
        <TouchableOpacity
          onPress={() => {
            onLeftIconPress()
          }}>
          <FontAwesome5 size={25} color={COLORS.white} name="bars" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerUsernameStyle}>
        {headerText ? headerText : 'Username'}
      </Text>
      {!dontShowRightIcon && (
        <View>
          {isProfile === null ? (
            <FontAwesome size={35} color={COLORS.white} name="user-circle-o" />
          ) : (
            <Image
              source={require('../assets/heads_up.png')}
              style={{
                height: 55,
                width: 55,
              }}
            />
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: DIM.width * 0.07,
    paddingRight: DIM.width * 0.07,
    backgroundColor: COLORS.light_primary,
    elevation: 0,
    height: DIM.height * 0.135,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  headerUsernameStyle: {
    fontSize: 19,
    color: COLORS.white,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
})
