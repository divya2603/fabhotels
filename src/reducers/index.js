import { combineReducers } from 'redux'
import {
  REQUEST_PLACES,
  RECEIVE_PLACES
} from '../actions'


/***********fetch places**************/
const initialState = {
    isFetching: false,
    didInvalidate: false,
    items: []
  };
function getPlaces(state= initialState, action) {
  switch(action.type) {
    case REQUEST_PLACES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
      case RECEIVE_PLACES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.places
      })

    default:
      return state;

  } 
}

function placesSearched(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PLACES:
    case REQUEST_PLACES:
      return Object.assign({}, state, {
        [action.places]: getPlaces(state[action.query], action)
      })
    default:
      return state
  }
}
const rootReducer = combineReducers({
  placesSearched
})

export default rootReducer