import { useState } from 'react';
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

import {
  HomeIcon,
  MapIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  CreditCardIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/solid';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex flex-col items-center justify-between p-4 bg-gray-800 text-white lg:flex-row">
        {/* Contenedor del logo, título y slogan */}
        <div className="flex items-center gap-4 mb-4 lg:mb-0">
          <img src={Logo} alt="Movi+" className="h-16 w-16" />
          <h1 className="text-3xl font-bold text-green-500">
            Movi+
            <span className="ml-3 text-xl font-normal text-white block lg:inline-block">
              {/* Hover y alineación */}
              <span className="hover:text-green-400 transition-all"> Más </span> seguridad,
              <span className="hover:text-green-400 transition-all"> más </span> recompensas,
              <span className="hover:text-green-400 transition-all"> más </span> movilidad
            </span>
          </h1>
        </div>

        {/* Botón de menú hamburguesa para pantallas menores a lg */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden p-2"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </button>

        {/* Links de navegación, visible solo en pantallas lg y mayores */}
        <div className={`lg:flex gap-8 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link to="/" className="p-3 flex items-center gap-2 hover:bg-blue-500 hover:rounded-full">
            <HomeIcon className="h-5 w-5 text-blue-400" />
            Inicio
          </Link>
          <Link to="/map" className="p-3 flex items-center gap-2 hover:bg-yellow-500 hover:rounded-full">
            <MapIcon className="h-5 w-5 text-yellow-400" />
            Mapa
          </Link>
          <Link to="/cashback" className="p-3 flex items-center gap-2 hover:bg-green-700 hover:rounded-full">
            <CurrencyDollarIcon className="h-5 w-5 text-green-600" />
            Cashback
          </Link>
          <Link to="/security" className="p-3 flex items-center gap-2 hover:bg-red-500 hover:rounded-full">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
            Seguridad
          </Link>
          <Link to="/reload" className="p-3 flex items-center gap-2 hover:bg-yellow-500 hover:rounded-full">
            <CreditCardIcon className="h-5 w-5 text-yellow-400" />
            Recargar
          </Link>
          <Link to="/login" className="p-3 flex items-center gap-2 hover:bg-purple-500 hover:rounded-full">
            <UserIcon className="h-5 w-5 text-purple-400" />
            Iniciar sesión
          </Link>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/security" element={<Security />} />
        <Route path="/reload-card" element={<ReloadCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register onClose={() => { }} />} />
        <Route path="/reload" element={<ReloadCard />} />
      </Routes>
    </>
  );
}

export default App;