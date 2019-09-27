import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import ImageView from 'react-native-image-view';

const screenHeight = Dimensions.get('window').height;

const data = {
  title: 'SAMSUNG GALAXY S6 EDGE',
  price_string: '9.690.000 đ',
  date: '57 phút trước',
  images: [
    'https://cdn.chotot.com/YCOIUPtlzk7WhqsVZs0GKQPzaRQ4TbhHcJ6Q0BEy0x4/preset:view/plain/6813825566.jpg',
    'https://cdn.chotot.com/5AahUg48NkhlvE7gjg8whJgf5fhT93Ahnj1AQodZFhY/preset:view/plain/6856442161.jpg',
    'https://cdn.chotot.com/NJFdVYGsjWdyjHlyl_XVyd4QCdrWe2A6TK56QtU5gDQ/preset:view/plain/6888255609.jpg',
    'https://cdn.chotot.com/s28XinZDPkAmPI3TPcty-nu-gd2TwsU0FJznf89cLiM/preset:view/plain/6803022419.jpg'
  ]
}

const data2 = {
  "ad": {
    "ad_id": 91613594,
    "list_id": 63282145,
    "list_time": 1569383744000,
    "date": "50 giây trước",
    "account_id": 10371590,
    "account_oid": "9001c8756d2539dbcedef8f952a78636",
    "account_name": "Trung",
    "subject": "Samsung Galaxy Note 9 128 GB đen",
    "body": "Máy đẹp zin keng\nFull áp suất\nMàn đẹp, bản 2 sim\nCấu hình khủng",
    "area": 50,
    "area_name": "Thành phố Vinh",
    "region": 8,
    "region_name": "Nghệ An",
    "category": 5010,
    "category_name": "Điện thoại",
    "company_ad": true,
    "phone": "0853563567",
    "condition_ad": 1,
    "type": "s",
    "type_name": "Cần bán",
    "price": 9690000,
    "price_string": "9.690.000 đ",
    "reviewer_image": "https://static.chotot.com.vn/thumbs/admin/9999999793.png",
    "reviewer_nickname": "Hoài Linh",
    "images": [
      "https://cdn.chotot.com/OARzjmKZbfxfKzngsEbQngKLE_4bVRApCLYKOejvG7M/preset:view/plain/9bc53e6e87007765cf3f5027a043e846-2632986672840578995.jpg",
      "https://cdn.chotot.com/bcgFfO72BCiTu0W7UKWbL4plMeQ9nGqeQ6qV2N0ZH1s/preset:view/plain/b2659141784737e2f6a4b84619b2fcfd-2632986674131900869.jpg",
      "https://cdn.chotot.com/Z9k5Q0GBq0PD3s7Vq6tdPCvbz13asBa6Mwyfyay1UEk/preset:view/plain/9b7adc87649ad454e529558d680c82cb-2632986673930508741.jpg",
      "https://cdn.chotot.com/JgREd-PWeMxHh6CmMhgi1GHFC8xy9Xlpw0edrRPVwVY/preset:view/plain/8cadd0efc6b28fb39780a74cf85c1e89-2632986673092302771.jpg"
    ],
    "thumbnail_image": "https://cdn.chotot.com/lblhjOpVsJNrFn30-rP0damylW0prQD7D8v2ZeFYpCU/preset:listing/plain/9bc53e6e87007765cf3f5027a043e846-2632986672840578995.jpg",
    "owner": false,
    "avatar": "https://st.chotot.com/imaginary/978098b1c99410ea2b7f22842b0b620a15d87e8a/profile_avatar/0a5945b2de1bf133058d8744feb66b3e9bc5c8ab/thumbnail?width=32",
    "mobile_brand": 2,
    "mobile_model": 353,
    "mobile_type": 1,
    "mobile_capacity": 6,
    "mobile_color": 1,
    "elt_condition": 1,
    "elt_warranty": 2,
    "region_v2": 8050,
    "area_v2": 805001
  },
  "parameters": [
    {
      "id": "mobile_brand",
      "value": "Samsung",
      "label": "Hãng"
    },
    {
      "id": "mobile_model",
      "value": "Galaxy Note 9",
      "label": "Dòng máy"
    },
    {
      "id": "elt_condition",
      "value": "Mới",
      "label": "Tình trạng"
    },
    {
      "id": "elt_warranty",
      "value": "Còn bảo hành",
      "label": "Tình trạng bảo hành"
    },
    {
      "id": "mobile_color",
      "value": "Đen",
      "label": "Màu sắc"
    },
    {
      "id": "mobile_capacity",
      "value": "128 GB",
      "label": "Dung lượng"
    },
    {
      "id": "area",
      "value": "Thành phố Vinh",
      "label": "Quận, Huyện"
    },
    {
      "id": "region",
      "value": "Nghệ An",
      "label": "Tỉnh, thành phố"
    }
  ],
  "ad_params": {
    "area": {
      "id": "area",
      "value": "Thành phố Vinh",
      "label": "Quận, Huyện"
    },
    "elt_condition": {
      "id": "elt_condition",
      "value": "Mới",
      "label": "Tình trạng"
    },
    "elt_warranty": {
      "id": "elt_warranty",
      "value": "Còn bảo hành",
      "label": "Tình trạng bảo hành"
    },
    "mobile_brand": {
      "id": "mobile_brand",
      "value": "Samsung",
      "label": "Hãng"
    },
    "mobile_capacity": {
      "id": "mobile_capacity",
      "value": "128 GB",
      "label": "Dung lượng"
    },
    "mobile_color": {
      "id": "mobile_color",
      "value": "Đen",
      "label": "Màu sắc"
    },
    "mobile_model": {
      "id": "mobile_model",
      "value": "Galaxy Note 9",
      "label": "Dòng máy"
    },
    "region": {
      "id": "region",
      "value": "Nghệ An",
      "label": "Tỉnh, thành phố"
    }
  }
}

