import {CHANGE_AUTH, SAVE_CHARACTER} from './types'

// import axios from 'axios';


export function logout() {
    
    return {
        type: CHANGE_AUTH,
        payload: false,
        callback:(f)=>{
            localStorage.removeItem('auth')
        }
    }
}

export function login(loggedIn, callback) {
    return {
        type: CHANGE_AUTH,
        payload: loggedIn,
        callback
    }
}

export function saveCharacter(character){
    return {
        type: SAVE_CHARACTER,
        payload: character
    }
}
