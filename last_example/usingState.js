import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const App = () => {
  const[name, setName] = React.useState('Cecep');
  const[person, setPerson] = React.useState({
    name: 'mario',
    age: 40
  })

  const clickHandler = () => {
    setName('Solihin Yusup');
    setPerson({ name : 'luigi', age: 45})
  }

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>His Name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
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
  }
})

export default App
