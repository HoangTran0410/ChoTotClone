import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, ActivityIndicator, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { Button, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import ImageView from 'react-native-image-view';

import ListTags from '../components/ListTags';
import ProductItem from '../components/ProductItem';

import { dialCall } from '../utils/functions';
import { getDetailAd } from '../utils/callAPI';
import { labelProductData, fakeAdsInfo } from '../utils/data';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class DetailAdScreen extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.navigation.getParam('love'))

    this.state = {
      isImageViewVisible: false,
      imageViewIndex: 0,
      detail: this.props.navigation.getParam('item') || fakeAdsInfo,
      recommends: [{ ...fakeAdsInfo }, { ...fakeAdsInfo }, { ...fakeAdsInfo }, { ...fakeAdsInfo }, { ...fakeAdsInfo }]
    }
  }

  componentDidMount_disabled = async () => {
    const id = this.props.navigation.getParam('item').list_id
    const data = await getDetailAd(id);

    if (data)
      this.setState({
        detail: data
      })
  }

  onPressRecommend = (item) => {
    this.setState({
      detail: item
    })
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
    const detail = this.state.detail.ad || this.state.detail;
    const images = detail.images || []

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
            <View>
              <Text style={{ color: 'white', textAlign: 'center' }}>Nhấp 2 lần liên tiếp để phóng to</Text>
            </View>)
          }
        />

        {/* ========== Body Screen ========== */}
        <ScrollView>
          {detail.images ?
            <Swiper
              loop={false}
              showsButtons={true}
              containerStyle={styles.swiperContainer}
            >
              {listImages.map((item, index) => {
                return (
                  <TouchableHighlight key={index} onPress={() => this.showImageView(index)}>
                    <Image style={styles.img} source={{ uri: item.source.uri }} />
                  </TouchableHighlight>
                )
              })}
            </Swiper> :
            <View style={{ height: screenHeight / 2, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size='large' loading={this.state.loading} color='#ffbf17' />
            </View>
          }

          {/* Title subject */}
          <Text style={styles.title}>{detail.subject}</Text>

          {/* Basic Info */}
          <View style={styles.basicInfoContainer}>
            <View style={styles.split}>
              <View>
                <Text style={styles.price}>{detail.price_string}</Text>
                <Text style={styles.date}>{detail.date}</Text>
                {/* <Text style={styles.region}>{detail.area_name + ', ' + detail.region_name}</Text> */}
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
                  <Image source={{ uri: detail.avatar }} style={styles.avatar} />
                  <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                    <Text>{detail.account_name}</Text>
                    <Text style={{ fontSize: 11, color: '#555' }}>Hoạt động 5 giờ trước</Text>
                  </View>
                </View>
                <TouchableOpacity style={{ borderRadius: 20, borderColor: '#FFBF17', borderWidth: 2 }}>
                  <Text style={{ color: '#FFBF17', paddingHorizontal: 10, paddingVertical: 5, fontSize: 12 }}>Xem trang</Text>
                </TouchableOpacity>
              </View>

              {/* info detail */}
              <View style={[styles.row, { margin: 10 }]}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={styles.size14}>Bán chuyên</Text>
                  <Image source={require('../assets/images/ban_chuyen.png')} />
                </View>
                <View style={[styles.borderHorizontal, { flex: 1, alignItems: 'center' }]}>
                  <Text style={styles.size14}>Đánh giá</Text>
                  <Text style={{ fontSize: 12 }}>- - -</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={styles.size14}>Phản hồi</Text>
                  <Text style={{ fontSize: 12 }}>Thỉnh thoảng</Text>
                </View>
              </View>
            </View>
          </View>


          <View style={[styles.shadow, styles.infoArea]}>
            <Text style={[styles.titleOfInfoArea, styles.shadow]}>Mô tả</Text>
            <Text>{detail.body}</Text>
          </View>
          <View style={[styles.shadow, styles.infoArea]}>
            <Text style={[styles.titleOfInfoArea, styles.shadow]}>Thông tin sản phẩm</Text>
            {
              this.state.detail.parameters &&
              this.state.detail.parameters.map((para, index) => (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1, fontWeight: 'bold' }}>{para.label + ': '}</Text>
                  <Text style={{ fontStyle: 'italic', flex: 1 }}>{para.value}</Text>
                </View>
              ))
            }
          </View>
          <View>
            <Text style={[styles.titleOfInfoArea, styles.shadow, { marginLeft: 0, backgroundColor: '#F1F2F6' }]}>BẠN SẼ THÍCH</Text>
            <FlatList
              style={{ height: 340 }}
              data={this.state.recommends}
              renderItem={({ item }) => <ProductItem item={item} customWidth={screenWidth / 2 + 10} onPress={this.onPressRecommend} />}
              keyExtractor={(item, index) => (index + '')}
              horizontal={true}
            />
          </View>

          <TouchableOpacity onPress={() => alert('Xem thêm')}>
            <Text style={{ margin: 15, fontSize: 14 }}>
              Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng báo các tin đăng hoặc liên hệ CSKH để được trợ giúp.
              <Text style={{ color: '#FFCE5E' }}> Xem thêm >></Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* ========== Contact Buttons ========== */}
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Button vertical style={[styles.footerBtn, { backgroundColor: '#4CB944' }]} onPress={() => { dialCall(detail.phone) }}>
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
    backgroundColor: '#ddd'
  },
  size14: { fontSize: 14, marginBottom: 10 },
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
    marginHorizontal: 15,
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