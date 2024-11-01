import React from 'react';

const Security: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Función de Seguridad</h2>
            <div className="space-y-4">
                <button className="w-full p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
                    Reportar Incidente
                </button>
                <button className="w-full p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
                    Revisar Reportes Recientes
                </button>
                <button className="w-full p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                    Pedir Ayuda de Usuarios Verificados
                </button>
            </div>
            <p className="text-sm mt-4 text-gray-500">
                * Esta es una simulación visual para la función de seguridad.
            </p>
        </div>
    );
};

export default Security;