import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Cashback from "./pages/Cashback/Cashback";
import Security from "./pages/Security/Security";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ReloadCard from "./pages/ReloadCard/ReloadCard";
import Logo from "/logo.jpg";

// Iconos de Heroicons o tu biblioteca de iconos
import {
  HomeIcon,
  MapIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  CreditCardIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

function App() {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        {/* Contenedor del logo y título */}
        <div className="flex items-center gap-4">
          {/* Logo aún más grande */}
          <img src={Logo} alt="Movi+" className="h-20 w-22" />

          {/* Título principal un poco más grande */}
          <h1 className="text-4xl font-bold text-green-500 transition-all">
            Movi+
            <span className="ml-3 text-2xl font-normal text-white">
              {/* Efecto hover solo en las palabras "más" */}
              <span className="hover:text-green-400 transition-all"> Más </span> seguridad,
              <span className="hover:text-green-400 transition-all"> más </span> recompensas,
              <span className="hover:text-green-400 transition-all"> más </span> movilidad
            </span>
          </h1>
        </div>

        {/* Links de navegación */}
        <div className="flex gap-8">
          {/* Home */}
          <div className="flex items-center hover:bg-blue-500 hover:rounded-full transition-all">
            <Link to="/" className="p-3 flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-blue-400" />
              Inicio
            </Link>
          </div>

          {/* Map */}
          <div className="flex items-center hover:bg-yellow-500 hover:rounded-full transition-all">
            <Link to="/map" className="p-3 flex items-center gap-2">
              <MapIcon className="h-5 w-5 text-yellow-400" />
              Mapa
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

          {/* Recargar Tarjeta */}
          <div className="flex items-center hover:bg-yellow-500 hover:rounded-full transition-all">
            <Link to="/reload" className="p-3 flex items-center gap-2">
              <CreditCardIcon className="h-5 w-5 text-yellow-400" />
              Recargar
            </Link>
          </div>

          {/* Login / Register */}
          <div className="flex items-center hover:bg-purple-500 hover:rounded-full transition-all">
            <Link to="/login" className="p-3 flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-purple-400" />
              Inicio de sesión
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
        <Route path="/register" element={<Register onClose={() => {}} />} />
        <Route path="/reload" element={<ReloadCard />} />
      </Routes>
    </>
  );
}

export default App;