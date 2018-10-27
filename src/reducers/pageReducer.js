import * as types from '../actions/types';

const initialState = {
    page: 0
};

function getPage( state= initialState, action ) {
    switch(action.type) {
        case types.INCREMENT:
            return { 
                ...state,
                page: state.page + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                page: state.page -1
            }
        default : 
            return state;
    }
}

export default getPage;