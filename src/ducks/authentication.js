import { getToken } from 'services/session-storage';

const FETCH_TOKEN = 'app/authentication/FETCH_TOKEN';
const STORE_TOKEN = 'app/authentication/STORE_TOKEN';
const SIGN_IN = 'app/authentication/SIGN_IN';
const SIGN_IN_FAIL = `${SIGN_IN}_FAIL`;
const SIGN_IN_SUCCESS = `${SIGN_IN}_SUCCESS`;
const SIGN_UP = 'app/authentication/SIGN_UP';
const SIGN_UP_FAIL = `${SIGN_UP}_FAIL`;
const SIGN_UP_SUCCESS = `${SIGN_UP}_SUCCESS`;

const initialState = {
    token: null,
    loading: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOKEN:
            return { ...state, loading: true };
        case STORE_TOKEN:
            return { ...state, token: action.token, loading: false };
        case SIGN_IN:
        case SIGN_IN_FAIL:
        case SIGN_IN_SUCCESS:
        case SIGN_UP:
        case SIGN_UP_FAIL:
        case SIGN_UP_SUCCESS:
        default:
            return state;
    }
}

export const fetchToken = () => dispatch => {
    dispatch({ type: FETCH_TOKEN });
    getToken().then(token => {
        storeToken(token)(dispatch);
    });
};

export const storeToken = token => dispatch => {
    dispatch({
        type: STORE_TOKEN,
        token
    });
};

export const signIn = data => dispatch => {
    dispatch({
        type: SIGN_IN,
        payload: {
            request: {
                method: 'post',
                url: '/users',
                data
            }
        }
    });
};

export const signUp = data => dispatch => {
    dispatch({
        type: SIGN_UP,
        payload: {
            request: {
                method: 'post',
                url: '/users',
                data
            }
        }
    });
};
