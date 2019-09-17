import React, { Component } from "react";
import { Image, StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { Container, Content, Row } from 'native-base';
import Swiper from 'react-native-swiper';

import Colors from '../constants/Colors';
import SearchBar from "../components/SearchBar";
import CategoryButton from '../components/CategoryButton';
import { danhMuc } from '../utils/data';

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

          <Text style={styles.title}>Khám phá danh mục</Text>

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
    padding: 5,
    fontWeight: 'bold',
    fontSize: 16,

    borderColor: Colors.choTotColor,
    borderBottomWidth: 10,
    borderRightWidth: 10,

    borderBottomRightRadius: 30
  },
  splitView: {
    flex: 1,
  },
  splitContainer: {
    flexDirection: 'row',
  },
})