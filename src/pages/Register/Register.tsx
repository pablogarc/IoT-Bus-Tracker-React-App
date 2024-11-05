import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la redirección

function Register({ onClose }: { onClose: () => void }) {
    const [selectedPlan, setSelectedPlan] = useState("free");
    const navigate = useNavigate();

    const handleRegister = () => {
        // Redirige al usuario al Home después de registrarse
        navigate("/");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full text-white">
                {/* Botón de Cerrar */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-300 transition-all"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* Título con estilo */}
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-100">
                    Movi+ <span className="text-green-500">Pro</span>: Más seguridad, más recompensas, más movilidad
                </h2>
                <p className="text-center text-gray-400 mb-6">
                    ¡Regístrate y elige el plan que mejor se adapte a ti!
                </p>

                {/* Formulario de registro */}
                <form className="space-y-4 mb-6">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Apellidos"
                            className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Número de Tarjeta RFID (Opcional)"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </form>

                {/* Selección de Plan */}
                <div className="text-center mb-6">
                    <label className="font-semibold text-green-400 text-lg">Selecciona tu plan:</label>
                    <div className="flex space-x-4 mt-2 justify-center">
                        <button
                            type="button"
                            onClick={() => setSelectedPlan("free")}
                            className={`p-2 rounded-lg w-1/3 ${selectedPlan === "free" ? "bg-blue-500 text-white" : "bg-gray-800"}`}
                        >
                            Free
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedPlan("pro")}
                            className={`p-2 rounded-lg w-1/3 ${selectedPlan === "pro" ? "bg-green-500 text-white" : "bg-gray-800"}`}
                        >
                            Pro - $99/mes
                        </button>
                    </div>
                </div>

                {/* Tabla Comparativa de Planes */}
                <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Comparativa de Planes</h3>
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Funcionalidad</th>
                                <th className="py-2 px-4">Free</th>
                                <th className="py-2 px-4">Pro</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-1 px-4">Cashback limitado</td>
                                <td className="text-center">✔️</td>
                                <td className="text-center">✔️</td>
                            </tr>
                            <tr>
                                <td className="py-1 px-4">Acceso a promociones exclusivas</td>
                                <td className="text-center text-red-500">❌</td>
                                <td className="text-center text-green-500">✔️</td>
                            </tr>
                            <tr>
                                <td className="py-1 px-4">Descuento en viajes seleccionados</td>
                                <td className="text-center text-red-500">❌</td>
                                <td className="text-center text-green-500">✔️</td>
                            </tr>
                            <tr>
                                <td className="py-1 px-4">Asistencia de seguridad premium</td>
                                <td className="text-center text-red-500">❌</td>
                                <td className="text-center text-green-500">✔️</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Botón de Registro */}
                <button
                    onClick={handleRegister}
                    className={`w-full p-2 rounded-lg mt-6 transition-all ${selectedPlan === "pro" ? "bg-green-600 text-white hover:bg-green-700" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                >
                    Crear Cuenta
                </button>
            </div>
        </div>
    );
}

export default Register;