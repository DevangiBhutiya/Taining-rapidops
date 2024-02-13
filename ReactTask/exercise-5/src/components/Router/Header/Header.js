import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NameContext } from "../../../context/UserContext";
import Logout from "../Logout/Logout";
import CryptoJS from "crypto-js";
export default function Header() {
  const { setIsLogin, isLogin, user, setUser } = useContext(NameContext);
  console.log(user.password);
  const navigate = useNavigate()

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const encryptedPasssword = localStorage.getItem("password");
    if (encryptedPasssword) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedPasssword, "secret key");
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (storedName && decryptedPassword===user.password) {
          setUser({
            ...user,
            name: storedName,
            password: decryptedPassword,
          });
          setIsLogin(true);
        }
      } catch (error) {
        console.error("Error decrypting password:", error);
      }
    } else {
      navigate('/login')
    }
  }, []);
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1995101405/display_1500/stock-vector-arrow-right-on-target-logo-design-1995101405.jpg"
              className="mr-3 h-20"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {isLogin ? (
              <Link
                to="/"
                className="text-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                {/* {user.name} */}
                {localStorage.getItem("name")}
              </Link>
            ) : (
              <Link
                to="login"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
            )}
            <Link
              to="#"
              className="text-white bg-yellow-700 hover:text-black bg-orange-200 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>

            {isLogin && <Logout />}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/github/${localStorage.getItem('name')}`}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>

              {isLogin && (
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
