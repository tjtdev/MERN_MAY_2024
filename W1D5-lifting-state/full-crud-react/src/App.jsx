import './App.css';
import { useState } from 'react';
import House from './components/House';
import Form from './components/Form';

function App() {

  const [houses, setHouses] = useState([
    {
      address: "123 Fake str.",
      color: "lightblue",
      hasPool: true
    },
    {
      address: "443 N. Ave",
      color: "lightgreen",
      hasPool: false
    },
  ]);

  // add house to state
  const addHouseToState = (newHouseObject) => {
    setHouses([...houses, newHouseObject]);
  };

  // delete house
  const removeHouse = (deleteIndex) => {
    // console.log("delete from app", deleteIndex);

    const filteredHouses = houses.filter((_, idx) => {
      return idx !== deleteIndex;
    });
    setHouses(filteredHouses);
  };

  // change pool status
  const changePoolStatus = (checkboxIndex) => {
    // console.log(houses[checkboxIndex].hasPool); //true / false
    const copyHouses = [...houses];
    copyHouses[checkboxIndex].hasPool = !copyHouses[checkboxIndex].hasPool;
    setHouses(copyHouses);
  };

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h3>full-crud ⚛️</h3>
      <p>{JSON.stringify(houses)}</p>

      {/* FORM */}
      <Form addHouseToState={addHouseToState} />

      {/* DISPLAY HOUSES */}
      {
        houses.map((house, idx) => {
          return <House
            house={house}
            key={idx}
            index={idx}
            removeHouse={removeHouse}
            changePoolStatus={changePoolStatus}
          />;
        })
      }
    </fieldset>
  );
}

export default App;
