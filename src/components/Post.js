import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postAxios } from '../actions/postAction';


class Post extends Component {

    componentWillMount() {
        this.props.postAxios();
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Post ;