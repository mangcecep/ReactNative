import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'

const App = () => {
  const[people, setPeople] = React.useState([
    {name: 'Cecep', id: '1'},
    {name: 'Solihin', id: '2'},
    {name: 'Yusup', id: '3'},
    {name: 'Izzudin', id: '4'},
    {name: 'Muhammad', id: '5'},
    {name: 'Alfaqih', id: '6'},
    {name: 'Aulia', id: '7'},
  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPepole) => {
      return prevPepole.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>

    <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />

      {/* <ScrollView>
      {people.map(item=> (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      )}
      </ScrollView> */}
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
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
})

export default App
