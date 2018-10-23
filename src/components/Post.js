import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/postAction';

class Post extends Component {

    componentWillMount() {
        this.props.getPost();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post._id}>
                {post.snippet}
            </div>
            ));

        return (
            <div>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.post.item
})


export default connect(mapStateToProps,{ getPost })(Post);