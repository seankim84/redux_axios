import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/pageAction';
import * as action from '../actions/postAction';

class Post extends Component {
    render(){
        const { page, onIncrement, onDecrement } = this.props;
        return(
            <div>
                <div>
                {page}
                <button onClick={ onIncrement }>+</button>
                <button onClick={ onDecrement}>-</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ //combineReducer 참조
    page: state.pageData.page,
    pending: state.postData.pending,
    err: state.postData.err,
    item: state.postData.item
});

const mapDispatchToProps = (dispatch) => ({ // action 참조
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onGetPost: () => dispatch(action.getPost())  
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
//(mapStateToProps,{ getPost, PageActions })(Post);