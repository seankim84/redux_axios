import * as types from './types';
import   getPostApi  from '../lib/Api_call';

export const getPost = (postId) => dispatch => {
    dispatch({
        type: types.AXIOS_PENDING
    });
    return getPostApi(postId)
    .then(res => {
        dispatch({
            type: types.AXIOS_SUCCESS,
            payload: res
        })
    }).catch(err => {
        dispatch({
            type: types.AXIOS_FAILURE,
            payload: err
        });
    })
}

