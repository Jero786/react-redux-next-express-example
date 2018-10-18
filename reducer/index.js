// Libs
import {combineReducers} from 'redux-immutable'

// Reducers
import homeReducer from 'reducer/home/homeReducer';

/**
 * Import here all reducers of the application.
 */
const rootReducer = combineReducers({
    homeReducer
});

export default rootReducer;
