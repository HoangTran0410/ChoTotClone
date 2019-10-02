import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button, Header, Item, Input, Left, Right } from 'native-base';

import Colors from "../constants/Colors";

export default class MySearchBar extends PureComponent {

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
        {
          this.props.leftButton &&
          <Left style={{ flex: 0.15 }}>
            <Button transparent onPress={this.props.onPressLeftButton}>
              <Icon name={this.props.leftButton} style={{ fontSize: 25 }} />
            </Button>
          </Left>
        }
        <Item style={styles.shadow}>
          <Input
            style={styles.input}
            placeholder={this.props.placeholder}
            value={this.state.text}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
          />
          <Icon name={'ios-search'} />
        </Item>
        {
          this.props.rightButton &&
          <Right style={{ flex: 0.2 }}>
            <Button transparent onPress={this.props.onPressRightButton}>
              <Icon name={this.props.rightButton} style={{ fontSize: 25 }} />
            </Button>
          </Right>
        }
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.choTotColor2,
  },
  input: {
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