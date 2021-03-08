import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from 'components/AddButton/AddButton';
import 'components/UserShowItem/UserShowItem.css';

// A UserShowItem renders inside UserShowList and is a show that the user has collected

function UserShowItem(props) {
  const { slug, title, year, watch_status, trakt_id, tmdb_image_path } = props.show;

  const showPoster = (tmdb_image_path !== 'false')
    ? <img className='show_poster' src={`https://image.tmdb.org/t/p/w185${tmdb_image_path}`} alt={slug + '-poster'} />
    : null;


  return (
    <div className='TVShow_item'>
      <div className='poster_container'>
        {showPoster}
      </div>
      <div className='show_title'>
        <Link to={`/show/${trakt_id}`}>
          {title} ({year})
      </Link>
      </div><br />
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