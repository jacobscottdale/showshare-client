import React from 'react';

function ShowItem(props) {
  return (
    <>
      <p>{props.title}</p>
      <p>{props.year}</p>
    </>
  );
}

export default ShowItem;