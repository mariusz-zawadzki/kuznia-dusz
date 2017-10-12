import * as types from '../actions/types'

const initial = [
    {
        "id":"1",
        "name":"game one"
    },
    {
        "id":"2",
        "name":"game two"
    }
];
export default (state = initial, action)=>{
    switch(action.type){
        case types.SAVE_GAME:
            let index = state.findIndex((el)=> el.id === action.payload.id)
            if(index > -1)
            {
                return [...state.slice(0,index),
                    action.payload,
                    ...state.slice(index+1) ]
            }
            return  [...state, action.payload]
            // newState[action.payload.id] = action.payload;
            // return newState;
        default:
            return state;
    }
}