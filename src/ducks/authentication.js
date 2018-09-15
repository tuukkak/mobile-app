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

export function signIn() {
    return {
        type: SIGN_IN,
        payload: {
            request: {
                url: '/sign-in'
            }
        }
    };
}

export function signUp() {
    return {
        type: SIGN_UP,
        payload: {
            request: {
                url: '/sign-up'
            }
        }
    };
}
