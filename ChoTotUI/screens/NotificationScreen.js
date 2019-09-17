import React, { Component } from 'react';
import { Container, Text } from 'native-base';

class NotificationScreen extends Component {
  state = {}
  render() {
    return <Container>
      <Text>NotificationScreen</Text>
    </Container>;
  }
}

NotificationScreen.navigationOptions = {
  header: null,
};

export default NotificationScreen;