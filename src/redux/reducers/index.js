import { combineReducers } from 'redux'
import { title } from './title'
import pokeReducer from './pokeReducer';


export default combineReducers({
  title,
  pokes: pokeReducer,

})
