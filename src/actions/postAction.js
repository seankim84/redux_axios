import Axios from 'axios';
import * as types from './types';

const API_KEY = '5763846de30d489aa867f0711e2b031c';

function getPostApi(postId) {
    return Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=vietnam&page=${postId}`)
};

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

