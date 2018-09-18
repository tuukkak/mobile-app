const STORE_TOKEN = 'app/authentication/STORE_TOKEN';
const SIGN_IN = 'app/authentication/SIGNIN';
const SIGN_IN_FAIL = `${SIGN_IN}_FAIL`;
const SIGN_IN_SUCCESS = `${SIGN_IN}_SUCCESS`;
const SIGN_UP = 'app/authentication/SIGNUP';
const SIGN_UP_FAIL = `${SIGN_UP}_FAIL`;
const SIGN_UP_SUCCESS = `${SIGN_UP}_SUCCESS`;

const initialState = {
    token: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case STORE_TOKEN:
            return { ...state, token: action.token };
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

export function signIn(data) {
    return {
        type: SIGN_IN,
        payload: {
            request: {
                method: 'post',
                url: '/users',
                data
            }
        }
    };
}

export function storeToken(token) {
    return {
        type: STORE_TOKEN,
        token
    };
}

export function signUp(data) {
    return {
        type: SIGN_UP,
        payload: {
            request: {
                method: 'post',
                url: '/users',
                data
            }
        }
    };
}
