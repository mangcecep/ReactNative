import React from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

const PickerExample = () => {
  const [state, setState] = React.useState({
    user: '',
  })

  const updateUser = (user) => {
    setState({
      user: user,
    })
  }

  return (
    <View>
      <Picker selectedValue={state.user} onValueChange={updateUser}>
        <Picker.Item label="Steve" value="steve" />
        <Picker.Item label="Ellen" value="Ellen" />
        <Picker.Item label="Maria" value="maria" />
      </Picker>
      <Text style={styles.text}>{state.user}</Text>
    </View>
  )
}

export default PickerExample

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
})
