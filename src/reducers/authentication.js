const LOGIN = 'app/authentication/LOGIN';
const REGISTER = 'app/authentication/REGISTER';

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
        default:
            return state;
    }
}
