import { combineReducers } from 'redux'

import reservesDataFromAllPools from './reservesDataFromAllPools'
import userReservesDataFromAllPools from './userReservesDataFromAllPools'

const reducer = combineReducers({
  reservesDataFromAllPools,
  userReservesDataFromAllPools,
})

export default reducer
