import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import ClockFun from './components/ClockFun';

function App() {
  return (
    <div className="App">
      {/* clock using class com ponents */}
      <Clock/> 
      {/* clock using functional components */}
      {/* <ClockFun/> */}
    </div>
  );
}

export default App;
