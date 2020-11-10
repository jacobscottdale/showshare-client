import React from 'react';
import { Link } from 'react-router-dom';
import ShowList from 'components/ShowList/ShowList';
import NavBar from 'components/NavBar/NavBar';
import { profiles } from 'store';

function MainPage(props) {
  const user = profiles.find(profile => profile.id === 1)
  
  return (
    <>
      <NavBar/>
      <h2>{user.firstName} {user.lastName}</h2>
      
      <h3>Watchlist:</h3>
      <ShowList shows={user.toWatch} />
      <Link to='/watchlist' >show all</Link>
      <h3>Watched:</h3>
      <ShowList shows={user.watched} />
      <Link to='/watched' >show all</Link>
    </>

  );
}

export default MainPage;