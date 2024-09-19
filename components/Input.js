import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import ModalText from './ModalText';
import HintText from './HintText';
import { colors, commonStyles } from '../helper';


export default function Input({label, text, setText, rule, errorText}) {
  return (
    <View style={styles.container}>
      <ModalText>{label}</ModalText>
      <TextInput
        keyboardType='default'
        style={commonStyles.input}
        selectionColor={colors.lightBlue}
        textAlign='center'
        value={text}
        onChangeText={newText => setText(newText)}
      />
      <View style={styles.hint}>
        {text?.length > 0 && !text?.match(rule) && <HintText>{errorText}</HintText>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  hint: {
    marginBottom: 48,
  }
})