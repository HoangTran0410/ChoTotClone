const initialState = {
  userData: {
    id: null,
    token: null,
    name: null,
    avatar: null
  },
  savedAds: [],

  region: '',
  uuid: ''
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

    case 'setRegion':
      return {
        ...state,
        region: action.region
      }

    case 'setUuid':
      return {
        ...state,
        uuid: action.uuid
      }

    default:
      return { ...state }
  }
}

export default userReducer