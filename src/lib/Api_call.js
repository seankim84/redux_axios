import Axios from 'axios';

const API_KEY = '5763846de30d489aa867f0711e2b031c';

function getPostApi(postId) {
    return Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=vietnam&page=${postId}`)
};

export default getPostApi;