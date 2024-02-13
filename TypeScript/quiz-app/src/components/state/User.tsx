import React, { useState } from "react";

interface UserProp {
  name: string;
  email: string;
  id: number;
}



let nextId: number = 3;
const User = () => {
  const [user, setUser] = useState<UserProp>({
    name: "",   
    email: "",
    id: nextId,
  } as UserProp);

  const [alluser, setAllUser] = useState<UserProp[]>([
    { name: "Devangi", email: "deb@gmail.com", id: 0 },
    { name: "Mahek", email: "Mahek@gmail.com", id: 1 },
    { name: "chintan", email: "chintan@gmail.com", id: 2 },
  ]);

  const [isDisable, setIsDisable] = useState(false);
  const [isEditing, setIsEditing] = useState<{ id: number } | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleAdd = () => {
    if (isEditing !== null) {
      const newData = [...alluser];
      newData[isEditing.id] = { ...user };
      setAllUser(newData);
      setIsEditing(null);
    } else {
      setAllUser([...alluser, { ...user, id: nextId++ }]);
    }
    setUser({ name: "", email: "", id: 0 });
  };
  console.log(alluser);

  const handleDeleteClick = (id: number) => {
    
    const filter = alluser.filter((item) => item.id !== id);
    console.log("filter", filter);
    setAllUser(filter);
    if(isEditing!== null) {
        setUser({ name: "", email: "", id: 0 });
        setIsEditing(null);
    }
  };

  const handleEdit = (id: number) => {
    console.log(alluser[id]);
    setUser(alluser[id]);
    setIsEditing({ id });
  };

  console.log("editing index", isEditing);
  return (
    <div>
      <h2>Demo using Typescript</h2>
      <input
        type="text"
        value={user.name}
        onChange={handleChange}
        name="name"
      /> {" "} 
      <input
        type="text"
        value={user.email}
        onChange={handleChange}
        name="email"
      />
      <button onClick={handleAdd}>
        {isEditing !== null ? "Update" : "ADD"}
      </button>
      {alluser.map((item) => (
        <div key={item.id}>
          <div>
            <p>
              {item.name} {item.email}{" "}
              <button onClick={() => handleDeleteClick(item.id)} disabled={isDisable}>
                Delete
              </button>{" "}
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
