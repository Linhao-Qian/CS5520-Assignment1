import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../helper'

export default function ModalText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.bluishViolet,
    fontSize: 18,
    lineHeight: 28,
  }
})