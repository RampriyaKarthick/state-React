import logo from './logo.svg';
import './App.css';

//this is ES module syntax
import {useState} from "react";
import {nanoid} from "nanoid";



function App() {
  const [isTurnedOn, setIsTurnedOn] = useState(false); //can be isToggledOn

  const[count, setCount] =useState(0);

  const[names, setNames] =useState([{name:"Shaun" , id: nanoid() }]);

  const [possibleNames,setPossibleNames] = useState([
    "Olga", 
    "Wiebke", 
    "Lena", 
    "Mauri", 
    "Yo Jia",
    "Shaun"
  ]); 

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
      if(possibleNames.length === 0) {
        console.log("No more names to add");
        return;
      }
    const newNameIndex =Math.floor(Math.random() * possibleNames.length);
    const newName = possibleNames[newNameIndex];
    

    const possibleNamesCopy=[...possibleNames];
    possibleNamesCopy.splice(newNameIndex, 1);
    console.log(possibleNamesCopy);
    setPossibleNames(possibleNamesCopy)

    setNames([...names,  {name:newName, id:nanoid()}]);
    }
   // <button onClick = {addNames}> Names </button> 

  const deleteHandler =(idToDelete) => {
  console.log("We want to delete", idToDelete);
  setNames(names.filter(({id})=> id !== idToDelete));

  //setNames(names.filter((e)=> e.id !== idToDelete));
  //setNames(names.filter((name)=> name.id !== idToDelete));
  //setNames(names.filter((pizza))=> pizza.id !== idToDelete));

  /*const byId =(pizza) =>pizza.id !==midToDelete;
  setNames(names.filter(byId));
*/

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
          {names.map(({id, name}) => {     //Destructuring
            return <li key={id}>
            <p>{name}
            <button onClick={() =>{
               // console.log("we want to delete something");
                deleteHandler(id);
              }}>
             
             Remove
              
            </button></p> </li>
          })}
        </ul>
      

      {/*  <ul>
          {names.map((nameObject) => {
            return <li key={nameObject.id}>{nameObject.name} </li>
          })}
        </ul> */}

        <button onClick = {addNames} >Add  Names </button> 


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
