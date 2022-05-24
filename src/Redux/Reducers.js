import {
  GET_USER,
  ADD_USER,
  POST_REGISTER,
  SET_USER_NAME,
} from './Actions';

const initialState = {
  username: '',
  us: [],
  user: {},
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, items: action.payload };
    case ADD_USER:
      return { ...state, us: [action.payload, ...state.us] };
    case SET_USER_NAME:
      return { ...state, username: action.payload };
    case POST_REGISTER:
      console.log('action payload = ', action.payload);
      return { ...state, user: action.payload }; // ... return state ul precedent + actualul 
    default:
      return state;
  }
}

export default Reducer;