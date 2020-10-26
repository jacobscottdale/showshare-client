import React from 'react';
import ShowItem from '../ShowItem/ShowItem';
import {tvShows} from '../store';


function ShowList(props) {
  const shows = tvShows.map(show => (
    <li>
      <ShowItem
        title={show.title}
        year={show.year}
        key={show.ids.trakt}
      />
    </li>
  ));
  return (
    <ul>
      {shows}
    </ul>
  );
}

export default ShowList;