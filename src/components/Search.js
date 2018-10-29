import React, { Component } from 'react';
import Axios from 'axios';
import TextField from 'material-ui/TextField';
import SimpleCard from './Card';

class Search extends Component {
    state = {
        searchText:'',
        apiUrl: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?',
        API_KEY: '5763846de30d489aa867f0711e2b031c',
        items: [],
        pageId: 0
    };

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val}, () => {
            if(val=== '') {
                this.setState({items:[]})
            } else {
                Axios.get(`${this.state.apiUrl}api-key=${this.state.API_KEY}&q=${this.state.searchText}&page=${this.state.pageId}`
            )
            .then(res => this.setState({ items: res.data.response.docs }))
            .catch(err => console.log(err));
            }
        });
    };

    render(){
        console.log(this.state.items);
        return (
            <div pageId={this.state.pageId}>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                />
                <br />
                {this.state.items != null ? (
                    <div>
                        {this.state.items.map( item => (
                            <SimpleCard 
                                key={item._id} 
                                    headline={item.headline.main} 
                                    pubdate={item.pub_date} 
                                    explain={item.snippet}
                                    website={item.web_url}
                            >
                            </SimpleCard>
                            )
                        )}
                    </div>
                    ) : null}
            </div>
        );
    }
}

export default Search;