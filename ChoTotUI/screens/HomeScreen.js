import React, { Component } from "react";
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Container, Content, Row } from 'native-base';

import SearchBar from "../components/SearchBar";
import CategoryButton from '../components/CategoryButton';

const danhMuc = {

  big: [{
    name: 'Bất động sản',
    image: require('../assets/images/categories/cho-tot-nha.png')
  }, {
    name: 'Xe cộ',
    image: require('../assets/images/categories/cho-tot-xe.png')
  }],

  small: [{
    name: 'Đồ điện tử',
    image: require('../assets/images/categories/do-dien-tu.png')
  }, {
    name: 'Thú cưng',
    image: require('../assets/images/categories/thu-cung.png')
  }, {
    name: 'Mẹ và bé',
    image: require('../assets/images/categories/me-va-be.png')
  }, {
    name: 'Thời trang, đồ dùng cá nhân',
    image: require('../assets/images/categories/thoi-trang-do-dung-ca-nhan.png')
  }, {
    name: 'Dịch vụ, Du lịch',
    image: require('../assets/images/categories/dich-vu-du-lich.png')
  }, {
    name: 'Cho tặng miễn phí',
    image: require('../assets/images/categories/cho-tang-mien-phi.png')
  }, {
    name: 'Việc làm',
    image: require('../assets/images/categories/viec-lam.png')
  }, {
    name: 'Nội ngoại thất, Đồ gia dụng',
    image: require('../assets/images/categories/noi-ngoai-that.png')
  }, {
    name: 'Giải trí, Thể thao, Sở thích',
    image: require('../assets/images/categories/giai-tri-the-thao-so-thich.png')
  }, {
    name: 'Đồ văn phòng, Công nông nghiệp',
    image: require('../assets/images/categories/do-van-phong.png')
  }, {
    name: 'Các loại khác',
    image: require('../assets/images/categories/cac-loai-khac.png')
  }, {
    name: 'Tất cả danh mục',
    image: require('../assets/images/categories/tat-ca-danh-muc.png')
  },]
}

const centerImgData = Math.floor(danhMuc.small.length / 2);

export default class HomeScreen extends Component {

  onPressAds = () => {
    alert('Quảng cáo');
  }

  render() {
    return (
      <Container>
        <SearchBar></SearchBar>
        <Content>
          <TouchableHighlight onPress={this.onPressAds}>
            <Image style={styles.adsImg} source={require('../assets/images/banners/buyer_collection_y_homepage_banner_1564111461475.jpg')} />
          </TouchableHighlight>

          {
            danhMuc.big.map(item => {
              return (
                <Row key={item.name}>
                  <CategoryButton
                    text={item.name}
                    imgSource={item.image}
                    onPress={() => { alert(item.name) }}
                    buttonStyle={styles.btnDanhMuc}
                  />
                </Row>
              )
            })
          }

          <View style={styles.splitContainer}>
            <View style={styles.splitView}>
              {
                danhMuc.small.slice(0, centerImgData).map(item => {
                  return (
                    <CategoryButton
                      key={item.name}
                      text={item.name}
                      imgSource={item.image}
                      onPress={() => { alert(item.name) }}
                      buttonStyle={styles.btnDanhMuc}
                    />
                  )
                })
              }
            </View>
            <View style={styles.splitView}>
              {
                danhMuc.small.slice(centerImgData).map(item => {
                  return (
                    <CategoryButton
                      key={item.name}
                      text={item.name}
                      imgSource={item.image}
                      onPress={() => { alert(item.name) }}
                      buttonStyle={styles.btnDanhMuc}
                    />
                  )
                })
              }
            </View>
          </View>

        </Content>
      </Container >
    )
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  adsImg: {
    height: 120,
    width: '100%'
  },
  btnDanhMuc: {
    flex: 1,
    margin: 5,
  },
  title: {
    position: 'absolute',
    top: 5,
    left: 5
  },
  bigImg: {
    width: '100%',
    height: 100,
  },
  smallImg: {
    width: '100%',
    height: 100,
    padding: 5
  },
  splitView: {
    flex: 1,
  },
  splitContainer: {
    flexDirection: 'row',
  },
})