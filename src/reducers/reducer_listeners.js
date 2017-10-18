import * as types from '../actions/types'

const initial = [];

export default (state = initial, action) => {
    switch (action.type) {
        case types.ADD_LISTENER:
            return [...state, action.payload]
        case types.REMOVE_LISTENERS:
            return [];
        default:
            return state;
    }
}
export const ADD_LISTENER = "add_listener"
export const REMOVE_LISTENERS = "REMOVE_LISTENERS"