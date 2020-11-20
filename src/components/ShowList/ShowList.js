import React from 'react';
import ShowItem from 'components/ShowItem/ShowItem';

function ShowList(props) {
  const shows = props.shows.map(show =>
    <li key={show.show.ids.trakt}>
      <ShowItem show={show} />
    </li>
  );

  return (
    <div className='TVShow_list'>
      {(props.searchTerm)
        ? <h3>Showing results for '{props.searchTerm}'</h3>
        : null}
      <ul>
        {shows}
      </ul>
    </div>
  );
}

export default ShowList;