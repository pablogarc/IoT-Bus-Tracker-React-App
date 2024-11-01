import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Cashback from "./pages/Cashback/Cashback"; // Asegúrate de que la ruta sea correcta
import Security from "./pages/Security/Security"; // Asegúrate de que la ruta sea correcta


function App() {
  return (
    <>
      <nav className="flex justify-around p-4">
        <div>
          <h1>IoT-Bus-Tracker-React-App</h1>
        </div>
        <div className="flex gap-10">
          <div className="hover:bg-white hover:text-black hover:rounded-full transition-all">
            <Link to="/" className="p-3">Home</Link>
          </div>
          <div className="hover:bg-white hover:text-black hover:rounded-full transition-all">
            <Link to="/map" className="p-3">Map</Link>
          </div>
          <div className="hover:bg-white hover:text-black hover:rounded-full transition-all">
            <Link to="/cashback" className="p-3">Cashback</Link>
          </div>
          <div className="hover:bg-white hover:text-black hover:rounded-full transition-all">
            <Link to="/security" className="p-3">Seguridad</Link>
          </div>
        </div>
      </nav>


      <Routes>
        <Route index element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </>
  );
}

export default App;
