import React, { createContext, useState, useEffect } from 'react'

export const NameContext  = createContext(null)
const UserContext = ({children}) => {

const [user, setUser] = useState({
    name: "",
    password: "",
})
// const[isLogin, setIsLogin] = useState(false)


const [isLogin, setIsLogin] = useState(() => {
  const storedIsLogin = localStorage.getItem('isLogin');
  return storedIsLogin ? JSON.parse(storedIsLogin) : false;
});

// useEffect(() => {


console.log("COntex",isLogin)
  return (
    <div>
      <NameContext.Provider value={{user,setUser, isLogin, setIsLogin}}>
        {children}
      </NameContext.Provider>
    </div>
  )
}

export default UserContext
