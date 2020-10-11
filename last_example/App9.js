import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Post from './Post'
import data from './data.json'

class App extends Component {
  constructor(props) {
    super(props)
    state = data
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Latest posts</Text>
        </View>
        <FlatList
          data={this.state}
          renderRow={(post) => <Post {...post} />}
          style={styles.list}
          contentContainerStyle={styles.content}
        />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  // Defined on step 13
})
