import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import MapComponent from "../../components/Map/Map";

const Map: React.FC = () => {
  return (
    <div className="relative">
      {/* Botón de Seguridad */}
      <div className="flex justify-end p-4">
        <Link
          to="/security"
          className="flex items-center justify-center p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
        >
          <ExclamationTriangleIcon className="h-6 w-6" />
        </Link>
      </div>

      {/* Mapa principal */}
      <MapComponent />
    </div>
  );
};

export default Map;