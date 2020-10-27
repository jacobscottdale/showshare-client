import React from 'react';
import { Link } from 'react-router-dom';
import ShowList from 'ShowList/ShowList';
import NavBar from 'NavBar/NavBar';
import { profiles } from 'store';

function Watched(props) {
  const user = profiles.find(profile => profile.id === 1)
  
  return (
    <>
      <NavBar/>
      <h2>Watched</h2>
      <ShowList shows={user.watched} />
    </>

  );
}


export default Watched;