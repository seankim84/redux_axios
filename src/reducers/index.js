import { combineReducers } from 'redux';
import postReducer from './postReducer';
import pageReducer from './pageReducer';

export default combineReducers({
    postData: postReducer,
    pageData: pageReducer
});