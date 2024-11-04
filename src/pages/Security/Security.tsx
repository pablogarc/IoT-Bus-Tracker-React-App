import { useState } from 'react';
import { ExclamationTriangleIcon, MapIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const Security = () => {
    const [showReportModal, setShowReportModal] = useState(false);

    return (
        <div className="p-8 bg-dark text-white min-h-screen">
            <h1 className="text-4xl font-bold text-red-500 mb-6">Función de Seguridad</h1>

            <div className="flex justify-center gap-6 mb-8">
                {/* Botón de Reportar Incidente */}
                <button
                    onClick={() => setShowReportModal(true)}
                    className="bg-red-500 p-6 rounded-lg text-center shadow-md hover:bg-red-600 transition-all text-white flex flex-col items-center"
                >
                    <ExclamationTriangleIcon className="h-8 w-8 mb-2" />
                    Reportar Incidente
                </button>

                {/* Botón de Revisar Reportes */}
                <button className="bg-yellow-500 p-6 rounded-lg text-center shadow-md hover:bg-yellow-600 transition-all text-white flex flex-col items-center">
                    <MapIcon className="h-8 w-8 mb-2" />
                    Revisar Reportes
                </button>

                {/* Botón de Pedir Ayuda */}
                <button className="bg-blue-500 p-6 rounded-lg text-center shadow-md hover:bg-blue-600 transition-all text-white flex flex-col items-center">
                    <UserGroupIcon className="h-8 w-8 mb-2" />
                    Pedir Ayuda
                </button>
            </div>

            {/* Lista de Reportes Recientes */}
            <section className="mb-8">
                <h2 className="text-2xl text-yellow-400 mb-4">Reportes Recientes</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Robo en la parada de "Centro" - Hace 2 horas</li>
                    <li>Vandalismo en el autobús de la línea 4 - Hace 5 horas</li>
                    <li>Accidente menor en Av. Juárez - Ayer</li>
                </ul>
            </section>

            {/* Modal para Reportar Incidente */}
            {showReportModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg w-96">
                        <h2 className="text-2xl font-bold mb-4 text-red-500">Reportar Incidente</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Tipo de Incidente</label>
                                <select className="w-full p-2 border border-gray-300 rounded">
                                    <option>Robo</option>
                                    <option>Vandalismo</option>
                                    <option>Accidente</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Ubicación</label>
                                <input type="text" placeholder="Ej. Av. Juárez y 4a. Calle" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700">Detalles</label>
                                <textarea placeholder="Describe lo sucedido..." className="w-full p-2 border border-gray-300 rounded"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowReportModal(false)}
                                    className="bg-gray-400 px-4 py-2 rounded mr-2"
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Nota */}
            <p className="text-sm text-gray-500 mt-4">* Esta es una simulación visual para la función de seguridad.</p>
        </div>
    );
};

export default Security;