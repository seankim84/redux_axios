import { AXIOS_POST } from '../actions/types';

const initialState = {
    item: []
};

export default function(state = initialState, action){
    switch(action.type){
        case AXIOS_POST:
        console.log("Axios Post is Doing now");
        return {
            ...state,
            item: action.payload
        }
        default: 
            return state;
    }
}