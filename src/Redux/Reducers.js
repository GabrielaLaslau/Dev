import { SET_PIC } from './Actions';

const initialState = {
    pic: ' ',
}

function Reducer(state = initialState, action) {
    switch(action.type){
       case SET_PIC:
            return { ...state, pic: action.payload};
            default:
                return state;
    }
}

export default Reducer;