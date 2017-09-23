import { combineReducers } from 'redux';
import {reducer as fromReducer} from 'redux-form'
import authReducer from './reducer_auth'
const rootReducer = combineReducers({
  form: fromReducer,
  loggedIn: authReducer
});

export default rootReducer;
