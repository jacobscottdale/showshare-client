import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddButton from 'components/AddButton/AddButton';
import UserContext from 'UserContext';
import 'components/ShowItem/ShowItem.css';

function ShowItem(props) {
  const context = useContext(UserContext);

  const { show } = props.show;
  const showMatch = context.userShows
    ? context.userShows.find(userShow => userShow.trakt_id === show.ids.trakt)
    : null;
  const watch_status = showMatch ? showMatch.watch_status : '';

  return (
    <div className='TVShow_item'>
      <div className='show_title'>
        <Link to={`/show/${show.ids.trakt}`}>
        {show.title} ({show.year})
      </Link>
      </div>
      <div className='search_show_buttons'>
        <AddButton
        watch_status={watch_status}
        trakt_id={show.ids.trakt}
        updateState={props.updateState}
      />
      </div>
      
    </div>
  );
}

export default ShowItem;