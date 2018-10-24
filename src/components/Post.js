import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/postAction';
import SimpleCard from '../components/Card';
class Post extends Component {

    componentWillMount() {
        this.props.getPost();
    }

    render(){
        const postItem = this.props.posts.map(post => (
            <SimpleCard key={post._id}
                headmain={post.source}
                explain={post.snippet}
                headline={post.headline.main}
                pubdate={post.pub_date}
            />
        ))
        return(
            <div>{postItem}</div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.post.item
})


export default connect(mapStateToProps,{ getPost })(Post);