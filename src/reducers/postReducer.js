import * as types from '../actions/types';

const initialState = {
    pending: false,
    err: false,
    item: []
};

export default function axiosPost(state = initialState, action){
    switch(action.type){
        case types.AXIOS_PENDING: 
        console.log("Axios Pending");
        return {
            ...state,
            pending: false
        }
        case types.AXIOS_SUCCESS:
        console.log("Axios Post is Doing now");
        return {
            ...state,
            pending: true,
            err: false,
            item: action.payload.data.response.docs
        }
        case types.AXIOS_FAILURE:
        console.log('Axios Failure')
        return {
            ...state,
            pending: false,
            err: true
        }
        default: 
            return state;
    }
}