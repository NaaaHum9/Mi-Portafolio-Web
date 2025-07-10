import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

import Landing from "./pages/Landing";
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contacts from './pages/Contacts';

function App() {
  return(
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </>
  );
}

export default App;