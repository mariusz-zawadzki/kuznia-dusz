import {CHANGE_AUTH} from './types'

// import axios from 'axios';


export function login(loggedIn, callback) {
    callback();
    return {
        type: CHANGE_AUTH,
        payload: loggedIn
    }
}
