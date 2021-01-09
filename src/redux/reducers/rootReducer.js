import {combineReducers} from 'redux'
import mainCardReducer from './mainCardReducer'
import firstCardReducer from './firstCardReducer'
import secondCardReducer from './secondCardReducer'
import thirdCardReducer from './thirdCardReducer'

export default combineReducers({
  main: mainCardReducer,
  first: firstCardReducer,
  second: secondCardReducer,
  third: thirdCardReducer
})
