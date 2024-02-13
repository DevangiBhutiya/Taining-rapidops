import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState("");
  console.log(value);

  const reset = () => {
    setValue({ ...initialValue });
  };

  const bind = {
    value,
    onChange: (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    },
  };

  return [value, bind, reset];
};

export default useInput;
