import Axios from 'axios';
import { AXIOS_POST } from './types';

const API_KEY = '5763846de30d489aa867f0711e2b031c';
const API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=vietnam&page=0`;


export const fetchPost = (post) => {
    return {
        type: AXIOS_POST,
        payload:post
    }
}

export const axiosPost = () => {
    return (dispatch) => {
        return Axios.get(API_URL)
        .then(res => {
            dispatch(fetchPost(res.data.response.docs))
        })
        .catch(err => console.log(err))
    }
};