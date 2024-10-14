import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";

function App() {
  return (
    <>
      <nav className="flex justify-around p-4">
        <div>
          <h1>Leaflet React App</h1>
        </div>
        <div className="flex gap-10">
          <div className="hover:bg-white hover:text-black hover:rounded-full transition-all">
            <Link to="/" className="p-3">
              Home
            </Link>
          </div>
          <div className="hover:bg-white hover:text-black hover:rounded-full transition-all">
            <Link to="/map" className="p-3">
              Map
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
