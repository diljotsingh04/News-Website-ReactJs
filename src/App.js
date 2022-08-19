import Navbar from "./components/Navbar";
import Card from "./components/Card";
import About from "./Pages/About";
import { Contact } from "./Pages/Contact";
import Rating from "./Pages/Rating";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>

      <Navbar/>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/rating' element={<Rating />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
