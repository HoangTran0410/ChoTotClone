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
import ProductItem from '../components/ProductItem';
import Rating from '../components/Rating';

import { labelProductData } from '../utils/data';
import { getDetailAd, getRecommends, getAccountInfo, sendEvent } from '../utils/callAPI'
import { dialCall, calculateOnlineTime, responseTimeText } from '../utils/functions';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class DetailAdScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isImageViewVisible: false,
			imageViewIndex: 0,

			adDetail: this.props.navigation.getParam('adDetail'),
			accountDetail: this.props.navigation.getParam('accountDetail'),
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
					if (!recommendItems) return;
					let filtered = recommendItems.filter(item => item.message == undefined)
					this.setState({
						recommends: filtered
					})
				})
		});
	}

	onPressRecommend = async (adDetail, product_item) => {
		sendEvent('click', adDetail.ad, (jsonData) => console.log(jsonData));

		product_item.setState({ loading: true })
		const accountDetail = await getAccountInfo(adDetail.ad.account_oid)
		product_item.setState({ loading: false })

		this.setState({
			adDetail: adDetail,
			accountDetail: accountDetail
		}, () => {
			this.getRecommendsForThis()
		})
		this.recommendsFlatlist.scrollToOffset({ offset: 0 })
		this.scrollView.scrollResponderScrollTo({ x: 0, y: 0, animated: true })
	}

	onPressCallBtn = () => {
		sendEvent('call', this.state.adDetail.ad, (jsonData) => console.log(jsonData));
		dialCall(this.state.adDetail.ad.phone)
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
		if (!images) return

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
					// showsButtons={true}
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
						{
							adDetail.ad.giveaway ?
								<Text style={styles.priceFree}>
									<AntDesign name="gift" style={{ fontSize: 20, color: '#49A2A1' }} />
									{' Cho tặng miễn phí'}
								</Text> :
								<Text style={styles.price}>{adDetail.ad.price_string}</Text>
						}
						<Text style={styles.date}>Đăng {adDetail.ad.date}</Text>
						{/* <Text style={styles.region}>{adDetail.area_name + ', ' + adDetail.region_name}</Text> */}
					</View>
					<View>
						<TouchableOpacity style={styles.saveBtn} >
							<Text style={{ color: '#FF5E5E', fontSize: 13 }}>Lưu tin </Text>
							<Icon name='heart' type='Feather' style={{ color: '#FF5E5E', fontSize: 15 }} />
						</TouchableOpacity>
					</View>
				</View>

				<ListTags big tags={labelProductData} />
				{this.renderAccountInfo()}
			</View>
		)
	}

	renderAccountInfo() {
		const { accountDetail, adDetail } = this.state;

		return (
			<View style={styles.userInfoContainer}>
				{/* user */}
				<View style={styles.row}>
					<View style={{ flexDirection: 'row' }}>
						<Image
							source={{ uri: accountDetail.info.avatar || 'https://st.chotot.com/imaginary/7a093027fc8667dd7eb33afd6539316567d89422/profile_avatar/a5dfa54718bc3c2d72e135c408a6d1c6b3bf38bf/thumbnail?width=32' }}
							style={accountDetail.chat.result.online_status ? [styles.avatar, styles.active] : styles.avatar}
						/>
						<View style={{ marginHorizontal: 15, marginVertical: 5 }}>
							<Text style={styles.accountName}>{adDetail.ad.account_name}</Text>
							{
								accountDetail.chat.result.online_status ?
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'green' }}></View>
										<Text style={{ fontSize: 11, color: '#555' }}> Đang hoạt động</Text>
									</View> :
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'gray' }}></View>
										<Text style={{ fontSize: 11, color: '#555' }}> {calculateOnlineTime(accountDetail.chat.result.online_time)}</Text>
									</View>
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
						adDetail.ad.company_ad ?
							<View style={{ flex: 1, alignItems: 'center' }}>
								<Text style={styles.small}>Bán chuyên</Text>
								<AntDesign name='isv' style={{ fontSize: 20 }} />
							</View> :
							<View style={{ flex: 1, alignItems: 'center' }}>
								<Text style={styles.small}>Cá nhân</Text>
								<AntDesign name='user' style={{ fontSize: 20 }} />
							</View>
					}
					<View style={[styles.borderHorizontal, { flex: 1, alignItems: 'center' }]}>
						<Text style={styles.small}>Đánh giá</Text>
						<Rating
							star={accountDetail.rating.average_rating}
							totalRating={accountDetail.rating.total_rating}
						/>
					</View>
					<View style={{ flex: 1, alignItems: 'center' }}>
						<Text style={styles.small}>Phản hồi</Text>
						<View>
							<Text style={{ fontSize: 12, textAlign: 'center' }}>{accountDetail.chat.result.response_rate * 100}%</Text>
							{/* <Text style={{ fontSize: 12 }}>{accountDetail.chat.result.response_rate_text}</Text> */}
							{/* <Text style={{ fontSize: 12, textAlign: 'center' }}>{responseTimeText(accountDetail.chat.result.response_time)}</Text> */}
						</View>
					</View>
				</View>
			</View>
		)
	}

	renderDetailInfo = () => {
		{/* Mô tả, thông tin chi tiết */ }
		const { parameters, ad_params } = this.state.adDetail;

		return (
			<View>
				<View style={[styles.shadow, styles.infoArea]}>
					<Text style={[styles.titleOfInfoArea, styles.shadow]}>Mô tả</Text>
					<Text style={{ fontSize: 15 }}>{this.state.adDetail.ad.body}</Text>
				</View>
				<View style={[styles.shadow, styles.infoArea]}>
					<Text style={[styles.titleOfInfoArea, styles.shadow]}>Thông tin sản phẩm</Text>
					{
						parameters.map((para, index) => (
							<View key={index} style={{ flexDirection: 'row' }}>
								<Text style={{ flex: 1, fontSize: 15 }}>{para.label + ': '}</Text>
								<Text style={{ fontWeight: 'bold', flex: 1, fontSize: 15 }}>{para.value}</Text>
							</View>
						))
					}
				</View>
				<View style={[styles.shadow, styles.infoArea]}>
					<Text style={[styles.titleOfInfoArea, styles.shadow]}>Địa chỉ</Text>
					<Text style={{ justifyContent: 'center', fontSize: 15 }}>
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

					{
						this.state.recommends.length > 0 &&
						<View>
							<Text style={[styles.titleOfInfoArea, styles.shadow, { marginLeft: 0, backgroundColor: '#F1F2F6' }]}>BẠN SẼ THÍCH</Text>
							<FlatList
								ref={ref => this.recommendsFlatlist = ref}
								style={{ height: 300 }}
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
					<TouchableOpacity style={[styles.footerBtn, { backgroundColor: '#4CB944' }]} onPress={this.onPressCallBtn}>
						<Icon name='phone-call' type='Feather' style={{ color: 'white' }} />
						<Text style={{ fontSize: 10, color: 'white' }}>Gọi Điện</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.footerBtn}>
						<Icon name='ios-chatboxes' style={{ color: '#4CB944' }} />
						<Text style={styles.footerBtnText}>Chat</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.footerBtn}>
						<Icon name='sms' type='FontAwesome5' style={{ color: '#4CB944' }} />
						<Text style={styles.footerBtnText}>Gửi SMS</Text>
					</TouchableOpacity>
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
		paddingHorizontal: 10,
		fontWeight: '500',
		fontSize: 17,
		backgroundColor: '#EDEFF0',
		borderBottomRightRadius: 10,
	},
	footerBtn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 5,
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
		paddingVertical: 5,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	split: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10
	},
	basicInfoContainer: {
		margin: 10,
	},
	price: {
		color: '#FF2525',
		fontSize: 17,
		fontWeight: 'bold',
	},
	priceFree: {
		color: '#49A2A1',
		fontSize: 17,
		fontWeight: 'bold',
	},
	date: {
		fontSize: 12,
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
	accountName: {
		fontSize: 13,
		flexWrap: 'wrap'
	},
	small: { fontSize: 11, marginBottom: 10, flex: 1, color: 'gray' },
	row: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#ddd',
		borderWidth: 3,
		borderColor: '#ddd',
	},
	active: {
		borderColor: '#4CB944',
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
		padding: 10,
		// borderRadius: 5,
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