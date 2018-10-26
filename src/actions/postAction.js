import Axios from 'axios';
import * as types from './types';

const API_KEY = '5763846de30d489aa867f0711e2b031c';
const API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=vietnam`;

function getPostApi(page) {
    return Axios.get(`${API_URL}&${page}`)
};

export const getPost = (page) => (dispatch) => {
    dispatch({
        type: types.AXIOS_PENDING
    });
    return getPostApi(page)
    .then((res) => {
        dispatch({
            type: types.AXIOS_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: types.AXIOS_FAILURE,
            payload: err
        });
    })
}

