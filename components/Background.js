import { StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { colors, commonStyles } from '../helper';

export default function Background({children, transparent}) {
  return (
    <LinearGradient
        style={[commonStyles.background, commonStyles.container]}
        // Reference: https://leesin.blog.csdn.net/article/details/80401883
        colors={transparent ? [colors.transparentBabyBlue, colors.transparentSlateBlue] : [colors.babyBlue, colors.slateBlue]}
        locations={[0.2, 0.8]}
    >
        {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({})