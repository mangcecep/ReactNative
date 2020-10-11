import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const App = () => {
  const[name, setName] = React.useState('Cecep')
  const[age, setAge] = React.useState(30)

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g John Doe'
        onChangeText={(e) => setName(e)}/>
      
      <Text>Enter Age: </Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='30'
        onChangeText={(e) => setAge(e)}/>

      <Text>Name: {name} {"\n"} age: {age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: 200
  }
})

export default App
