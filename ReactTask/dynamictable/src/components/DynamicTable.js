import React, { useState } from "react";

const ReacthookObj = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] =   (null);
console.log(editingIndex)
  const handleClick = () => {
    if (name.firstname.trim() && name.lastname.trim()) {
      if (editingIndex !== null) {
        const newData = [...data];
        newData[editingIndex] = { ...name };
        setData(newData);
        setEditingIndex(null);
      } else {
        setData([...data, { ...name }]);
      }
      setName({ firstname: "", lastname: "" });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName((prevName) => ({ ...prevName, [name]: value }));
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((item, i) => i !== index);
    setData(updatedData);
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };

  const handleEdit = (index) => {
    setName(data[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <h1>React DynamicTable</h1>
      <p>
        <input
          type="text"
          value={name.firstname}
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
        />{" "}
        <input
          type="text"
          value={name.lastname}
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
        />{" "}
        <button onClick={handleClick}>{editingIndex !== null ? "Update" : "Add Data"}</button>
      </p>

      {data.map((person, index) => (
        <p key={index}>
          <input readOnly value={person.firstname} />{" "}
          <input readOnly value={person.lastname} /> {" "}
          <button onClick={() => handleEdit(index)}>Edit</button> {" "} 
          <button onClick={() => handleDelete(index)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default ReacthookObj;
