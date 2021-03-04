import React from 'react';
import NavBar from 'components/NavBar/NavBar';


function MainPage(props) {
  return (
    <>
      <NavBar history={props.history}/>
      <section className='LandingPage'>
        <h3>Welcome to showshare!</h3>
        <p>Login or create an account to begin adding TV shows to your watchlist</p>
      </section>
    </>

  );
}

export default MainPage;