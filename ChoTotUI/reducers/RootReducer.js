import { combineReducers } from 'redux'

import UserReducer from './UserReducer'

const RootReducer = combineReducers({
  UserReducer: UserReducer
})

export default RootReducer