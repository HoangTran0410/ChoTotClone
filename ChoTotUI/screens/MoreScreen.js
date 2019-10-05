import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

import MySearchBar from '../components/MySearchBar';

const list = [
  {
    name: 'Tin đăng đã lưu',
    image: require('../assets/images/icons/tinDangDaLuu.png'),
  },
  {
    name: 'Tìm kiếm đã lưu',
    image: require('../assets/images/icons/timKiemDaLuu.png')
  },
  {
    name: 'Bạn bè',
    image: require('../assets/images/icons/friends.png'),
    bottomDivider: true
  },
  {
    name: 'Tài khoản đồng tốt',
    image: require('../assets/images/icons/dongTot.png')
  },
  {
    name: 'Lịch sử giao dịch',
    image: require('../assets/images/icons/lichSuGiaoDich.png')
  },
  {
    name: 'Thẻ của tôi',
    image: require('../assets/images/icons/theCuaToi.png')
  },
  {
    name: 'Tạo cửa hàng/Chuyên trang',
    image: require('../assets/images/icons/taoCuaHang.png')
  },
  {
    name: 'Quảng cáo tốt',
    image: require('../assets/images/icons/quangCaoTot.png'),
    bottomDivider: true
  },
  {
    name: 'Chợ tốt ưu đãi',
    image: require('../assets/images/icons/uuDai.png')
  },
  {
    name: 'Vòng quay may mắn',
    image: require('../assets/images/icons/vongQuayMayMan.png'),
    bottomDivider: true
  },
  {
    name: 'Trơ giúp',
    image: require('../assets/images/icons/troGiup.png')
  },
  {
    name: 'Cài đặt thông tin',
    image: require('../assets/images/icons/caiDat.png')
  },
  {
    name: 'Đăng xuất',
    image: require('../assets/images/icons/dangXuat.png')
  }
]

class MoreScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { token, avatar, name } = this.props.userData

    if (!token) return (
      <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
        <Button title="Đăng nhập" onPress={() => this.props.navigation.navigate('LogIn')} />
      </View>
    )

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <MySearchBar
          placeholder="Tìm kiếm trên Chợ Tốt"
          onSubmitEditing={this.onSubmitEditingSearch}
        // leftButton={'arrow-back'}
        // onPressLeftButton={() => alert('back')}
        // rightButton={'ios-log-out'}
        // onPressRightButton={() => alert('login')}
        />
        <ScrollView containerStyle={{ borderWidth: 0.5, borderColor: '#aaa' }}>
          <ListItem
            title={name}
            titleStyle={{ fontSize: 17 }}
            subtitle={
              <TouchableOpacity
                style={{ paddingVertical: 5 }}
                onPress={() => Alert.alert('Xin lỗi', 'Chức năng đang trong quá trình phát triển')}
              >
                <Text style={{ color: '#aaa' }}>Xem trang cá nhân của bạn</Text>
              </TouchableOpacity>
            }
            leftAvatar={{ source: { uri: avatar }, size: 'large' }}
            bottomDivider
          />
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                onPress={() => { }}
                containerStyle={{ paddingVertical: 7 }}
                leftAvatar={{ source: l.image, size: 'small' }}
                title={l.name}
                bottomDivider={l.bottomDivider}
              />
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.UserReducer.userData
  }
}

// export default ProfileScreen;
export default connect(mapStateToProps)(MoreScreen)