class DetailAd extends Component {
  state = {
    isImageViewVisible: false,
    imageViewIndex: 0
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

    const listImages = data2.ad.images.map((uri, index) => {
      return {
        source: { uri },
        width: 500,
        height: 500
      }
    })

    return (
      <Container>

        <Button style={[styles.fixedBtn, { left: 10 }]} onPress={() => alert('oke')}>
          <Icon name='arrow-back' style={{ color: 'black' }} />
        </Button>
        <Button style={[styles.fixedBtn, { right: 10, left: null }]} onPress={() => alert('oke')}>
          <Icon name='heart' type='Feather' style={{ color: 'black', padding: 0 }} />
        </Button>
        <Button style={[styles.fixedBtn, { right: 80, left: null }]} onPress={() => alert('oke')}>
          <Icon name='share-2' type='Feather' style={{ color: 'black' }} />
        </Button>

        <Content>

          <ImageView
            images={listImages}
            imageIndex={this.state.imageViewIndex}
            isVisible={this.state.isImageViewVisible}
            onClose={this.closeImageView}
            renderFooter={(currentImage) => (
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Nhấp 2 lần liên tiếp để phóng to
                </Text>
              </View>)}
          />

          <Swiper
            // autoplay={true}
            loop={false}
            showsButtons={true}
            loadMinimal={true}
            containerStyle={styles.swiperContainer}
          >
            {
              data2.ad.images.map((item, index) => {
                return (
                  <TouchableHighlight key={index} onPress={() => this.showImageView(index)}>
                    <Image style={styles.img} source={{ uri: item }} />
                  </TouchableHighlight>
                )
              })
            }
          </Swiper>

          <View>
            <Text style={styles.title}>{data.title}</Text>
          </View>

        </Content>

        <Footer>
          <Button vertical style={{ flex: 1, backgroundColor: '#4CB944' }}>
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
        </Footer>
      </Container >
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
    // left: 10,
    // padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fffd',
    zIndex: 1
  }
})

export default DetailAd;