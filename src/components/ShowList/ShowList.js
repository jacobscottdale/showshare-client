import React from 'react';
import ShowItem from 'components/ShowItem/ShowItem';
import { tvShows } from 'store';

function ShowList(props) {
  const shows = tvShows.map(show => {
    for (let i = 0; i < props.shows.length; i++) {
      if (props.shows[i] === show.ids.trakt) {
        return (
          <li key={i}>
            <ShowItem
              show={show}
            />
          </li>
        );
      }
    }
  });

  return (
    <div className='TVShow_list'>
      <ul>
        {shows}
      </ul>
    </div>


  );
}

export default ShowList;

// Line 6:34:  Expected to return a value at the end of arrow function  array-callback-return

// props.shows is an array of trakt ids