import { combineReducers } from 'redux'

import erc20 from './erc20'
import uiPool from './uiPool'

const reducer = combineReducers({
  erc20,
  uiPool,
})

export default reducer
