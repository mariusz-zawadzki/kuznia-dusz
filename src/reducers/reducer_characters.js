import {SAVE_CHARACTER} from '../actions/types'
import Characters from './../data_mock/characterList'
export default function (state = Characters, action = {}) {

    switch (action.type) {
        case SAVE_CHARACTER:
            let payload = action.payload;
            let currentChar = state[payload.id]
            let char = {
                    ...currentChar,
                    ...payload,
                    };
            let newState = {...state}
            newState[char.id] = char;
            return newState;
        default:
            return state;
    }
}