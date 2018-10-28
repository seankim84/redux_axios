import React, { Component } from 'react';
import Axios from 'axios';
import TextField from 'material-ui/TextField';

class Search extends Component {

    state = {
        searchText:'',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '10273023-55ba2355bd5ce1c49ee9e494a',
        images: []
    }

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val}, () => {
            if(val=== '') {
                this.setState({images:[]})
            } else {
                Axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
            )
            .then(res => this.setState({ images: res.data.hits }))
            .catch(err => console.log(err));
            }
        });
    };

    render(){
        console.log(this.state.images);
        return (
            <div>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelFixed="Search For Images"
                    fullWidth={true}
                />
                <br />
            </div>
        );
    }
}

export default Search;