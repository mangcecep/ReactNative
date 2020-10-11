import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'

const App = () => {
  const[people, setPeople] = React.useState([
    {name: 'Cecep', key: 1},
    {name: 'Solihin', key: 2},
    {name: 'Yusup', key: 3},
    {name: 'Izzudin', key: 4},
    {name: 'Muhammad', key: 5},
    {name: 'Alfaqih', key: 6},
    {name: 'Aulia', key: 7},
  ])

  return (
    <View style={styles.container}>

      <ScrollView>
      {people.map(item=> (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
})

export default App
