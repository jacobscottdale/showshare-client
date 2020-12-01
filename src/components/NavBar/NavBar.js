import React from 'react';
import 'components/NavBar/NavBar.css';

function NavBar(props) {
  return (
    <header className='NavBar'>
      <h1>showshare</h1>
      <nav>
        <ul>
          <li>Search</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;