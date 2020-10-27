import React from 'react';
import ShowItem from '../ShowItem/ShowItem';
import { tvShows } from '../store';


function ShowList(props) {
  const shows = tvShows.map(show => {
    for (let i = 0; i < props.shows.length; i++) {
      if (props.shows[i] === show.ids.trakt) {
        return (
          <li>
            <ShowItem
              title={show.title}
              year={show.year}
              key={i}
            />
          </li>
        );
      }
    }
  });
  
  return (
    <ul>
      {shows}
    </ul>
  );
}

export default ShowList;