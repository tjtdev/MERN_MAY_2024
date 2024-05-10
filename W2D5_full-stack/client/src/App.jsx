import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import ShowOne from './views/ShowOne';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <h2>the cake is a lie 🍰</h2>
      <Navbar />
      <hr />

      {/* ROUTES */}
      <Routes>

        {/* ACT I - Dashboard */}
        <Route path="/" element={<Home />} />

        {/* ACT II - READ ONE */}
        <Route path="/cakes/:id" element={<ShowOne />} />


      </Routes>

    </>
  );
}

export default App;
