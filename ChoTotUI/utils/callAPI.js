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

export {
  loginUser
}