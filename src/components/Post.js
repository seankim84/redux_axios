import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/pageAction';
import * as actions from '../actions/postAction'
import SimpleCard from './Card';
import ContainedButtons from './Button';

class Post extends Component {

    componentDidMount() {
        const { page } = this.props;
        this.getPost(page);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.page !== nextProps.page){
            this.getPost(nextProps.page)
        }
    }

    getPost = async (postId) => {
        const { onGetPost } = this.props;
    
        try {
            await onGetPost(postId);
            console.log("Request Complete and do it")
        } catch(e){
            console.log("Error")
        }
    }

    render(){
        const { page, onIncrement, onDecrement, err, item, pending  } = this.props;
        return(
            <div>
                <div>
                <p>{page}</p>
                <ContainedButtons onClick={onDecrement} Pcounter={"Latest"}></ContainedButtons>
                <ContainedButtons onClick={onIncrement} Pcounter={"Oldest"}></ContainedButtons>
                { pending }
                { err ? <h1>Err</h1> : (
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