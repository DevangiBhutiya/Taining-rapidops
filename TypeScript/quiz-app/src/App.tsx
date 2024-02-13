import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import UseState from "./components/state/UseState";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import DemoComp from "./components/DemoComp";
import UserReducer from "./components/state/UserReducer";
import UseRef from "./components/state/UseRef";
import Header from "./components/neogexercise/Header";
  import Quiz from "./components/neogexercise/Quiz";
  import { quizData } from "./components/neogexercise/quizData";
  import Score from "./components/neogexercise/Score";
import { MyContext } from "./context/MyContext";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleClickButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log("click me", event, id);
  };

    // const handleOptionClick = (index: number) => {
    //   console.log(index);
    // };

    const x: Number = new Number(10)
    console.log(x.valueOf())

  return (
    <MyContext>
  <div className="App">
      {/* <h1>TypeScript</h1> */}
      {/* <Greet name="Devangi" messageCount={10} i sLoggedin={true} />
      <Person name={personName} />
      <PersonList names = {nameList} /> */}
      {/* <Status status="success"/>
      <Heading>This is My children text </Heading>
      <Oscar>
        <Heading>Oscar goes to someone else </Heading>
      </Oscar>
      <Input changeEvent={(event) => console.log(event.target.value)} value=""/>
      <Button handleClick = {handleClickButtonClick} /> */}
      {/* <DemoComp/> */}

      {/* <UseState/> */}
      {/* <User/> */}
      {/* <Counter/> */}
      {/* <UserReducer/> */}
      {/* <UseRef/> */}

      {/* Neog Exercise using typscript */}
      <Header title= "My cart"/>
      {/* <Quiz quiz={quizData} onclick={handleClick} /> */}
      {/* <Score currentScore={10} totalScore={100} /> */}
    </div>
    </MyContext>
  
  );
}

export default App;
