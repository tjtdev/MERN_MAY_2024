import './App.css';
import Form from './components/Form';
import Display from "./components/Display";
import { useState } from 'react';

function App() {

  const [universe, setUniverse] = useState([
    {
      name: "Pluto",
      system: "Solar",
      orbits: 10
    },
    {
      name: "Tatooine",
      system: "Outer Rim",
      orbits: 9001
    }
  ]);

  const addPlanetToState = (expectedObject) => {
    console.log("hello from App.jsx", expectedObject);
    setUniverse([...universe, expectedObject]);
  };

  const sayHi = () => {
    console.log("hello");
  };

  return (
    <>
      <p>Global state: {JSON.stringify(universe)}</p>
      <Form addPlanetToState={addPlanetToState} sayHi={sayHi} />
      <Display universe={universe} />
    </>
  );
}

export default App;
