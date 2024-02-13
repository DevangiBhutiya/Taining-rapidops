import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const handleClick = () => {

        setData(id)
  };

  return (
    <div>
      <h1>Data Fetching Component</h1>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Click For id
      </button>
      <p>{posts.title}</p>
      <ul>
        {/* {posts.map((post, index)=> {
        return <li key = {post.id}>{post.title}</li>
})} */}
      </ul>
    </div>
  );
};

export default DataFetching;
