//import { SET_PIC } from './Actions';
import {
    GET_USER,
    ADD_USER,
    POST_REGISTER,
  } from './Actions';

const initialState = {
    us: {},
    user: {},
}

  function Reducer(state = initialState, action) {
    switch (action.type) {
      case GET_USER:
        return {...state, items: action.payload};
      case ADD_USER:
        return {...state, us: [action.payload, ...state.us]};
      case POST_REGISTER:
        console.log('action payload = ', action.payload);
        return {...state, user: action.payload};
      default:
        return state;
    }
  }

export default Reducer;