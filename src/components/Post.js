import React, { Component } from 'react';
import { connect } from 'react-redux';
import { axiosPost } from '../actions/postAction';

class Post extends Component {

    componentWillMount() {
        this.props.axiosPost();
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


export default connect(mapStateToProps,{ axiosPost })(Post);