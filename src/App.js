import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import AddApartment from './pages/AddApartment';
import ApartmentDetails from './pages/ApartmentDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="apartments" element={<Apartments />} />
          <Route path="apartments/:id" element={<ApartmentDetails />} />
          <Route path="addaparment" element={<AddApartment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
