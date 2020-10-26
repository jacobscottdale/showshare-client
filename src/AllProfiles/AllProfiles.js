import React from 'react';
import { profiles } from '../store';

function AllProfiles(props) {
  return (
    <ul>
      {profiles.map(profile => {
        const { firstName, lastName, id } = profile;
        return (
          <li>
            Name: {firstName} {lastName}, Id: {id}
          </li>
        );
      })}
    </ul>
  );
}

export default AllProfiles;