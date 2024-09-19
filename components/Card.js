import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../helper'

export default function Card({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.grey,
    width: 324,
    padding: 16,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
    shadowOpacity: 0.3,
  }
})