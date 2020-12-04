import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from 'components/AddButton/AddButton';
import 'components/UserShowItem/UserShowItem.css';

function UserShowItem(props) {
  const { slug, title, year, watch_status, trakt_id, tmdb_image_path } = props.show;

  const posterLink = `https://image.tmdb.org/t/p/w185${tmdb_image_path}`;

  return (
    <div className='TVShow_item'>
      <div className='poster_container'>
        <img className='show_poster' src={posterLink} alt={slug + '-poster'} />
      </div>
      <div className='show_title'>
        <Link to={`/show/${trakt_id}`}>
          {title} ({year})
      </Link>
      </div><br/>
      <div className='show_buttons'>
        <AddButton
          watch_status={watch_status}
          trakt_id={trakt_id}
          updateState={props.updateState}
        />
      </div>
    </div>
  );
}

export default UserShowItem;