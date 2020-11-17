import React, { Component } from 'react';


class SearchBar extends Component {

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target['show-search'].value)
    this.props.handleSearch(e.target['show-search'].value);
    e.target['show-search'].value = ''
  };

  render() {
    return (
      <form id='find-show' onSubmit={this.handleSubmit}>
        <label htmlFor='show-search'>Find show:</label>
        <input id='show-search' name='show-search' type='text' />
        <button type='submit' >Search</button>
      </form>
    );
  }

}

export default SearchBar;