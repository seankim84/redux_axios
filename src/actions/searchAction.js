import * as types from './types';
import getPostApi from '../lib/Api_call';


function onTextChange(e) {
    const val = e.target.value;
    this.setState({
        [e.target.name]: val
    }, () => {
        if (val === '') {
            this.setState({})
        }
    })
}

export const getSearch = (postId) => (dispatch) => {
    dispatch({
        type: types.PENDING
    });
    return getPostApi(postId)
}