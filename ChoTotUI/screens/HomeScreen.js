import React, { PureComponent } from "react";
import { Image, StyleSheet, View, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Row } from 'native-base';
import Swiper from 'react-native-swiper';

import Colors from '../constants/Colors';
import MySearchBar from "../components/MySearchBar";
import CategoryButton from '../components/CategoryButton';
import { danhMuc, banners } from '../utils/data';
import { getListBanners } from '../utils/callAPI';

export default class HomeScreen extends PureComponent {

  state = {
    banners: banners
  }

  componentDidMount = async () => {
    // const listBanners = await getListBanners();
    // this.setState({
    //   banners: listBanners.banners
    // })
    // console.log(listBanners)
  }

  onPressBanner = () => {
    alert('Quảng cáo');
  }

  onSubmitEditingSearch = (text) => {
    alert('Tìm kiếm ' + text);
  }

  renderAdsSwiper = () => {
    return (
      <Swiper
        // autoplay={true}
        loop={false}
        showsButtons={false}
        loadMinimal={true}
        containerStyle={styles.bannerWrapper}
      >
        {
          this.state.banners.map(banner => {
            return (
              <TouchableWithoutFeedback key={banner} style={styles.bannerButton} onPress={this.onPressBanner}>
                <Image style={styles.bannerImg} source={banner.mobileImage} />
              </TouchableWithoutFeedback>
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
      onPress={() => { this.props.navigation.navigate('AdsList', { cg: item.cg, giveaway: item.giveaway }) }}
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
        <MySearchBar
          placeholder="Tìm kiếm trên Chợ Tốt"
          onSubmitEditing={this.onSubmitEditingSearch}
        // leftButton={'arrow-back'}
        // onPressLeftButton={() => alert('back')}
        // rightButton={'ios-log-out'}
        // onPressRightButton={() => alert('login')}
        />
        <Content>
          {this.renderAdsSwiper()}
          {this.renderListCategories(danhMuc)}
        </Content>
      </Container >
    )
  }
}

const styles = StyleSheet.create({
  bannerWrapper: {
    height: 130,
    backgroundColor: Colors.choTotColor2,
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  bannerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImg: {
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
    paddingVertical: 7,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13.5,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#242A37',

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