// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, View, Text, TouchableHighlight } from 'react-native'

const heartIcon = require('./images/plain-heart.png')

const App = () => {
  const [state, setState] = React.useState({
    liked: false,
  })

  const _onPressBtn = () => {
    setState({
      liked: !state.liked,
    })
  }

  const likedStyles = state.liked ? styles.liked : null
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={_onPressBtn}
        style={styles.btn}
        underlayColor="#fefefe"
      >
        <Image source={heartIcon} style={[styles.icon, likedStyles]} />
      </TouchableHighlight>
      <Text style={styles.text}>Do you like this app?</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    marginTop: 20,
  },
})
