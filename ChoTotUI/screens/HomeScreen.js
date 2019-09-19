import React, { Component } from "react";
import { Image, StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { Container, Content, Row } from 'native-base';
import Swiper from 'react-native-swiper';

import Colors from '../constants/Colors';
import SearchBar from "../components/SearchBar";
import CategoryButton from '../components/CategoryButton';
import { danhMuc, ads } from '../utils/data';

export default class HomeScreen extends Component {

  onPressAds = () => {
    alert('Quảng cáo');
  }

  onSubmitEditingSearch = (text) => {
    alert('Tìm kiếm ' + text);
    console.log(text)
  }

  renderAdsSwiper = (adsList) => {
    return (
      <Swiper
        autoplay={true}
        showsButtons={false}
        loadMinimal={true}
        containerStyle={styles.adsWrapper}
      >
        {
          adsList.map(ad => {
            return (
              <TouchableHighlight key={ad} style={styles.adsButton} onPress={this.onPressAds}>
                <Image style={styles.adsImg} source={ad.image} />
              </TouchableHighlight>
            )
          })
        }
      </Swiper>
    )
  }

  renderCateButton = (item) => {
    return <CategoryButton
      key={item.name}
      text={item.name}
      imgSource={item.image}
      onPress={() => { alert(item.name) }}
      buttonStyle={styles.btnDanhMuc}
    />
  }

  renderListCategories = (list) => {
    const centerImgData = Math.floor(list.small.length / 2);
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Khám Phá Các Danh Mục</Text>
        </View>

        {
          list.big.map(item => {
            return (
              <Row key={item.name}>
                {this.renderCateButton(item)}
              </Row>
            )
          })
        }

        <View style={styles.splitContainer}>
          <View style={styles.splitView}>
            {
              list.small.slice(0, centerImgData).map(item => {
                return this.renderCateButton(item)
              })
            }
          </View>
          <View style={styles.splitView}>
            {
              list.small.slice(centerImgData).map(item => {
                return this.renderCateButton(item)
              })
            }
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Container>
        <SearchBar
          placeholder="Tìm kiếm trên Chợ Tốt"
          onSubmitEditing={this.onSubmitEditingSearch}
        />
        <Content>
          {this.renderAdsSwiper(ads)}
          {this.renderListCategories(danhMuc)}
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
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  adsButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adsImg: {
    height: 120,
    width: '100%',
    borderRadius: 5
  },


  btnDanhMuc: {
    flex: 1,
    margin: 5,
  },

  titleContainer: {
    height: 36,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: Colors.choTotColor2,
  },

  title: {
    position: 'absolute',
    top: 10,
    width: '95%',
    paddingVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#fff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,

    elevation: 4,
  },


  splitView: {
    flex: 1,
  },
  splitContainer: {
    flexDirection: 'row',
  },
})