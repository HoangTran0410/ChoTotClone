import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

class AppLoading extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { startAsync, onError, onFinish } = this.props;

    try {
      startAsync().then(() => {
        setTimeout(onFinish, 2000)
        // onFinish() 
      });
    } catch (err) {
      onError(err);
    }
  }

  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/images/AppLoading.png')}
      />
    );
  }
}

export default AppLoading;