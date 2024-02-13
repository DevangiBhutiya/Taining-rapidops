import React, { useState, useRef, forwardRef } from 'react'

const CurrentInput = () => {
const [text, setText] = useState("")
const textRef  = useRef(text);
const divRef = useRef(null)
console.log("Div Reference", divRef)

const handleChange = (e) => {
    setText(e.target.value)
    textRef.current = e.target.value;
}

const handleClick = () => {
        setTimeout(() => {
            alert('Sending: ' + textRef.current);
        }, 3000);
}

  return (
    <div>
      <input ref={divRef} name='text' value={text} onChange={handleChange}/>
      <button onClick={handleClick}>Send</button>
      <button onClick={() =>  divRef.current.focus()}>Focus the input</button>
      <MyInput ref={divRef}/>

    </div>
  )
}

export default CurrentInput


const MyInput = forwardRef((props,ref)=> {
        return <input {...props} ref= {ref}/>
})
