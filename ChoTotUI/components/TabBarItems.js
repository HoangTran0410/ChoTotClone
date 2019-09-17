import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'native-base';

import Colors from '../constants/Colors';

function TabBarIcon(props) {
  const color = props.focused ? Colors.choTotColor : Colors.tabIconDefault

  return (
    <Icon
      {...props}
      size={26}
      style={{ color }}
    />
  );
}

function TabBarLabel(props) {
  const color = (props.focused ? '#000' : '#888');
  const fontWeight = (props.focused ? 'bold' : 'normal');

  return (
    <Text style={{ alignSelf: 'center', fontSize: 12, color, fontWeight }}>{props.text}</Text>
  );
}

export {
  TabBarIcon,
  TabBarLabel
}