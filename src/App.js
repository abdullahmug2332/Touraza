import './App.css';
import Home from './homepage/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './aboutpage/About';
import Destinations from './destinationspage/Destinations';
import Booking from './bookingpage/Booking';
import ViewStatus from './viewstatuspage/Viewstatus'; 
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Destinations' element={<Destinations />} />
          <Route path='/booking' element={<Booking />} /> 
          <Route path='/view-status' element={<ViewStatus />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
