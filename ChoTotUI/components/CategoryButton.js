import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class CategoryButton extends PureComponent {

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
        <LinearGradient colors={['#0005', 'transparent']} style={styles.gradientView}>
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
    fontSize: 16,

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5
  },
  img: {
    width: '100%',
    height: 100
  }
})

export default CategoryButton;