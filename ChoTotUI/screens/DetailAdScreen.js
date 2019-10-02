import React, { Component } from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	TouchableHighlight,
	Dimensions,
	Image,
	FlatList,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'
import { Button, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import ImageView from 'react-native-image-view';

import ListTags from '../components/ListTags';
import AccountInfo from '../components/AccountInfo';
import ProductItem from '../components/ProductItem';

import { dialCall } from '../utils/functions';
import { labelProductData, defaultAdInfo } from '../utils/data';
import { getDetailAd, getRecommends } from '../utils/callAPI'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class DetailAdScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isImageViewVisible: false,
			imageViewIndex: 0,

			adDetail: this.props.navigation.getParam('item', defaultAdInfo),
			recommends: [],
		}
	}

	componentDidMount = () => {
		this.getRecommendsForThis()
	}

	getRecommendsForThis = () => {
		getRecommends(this.state.adDetail, (recommendsData) => {
			console.log(recommendsData)

			Promise.all(recommendsData.data.map(id => getDetailAd(id)))
				.then(recommendItems => {
					let filtered = recommendItems.filter(item => item.message == undefined)
					this.setState({
						recommends: filtered
					})
					// console.log(filtered)
				})
		});
	}

	onPressRecommend = (fullItem) => {
		this.setState({
			adDetail: fullItem
		}, () => {
			this.getRecommendsForThis()
		})
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

	renderImagesView = () => {
		const { images } = this.state.adDetail.ad

		const listImages = images.map((uri, index) => {
			return {
				source: { uri },
				width: 500,
				height: 500
			}
		})

		return (
			<View>
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
				<Swiper
					loop={false}
					showsButtons={true}
					containerStyle={styles.swiperContainer}
				>
					{images.map((url, index) => {
						return (
							<TouchableHighlight key={index} onPress={() => this.showImageView(index)}>
								<Image style={styles.img} source={{ uri: url }} />
							</TouchableHighlight>
						)
					})}
				</Swiper>
			</View>
		)
	}

	renderBasicInfo = () => {
		const { adDetail } = this.state
		return (
			<View style={styles.basicInfoContainer}>
				<View style={styles.split}>
					<View>
						<Text style={styles.price}>{adDetail.ad.price_string}</Text>
						<Text style={styles.date}>Đăng {adDetail.ad.date}</Text>
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

				<AccountInfo adDetail={adDetail} />
			</View>
		)
	}

	renderDetailInfo = () => {
		const { parameters, ad_params } = this.state.adDetail;

		{/* Mô tả, thông tin chi tiết */ }
		return (
			<View>
				<View style={[styles.shadow, styles.infoArea]}>
					<Text style={[styles.titleOfInfoArea, styles.shadow]}>Mô tả</Text>
					<Text>{this.state.adDetail.ad.body}</Text>
				</View>
				<View style={[styles.shadow, styles.infoArea]}>
					<Text style={[styles.titleOfInfoArea, styles.shadow]}>Thông tin sản phẩm</Text>
					{
						parameters.map((para, index) => (
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
						{' ' + ad_params.area.value + ', ' + ad_params.region.value}
					</Text>
				</View>
			</View>
		)
	}

	render() {
		const { adDetail } = this.state;

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

				{/* ========== Body Screen ========== */}
				<ScrollView ref={ref => this.scrollView = ref}>

					{this.renderImagesView()}

					<Text style={styles.title}>{adDetail.ad.subject}</Text>

					{this.renderBasicInfo()}

					{this.renderDetailInfo()}

					{/* Recommend List */}
					{
						this.state.recommends.length > 0 &&
						<View>
							<Text style={[styles.titleOfInfoArea, styles.shadow, { marginLeft: 0, backgroundColor: '#F1F2F6' }]}>BẠN SẼ THÍCH</Text>
							<FlatList
								style={{ height: 340 }}
								data={this.state.recommends}
								initialNumToRender={1}
								keyExtractor={(item, index) => (index + '')}
								horizontal={true}
								renderItem={({ item }) => (
									<ProductItem
										item={item}
										limitTags={1}
										onPress={this.onPressRecommend}
										customWidth={screenWidth / 2 + 10}
									/>
								)}
							/>
						</View>
					}

					{/* Social icon */}
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
					<Button vertical style={[styles.footerBtn, { backgroundColor: '#4CB944' }]} onPress={() => { dialCall(adDetail.ad.phone) }}>
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
		borderRadius: 5,
		backgroundColor: 'white',
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,

		elevation: 8,
	},
})

export default DetailAdScreen;