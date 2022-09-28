import React from 'react';
import { Component } from 'react';
import './SearchBar.css';
import pic from '../../images/search.png';
import PropTypes from 'prop-types';

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
                        <img alt="" src={pic} width="25px" />
                    </button>

                    <input
                        className="SearchForm-input"
                        name="query"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
}