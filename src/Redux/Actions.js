export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const POST_REGISTER = 'POST_REGISTER';

const API_URL = 'https://cool-project-backend.herokuapp.com/api/postares';
const API_URL_register = ' https://cool-project-backend.herokuapp.com/api/auth/local/register';

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
                    payload: json.data.map(item => ({
                        id: item.id,
                        ...item.attributes,
                    })),
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

export const userRegister = (email,username,password) => {
    try {
        return async dispatch => {
            console.log('I am in!');
            const result = await fetch(API_URL_register, {
                method: 'POST',
                headers: {
                    // Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:username,
                    email,
                    password,
                }),
            }) .catch(error => console.log('nu asa',error))
            console.log(result);
            const json = await result.json();

            console.log('fetch = ', json);
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