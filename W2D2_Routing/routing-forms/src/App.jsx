import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Cool from './views/Cool';
import Hero from './views/Hero';
import Form from './views/Form';
import ErrorPage from './views/ErrorPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <h3>Routing</h3>
      <Navbar />

      {/* Theater stage */}
      <Routes>

        {/* ACT I : default redirect */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* ACT II - HOME */}
        <Route path="/home" element={<Home />} />

        {/* ACT III - COOL page */}
        <Route path="/cool" element={<Cool x={3} />} />

        {/* ACT IV - hero */}
        {/*localhost:5173/hero/asjkdjkasdjhs */}
        <Route path="/hero/:heroId" element={<Hero />} />

        {/* ACT V - wildcard - catch all */}
        <Route path="*" element={<h3>not found</h3>} />

        {/* ACT VI - FORM */}
        <Route path='/form' element={<Form />} />

        {/* ACT VII - Error page */}
        <Route path='/error' element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
