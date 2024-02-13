import React from 'react'


interface InputProps {
    value: string;
    changeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, changeEvent}: InputProps) => {
  return (
    <div>
      <input type='text' value={value} onChange={changeEvent}/>
    </div>
  )
}

export default Input
