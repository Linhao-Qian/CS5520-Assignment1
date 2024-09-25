import { StyleSheet, Button } from 'react-native'
import React from 'react'
import { colors } from '../helper'

export default function CustomButton({title, color, onPress, disabled}) {
  return (
    <Button
      title={title}
      color={color || colors.blue}
      disabled={disabled}
      onPress={onPress}
    />
  )
}

const styles = StyleSheet.create({})