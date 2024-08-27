
import './App.css';
import { useState } from 'react';
import AddItem from './additem';
import ItemToDo from './itemtodo';


function App() {

  const [item, setItem] = useState([]) ;

  return (
    <div className="App">

  <AddItem/>
  <ItemToDo item={item}/>
  
    </div>
  );
}

export default App;
