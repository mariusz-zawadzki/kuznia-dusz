import {combineReducers} from 'redux';
import {reducer as fromReducer} from 'redux-form'
import games from './reducer_games'
import characters from './reducer_characters'
const rootReducer = combineReducers({
    form: fromReducer,
    games,
    characters
});

export default rootReducer;
