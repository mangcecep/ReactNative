import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Button from './Button'

function onPressBtn() {
  Alert.alert('Alert', 'You Click this button')
}

const App = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.btn}> My first button</Button>
      <Button success style={styles.btn}>
        {' '}
        Success button
      </Button>
      <Button info style={styles.btn}>
        {' '}
        Info button
      </Button>
      <Button danger rounded style={styles.btn} onPress={onPressBtn}>
        {' '}
        Rounded button{' '}
      </Button>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: 10,
  },
})
