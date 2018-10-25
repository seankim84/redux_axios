import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pageActions from '../actions/pageAction'
import { bindActionCreators } from 'redux';

class Post extends Component {


    render(){
        const { pagenumber } = this.props;
        /* const postItem = this.props.posts.map(post => (
            <SimpleCard key={post._id}
                headmain={post.source}
                explain={post.snippet}
                headline={post.headline.main}
                pubdate={post.pub_date} 
            />
        )) */
        return(
            <div>
                {pagenumber}
                <div>
                <button onClick={pageActions.increment}>+</button>
                <button onClick={pageActions.decrement}>-</button>
                </div>
            </div>
        )
    }
}

/*const mapStateToProps = state => ({
    posts: state.post.item,
    page: state.page
})*/


export default connect(
    (state)=> ({
    pagenumber: state.page
}),
(dispatch) => ({
    PageActions: bindActionCreators(pageActions, dispatch)
})
)(Post)
//(mapStateToProps,{ getPost, PageActions })(Post);