import React, { Component } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Row } from 'native-base';
import Swiper from 'react-native-swiper';

import Colors from '../constants/Colors';
import SearchBar from "../components/SearchBar";
import CategoryButton from '../components/CategoryButton';
import { danhMuc, ads } from '../utils/data';

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

          <Swiper
            autoplay={true}
            showsButtons={true}
            loadMinimal={true}
            containerStyle={styles.adsWrapper}
          >
            {
              ads.map(ad => {
                return (
                  <TouchableOpacity key={ad} style={styles.adsButton} onPress={this.onPressAds}>
                    <Image style={styles.adsImg} source={ad.image} />
                  </TouchableOpacity>
                )
              })
            }
          </Swiper>


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
  adsWrapper: {
    height: 130,
    backgroundColor: Colors.choTotColor2,
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  adsButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adsImg: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },


  btnDanhMuc: {
    flex: 1,
    margin: 5,
  },
  title: {
    padding: 5,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,

    borderBottomColor: Colors.choTotColor2,
    borderBottomWidth: 7,
    // borderRightWidth: 7,

    // borderBottomRightRadius: 35
  },


  splitView: {
    flex: 1,
  },
  splitContainer: {
    flexDirection: 'row',
  },
})