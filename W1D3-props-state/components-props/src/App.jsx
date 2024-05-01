import './App.css';
import Header from "./components/Header";
import ColorComponent from './components/ColorComponent';
import Events from './components/Events';

function App() {

  const color1 = "red";
  const color2 = "green";
  const color3 = "blue";

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Header title={"welcome"} />

      <Events />
      <ul>
        <li>{color1}</li>
        <li>{color2}</li>
        <li>{color3}</li>
      </ul>
      🎈🎈🎈🎈🎈🎈
      <ColorComponent color={color1} />
      <ColorComponent color={color2} />
      <ColorComponent color={color3} />

    </fieldset>
  );
}

export default App;
