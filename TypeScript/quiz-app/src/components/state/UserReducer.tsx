import { useReducer, useState } from "react";

interface User {
  id: number ;
  name: string;
}

interface UserProp {
  alltest: User[];
}

interface UserId {
  payload:number
}
interface ActionProp {
  type: string;
  payload: User 
}

const initialState: UserProp = {
  alltest: [{ id: 1, name: "Devangi" }]
};
let nextId: number = 2
const reducer = (state: UserProp, action: ActionProp) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        alltest: [...state.alltest, action.payload]
      };
    // case "DELETE":
    //   return {
    //     ...state,
    //     alltest: state.alltest.filter((item) => item.id !== action.payload)
    //   };
    case "EDIT":
      console.log("Edit",state)
      return {
        
        ...state,
        alltest: state.alltest.map((item) =>
          item.id === action.payload.id ? { ...item, name: action.payload.name } : item
        )
      };
    default:
      return state;
  }
};


const UserReducer = () => {
  const [test, setTest] = useState<string | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editing, setEditing] = useState<{ id: number } | null>(null);
  console.log(state)

  const handleClick = () => {
    console.log(editing)
    if (editing) {
      dispatch({ type: "EDIT", payload: { id: editing!.id, name: test! } });
      setEditing(null);
    } else {
      const newTest = {
        name: test!,
        id: nextId// Generate unique ID
      };
      dispatch({ type: "ADD", payload: newTest });
    }
    setTest("");
  };

  // const handleDelete = (id: number) => {
  //   dispatch({ type: "DELETE", payload: id });
  // };

  const handleEdit = (id: number) => {
    const itemToEdit = state.alltest.find((item) => item.id === id);
    if (itemToEdit) {
      setTest(itemToEdit.name);
      setEditing({ id });
    }
  };

  return (
    <div className="App">
      <h1>Demo</h1>
      <input
      placeholder="Enter Your Name"
        type="text"
        name="test"
        value={test || ""}
        onChange={(e) => setTest(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleClick}>{editing ? "Edit" : "Add"}</button>
      {state.alltest.map((item) => (
        <p key={item.id}>
          {item.id}: {item.name}
          {/* <button onClick={() => handleDelete(item.id)}>Delete</button>  */}
          <button onClick={() => handleEdit(item.id)}>Edit</button>
        </p>
      ))}
    </div>
  );
};

export default UserReducer;
