import React from 'react'

const Child = () => {
    console.log("Child Rendered")
  return (
    <div>
      <h1>Child component</h1>
    </div>
  )
}

export default React.memo(Child)
