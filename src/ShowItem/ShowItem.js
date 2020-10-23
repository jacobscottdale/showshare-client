import React from 'react';

function ShowItem(props) {
  return (
    <li>
      <p>{props.title}</p>
      <p>{props.year}</p>
    </li>
  );
}

export default ShowItem;