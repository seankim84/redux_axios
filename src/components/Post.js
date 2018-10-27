import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/pageAction';
import * as actions from '../actions/postAction'
import SimpleCard from './Card';
import ContainedButtons from './Button';

class Post extends Component {

    componentDidMount() {
        const { page, onGetPost } = this.props;
        onGetPost(page);
    }

    componentWillReceiveProps(nextProps){
        const { onGetPost }  = this.props;
        if (this.props.page !== nextProps.page){
            onGetPost(nextProps.page)
        }
    }

    render(){
        const { page, onIncrement, onDecrement, err, item, pending  } = this.props;
        return(
            <div>
                <div>
                <p>{page}</p>
                <ContainedButtons onClick={onIncrement} Pcounter={"+"}></ContainedButtons>
                <ContainedButtons onClick={onDecrement} Pcounter={"-"}></ContainedButtons>
                { pending && <h2>Pending 중</h2>}
                { err ? <h1>에러 발생</h1> : (
                    <div>
                    {item.map(items => (
                        <SimpleCard key={items._id} 
                                    headline={items.headline.main} 
                                    pubdate={items.pub_date} 
                                    explain={items.snippet}
                                    website={items.web_url}
                                    > 
                        </SimpleCard>
                        ))}
                    </div>
                )}
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
    onIncrement: () => dispatch(action.increment()),
    onDecrement: () => dispatch(action.decrement()),
    onGetPost: (postId) => dispatch(actions.getPost(postId))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
//(mapStateToProps,{ getPost, PageActions })(Post);