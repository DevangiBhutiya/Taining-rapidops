import React, { useState } from 'react'
import HookMouse from './HookMouse'

const MouseContainer = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <div>
        <button onClick={() => setToggle(!toggle)} di>Toggle Button</button>
        {toggle && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
