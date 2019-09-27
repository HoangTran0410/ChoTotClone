import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class ProfileScreen extends Component {
  state = {}
  render() {
    return <View style={{ flex: 1, justifyContent: 'center' }}>

      <Button
        title="LogIn"
        onPress={() => this.props.navigation.navigate('LogIn')}
      />

    </View>;
  }
}

export default ProfileScreen;