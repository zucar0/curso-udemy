// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [valor, setValor] = useState(0);
  const handlerNumber =()=>{
    
  }
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  });

  return (
    <div  class="container mx-auto" >
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Click me
      </button>
      <hr></hr> 
      <h1>Varias formas de usar useState</h1>
      <Button setValor={setValor}/>
      <h2>{valor}</h2>
      <hr></hr> 
      <button onClick={handlerNumber}>Botón 2</button>
    </div>
  );
}

export default App;
