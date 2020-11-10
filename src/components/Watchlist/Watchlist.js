import React from 'react';
import ShowList from 'components/ShowList/ShowList';
import NavBar from 'components/NavBar/NavBar';
import { profiles } from 'store';

function Watched(props) {
  const user = profiles.find(profile => profile.id === 1)
  
  return (
    <>
      <NavBar/>
      <h2>Watchlist</h2>
     
      <ShowList shows={user.toWatch} />
      
    </>

  );
}


export default Watched;