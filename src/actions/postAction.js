import Axios from 'axios';
import { AXIOS_PENDING, AXIOS_SUCCESS, AXIOS_FAILURE } from './types';

const API_KEY = '5763846de30d489aa867f0711e2b031c';
const API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=vietnam`;

function getPostApi(page) {
    return Axios.get(`${API_URL}&${page}`)
};

export const getPost = (page) => (dispatch) => {
    dispatch({
        type: AXIOS_PENDING
    });
    return getPostApi(page)
    .then((response) => {
        dispatch({
            type: AXIOS_SUCCESS,
            payload: response
        })
    })
    .catch(err => {
        dispatch({
            type: AXIOS_FAILURE,
            payload: err
        });
    })
}

