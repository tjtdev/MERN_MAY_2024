import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import ShowOne from './views/ShowOne';
import Navbar from './components/Navbar';
import Form from './views/Form';
import Update from './views/Update';

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

        {/* ACT III - CREATE */}
        <Route path="/cakes/create" element={<Form />} />

        {/* ACT IV - UPDATE*/}
        <Route path="/cakes/:id/update" element={<Update />} />

      </Routes>

    </>
  );
}

export default App;
