  // App.js
  import React, { useContext,useEffect } from "react";
  import {
    Navigate,
    BrowserRouter as Router,
    RouterProvider,
    Routes,
  } from "react-router-dom";
  import Layout from "./Layout";
  // import Layout from '../Layout';  
  import Home from "./components/Router/Home/Home";
  import About from "./components/Router/About/About";
  import Contact from "./components/Router/Contact/Contact";
  import Login from "./components/Router/Login/Login";
  import User from "./components/Router/User/User";
  import Github, { githubLoader } from "./components/Router/Github/Github";
  import {
    createBrowserRouter,  
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import { NameContext } from "./context/UserContext";
  import ProtectedRoute from "./rout/ProtectedRoute";
  import Error from "./components/Router/Error/Error";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="about" element={<About />} />
          <Route path="github" element={<Error/>} />
          <Route
            loader={githubLoader}
            path="github/:githubname"
            element={<Github />}
          />
        </Route>
        <Route path="contact-us" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="error" element={<Error/>} />
        <Route path="*" element={<Error/>} />
      </Route>
    )
  );
  

  function App() {
    const {user,setUser,setIsLogin} = useContext(NameContext)

    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  }

  export default App;
