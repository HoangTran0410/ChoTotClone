import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import { uuidv4 } from '../utils/functions'

const apiUrl = 'https://gateway.chotot.com/v1/public/'
const apiUrl_v2 = 'https://gateway.chotot.com/v2/public/'

const getListAds = async ({ page, region_v2 = 13000, cg, giveaway }, callBack) => {
	let jsonData;
	try {
		let limit = 30;
		let link = `${apiUrl}ad-listing?region_v2=${region_v2}&w=1&limit=${limit}&o=${(page - 1) * limit}&page=${page}`;
		if (cg) link += ('&cg=' + cg);
		if (giveaway) link += '&giveaway=true';
		else link += '&st=s';

		const response = await fetch(link)
		jsonData = await response.json();

	} catch (e) {
		Alert.alert('Lỗi lấy danh sách tin đăng', e.message);
		return null;
	}

	if (callBack)
		callBack(jsonData)

	return jsonData;
}

const getDetailAd = async (id, callBack) => {
	let jsonData;

	try {
		const response = await fetch(`${apiUrl}ad-listing/${id}`);
		jsonData = await response.json();

	} catch (e) {
		Alert.alert('Lỗi lấy dữ liệu tin đăng', e.message);
		return null;
	}

	if (callBack) {
		callBack(jsonData)
	}

	return jsonData;
}

const getAccountInfo = async (oid, callBack) => {
	let result;

	try {
		const info = await fetch(`${apiUrl}profile/${oid}`);
		const infoData = await info.json();

		const chat = await fetch(`${apiUrl_v2}chat/user/get/${oid}`);
		const chatData = await chat.json();

		const rating = await fetch(`${apiUrl}ratings/${oid}?post_type=all`);
		const ratingData = await rating.json();

		result = {
			info: infoData,
			chat: chatData,
			rating: ratingData
		}

	} catch (e) {
		Alert.alert('Lỗi lấy dữ liệu người đăng', e.message);
		return null;
	}

	if (callBack) {
		callBack(result)
	}

	return result;
}

const getListBanners = async () => {
	const response = await fetch(`${apiUrl}/buyer-collection/banners`)
	const data = await response.json();
	return data;
}

// =========================== API Backend =================================
const host = 'http://192.168.1.78:5000'

const getRecommends = async (item, callBack) => {

	let jsonData;

	try {
		const response = await fetch(`${host}/recommendation-system`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(item)
		})

		jsonData = await response.json();

	} catch (e) {
		Alert.alert('Lỗi lấy dữ liệu recommends', e.message);
		return null;
	}

	if (callBack) {
		callBack(jsonData)
	}

	return jsonData;
}

// Cách tạm bợ
let uuid = null;

const sendEvent = async (event_name, adDetail, callBack) => {
	if (!uuid) uuid = await AsyncStorage.getItem('uuid')
	if (!uuid) {
		uuid = uuidv4()
		await AsyncStorage.setItem('uuid', uuid)
	}

	const data = { 'unique_id': uuid, 'event_name': event_name, ...adDetail }
	let jsonData;

	try {
		const response = await fetch(`${host}/user_interaction`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(data)
		})

		jsonData = await response.json();

	} catch (e) {
		Alert.alert('Lỗi gửi hành vi người dùng', e.message);
		return null;
	}

	if (callBack) {
		callBack(jsonData)
	}

	return jsonData;
}

const readableItem = (item) => {
	let ad = {};

	if (item.ad) {
		ad = { ...item.ad }
	} else {
		ad = { ...item }
	}

	ad.number_of_images = ad.number_of_images || (ad.images ? ad.images.length : 0);
	ad.image = ad.image || ad.thumbnail_image;

	return ad
}

export {
	// loginUser,
	getListAds,
	getDetailAd,
	getListBanners,
	getAccountInfo,
	getRecommends,
	readableItem,
	sendEvent
}