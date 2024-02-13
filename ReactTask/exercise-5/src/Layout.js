    import React from 'react'
import Header from './components/Router/Header/Header'
import Footer from './components/Router/Footer/Footer'
import { Outlet } from 'react-router-dom'
     
    const Layout = () => {
      return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
      )
    }
    
    export default Layout
    