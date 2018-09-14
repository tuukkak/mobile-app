const SIGNIN = 'app/authentication/SIGNIN';
const SIGNUP = 'app/authentication/SIGNUP';

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGNIN:
        case SIGNUP:
        default:
            return state;
    }
}
