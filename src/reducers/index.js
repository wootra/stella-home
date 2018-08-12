import { combineReducers } from 'redux'
import sample from './sampleReducer'
import weather from './weatherReducer'
import customers from './customerReducer'
import news from './newsReducer'

// all recuders has to be combined here.
// if you added a reducer, add it in combine reducer objects.
const combine_reducer_objects = {
  sample,
  weather,
  customers,
  news
  // add more here..
}
export default combineReducers(combine_reducer_objects)
