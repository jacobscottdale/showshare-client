import React from 'react';
import ShowItem from 'components/ShowItem/ShowItem';
import 'components/ShowList/ShowList.css'

// The shows listed in ShowList are searchResults from an api fetch

function ShowList(props) {
  const shows = props.shows.map(show =>
    <li key={show.show.ids.trakt}>
      <ShowItem show={show} updateState={props.updateState} />
    </li>
  );

  return (
    <div className='TVShow_results'>
      {(props.searchTerm)
        ? <h2>Showing results for '{props.searchTerm}'</h2>
        : null}
      <ul>
        {shows}
      </ul>
    </div>
  );
}

export default ShowList;