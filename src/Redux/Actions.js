export const SET_PIC = 'SET_PIC';

export const setPic = pic => dispatch => {
dispatch({
    type: SET_PIC,
    payload: pic,
})

};