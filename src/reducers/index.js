import { combineReducers } from 'redux';
import postReducer from './postReducer';
import pageReducer from './pageReducer';

export default combineReducers({
    post: postReducer,
    page: pageReducer
});