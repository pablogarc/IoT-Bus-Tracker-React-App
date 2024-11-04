//import React from 'react';

const Cashback = () => {
    return (
        <div className="p-8 bg-dark text-white min-h-screen">
            <h1 className="text-4xl font-bold text-green-500 mb-6">Cashback y Recompensas</h1>

            {/* Pase de Recompensas */}
            <section className="mb-8">
                <h2 className="text-3xl text-green-400 mb-4">Pase de Recompensas</h2>
                <div className="grid gap-4">
                    <div className="bg-blue-200 p-4 rounded-lg flex justify-between items-center hover:bg-blue-300 transition-all text-black">
                        <div className="flex items-center">
                            <span className="text-xl font-bold bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                            <span className="text-lg">Recompensa por 10 viajes - 5% de descuento en próxima compra</span>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-lg">Reclamar</button>
                    </div>
                    <div className="bg-green-200 p-4 rounded-lg flex justify-between items-center hover:bg-green-300 transition-all text-black">
                        <div className="flex items-center">
                            <span className="text-xl font-bold bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                            <span className="text-lg">Recompensa por 20 viajes - 10% de cashback</span>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all text-lg">Reclamar</button>
                    </div>
                    <div className="bg-purple-200 p-4 rounded-lg flex justify-between items-center hover:bg-purple-300 transition-all text-black">
                        <div className="flex items-center">
                            <span className="text-xl font-bold bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                            <span className="text-lg">Recompensa por 30 viajes - Viaje gratis</span>
                        </div>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all text-lg">Reclamar</button>
                    </div>
                </div>
            </section>

            {/* Promociones */}
            <section className="mb-8">
                <h2 className="text-3xl text-green-400 mb-4">Promociones</h2>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Gasta $50 en transporte y recibe un 2% de cashback.</li>
                    <li>Viaja en horas pico y obtén puntos dobles.</li>
                    <li>Recomienda la app a un amigo y gana un viaje gratis.</li>
                    <li>Ofertas en: OXXO, Farmacias Guadalajara, Little Caesars, La Flor de Córdoba, Guich.</li>
                </ul>
            </section>

            {/* Información del Cashback */}
            <section className="mb-8 bg-gray-900 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-400 mb-2">¿Cómo funciona el Cashback?</h2>
                <p className="text-lg">
                    Recibes un 5% de cashback en cada viaje que realices. Por cada $10 gastados en transporte, acumulas $0.50 en tu cuenta de recompensas.
                    Este dinero se carga a tu tarjeta y puede ser canjeado en promociones de tiendas afiliadas (como OXXO, Farmacias Guadalajara, Little Caesars)
                    o en futuros viajes en transporte público.
                </p>
            </section>

            {/* Tabla Comparativa de Planes */}
            <section className="mb-8 bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-400 mb-4">Elige tu Plan</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-3 text-green-500 border-b border-gray-700 text-lg">Funcionalidad</th>
                                <th className="p-3 text-green-500 border-b border-gray-700 text-lg">Free</th>
                                <th className="p-3 text-green-500 border-b border-gray-700 text-lg">Pro (99 MXN/mes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border-b border-gray-700 text-lg">Cashback limitado</td>
                                <td className="p-3 border-b border-gray-700 text-lg">✔️</td>
                                <td className="p-3 border-b border-gray-700 text-lg">✔️</td>
                            </tr>
                            <tr>
                                <td className="p-3 border-b border-gray-700 text-lg">Acceso a promociones exclusivas</td>
                                <td className="p-3 border-b border-gray-700 text-lg">❌</td>
                                <td className="p-3 border-b border-gray-700 text-lg">✔️</td>
                            </tr>
                            <tr>
                                <td className="p-3 border-b border-gray-700 text-lg">Descuento en viajes seleccionados</td>
                                <td className="p-3 border-b border-gray-700 text-lg">❌</td>
                                <td className="p-3 border-b border-gray-700 text-lg">✔️</td>
                            </tr>
                            <tr>
                                <td className="p-3 border-b border-gray-700 text-lg">Asistencia de seguridad premium</td>
                                <td className="p-3 border-b border-gray-700 text-lg">❌</td>
                                <td className="p-3 border-b border-gray-700 text-lg">✔️</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Cashback;