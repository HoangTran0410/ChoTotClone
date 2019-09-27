const ApiUrl = 'http://10.0.3.2:5000/'

const ApiRoute = {
  'user-login': 'users/login',
}

const loginUser = async (data) => {

  const response = await fetch(ApiUrl + ApiRoute['user-login'], {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  console.log(response.json());

  // return response.json();
}


const getListAds = () => {

}

const getListBanners = async () => {
  const response = await fetch('https://gateway.chotot.com/v1/public/buyer-collection/banners')
  const data = await response.json();
  // console.log('get', data);
  return data;
}

export {
  loginUser,
  getListAds,
  getListBanners
}