import {CHANGE_AUTH, SAVE_CHARACTER} from './types'

// import axios from 'axios';


export function login(loggedIn, callback) {
    callback();
    return {
        type: CHANGE_AUTH,
        payload: loggedIn
    }
}

export function saveCharacter(character){
    return {
        type: SAVE_CHARACTER,
        payload: character
    }
}
