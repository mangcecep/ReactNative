import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Base, { Default, Danger, Info, Success } from './styles'

class Button extends React.Component {
  getTheme() {
    const { danger, info, success } = this.props

    if (info) {
      return Info
    }

    if (success) {
      return Success
    }

    if (danger) {
      return Danger
    }

    return Default
  }

  render() {
    const theme = this.getTheme()
    const { children, onPress, style, rounded } = this.props

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[Base.main, theme.main, rounded ? Base.rounded : null, style]}
        onPress={onPress}
      >
        <Text style={[Base.label, theme.label]}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button
