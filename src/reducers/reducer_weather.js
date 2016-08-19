import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){
// allways return new state don not modify
// never use state.push this modufy the array
switch ( action.type ) {
  case FETCH_WEATHER :
      return state.concat([ action.payload.data ]);
      //or
      //return [action.payload.data,...state]
}
  return state;
}
