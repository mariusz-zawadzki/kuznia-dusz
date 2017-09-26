import {combineReducers} from 'redux';
import {reducer as fromReducer} from 'redux-form'
import authReducer from './reducer_auth'
import charactersReducer from './reducer_characters'

const rootReducer = combineReducers({
    form: fromReducer,
    loggedIn: authReducer,
    characters: charactersReducer
});

export default rootReducer;
