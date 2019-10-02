import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class IconWithBadge extends PureComponent {
  render() {
    const { badgeCount } = this.props;

    let badgeCountConverted = badgeCount <= 99 ? badgeCount : '99+'

    return (
      <View>
        <Icon
          {...this.props}
        />
        {badgeCount > 0 && (
          <View
            style={{
              // If you're using react-native < 0.57 overflow outside of parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: '#f22f',
              borderRadius: 6,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCountConverted}
            </Text>
          </View>
        )}
      </View>
    );
  }
}