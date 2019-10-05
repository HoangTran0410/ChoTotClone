import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ListTags extends PureComponent {

  render() {

    const { tags, big, limit } = this.props
    const limitIndex = (limit ? limit - 1 : tags.length - 1)

    const labelItemStyle = (big ? styles.labelItemBig : styles.labelItem)
    const labelTextStyle = (big ? styles.labelTextBig : styles.labelText)

    return (
      <View style={styles.labelContainer}>
        {tags.map((label, index) => {
          if (index <= limitIndex) {
            return (
              <View
                key={label.id}
                style={[labelItemStyle, { backgroundColor: label.color }]}
              >
                <Text style={labelTextStyle}>{label.title}</Text>
              </View>
            )
          } else if (index == limitIndex + 1) {
            return (
              <View
                key={label.id}
                style={[labelItemStyle, { backgroundColor: '#F1F2F3', borderRadius: 5 }]}
              >
                <Text style={labelTextStyle}>{`+ ${tags.length - index} đặc tính`}</Text>
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
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  labelItem: {
    padding: 1,
    marginRight: 2,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  labelText: {
    marginHorizontal: 5,
    fontSize: 11,
  },

  labelItemBig: {
    padding: 3,
    margin: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  labelTextBig: {
    marginHorizontal: 5,
    fontSize: 12,
  }
})