import React, { Component } from 'react';
import { Container, Text } from 'native-base';

class ProfileScreen extends Component {
  state = {}
  render() {
    return <Container>
      <Text>ProfileScreen</Text>
    </Container>;
  }
}

ProfileScreen.navigationOptions = {
  header: null,
};

export default ProfileScreen;