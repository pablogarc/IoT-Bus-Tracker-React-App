import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ExclamationTriangleIcon, MapIcon, UserGroupIcon } from '@heroicons/react/24/solid';

interface Report {
    category: string;
    type: string;
    location: string;
    timeAgo: string;
    description: string;
}

const initialReports: Report[] = [
    { category: "Incidente", type: "Robo", location: "Centro de Guadalajara", timeAgo: "Hace 2 horas", description: "Robo en la parada del centro." },
    { category: "Incidente", type: "Vandalismo", location: "Línea 3", timeAgo: "Hace 5 horas", description: "Grafiti en el tren." },
    { category: "Incidente", type: "Accidente", location: "Av. Vallarta", timeAgo: "Ayer", description: "Colisión menor sin heridos." },
    { category: "Incidente", type: "Congestión", location: "López Mateos", timeAgo: "Hace 30 minutos", description: "Tráfico intenso debido a obras." },
    { category: "Ayuda", type: "Asistencia", location: "Parque Agua Azul", timeAgo: "Hace 10 minutos", description: "Solicita ayuda para cargar el automóvil." }
];

const Security = () => {
    const location = useLocation(); // Define location para evitar errores
    const [showReportModal, setShowReportModal] = useState(false);
    const [showDashboardModal, setShowDashboardModal] = useState(false);
    const [showHelpModal, setShowHelpModal] = useState(false);
    const [reports, setReports] = useState<Report[]>(initialReports);

    useEffect(() => {
        const modalOption = location.state?.modal;
        if (modalOption === 'incident') setShowReportModal(true);
        if (modalOption === 'dashboard') setShowDashboardModal(true);
        if (modalOption === 'help') setShowHelpModal(true);
    }, [location.state]);

    const handleSubmitReport = (e: React.FormEvent) => {
        e.preventDefault();
        const newReport: Report = {
            category: "Incidente",
            type: (document.getElementById("type") as HTMLSelectElement).value,
            location: (document.getElementById("location") as HTMLInputElement).value,
            timeAgo: "Ahora",
            description: (document.getElementById("description") as HTMLTextAreaElement).value,
        };
        setReports([newReport, ...reports]);
        setShowReportModal(false);
        alert("Reporte subido con éxito");
    };

    const handleSubmitHelp = (e: React.FormEvent) => {
        e.preventDefault();
        const newHelp: Report = {
            category: "Ayuda",
            type: "Asistencia",
            location: (document.getElementById("helpLocation") as HTMLInputElement).value,
            timeAgo: "Ahora",
            description: (document.getElementById("helpDescription") as HTMLTextAreaElement).value,
        };
        setReports([newHelp, ...reports]);
        setShowHelpModal(false);
        alert("Solicitud de ayuda enviada");
    };

    return (
        <div className="p-8 bg-dark text-white min-h-screen">
            <h1 className="text-4xl font-bold text-red-500 mb-6">Función de Seguridad</h1>

            <div className="flex justify-center gap-6 mb-8">
                <button
                    onClick={() => setShowReportModal(true)}
                    className="bg-red-500 p-8 rounded-lg text-center shadow-md hover:bg-red-600 transition-all text-white flex flex-col items-center text-xl"
                >
                    <ExclamationTriangleIcon className="h-10 w-10 mb-2" />
                    Reportar Incidente
                </button>

                <button
                    onClick={() => setShowDashboardModal(true)}
                    className="bg-yellow-500 p-8 rounded-lg text-center shadow-md hover:bg-yellow-600 transition-all text-white flex flex-col items-center text-xl"
                >
                    <MapIcon className="h-10 w-10 mb-2" />
                    Revisar Reportes
                </button>

                <button
                    onClick={() => setShowHelpModal(true)}
                    className="bg-blue-500 p-8 rounded-lg text-center shadow-md hover:bg-blue-600 transition-all text-white flex flex-col items-center text-xl"
                >
                    <UserGroupIcon className="h-10 w-10 mb-2" />
                    Pedir Ayuda
                </button>
            </div>

            {/* Modal para Reportar Incidente */}
            {showReportModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-900 text-white p-8 rounded-lg w-[600px] shadow-lg text-lg">
                        <h2 className="text-2xl font-bold mb-4 text-red-400">Reportar Incidente</h2>
                        <form onSubmit={handleSubmitReport}>
                            <div className="mb-4">
                                <label className="block mb-2">Tipo de Incidente</label>
                                <select id="type" className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white">
                                    <option>Robo</option>
                                    <option>Vandalismo</option>
                                    <option>Accidente</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Ubicación</label>
                                <input id="location" type="text" placeholder="Ej. Av. Juárez y 4a. Calle" className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Detalles</label>
                                <textarea id="description" placeholder="Describe lo sucedido..." className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowReportModal(false)}
                                    className="bg-gray-600 px-4 py-2 rounded mr-2 hover:bg-gray-700 transition-all text-white"
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de Dashboard de Reportes */}
            {showDashboardModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-4xl shadow-lg text-lg">
                        <h2 className="text-3xl font-bold text-yellow-400 mb-4 animate-pulse">Dashboard de Reportes</h2>
                        <table className="tabla-reportes w-full">
                            <thead>
                                <tr className="bg-gray-700 text-yellow-300">
                                    <th className="p-3">Categoría</th>
                                    <th className="p-3">Tipo de Incidente</th>
                                    <th className="p-3">Ubicación</th>
                                    <th className="p-3">Hace cuanto</th>
                                    <th className="p-3">Descripción</th>
                                    <th className="p-3">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((report, index) => (
                                    <tr
                                        key={index}
                                        className={`border-t border-gray-600 ${report.category === "Ayuda"
                                                ? "hover:bg-blue-900 hover:text-blue-400"
                                                : "hover:bg-red-900 hover:text-red-400"
                                            } transition-colors`}
                                    >
                                        <td className="p-3 text-center">{report.category}</td>
                                        <td className="p-3 text-center">{report.type}</td>
                                        <td className="p-3 text-center">{report.location}</td>
                                        <td className="p-3 text-center">{report.timeAgo}</td>
                                        <td className="p-3 text-center">{report.description}</td>
                                        <td className="p-3 text-center">
                                            {report.category === "Ayuda" ? (
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
                                                    Brindar Asistencia
                                                </button>
                                            ) : (
                                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all">
                                                    Ver Detalles
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                onClick={() => setShowDashboardModal(false)}
                                className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition-all text-gray-900 font-bold"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para Pedir Ayuda */}
            {showHelpModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-blue-900 text-white p-8 rounded-lg w-[600px] shadow-lg text-lg">
                        <h2 className="text-2xl font-bold mb-4 text-blue-300">Pedir Ayuda</h2>
                        <form onSubmit={handleSubmitHelp}>
                            <div className="mb-4">
                                <label className="block mb-2">Ubicación</label>
                                <input id="helpLocation" type="text" placeholder="Ej. Av. Juárez y 4a. Calle" className="w-full p-2 border border-gray-500 rounded bg-blue-800 text-white" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Descripción de la Ayuda</label>
                                <textarea id="helpDescription" placeholder="Describe la ayuda que necesitas..." className="w-full p-2 border border-gray-500 rounded bg-blue-800 text-white"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowHelpModal(false)}
                                    className="bg-gray-600 px-4 py-2 rounded mr-2 hover:bg-gray-700 transition-all text-white"
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <p className="text-sm text-gray-500 mt-4">* Esta es una simulación visual para la función de seguridad.</p>
        </div>
    );
};

export default Security;