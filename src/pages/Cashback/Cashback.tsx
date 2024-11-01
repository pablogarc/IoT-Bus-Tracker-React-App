import React from 'react';

const Cashback: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Cashback y Recompensas</h2>

            {/* Pase de Batalla */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Pase de Recompensas</h3>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">1</div>
                        <span>Recompensa por 10 viajes - 5% de descuento en próxima compra</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">2</div>
                        <span>Recompensa por 20 viajes - 10% de cashback</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3">3</div>
                        <span>Recompensa por 30 viajes - Viaje gratis</span>
                    </div>
                </div>
            </div>

            {/* Promociones */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Promociones</h3>
                <ul className="list-disc list-inside">
                    <li>Gasta $50 en transporte y recibe un 2% de cashback.</li>
                    <li>Viaja en horas pico y obtén puntos dobles.</li>
                    <li>Recomienda la app a un amigo y gana un viaje gratis.</li>
                </ul>
            </div>

            {/* Información sobre Cashback */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Cómo funciona el Cashback?</h3>
                <p>Recibes un 5% de cashback en cada viaje que realices. Por cada $10 gastados en transporte, acumulas $0.50 en tu cuenta de recompensas.</p>
            </div>
        </div>
    );
};

export default Cashback;