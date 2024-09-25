import { Modal, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import ModalText from '../components/ModalText'
import Background from '../components/Background'
import CustomButton from '../components/CustomButton'
import { colors } from '../helper'

export default function Confirm({visible, name, email, phone, handleGoBack, handleConfirmRegister}) {
  return (
    <Modal visible={visible} transparent={true}>
      <Background transparent={true}>
        <Card>
          <View style={styles.text}>
            <ModalText>Hello {name}</ModalText>
            <ModalText>Here is the information you entered:</ModalText>
            <ModalText>{email}</ModalText>
            <ModalText>{phone}</ModalText>
            <ModalText>If it is not correct, please go back and edit them.</ModalText>
          </View>
          <View style={styles.buttons}>
            <CustomButton title="Go back" color={colors.plum} onPress={handleGoBack} />
            <CustomButton title="Continue" onPress={() => {handleConfirmRegister(phone[phone.length - 1])}} />
          </View>
        </Card>
      </Background>
    </Modal>
  )
}

const styles = StyleSheet.create({
  text: {
    width: '100%'
  },
  buttons: {
    width: '100%',
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 32,
  }
})