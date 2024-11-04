import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la redirección

function Register() {
    const [selectedPlan, setSelectedPlan] = useState("free");
    const navigate = useNavigate();

    const handleRegister = () => {
        // Redirige al usuario al Home después de registrarse
        navigate("/");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                {/* Título con estilo */}
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    Movi+ <span className="text-green-500">Pro</span>: Más seguridad, más recompensas, más movilidad
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    ¡Regístrate y elige el plan que mejor se adapte a ti!
                </p>

                {/* Formulario de registro */}
                <form className="space-y-4">
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

                    {/* Selección de Plan */}
                    <div className="mt-4">
                        <label className="font-semibold text-gray-700">Selecciona tu plan:</label>
                        <div className="flex space-x-4 mt-2">
                            <button
                                type="button"
                                onClick={() => setSelectedPlan("free")}
                                className={`p-2 rounded-lg w-1/2 ${selectedPlan === "free" ? "bg-blue-500 text-white" : "bg-gray-200"
                                    }`}
                            >
                                Free
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedPlan("pro")}
                                className={`p-2 rounded-lg w-1/2 ${selectedPlan === "pro" ? "bg-green-500 text-white" : "bg-gray-200"
                                    }`}
                            >
                                Pro - $99/mes
                            </button>
                        </div>
                    </div>

                    {/* Tabla Comparativa */}
                    <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Comparativa de Planes</h3>
                        <table className="w-full text-sm text-left text-gray-600">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4">Característica</th>
                                    <th className="py-2 px-4">Free</th>
                                    <th className="py-2 px-4">Pro</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-1 px-4">Acceso al mapa en tiempo real</td>
                                    <td className="text-center">✔️</td>
                                    <td className="text-center">✔️</td>
                                </tr>
                                <tr>
                                    <td className="py-1 px-4">Recompensas Cashback</td>
                                    <td className="text-center">❌</td>
                                    <td className="text-center">✔️</td>
                                </tr>
                                <tr>
                                    <td className="py-1 px-4">Reportes de seguridad</td>
                                    <td className="text-center">❌</td>
                                    <td className="text-center">✔️</td>
                                </tr>
                                <tr>
                                    <td className="py-1 px-4">Descuentos en socios</td>
                                    <td className="text-center">❌</td>
                                    <td className="text-center">✔️</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Botón de Registro */}
                    <button
                        onClick={handleRegister}
                        className={`w-full p-2 rounded-lg mt-4 transition-all ${selectedPlan === "pro" ? "bg-green-600 text-white hover:bg-green-700" : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        Crear Cuenta
                    </button>
                </form>

                {/* Botón de Cerrar */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-all"
                    onClick={() => window.history.back()}
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default Register;