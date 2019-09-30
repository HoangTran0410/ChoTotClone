import { Alert } from 'react-native';
// const ApiUrl = 'http://10.0.3.2:5000/'

// const ApiRoute = {
//   'user-login': 'users/login',
// }

// const loginUser = async (data) => {

//   const response = await fetch(ApiUrl + ApiRoute['user-login'], {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   console.log(response.json());

//   // return response.json();
// }

const apiUrl = 'https://gateway.chotot.com/v1/public/'

const getListAds = async ({ page, region_v2 = 13000, cg, giveaway }) => {
  try {
    let limit = 30;
    let link = `${apiUrl}ad-listing?region_v2=${region_v2}&limit=${limit}&o=${(page - 1) * limit}&page=${page}&w=1&st=s,k`;
    if (cg) link += ('&cg=' + cg);
    if (giveaway) link += '&giveaway=true'

    const response = await fetch(link)
    const jsonData = await response.json();

    return jsonData;

  } catch (e) {
    Alert.alert('Lỗi lấy danh sách tin đăng', e.message);
    return null;
  }
}

const getDetailAd = async (id) => {
  try {
    const response = await fetch(`${apiUrl}ad-listing/${id}`);
    const jsonData = await response.json();

    return jsonData;

  } catch (e) {
    Alert.alert('Lỗi lấy dữ liệu tin đăng', e.message);
    return null;
  }
}

const getAccountInfo = async (id) => {
  try {
    const info = await fetch(`${apiUrl}profile/${id}`);
    const infoData = await info.json();

    const chat = await fetch(`${apiUrl}chat/user/get/${id}`);
    const chatData = await chat.json();

    const rating = await fetch(`${apiUrl}ratings/${id}?post_type=all`);
    const ratingData = await rating.json();

    return {
      info: infoData,
      chat: chatData,
      rating: ratingData
    };
  } catch (e) {
    Alert.alert('Lỗi lấy dữ liệu người đăng', e.message);
    return null;
  }
}

const getListBanners = async () => {
  const response = await fetch(`${apiUrl}/buyer-collection/banners`)
  const data = await response.json();
  // console.log('get', data);
  return data;
}

export {
  // loginUser,
  getListAds,
  getDetailAd,
  getListBanners,
  getAccountInfo
}