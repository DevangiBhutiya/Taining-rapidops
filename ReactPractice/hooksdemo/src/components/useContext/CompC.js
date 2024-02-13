import React, { useContext } from 'react'
import { UserContext } from '../../App'

const CompC = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>This is Component C</h1>
      <p>{user}</p>
    </div>
  )
}

export default CompC
