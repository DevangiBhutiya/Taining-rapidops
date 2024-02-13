import React from 'react'

interface ButtonProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = ({handleClick}: ButtonProps) => {
  return (
    <div>
      <button onClick ={(event)=> handleClick(event,3)}> Click Me</button>
    </div>
  )
}

export default Button
