import "./App.css";
import Parent from "./components/ParentChild/Parent";
import UseState from "./components/UseState/UseState";
import UserInfo from "./components/useReducerUseContext/UserInfo";
import ValidateForm from "./components/validate/ValidateForm";
import EmailContext from "./context/EmailContext";
import ReducerContext from "./context/ReducerContext";
import UserContext from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <h1>Render Demo </h1>
      {/* <UserContext> */}
        {/* <UseState/> */}
        {/* <Parent /> */}
      {/* </UserContext> */}

      {/* <ReducerContext>
        <UserInfo/>
      </ReducerContext> */}
      <EmailContext>
        <ValidateForm/>
      </EmailContext>
    </div>
  );
}

export default App;
