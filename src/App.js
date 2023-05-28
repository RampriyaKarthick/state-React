import logo from './logo.svg';
import './App.css';

//this is ES module syntax
import {useState} from "react";
import {nanoid} from "react";

function App() {
  const [isTurnedOn, setIsTurnedOn] = useState(false); //can be isToggledOn

  const[count, setCount] =useState(0);

  const[names, setNames] =useState([name:"Shaun" , id=""]);

  //this is the bad way to do it
  //let isTurnedOn=true;

  const toggleLogo = () => {
   // isTurnedOn = !isTurnedOn;
   setIsTurnedOn(!isTurnedOn);
  };

  const increaseCount =() => {

    setCount(count + 1);

  };

  const decreaseCount =() => {

    setCount(count - 1);

  };

    const addNames =() => {  
    const newName ="Shaun";
    setNames([...names,  newName]);
    }
   // <button onClick = {addNames}> Names </button> 

   const deleteHandler =(id) => {
    console.log("We want to delete", idToDelete);
   }

  return (
    <div className="App">
      <header className="App-header">
       {isTurnedOn ? <img src={logo} className="App-logo" alt="logo" /> : null}
       <button onClick={toggleLogo}>Toggle</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{count}</p>
        <button onClick = {increaseCount}> + </button>
        <button onClick = {decreaseCount}> - </button>
      

        <ul>
          {names.map((name) => {
            return <li key={index}>{name} </li>
          })}
        </ul>

        <button onClick = {addNames}>Add  Names </button> 


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
