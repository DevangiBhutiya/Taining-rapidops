import React from 'react'


interface GreetProps {
    name: string
    messageCount: number
    isLoggedin: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Welcome {props.name} and You have {props.messageCount} Messages!</h1>
    </div>
  )
}

export default Greet
