import React, { createContext, useReducer } from "react";

export const UserInfoContext = createContext(null);

export const UserInfoDispatchContext = createContext();

const initialvalue = {
  firstName: "",
  lastName: "",
  email: "devangibhutiya@gmail.com",
  isFirstNameValid: false,
  isLastNameValid: false,
  isEmailValid: false,
};

const reducer = (user, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...user,
        [action.name]: action.value,
      };

    case "SAVE_INFO" :
      return {
        ...user
      }

    case "VALIDATE_FORM" :
      return {
        ...user, isFirstNameValid: user.firstName.trim()!==""
      }


    default:
      return user;
  }
};

const ReducerContext = ({ children }) => {
  const name = "devangi";

  const [user, dispatch] = useReducer(reducer, initialvalue);

  return (
    <div>
      <UserInfoContext.Provider value={user}>
        <UserInfoDispatchContext.Provider value={dispatch}>
          {children}
        </UserInfoDispatchContext.Provider>
      </UserInfoContext.Provider>
    </div>
  );
};

export default ReducerContext;
