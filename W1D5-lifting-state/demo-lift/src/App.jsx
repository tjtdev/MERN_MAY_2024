import { useState } from 'react';
import './App.css';
import ClickCount from './components/ClickCount';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Lifting state 🏋️</h2>
      <p>count is {count}</p>
      <button onClick={() => setCount(count + 1)}>update count</button> <br />
      <ClickCount setCount={setCount} />
    </>
  );
}

export default App;
