import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default class Rating extends Component {
  render() {
    if (this.props.totalRating)
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            {
              [1, 2, 3, 4, 5].map(i => (
                <AntDesign
                  key={i}
                  name={i <= this.props.star ? 'star' : 'staro'}
                  color={(i <= this.props.star ? 'orange' : 'black')}
                  style={{ fontSize: 10 }}
                />
              ))
            }
          </View>
          <Text style={{ fontSize: 11, textAlign: 'center' }}>{this.props.totalRating} lượt</Text>
        </View>
      )
    return (
      <View>
        <Text style={{ fontSize: 11, textAlign: 'center' }}>- - -</Text>
      </View>
    )
  }
}
