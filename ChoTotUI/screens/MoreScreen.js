import React, { Component } from 'react';
import { Container, Text } from 'native-base';

class MoreScreen extends Component {
  state = {}
  render() {
    return <Container>
      <Text>MoreScreen</Text>
    </Container>;
  }
}

MoreScreen.navigationOptions = {
  header: null,
};

export default MoreScreen;