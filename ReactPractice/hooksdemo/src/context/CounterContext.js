import React, { createContext, useReducer } from "react";
import CompA from "../components/useContext/CompA";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};

export const countContext = createContext();

const CounterContext = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
<countContext.Provider value={{ count, dispatch }}>
       
      {children}
    </countContext.Provider>
    </div>
    
  );
};

export default CounterContext;
