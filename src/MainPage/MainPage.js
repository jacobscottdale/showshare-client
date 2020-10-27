import React from 'react';
import ShowList from '../ShowList/ShowList';
import { profiles } from '../store';

function MainPage(props) {
  const user = profiles.find(profile => profile.id === 1)
  
  return (
    <>
      <h2>{user.firstName}</h2>
      <h3>Watched:</h3>
      <ShowList shows={user.watched} />
      <h3>To Watch:</h3>
      <ShowList shows={user.toWatch} />
    </>

  );
}


export default MainPage;