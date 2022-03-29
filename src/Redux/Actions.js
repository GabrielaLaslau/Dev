export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';

export const SET_USER_NAME = 'SET_USER_NAME';

export const POST_REGISTER = 'POST_REGISTER';

const API_URL = 'https://cool-project-backend.herokuapp.com/api/postares';
const API_URL_register = 'https://cool-project-backend.herokuapp.com/api/auth/local/register';

// TODO:
// salvam jwt in asign storage

export const getUser = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_USER,
                    payload: json
                });
            }
            else {
                console.log('Unable to fetch!');
            }
        };

        // eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error);
    }
};

export const addUser = item => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: item,
    });
};

export const setUsername = username => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: username,
    });
};


export const userRegister = (email, username, password) => {
    try {
        return async dispatch => {
            console.log('I am in!', email, username, password);
            const result = await fetch(API_URL_register, {
                method: 'POST',
                headers: {
                    // Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // camp:variabila; daca se scriu la fel,se lasa o sg data
                    username: username,
                    email: email.trim(),
                    password: password,
                }),
            }).catch(error => console.log('nu asa', error))
            const json = await result.json();

            // jwt - un camp ce exista in json - trebuie salvat in memoria telefonului pt autentificare
           
            if (json.jwt) {
                dispatch({
                    type: POST_REGISTER,
                    payload: json.user,
                });
            }
            else {
                console.log('Unable to fetch data.');
            }
        };
        // eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error);
    }
};