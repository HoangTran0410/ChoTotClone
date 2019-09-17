import React, { Component } from 'react';
import { Container, Text } from 'native-base';

class ChatScreen extends Component {
  state = {}
  render() {
    return <Container>
      <Text>ChatScreen</Text>
    </Container>;
  }
}

ChatScreen.navigationOptions = {
  header: null,
};

export default ChatScreen;