import React from 'react';
import { Link } from 'react-router-dom';

function ShowItem(props) {
  return (
    <div className='TVShow_item'>
      <Link to={`/show/${props.show.show.ids.trakt}`}>
        {props.show.show.title} ({props.show.show.year})
      </Link>
    </div>
  );
}

export default ShowItem;