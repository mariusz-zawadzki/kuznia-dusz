import * as types from '../actions/types'

export default (state = {
    auth: false,
    uid: null
}, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                auth: true,
                uid: action.payload
            };
        case types.SIGN_OUT:
            return {
                auth: false,
                uid: action.payload
            };
        default:
            return state;
    }
}