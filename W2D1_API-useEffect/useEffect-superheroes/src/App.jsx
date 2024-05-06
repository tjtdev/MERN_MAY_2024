import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  //               function to change state
  //      state var      |
  //         V           V
  const [heroes, setHeroes] = useState([]);

  // ! useEffect will only trigger AFTER the component as FINISHED rendering

  useEffect(() => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => {
        // ! AXIOS wraps the response inside the .data key
        // console.log(res.data);
        setHeroes(res.data);
      })
      .catch((errObj) => {
        console.log("❌❌❌", errObj);
      });
  }, []);


  return (
    <>
      <h3>SuperHeroes 🦸🦸‍♂️</h3>
      {/* <button onClick={getHeroes}>click and get all the heroes</button> */}
      <hr />
      {/* {JSON.stringify(heroes)} */}

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>

        <tbody>
          {
            heroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.md} alt={hero.name} loading='lazy' width="100" />
                  </td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              );
            })
          }



        </tbody>
      </table>
    </>
  );
}

export default App;
