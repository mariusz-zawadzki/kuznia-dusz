import {combineReducers} from 'redux';
import {reducer as fromReducer} from 'redux-form'

const rootReducer = combineReducers({
    form: fromReducer,
});

export default rootReducer;
