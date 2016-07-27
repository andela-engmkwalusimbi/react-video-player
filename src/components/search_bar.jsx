import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchNameChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.inputValue} 
                    onChange={event => this.onInputChange(event.target.value)}
                    />
            </div>
        );
    }
}

export default SearchBar;