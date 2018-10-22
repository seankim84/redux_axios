import Axios from 'axios';
import { AXIOS_POST } from './types';

const API_KEY = '5763846de30d489aa867f0711e2b031c';
const Keyword = '';
const API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${Keyword}&page=0`;


export const  axiosPost = async () => dispatch => {
    console.log("Doing Axios from Data");

    Axios.get(API_URL)
    .then(posts => dispatch({
        type: AXIOS_POST,
        payload: posts
    }))
    .catch(err => {
        throw(err)
    })
};