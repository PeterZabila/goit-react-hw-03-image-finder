import React from 'react';
import { Component } from 'react';
import './SearchBar.css';
import pic from '../../images/search.png'
// import {ReactComponent as SearchIcon} from '../../images/search.svg'

export default class SearchBar extends Component {
    state = {
        query: '',
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(this.state.query);
        this.reset();
    }

    reset() {
        this.setState({query: ''})
    }

    render () {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit} >
                    <button type="submit" className="SearchForm-button">
                        {/* <span className="SearchForm-button-label">Search</span> */}
                        <img alt="" src={pic} width="25px" />
                        {/* <SearchIcon/><img src={"../../images/search.png"} width="50px" /> */}
                    </button>

                    <input
                        className="SearchForm-input"
                        name="query"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}