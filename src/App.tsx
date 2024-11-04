import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Cashback from "./pages/Cashback/Cashback";
import Security from "./pages/Security/Security";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ReloadCard from "./pages/ReloadCard/ReloadCard";
import { HomeIcon, MapIcon, CurrencyDollarIcon, ExclamationTriangleIcon, UserIcon, BoltIcon } from '@heroicons/react/24/solid';

function App() {
  return (
    <>
      {/* Barra de Navegación */}
      <nav className="flex justify-around p-4 bg-gray-800 text-white">
        <div>
          <h1 className="text-xl font-bold">IoT-Bus-Tracker-React-App</h1>
        </div>
        <div className="flex gap-10">
          {/* Home */}
          <div className="flex items-center hover:bg-blue-500 hover:rounded-full transition-all">
            <Link to="/" className="p-3 flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-blue-400" />
              Home
            </Link>
          </div>

          {/* Map */}
          <div className="flex items-center hover:bg-orange-500 hover:rounded-full transition-all">
            <Link to="/map" className="p-3 flex items-center gap-2">
              <MapIcon className="h-5 w-5 text-orange-400" />
              Map
            </Link>
          </div>

          {/* Cashback */}
          <div className="flex items-center hover:bg-green-700 hover:rounded-full transition-all">
            <Link to="/cashback" className="p-3 flex items-center gap-2">
              <CurrencyDollarIcon className="h-5 w-5 text-green-600" />
              Cashback
            </Link>
          </div>

          {/* Seguridad */}
          <div className="flex items-center hover:bg-red-500 hover:rounded-full transition-all">
            <Link to="/security" className="p-3 flex items-center gap-2">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
              Seguridad
            </Link>
          </div>

          {/* Login */}
          <div className="flex items-center hover:bg-purple-500 hover:rounded-full transition-all">
            <Link to="/login" className="p-3 flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-purple-500" />
              Login
            </Link>
          </div>

          {/* Recargar Tarjeta (RFID) */}
          <div className="flex items-center hover:bg-yellow-400 hover:rounded-full transition-all">
            <Link to="/reload" className="p-3 flex items-center gap-2">
              <BoltIcon className="h-5 w-5 text-yellow-400" />
              Recargar Tarjeta
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/security" element={<Security />} />
        <Route path="/reload-card" element={<ReloadCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;