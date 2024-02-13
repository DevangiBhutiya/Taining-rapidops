import React, { useEffect, useRef } from 'react'


const FocusInput = () => {
    const inputRef = useRef(null)
    useEffect(()=> {
        // Focus the input element
        inputRef.current.focus()
    },[])
    
  return (
    <div>
        <h1>Focus the input using useReference hook</h1>
        <input ref={inputRef} type='text'/>
    </div>
  )
}

export default FocusInput
