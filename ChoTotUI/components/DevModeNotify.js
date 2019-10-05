import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DevModeNotify extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'gray', textAlign: 'center', fontSize: 15 }}>... Đang trong giai đoạn phát triển ...</Text>
      </View>
    )
  }
}
