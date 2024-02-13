import React, { useState } from "react";

const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];
let next = 3;

const EditDelete = () => {
  const [item, setItems] = useState(initialItems);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(item.packed);
  const [selected, setSelected] = useState([]);

  const handleClick = () => {
    setItems([...item, { id: next++, title: title, packed: value }]);
    setTitle(" ")
  };

  const handleCheck = (id) => {
    setItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
  );
  };

  const handleDelete = (id) => {
        console.log(id)
    let filter = item.filter((item,index) => id!== item.id)
    setItems(filter)
  };

  const total = item.length;
  const packed = item.filter((item) => item.packed).length;

  console.log(item);
  return (
    <div>
      <h1>Paking list</h1>
      <input
        name="item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>Add item</button>
      <ul>
        {item.map((item, index) => (
          <p key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handleCheck(item.id)}
            />
            {item.title} 
            <button onClick={() =>handleDelete(item.id)}>Delete</button>
          </p>
        ))}
      </ul>
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </div>
  );
};

export default EditDelete;
