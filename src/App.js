import './App.css';
import Navbar from "./components/Navbars"
import Hero from "./components/Herosection"
import Highlight from "./components/Highlights"
import Foot from "./components/Footer"
import Booking from "./components/Booking"
import About from "./components/About"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="reservation" element={<Booking/>}/>
        <Route path="/" element={<Highlight />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;

