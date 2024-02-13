import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NameContext } from "../../../context/UserContext";
// import { useNavigate } from "@reach/router";

const Logout = () => {
    const navigate = useNavigate()
   const {user,setUser, isLogin, setIsLogin} =  useContext(NameContext)
  const handleClick = () => {
    // localStorage.setItem('isLogin', JSON.stringify(false));
    localStorage.removeItem("isLogin");
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    setUser({
      ...user, name: "", password: ""
  })
    setIsLogin(false)
    navigate("/logout")
  };
  return (
    <Link
      onClick={handleClick}
      to="/logout"
      className="text-white bg-yellow-700 hover:text-black bg-orange-200 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
    >
      Log out
    </Link>
  );
};

export default Logout;
