import React from 'react'
import { Name } from './PropTypes'
interface Personlist {
    names: Name[]
}

const PersonList = ({names}: Personlist) => {
    console.log(names)

  return (
    <div>
      {names.map((name)=> (
        <h2>{name.fname} {name.lname}</h2>
      ))}
    </div>
  )
}

export default PersonList
