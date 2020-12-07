import React from 'react';
import NavBar from 'components/NavBar/NavBar';


function MainPage(props) {
  return (
    <>
      <NavBar history={props.history}/>
      <p>Welcome to showshare!</p>
    </>

  );
}

export default MainPage;