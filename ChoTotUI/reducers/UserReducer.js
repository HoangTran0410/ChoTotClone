const initialState = {
  userData: {
    id: null,
    token: null,
    name: null,
    avatar: null
  },
  savedAds: [],
  region: 'Tp Hồ Chí Minh',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'loginFB': return {
      ...state,
      userData: action.userData
    }

    case 'logout': return {
      ...state,
      userData: initialState.userData
    }

    case 'toggleSavedAd':
      let currentSaved = [...state.savedAds]
      let id = action.list_id
      let index = currentSaved.indexOf(id)
      if (index < 0) {
        currentSaved = [...currentSaved, id]
      } else {
        currentSaved.splice(index, 1)
      }
      return {
        ...state,
        savedAds: currentSaved
      }

    case 'changeRegion': return {
      ...state,
      region: action.region,
    }

    default:
      return state
  }
}

export default userReducer