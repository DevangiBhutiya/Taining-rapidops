import React from 'react';
import { PersonProp } from './PropTypes';

const Person = ({name}: PersonProp) => {
  return (
    <div>
      <h1>{name.fname} {name.lname}</h1>
    </div>
  )
}

export default Person
