import logo from "./logo.svg";
import "./App.css";
import UseEffectDemo from "./components/useeffect/UseEffectDemo";
import HookMouse from "./components/useeffect/HookMouse";
import MouseContainer from "./components/useeffect/MouseContainer";
import DataFetching from "./components/useeffect/DataFetching";
import RedundantState from "./components/usestate/RedundantState";
import EditDelete from "./components/usestate/EditDelete";
import MultipleSelection from "./components/usestate/MultipleSelection";
import Accordion from "./components/usestate/Accordion";
import { createContext, useState } from "react";
import CompA from "./components/useContext/CompA";
import CompC from "./components/useContext/CompC";
import Counter from "./components/usereducer/Counter";
import CounterTwo from "./components/usereducer/CounterTwo";
import CompB from "./components/useContext/CompB";
import FetchData from "./components/usereducer/FetchData";
import ParentComponent from "./components/useCallback/ParentComponent";
import CounterMemo from "./components/useMemo/CounterMemo";
import FocusInput from "./components/useRef/FocusInput";
import HookTimer from "./components/useRef/HookTimer";
import DocTitle from "./components/customHook/DocTitle";
import InputTitle from "./components/customHook/InputTitle";
import CounterDemo from "./components/useRef/CounterDemo";
import CurrentInput from "./components/useRef/CurrentInput";
import DemoEffect from "./components/useeffect/DemoEffect";
import DemoState from "./components/usestate/DemoState";

export const UserContext = createContext();

function App() {
  const [firstName, setFirstName] = useState("Devangi");

  return (
    <div className="App">
        {/* <DemoEffect/> */}
      {/* UseEffect hook */}
      {/* <UseEffectDemo/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <DataFetching/> */}

      {/* Usestate hook */}
      <DemoState/>
      {/* <RedundantState/>   */}
      {/* <EditDelete/> */}
      {/* <MultipleSelection/> */}
      {/* <Accordion/> */}
      {/* <CompA name = {firstName}/> */}

      {/* usecontext hook */}
      {/* <UserContext.Provider value={firstName}>
      <CompC/>
     </UserContext.Provider> */}

      {/* useReducer */}
      {/* <Counter/> */}
      {/* <CounterTwo/> */}

      {/* useReduccer + useContext */}

      {/* <CompA/>
     <CompB/> */}

      {/* Data fetching with reducer function */}
      {/* <FetchData/> */}

      {/* UseCallBack hook */}
      {/* <ParentComponent/> */}

      {/* UseMemo hook */}
      {/* <CounterMemo/>  */}

      {/* UseReference hook */}
      {/* <FocusInput/> */}
      {/* <HookTimer/> */}
      {/* <CounterDemo /> */}
      {/* <CurrentInput/> */}
      {/* Custom Hook*/}
      {/* <DocTitle/> */}
      {/* <InputTitle/> */}
    </div>
  );
}

export default App;
