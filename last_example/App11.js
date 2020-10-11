import React from 'react'
import { Text, StyleSheet } from 'react-native'

const onPressTitle = () => {
  console.log('title presend')
}

const App = () => {
  const titleText = React.useState("Bird's Nest")
  const bodyText = React.useState('This is not really bird')
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLine={5}>{bodyText}</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default App
