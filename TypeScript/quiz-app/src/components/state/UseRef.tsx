import React,{useEffect, useRef, useState,useCallback} from "react";

// const UseRef = () => {
    // const inputRef = useRef<HTMLInputElement >(null);
    // const [text, setText] = useState("Some text ...");
  
    // useEffect(() => {
    //   // const handleClick = () => {
    //   // setCount(count + 1);
    //   const width = inputRef.current?.getBoundingClientRect().width;
    //   if (width) {
    //     document.title= `${width}`;
    //   }
    //   // console.log(inputRef.current);
    //   // };
    // },[text]);
  

//Also we can achieve same functinality using callback ref or usecallback

//     const inputRef = useCallback((node:HTMLElement) => {
//         if (!node) return;
    
//         const { width } = node.getBoundingClientRect();
        
//         document.title = `Width:${width}`;

//         if(width>=150) {
//             node.style.color = "red"
//         } else {
//             node.style.color = "blue"
//         }
//       }, [text]);
//     const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//       setText(event.target.value);
//     };
//   console.log("REnder")
//     return (
//       <div>
//         <input type="text" value={text} onChange={handleOnChange} />
//         <span ref={inputRef}>{text}</span>
//       </div>
//     );
//   };
  
//   export default UseRef;


const UseRef = () => {

    interface CounterProp {
        increment: number,
        decrement: number
    }

    const ref = useRef<CounterProp>({
        increment: 0,
        decrement: 0
    })
    const [count, setCount] = useState<number>(0)

    const handleIncrement = () => {
        ref.current.increment++
        setCount(count +1)
    }

    const handleDecrement = () => {
        ref.current.decrement++
        setCount(count -1)
    }
  return (
    <div>
        <h1>useref</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <div>Count: {count}</div>
      <div>Buttons {ref.current.increment + ref.current.decrement} times clicked</div>
      <div>Increment: {ref.current.increment}</div>
      <div>Decrement: {ref.current.decrement}</div>
    </div>
  )
}

export default UseRef
