import React, { useContext } from "react";
import EmailContext, {
  MaiContext,
  MailDispatch,
} from "../../context/EmailContext";

const ValidateForm = () => {
  const state = useContext(MaiContext);
  const dispatch = useContext(MailDispatch);

  const handleChange = (index, val) => {
    // console.log(e,target.vale)

    dispatch({ type: "STORE_VALUES", index, val });
  };

  const handleAddEmail = () => {
    dispatch({type: "ADD_EMAIL"})
  }
  const handleRemoveEmail = (index) => {
    dispatch({ type: "REMOVE_EMAIL", index });
  };
  return (
    <div>
      {state.emailFields.map((item, index) => (
        <div key={index}>
          <input type="text"  value={item} onChange={(e) => handleChange(index, e.target.value)} />
          <button onClick={() => handleRemoveEmail(index)}>Remove</button>

        </div>
      ))}
    <button onClick={handleAddEmail}>Add Email</button>

    </div>
  );
};

export default ValidateForm;
