import React, { useContext, useState } from "react";
import { UserInfoContext, UserInfoDispatchContext } from "../../context/ReducerContext";

const UserInfo = () => {
  const user = useContext(UserInfoContext);
  const dispatch = useContext(UserInfoDispatchContext)
  const [showInfo, setShowInfo] = useState(false)
const {firstName, lastName, isFirstNameValid, email, isLastNameValid, isEmailValid} = user
console.log(firstName, lastName)


    const handleChange = (e) => {
          console.log(e.target.value)
          const {name, value} = e.target
          dispatch({type: "UPDATE_FIELD", name, value})
    }

  const handleClick = () => {
    // dispatch({type: "SAVE_INFO"})  
    setShowInfo(true)
  }
  

return (
    <div>
      <h1>User validation demo</h1>
      <label> First Name:</label>
      <input type="text" name="firstName" value={firstName} onChange={handleChange}/>
      <label> Last Name:</label>
      <input type="text" name="lastName" value={lastName} onChange={handleChange}/>
      <button onClick={handleClick}>Save me</button>
      {showInfo && <p>{firstName} {lastName}</p>}
    </div>
  );
};

export default UserInfo;
