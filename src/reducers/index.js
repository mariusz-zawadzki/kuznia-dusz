import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form'
import games from './reducer_games'
import characters from './reducer_characters'
import auth from './reducer_auth'
import listeners from './reducer_listeners'
const rootReducer = combineReducers({
    form,
    games,
    characters,
    auth,
    listeners
});

export default rootReducer;
