import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import MapComponent from "../../components/Map/Map";

const Map: React.FC = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Manejar la navegación y mostrar el modal correspondiente
  const handleOptionClick = (option: string) => {
    navigate('/security', { state: { modal: option } });
    setShowDropdown(false);  // Oculta el menú después de seleccionar una opción
  };

  return (
    <div className="relative">
      {/* Botón de Seguridad con menú desplegable */}
      <div className="flex justify-end p-4">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-center p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
          >
            <ExclamationTriangleIcon className="h-6 w-6" />
          </button>

          {showDropdown && (
            <ul className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2 text-white">
              <li
                onClick={() => handleOptionClick('incident')}
                className="px-4 py-2 hover:bg-red-600 cursor-pointer"
              >
                Reportar Incidente
              </li>
              <li
                onClick={() => handleOptionClick('dashboard')}
                className="px-4 py-2 hover:bg-yellow-600 cursor-pointer"
              >
                Revisar Reportes
              </li>
              <li
                onClick={() => handleOptionClick('help')}
                className="px-4 py-2 hover:bg-blue-600 cursor-pointer"
              >
                Pedir Ayuda
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mapa principal */}
      <MapComponent />
    </div>
  );
};

export default Map;