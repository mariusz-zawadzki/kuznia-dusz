import {CHANGE_AUTH} from '../actions/types'
import _ from 'lodash'

export default function (state = false, action = {}) {
    switch (action.type) {
        case CHANGE_AUTH:
            _.delay(action.callback, 1000)
            return action.payload;
        default:
            // if(localStorage.getItem('auth')){
            //     return true;
            // }
            return state;
    }
}