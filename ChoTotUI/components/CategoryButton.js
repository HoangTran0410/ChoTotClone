import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class CategoryButton extends Component {

  constructor(props) {
    super(props);
  }

  state = {}

  render() {

    const { text, imgSource, buttonStyle, onPress } = this.props

    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Image
          style={styles.img}
          source={imgSource}
        />
        <LinearGradient colors={['#0007', 'transparent']} style={styles.gradientView}>
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  gradientView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  text: {
    padding: 5,
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 16
  },
  img: {
    width: '100%',
    height: 100
  }
})

export default CategoryButton;