import logo from './logo.svg';
import './App.css';
import Feature from './components/Feature';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Feature />}>
      <Route path="/feature1"  element = {<Feature/>}/>
      <Route path="/feature2"  element = {<Feature/>}/>
      <Route path="/feature3"  element = {<Feature/>} />
      </Route>
  )
)
function App() {

  return (
<RouterProvider router={routes}/>
    );
}

export default App;
