//import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom' ;
import Navbar from "../src/Components/Navbar/Navbar"
import Allroutes from './Allroutes';
//import Home from "../src/Pages/Home/Home"


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Allroutes />
        
        
      </Router >
      
      
    </div>
  );
}

export default App;
