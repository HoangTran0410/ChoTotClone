const initialState = {
  userData: {
    id: null,
    token: null,
    name: null,
    avatar: null
  },
  savedAds: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'saveUserData':
      return {
        userData: action.userData
      }

    default:
      return state
  }
}

export default userReducer