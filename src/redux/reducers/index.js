import {combineReducers} from 'redux';
import userReducer from './userReducer';

// combineReducer will combine the different reducers used in the app into one reducer.
// This will be used when setting up the store.
export default combineReducers({
    user: userReducer
});