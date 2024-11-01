import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

const Cashback = () => {
    return (
        <div className="p-6 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6 text-green-700">Cashback y Recompensas</h1>

            {/* Pase de Recompensas */}
            <div className="bg-white p-4 rounded-lg mb-6 text-black">
                <h2 className="text-xl font-semibold mb-4 text-green-700">Pase de Recompensas</h2>

                {/* Recompensas */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-blue-100 rounded-lg p-3 hover:shadow-lg hover:bg-blue-200 transition">
                        <div className="flex items-center gap-3">
                            <span className="h-6 w-6 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">1</span>
                            <p>Recompensa por 10 viajes - 5% de descuento en próxima compra</p>
                        </div>
                        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition">Reclamar</button>
                    </div>
                    <div className="flex items-center justify-between bg-green-100 rounded-lg p-3 hover:shadow-lg hover:bg-green-200 transition">
                        <div className="flex items-center gap-3">
                            <span className="h-6 w-6 flex items-center justify-center bg-green-500 text-white font-bold rounded-full">2</span>
                            <p>Recompensa por 20 viajes - 10% de cashback</p>
                        </div>
                        <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-700 transition">Reclamar</button>
                    </div>
                    <div className="flex items-center justify-between bg-purple-100 rounded-lg p-3 hover:shadow-lg hover:bg-purple-200 transition">
                        <div className="flex items-center gap-3">
                            <span className="h-6 w-6 flex items-center justify-center bg-purple-500 text-white font-bold rounded-full">3</span>
                            <p>Recompensa por 30 viajes - Viaje gratis</p>
                        </div>
                        <button className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-700 transition">Reclamar</button>
                    </div>
                </div>
            </div>

            {/* Promociones */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-green-700">Promociones</h2>
                <ul className="list-disc ml-6">
                    <li>Gasta $50 en transporte y recibe un 2% de cashback.</li>
                    <li>Viaja en horas pico y obtén puntos dobles.</li>
                    <li>Recomienda la app a un amigo y gana un viaje gratis.</li>
                </ul>
            </div>

            {/* Información sobre Cashback */}
            <div className="bg-white p-4 rounded-lg text-black">
                <h2 className="text-xl font-semibold text-green-700">¿Cómo funciona el Cashback?</h2>
                <p>Recibes un 5% de cashback en cada viaje que realices. Por cada $10 gastados en transporte, acumulas $0.50 en tu cuenta de recompensas.</p>
            </div>
        </div>
    );
};

export default Cashback;