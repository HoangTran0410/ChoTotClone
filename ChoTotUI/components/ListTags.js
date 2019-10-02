import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ListTags extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      limitIndex: (props.limit ? props.limit - 1 : props.tags.length - 1)
    }
  }

  render() {
    return (
      <View style={styles.labelContainer}>
        {this.props.tags.map((label, index) => {
          if (index <= this.state.limitIndex) {
            return (
              <View key={label.id} style={[styles.labelItem, { backgroundColor: label.color }]}>
                <Text style={styles.labelText}>{label.title}</Text>
              </View>
            )
          } else if (index == this.state.limitIndex + 1) {
            return (
              <View key={label.id} style={[styles.labelItem, { backgroundColor: '#F1F2F3', borderRadius: 5 }]}>
                <Text style={styles.labelText}>{`+ ${this.props.tags.length - index} đặc tính`}</Text>
              </View>
            )
          }
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  labelItem: {
    padding: 3,
    margin: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  labelText: {
    marginHorizontal: 5,
    fontSize: 12,
  },
})