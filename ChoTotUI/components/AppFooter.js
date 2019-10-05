import React, { PureComponent } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

function SmallText(props) {
  return <Text style={{ fontSize: 8 }}>{props.text}</Text>
}

const buttons = [
  {
    name: 'Đi chợ',
    icon: <Icon name="home" />,
    badge: 2
  }, {
    name: 'Tin nhắn',
    icon: <Icon name="ios-chatboxes" />,
    badge: 0
  }, {
    name: 'Thông báo',
    icon: <Icon name="bell" type="FontAwesome5" />,
    badge: 2
  }, {
    name: 'Tôi bán',
    icon: <Icon name="person" />,
    badge: 2
  },
  {
    name: 'Thêm',
    icon: <Icon name="ios-more" />,
    badge: 2
  },
]

export default class AppFooter extends PureComponent {
  render() {
    return (
      <Footer>
        <FooterTab>
          {
            buttons.map((btn, index) => {
              if (btn.badge)
                return <Button badge key={index}>
                  <Badge><Text>{btn.badge}</Text></Badge>
                  {btn.icon}
                  <SmallText text={btn.name} />
                </Button>

              return <Button key={index}>
                {btn.icon}
                <SmallText text={btn.name} />
              </Button>

            })
          }
        </FooterTab>
      </Footer>
    );
  }
}