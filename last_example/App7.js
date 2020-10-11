import React, { useState } from 'react'
import { View } from 'react-native'
import SwitchExample from './switch_example.js'

export default function App() {
  const [state, setState] = useState({
    switch1Value: true,
  })

  const toggleSwitch = (value) => {
    setState({ switch1Value: value })
    console.log('Switch 1 is: ' + value)
  }

  return (
    <View>
      <SwitchExample
        toggleSwitch1={toggleSwitch}
        switch1Value={state.switch1Value}
      />
    </View>
  )
}
