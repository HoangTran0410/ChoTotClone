import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppIntroSlider from 'react-native-app-intro-slider';

// import { isLoggedIn, logIn, logOut } from "../utils/loginLocal";

const slides = [
  {
    key: 'something-dos',

    title: 'Chào mừng',
    titleStyle: {},

    text: 'Buôn bán xã giao',
    textStyle: {},

    image: require('../assets/images/logo.jpg'),
    imageStyle: {
      width: 350,
      height: 350
    },

    backgroundColor: '#febe29',
  },
  {
    key: 'something',

    title: 'Title 1',
    titleStyle: {},

    text: 'Description.\nSay something cool',
    textStyle: {},

    image: require('../assets/images/facebook-app-icon-vector-9.jpg'),
    imageStyle: {
      width: 350,
      height: 350
    },

    backgroundColor: '#59b2ab',
  },
  {
    key: 'something1',

    title: 'Rocket guy',
    titleStyle: {},

    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    textStyle: {},

    image: require('../assets/images/icon.png'),
    imageStyle: {},

    backgroundColor: '#22bcb5',
  }
];

export default class IntroScreen extends Component {

  constructor(props) {
    super(props);

    // if (isLoggedIn()) this.props.navigation.navigate('Main');
    // else logIn({ logged: true });
    // logOut()
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('ChoiceCity')
  }

  render() {

    return <AppIntroSlider
      slides={slides}
      showSkipButton={true}
      onDone={this._onDone}

      renderDoneButton={this._renderDoneButton}
      renderNextButton={this._renderNextButton}
    />;
  }

}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})