import React from 'react'
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native'

const modal_example = () => {
  const [state, setState] = React.useState({
    modalVisible: false,
  })

  const toggleModal = (visible) => {
    setState({ modalVisible: visible })
  }
  return (
    <View style={style.container}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={state.modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.')
        }}
      >
        <View style={style.modal}>
          <Text style={style.text}>Modal is Open!</Text>

          <TouchableHighlight
            onPress={() => {
              toggleModal(state.modalVisible)
            }}
          >
            <Text style={style.text}>Close Modal</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <TouchableHighlight onPress={() => toggleModal(true)}>
        <Text style={style.text}>Open Modal</Text>
      </TouchableHighlight>
    </View>
  )
}

export default modal_example

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 100,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
})
