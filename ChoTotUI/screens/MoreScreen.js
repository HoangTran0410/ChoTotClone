import React, { Component } from 'react';
import { Text } from 'native-base';
import { View } from 'react-native';
import { connect } from 'react-redux';

class MoreScreen extends Component {
  state = {}
  render() {
    return <View>
      <Text>{this.props.count}</Text>
    </View>;
  }
}

export default connect(state => {
  return {
    count: state.count
  }
})(MoreScreen)