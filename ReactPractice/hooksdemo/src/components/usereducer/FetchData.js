// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const FetchData = () => {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")
//   const [post, setPost] = useState({})


//   useEffect(()=> {
//       axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
//       .then((res)=>{
//         console.log(res.data)
//         setLoading(false)
//         setPost(res.data)
//       })
//       .catch((error)=> {
//         setLoading(false)
//         setError(error)
//       })
//   },[])

//   return (
//     <div>
//       <h1>Fetching Data with reducer</h1>
//       {loading ? (
//         <div>Loading</div>
//       ) : post.title }
//     </div>
//   )
// }

// export default FetchData




import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  post: {},
  loading: true,
  error: ""
}

const reducer = (state, action) => {
    switch(action.type) {
      case "FETCH_SUCCESS":
        return {
          post: action.payload,
          loading: false,
          error: ""
        }
        case "FETCH_ERROR":
          return {
            post: {},
            loading: false,
            error: "Somethig went wrong!"
          }
        default :
          return state
    }
}

const DataFetching = () => {
 
  useEffect(()=> {
      axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res)=>{
        setTimeout(()=> {
          dispatch({type: "FETCH_SUCCESS" ,payload: res.data })
        },5000)
        // console.log(res.data)
        
      })
      .catch((error)=> {
        dispatch({type: "FETCH_ERROR"})
      })
  },[])

const [data, dispatch] = useReducer(reducer, initialState) 
  return (
    <div>
      <h1>Data Fetching using useReducer hook</h1>
      {data.loading ? "LOADING" : data.post.title}
      {data.error ? data.error : null}
    </div>
  )
}

export default DataFetching


