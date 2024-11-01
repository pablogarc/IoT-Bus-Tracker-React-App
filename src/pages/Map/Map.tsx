import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import MapComponent from "../../components/Map/Map";

const Map: React.FC = () => {
  return (
    <div className="relative">
      {/* Mapa principal */}
      <MapComponent />

      {/* Botón de Seguridad */}
      <Link
        to="/security"
        className="fixed bottom-10 right-10 flex items-center justify-center p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <ExclamationTriangleIcon className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default Map;
