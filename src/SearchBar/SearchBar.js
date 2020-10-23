import React from 'react';


function SearchBar(props) {
  return (
    <form id='find-show'>
      <label for='show-search'>Find show:</label>
      <input id='show-search' name='show-search' type='text'/>
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;