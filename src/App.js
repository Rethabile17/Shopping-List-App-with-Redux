import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import AddItem from './additem';
import ItemToDo from './itemtodo';
import Registration from './components/registration'
import Login from './components/Login';
import Home from './Home';



function App() {

  const [item, setItem] = useState([]) ;

  return (
    <div className="App">   
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/registration" element={<Registration />} />
    <Route path="/home" element={<Home />} />
  </Routes>

    </div>
  

  );
}

export default App;
