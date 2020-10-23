import React from 'react';
import ShowItem from '../ShowItem/ShowItem';
import tvShows from '../store';


function ShowList(props) {
  const shows = tvShows.map(show => (
    <ShowItem
      title={show.title}
      year={show.year}
      key={show.ids.trakt}
    />
  ));
  return (
    <ul>
      {shows}
    </ul>
  );
}

export default ShowList;