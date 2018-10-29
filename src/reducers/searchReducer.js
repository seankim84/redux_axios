import * as types from '../actions/types';

const initialState = {
    postId:0,
    pending: false,
    err: false,
    searchItem: [],
    searchText: ''
};

export default function(state = initialState, action){
    switch(action.type){
        case types.AXIOS_PENDING:
        return {

        }

        case types.SEARCH:
        return {

        }

        case types.AXIOS_FAILURE:
        return {

        }

        default: return {
            state
        }
    }
}