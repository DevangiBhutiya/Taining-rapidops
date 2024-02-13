import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  //1--->Here we can pass empty arrray dependancy that will tell react to run its only on initial render not every re-render

  //2--> after we can pass the return function to cleanup if component is unmount from the dom then it will not called the effect  
  useEffect(() => {
    console.log("Useeffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouse;
