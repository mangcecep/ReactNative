import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import Header from './components/header'
import TodoItems from './components/TodoItems'
import AddTodo from './components/addTodo'

const App = () => {
  const[todos, setTodos] = React.useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an App', key: '2'},
    {text: 'play on the switch', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = text => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }


  return (
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItems item={item} pressHandler={pressHandler}/>
            )}
            />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
})

export default App
