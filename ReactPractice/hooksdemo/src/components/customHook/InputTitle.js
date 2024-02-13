import React from 'react';
import useInput from './useInput';

const InputTitle = () => {
  const { value, reset, bind } = useInput({ firstname: '', lastname: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${value.firstname} ${value.lastname}`);
    reset();
  };

  return (
    <div>
      <h1>Input using Custom Hook</h1>
      <h2>
        {/* {value.firstname} {value.lastname} */}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>FirstName</label> <input type="text" name="firstname" {...bind} /> <br /> <br />
        <label>LastName</label>
        <input type="text" name="lastname" {...bind} /><br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTitle;
