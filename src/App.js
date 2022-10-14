import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Route,
} from "react-router-dom";
import Home from "./component/Home/Home";
import AppRoutes from './Routes/AppRoute';
function App() {
  return (
    <>
       <AppRoutes/>
    </>
  );
}

export default App;
