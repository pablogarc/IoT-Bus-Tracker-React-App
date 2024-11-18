const Cashback = () => {
    return (
        <div className="p-8 bg-dark text-white min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">Cashback y Recompensas</h1>

            {/* Pase de Recompensas */}
            <section className="mb-8 w-full max-w-3xl text-center">
                <h2 className="text-3xl text-green-400 mb-6">Pase de Recompensas</h2>
                <div className="grid gap-6">
                    <div className="bg-blue-200 p-6 rounded-lg text-black">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">1</span>
                            <span className="text-base mb-4">Recompensa por 10 viajes - 5% de descuento en próxima compra</span>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm">
                                Reclamar
                            </button>
                        </div>
                    </div>
                    <div className="bg-green-200 p-6 rounded-lg text-black">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">2</span>
                            <span className="text-base mb-4">Recompensa por 20 viajes - 10% de cashback y puntos dobles</span>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all text-sm">
                                Reclamar
                            </button>
                        </div>
                    </div>
                    <div className="bg-purple-200 p-6 rounded-lg text-black">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">3</span>
                            <span className="text-base mb-4">Recompensa por 30 viajes - Viaje gratis + promociones exclusivas</span>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all text-sm">
                                Reclamar
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promociones */}
            <section className="mb-8 w-full max-w-4xl text-center">
                <h2 className="text-3xl text-green-400 mb-4">Promociones</h2>
                <ul className="list-disc text-lg space-y-4 mx-auto w-3/4 text-center">
                    <li>Gasta $50 en transporte y recibe un 5% de cashback.</li>
                    <li>Viaja en horas pico para duplicar tus puntos.</li>
                    <li>Recomienda la app y gana un viaje gratis o recompensas exclusivas.</li>
                    <li>Ofertas exclusivas con aliados: OXXO, Farmacias Guadalajara, Little Caesars, y más.</li>
                </ul>
            </section>

            {/* Información del Cashback */}
            <section className="mb-8 w-full max-w-4xl bg-gray-900 p-6 rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-green-400 mb-4">¿Cómo funciona el Cashback?</h2>
                <p className="text-lg">
                    Por cada $10 gastados en transporte, acumulas $0.50 en cashback. Este saldo se aplica automáticamente para:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-center">
                    <li>Descuentos en viajes futuros</li>
                    <li>Promociones en tiendas afiliadas</li>
                    <li>Canjes por recompensas premium</li>
                </ul>
            </section>

            {/* Tabla Comparativa de Planes */}
            <section className="mb-8 w-full max-w-4xl bg-gray-900 p-6 rounded-lg text-center mx-auto">
                <h2 className="text-2xl font-semibold text-green-400 mb-4">Elige tu Plan</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr>
                                <th className="p-3 text-green-500 border-b border-gray-700 text-lg">Funcionalidad</th>
                                <th className="p-3 text-blue-300 border-b border-gray-700 text-lg hover:text-blue-100 transition-all">Free</th>
                                <th className="p-3 text-green-500 border-b border-gray-700 text-lg hover:text-green-300 transition-all">Pro (99 MXN/mes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-800 transition-all">
                                <td className="p-3 border-b border-gray-700 text-lg">Cashback limitado</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-blue-300">✅ (hasta 2%)</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-green-500">✅ (hasta 5%)</td>
                            </tr>
                            <tr className="hover:bg-gray-800 transition-all">
                                <td className="p-3 border-b border-gray-700 text-lg">Acceso a promociones exclusivas</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-blue-300">❌</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-green-500">✅</td>
                            </tr>
                            <tr className="hover:bg-gray-800 transition-all">
                                <td className="p-3 border-b border-gray-700 text-lg">Sin anuncios</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-blue-300">❌</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-green-500">✅</td>
                            </tr>
                            <tr className="hover:bg-gray-800 transition-all">
                                <td className="p-3 border-b border-gray-700 text-lg">Puntos extra por horas pico</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-blue-300">❌</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-green-500">✅</td>
                            </tr>
                            <tr className="hover:bg-gray-800 transition-all">
                                <td className="p-3 border-b border-gray-700 text-lg">Viajes gratis acumulados</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-blue-300">1 al mes</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-green-500">3 al mes</td>
                            </tr>
                            <tr className="hover:bg-gray-800 transition-all">
                                <td className="p-3 border-b border-gray-700 text-lg">Funciones de seguridad básicas</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-blue-300">✅ (botón de emergencia, alertas comunitarias)</td>
                                <td className="p-3 border-b border-gray-700 text-lg text-green-500">✅ (alertas predictivas y personalizadas, zonas seguras)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Cashback;