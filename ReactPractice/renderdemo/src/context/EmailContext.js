import React, { createContext, useReducer } from "react";

export const MaiContext = createContext();
export const MailDispatch = createContext();


const initialState = {
  emailFields: ["email1@example.com"],
};

const reducer = (state, action) => {
   
  switch (action.type) {
    case "STORE_VALUES": {
            console.log("devanig",action.val)
        // console.log(action.type)
        return {
            ...state, 
            emailFields: state.emailFields.map((email, index) =>
            index === action.index ? action.val: email
          ),
        }
    
    }
    case "ADD_EMAIL": {
        return {
            ...state, emailFields: [...state.emailFields, ""]
        }   
    }
  }
};

const EmailContext = ({ children }) => {
  const name = "devangi";
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("devang",state)
  return (
    <div>
      <MaiContext.Provider value={state}>
        <MailDispatch.Provider value={dispatch}>{children}</MailDispatch.Provider>
      </MaiContext.Provider>
    </div>
  );
};

export default EmailContext;
