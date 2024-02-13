import React, { createContext, useReducer, useState } from "react";

export const UsContext = createContext();
export const UsDispatchContext = createContext();

const initialTasks = [
    { id: 0, firstname: 'Philosopher’s Path', done: true },
    { id: 1, firstname: 'Visit the temple', done: false },
    { id: 2, firstname: 'Drink matcha', done: false }
  ];
const reducer = (user, action) => {

  switch (action.type) {
    case "added": {
        return [...user, {
            id: action.id,
            firstname: action.firstname,
            done: false
        }]
    } 
    case 'edited': {
        return action.id
    }
    
    case "deleted": {
        return user.filter((t)=> t.id!==action.id)
    }
    
    default: {
        throw Error('Unknown action: ' + action.type);
      }

  }
};

const UserContext = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, initialTasks);
  return (
    <div>
      <UsContext.Provider value={user}>
        <UsDispatchContext.Provider value={dispatch}>{children}</UsDispatchContext.Provider>
      </UsContext.Provider>
    </div>
  );
};

export default UserContext;
