import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

import Colors from "../constants/Colors";

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    text: ''
  }

  onChangeText = (text) => {
    this.setState({
      text: text
    })

    this.props.onChangeText && this.props.onChangeText(text);
  }

  onSubmitEditing = () => {
    this.props.onSubmitEditing && this.props.onSubmitEditing(this.state.text);
  }

  render() {
    return (
      <Header searchBar rounded style={styles.header}>
        <Item style={styles.shadow}>
          <Input
            style={styles.input}
            placeholder={this.props.placeholder}
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
    backgroundColor: Colors.choTotColor2,
  },
  input: {
    margin: 10,
    fontSize: 15,
    paddingLeft: 10,
    color: '#888888',
    letterSpacing: 1.25,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,

    elevation: 4,
  }
})