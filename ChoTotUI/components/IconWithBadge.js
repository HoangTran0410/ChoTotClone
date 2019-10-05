import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class IconWithBadge extends PureComponent {
  render() {
    const { badgeCount } = this.props;

    let badgeCountConverted = badgeCount <= 10 ? badgeCount : '9+'

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
              borderRadius: 8,
              width: 10,
              height: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Text style={{ color: 'white', fontSize: 9, fontWeight: 'bold' }}>
              {badgeCountConverted}
            </Text> */}
          </View>
        )}
      </View>
    );
  }
}