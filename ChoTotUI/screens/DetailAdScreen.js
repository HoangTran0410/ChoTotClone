import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'
import { Button, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import ImageView from 'react-native-image-view';
import ImageProgress from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

import Rating from '../components/Rating';
import ListTags from '../components/ListTags';
import ProductItem from '../components/ProductItem';

import { getDetailAd, getAccountInfo } from '../utils/callAPI';
import { dialCall, calculateOnlineTime, responseTimeText } from '../utils/functions';
import { labelProductData, fakeAdsInfo, fakeAdsInfo2, defaultAccountInfo, defaultAdInfo } from '../utils/data';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class DetailAdScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isImageViewVisible: false,
      imageViewIndex: 0,

      accountDetail: defaultAccountInfo,
      adDetail: this.props.navigation.getParam('item', defaultAdInfo),
      recommends: this.props.navigation.getParam('recommends', [])
    }
  }

  componentDidMount = async () => {
    await this.getDetail(this.state.adDetail)
  }

  getDetail = async (ad) => {
    const { list_id, account_oid } = ad;

    const adData = await getDetailAd(list_id);
    const accountData = await getAccountInfo(account_oid);

    this.setState({
      adDetail: adData || ad,
      accountDetail: accountData || this.state.accountDetail
    })
  }

  onPressRecommend = async (item, product_item) => {
    await product_item.setState({ loading: true })
    await this.getDetail(item);
    await product_item.setState({ loading: false })
    this.scrollView.scrollResponderScrollTo({ x: 0, y: 0, animated: true })
  }

  showImageView = (index) => {
    this.setState({
      isImageViewVisible: true,
      imageViewIndex: index
    })
  }

  closeImageView = () => {
    this.setState({
      isImageViewVisible: false
    })
  }

  render() {
    const adDetail = this.state.adDetail.ad || this.state.adDetail;
    const adParameters = this.state.adDetail.parameters || [];
    const adParams = this.state.adDetail.ad_params;
    const accountDetail = this.state.accountDetail;
    const images = adDetail.images || []

    // console.log(accountDetail.info.avatar, adDetail.avatar)

    const listImages = images.map((uri, index) => {
      return {
        source: { uri },
        width: 500,
        height: 500
      }
    })

    return (
      <View style={{ flex: 1 }}>

        {/* ====== Top Fixed Buttons ========  */}
        <Button style={[styles.fixedBtn, { left: 10 }]} onPress={() => this.props.navigation.goBack()}>
          <Icon name='arrow-back' style={{ color: 'black' }} />
        </Button>
        <Button style={[styles.fixedBtn, { right: 10, left: null }]} onPress={() => alert('oke')}>
          <Icon name='heart' type='Feather' style={{ color: 'black', padding: 0 }} />
        </Button>
        <Button style={[styles.fixedBtn, { right: 80, left: null }]} onPress={() => alert('oke')}>
          <Icon name='share-2' type='Feather' style={{ color: 'black' }} />
        </Button>

        {/* ======= Images Zoom View ========= */}
        <ImageView
          images={listImages}
          imageIndex={this.state.imageViewIndex}
          isVisible={this.state.isImageViewVisible}
          onClose={this.closeImageView}
          renderFooter={(currentImage) => (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 13 }}>Nhấp 2 lần liên tiếp để phóng to, thu nhỏ</Text>
            </View>)
          }
        />

        {/* ========== Body Screen ========== */}
        <ScrollView ref={ref => this.scrollView = ref}>
          {adDetail.images ?
            <Swiper
              loop={false}
              showsButtons={true}
              containerStyle={styles.swiperContainer}
            >
              {adDetail.images.map((url, index) => {
                return (
                  <TouchableHighlight key={index} onPress={() => this.showImageView(index)}>
                    <ImageProgress
                      // onLoad={}
                      style={styles.img}
                      source={{ uri: url }}
                      indicator={Progress.Bar}
                      indicatorProps={{
                        size: 80,
                        borderWidth: 0,
                        color: '#ffbf17',
                        unfilledColor: '#efefef'
                      }}
                    />
                  </TouchableHighlight>
                )
              })}
            </Swiper> :
            <View style={{ height: screenHeight / 2, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size='large' loading={this.state.loading} color='#ffbf17' />
            </View>
          }

          {/* Title subject */}
          <Text style={styles.title}>{adDetail.subject}</Text>

          {/* Basic Info */}
          <View style={styles.basicInfoContainer}>
            <View style={styles.split}>
              <View>
                <Text style={styles.price}>{adDetail.price_string}</Text>
                <Text style={styles.date}>Đăng {adDetail.date}</Text>
                {/* <Text style={styles.region}>{adDetail.area_name + ', ' + adDetail.region_name}</Text> */}
              </View>
              <View>
                <TouchableOpacity style={styles.saveBtn} >
                  <Icon name='heart' type='Feather' style={{ color: '#FF5E5E', fontSize: 19, margin: 3 }} />
                  <Text style={{ color: '#FF5E5E', }}>Lưu tin</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ListTags tags={labelProductData} />

            <View style={styles.userInfoContainer}>
              {/* user */}
              <View style={styles.row}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={{ uri: (accountDetail.info.avatar || adDetail.avatar) }}
                    style={accountDetail.chat.result.online_status ? styles.online_avatar : styles.avatar}
                  />
                  <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                    <Text>{adDetail.account_name}</Text>
                    {
                      accountDetail.chat.result.online_status ?
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'green' }}></View>
                          <Text style={{ fontSize: 11, color: '#555' }}> Đang hoạt động</Text>
                        </View> :
                        <Text style={{ fontSize: 11, color: '#555' }}>{calculateOnlineTime(accountDetail.chat.result.online_time)}</Text>
                    }
                  </View>
                </View>
                <TouchableOpacity style={{ borderRadius: 20, borderColor: '#FFBF17', borderWidth: 2 }}>
                  <Text style={{ color: '#FFBF17', paddingHorizontal: 10, paddingVertical: 5, fontSize: 12 }}>Xem trang</Text>
                </TouchableOpacity>
              </View>

              {/* info detail */}
              <View style={[styles.row, { margin: 10 }]}>
                {
                  adDetail.company_ad ?
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <Text style={styles.size14}>Bán chuyên</Text>
                      <AntDesign name='isv' style={{ fontSize: 20 }} />
                    </View> :
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <Text style={styles.size14}>Cá nhân</Text>
                      <AntDesign name='user' style={{ fontSize: 20 }} />
                    </View>
                }
                <View style={[styles.borderHorizontal, { flex: 1, alignItems: 'center' }]}>
                  <Text style={styles.size14}>Đánh giá</Text>
                  <Rating
                    star={accountDetail.rating.average_rating}
                    totalRating={accountDetail.rating.total_rating}
                  />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={styles.size14}>Phản hồi</Text>
                  <View>
                    <Text style={{ fontSize: 12 }}>{accountDetail.chat.result.response_rate_text}</Text>
                    <Text style={{ fontSize: 12 }}>{responseTimeText(accountDetail.chat.result.response_time)}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>


          <View style={[styles.shadow, styles.infoArea]}>
            <Text style={[styles.titleOfInfoArea, styles.shadow]}>Mô tả</Text>
            <Text>{adDetail.body}</Text>
          </View>
          <View style={[styles.shadow, styles.infoArea]}>
            <Text style={[styles.titleOfInfoArea, styles.shadow]}>Thông tin sản phẩm</Text>
            {
              adParameters.map((para, index) => (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1 }}>{para.label + ': '}</Text>
                  <Text style={{ fontWeight: 'bold', flex: 1 }}>{para.value}</Text>
                </View>
              ))
            }
          </View>
          <View style={[styles.shadow, styles.infoArea]}>
            <Text style={[styles.titleOfInfoArea, styles.shadow]}>Địa chỉ</Text>
            <Text style={{ justifyContent: 'center' }}>
              <AntDesign name='enviromento' style={{ fontSize: 25 }} />
              {
                adParams && (' ' + adParams.area.value + ', ' + adParams.region.value)
              }
            </Text>
          </View>
          <View>
            <Text style={[styles.titleOfInfoArea, styles.shadow, { marginLeft: 0, backgroundColor: '#F1F2F6' }]}>BẠN SẼ THÍCH</Text>
            <FlatList
              style={{ height: 340 }}
              data={this.state.recommends}
              renderItem={({ item }) => (
                <ProductItem
                  item={item}
                  limitTags={1}
                  onPress={this.onPressRecommend}
                  customWidth={screenWidth / 2 + 10}
                />
              )}
              keyExtractor={(item, index) => (index + '')}
              horizontal={true}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <SocialIcon type='facebook' />
            <SocialIcon type='twitter' />
            <SocialIcon type='google-plus-official' />
          </View>

          <Text style={{ margin: 15, fontSize: 14, fontStyle: 'italic' }}>
            Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng báo các tin đăng hoặc liên hệ CSKH để được trợ giúp.
            <Text onPress={() => alert('Xem thêm')} style={{ color: '#5ECEFF' }}> Xem thêm >></Text>
          </Text>
        </ScrollView>


        {/* ========== Contact Buttons ========== */}
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Button vertical style={[styles.footerBtn, { backgroundColor: '#4CB944' }]} onPress={() => { dialCall(adDetail.phone) }}>
            <Icon name='phone-call' type='Feather' color='white' />
            <Text style={{ fontSize: 10 }}>Gọi Điện</Text>
          </Button>
          <Button vertical style={styles.footerBtn}>
            <Icon name='ios-chatboxes' style={{ color: '#4CB944' }} />
            <Text style={styles.footerBtnText}>Chat</Text>
          </Button>
          <Button vertical style={styles.footerBtn}>
            <Icon name='sms' type='FontAwesome5' style={{ color: '#4CB944' }} />
            <Text style={styles.footerBtnText}>Gửi SMS</Text>
          </Button>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: screenHeight / 2,
  },
  img: {
    height: '100%'
  },
  title: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#EDEFF0',
    borderBottomRightRadius: 10,
  },
  footerBtn: {
    flex: 1,
    backgroundColor: '#F1F2F3',
    borderRadius: 0
  },
  footerBtnText: {
    fontSize: 10,
    color: '#4CB944',
  },
  fixedBtn: {
    position: 'absolute',
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fffd',
    zIndex: 1
  },
  saveBtn: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF5E5E',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },

  split: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  basicInfoContainer: {
    margin: 10,
  },
  price: {
    color: '#FF2525',
    fontSize: 21,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 13,
  },
  region: {
    fontSize: 12,
    marginTop: 5,
    fontStyle: 'italic'
  },

  userInfoContainer: {
    marginVertical: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#d1d2d3',
    borderBottomColor: '#d1d2d3',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    borderWidth: 3,
    borderColor: '#ddd',
  },
  online_avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    borderWidth: 3,
    borderColor: '#4CB944',
  },
  size14: { fontSize: 14, marginBottom: 10, flex: 1 },
  borderHorizontal: {
    borderLeftColor: '#C1C3C7',
    borderRightColor: '#C1C3C7',
    borderLeftWidth: 1,
    borderRightWidth: 1
  },

  titleOfInfoArea: {
    backgroundColor: '#FFEB4D',
    fontSize: 17,
    alignSelf: 'flex-start',
    marginLeft: -20,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  infoArea: {
    marginBottom: 15,
    marginHorizontal: 10,
    padding: 5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,

    elevation: 7,
  },
})

export default DetailAdScreen;