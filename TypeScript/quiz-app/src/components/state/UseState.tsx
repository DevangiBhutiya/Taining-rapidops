import React, { useState } from 'react'

const UseState = () => {

    const [isLoggedin , setIsLoggedIn] = useState(false)

    const handleLogin = () => {
            setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedin ? "logged in Succesfull" : "Logged Out"}</div>
    </div>
  )
}

export default UseState
