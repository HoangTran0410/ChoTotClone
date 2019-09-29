import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class EmptyPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#333', fontSize: 16 }}>{this.props.text || 'Không có dữ liệu'}</Text>
      </View>
    )
  }
}
