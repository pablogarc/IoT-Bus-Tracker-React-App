import React from 'react';
import { ExclamationTriangleIcon, MapIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const Security: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-4 text-white bg-red-600 p-2 rounded-md">Función de Seguridad</h2>
            <div className="flex space-x-4 justify-center">
                <button className="flex flex-col items-center justify-center w-40 p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
                    <ExclamationTriangleIcon className="h-8 w-8 mb-2" />
                    Reportar Incidente
                </button>
                <button className="flex flex-col items-center justify-center w-40 p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
                    <MapIcon className="h-8 w-8 mb-2" />
                    Revisar Reportes
                </button>
                <button className="flex flex-col items-center justify-center w-40 p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                    <UserGroupIcon className="h-8 w-8 mb-2" />
                    Pedir Ayuda
                </button>
            </div>
            <p className="text-sm mt-4 text-gray-500 text-center">
                * Esta es una simulación visual para la función de seguridad.
            </p>
        </div>
    );
};

export default Security;