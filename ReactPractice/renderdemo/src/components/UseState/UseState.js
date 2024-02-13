import React, { useContext, useState } from "react";
import { UsContext, UsDispatchContext } from "../../context/UserContext";

let nextId = 3;
const UseState = () => {
  const [count, setCount] = useState(0);
  const user = useContext(UsContext);
  const dispatch = useContext(UsDispatchContext);
  const [firstname, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <input
        type="text"
        name="firstname"
        value={firstname}
        onChange={(e) => setText(e.target.value)}
      ></input> {" "}
      <button
        onClick={() =>
          dispatch({ type: "added", id: nextId++, firstname: firstname })
        }
      >
        ADD
      </button>
      
      {user.map((item) => (
        <p key={item.id}>
          {item.firstname} 
          <button onClick={() => dispatch({type: "edited", id: item.id})}>Edit</button>
          <button onClick={() => dispatch({ type: "deleted", id: item.id })}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default UseState;
