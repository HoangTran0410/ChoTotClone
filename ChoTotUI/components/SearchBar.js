import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

import Colors from "../constants/Colors";

export default class SearchBar extends Component {

  state = {
    text: ''
  }

  onSubmitEditing = () => {
    alert('Tìm kiếm ' + this.state.text)
  }

  onChangeText = (text) => {
    this.setState({
      text: text
    })
  }

  render() {
    return (
      <Header searchBar rounded style={styles.header}>
        <Item>
          <Input
            style={styles.input}
            placeholder="Tìm kiếm trên Chợ Tốt"
            value={this.state.text}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
          />
          <Icon name="ios-search" />
        </Item>
        <Button transparent>
          <Text>Tìm</Text>
        </Button>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.choTotColor
  },
  input: {
    margin: 10,
    fontSize: 15,
    paddingLeft: 20,
    color: '#888888',
    letterSpacing: 1.5
  }
})