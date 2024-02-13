
import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'
import useCounter from './useCounter'

const DocTitle = () => {
    const [count, handleClick] = useCounter()
   
    useDocumentTitle(count)

  return (
    <div>
        <h1>DocTitle-{count}</h1>
      <button onClick={handleClick}>click the change to title</button>
    </div>
  )
}

export default DocTitle
