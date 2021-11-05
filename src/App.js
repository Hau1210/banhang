import { Switch, Router,Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './Components/HomePage/nav';
import Header from './Components/HomePage/Header';

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
