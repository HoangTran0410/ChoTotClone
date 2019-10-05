import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';
import IconWithBadge from './IconWithBadge';

function TabBarIcon(props) {
  const color = props.focused ? Colors.choTotColor : Colors.tabIconDefault

  return (
    <IconWithBadge
      {...props}
      // badgeCount={0}
      // size={10}
      style={{ color, fontSize: 24 }}
    />
  );
}

function TabBarLabel(props) {
  const color = (props.focused ? '#000' : '#888');
  const fontWeight = (props.focused ? 'bold' : 'normal');

  return (
    <Text style={{ alignSelf: 'center', fontSize: 10, color, fontWeight }}>{props.text}</Text>
  );
}

export {
  TabBarIcon,
  TabBarLabel
}