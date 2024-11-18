import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [selectedPlan, setSelectedPlan] = useState("free");
    const navigate = useNavigate();

    const handleRegister = () => {
        // Redirige al inicio de sesión después de registrar
        navigate("/login");
    };

    return (
        <div className="flex flex-col items-center justify-start h-full bg-dark text-white pt-4">
            {/* Contenedor Principal */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-lg mt-4">
                {/* Título */}
                <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">
                    Movi+ Pro
                </h2>
                <p className="text-center text-white mb-6 text-xl">
                    <span className="hover:text-green-400 transition-all">Más</span> seguridad,{" "}
                    <span className="hover:text-green-400 transition-all">más</span> recompensas,{" "}
                    <span className="hover:text-green-400 transition-all">más</span> movilidad.
                </p>
                {/* Formulario con Contenedor */}
                <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-center text-gray-100 mb-6 text-m">
                    ¡Elige el plan que mejor se adapte a ti!
                </p>
                    <form className="space-y-4 mb-6">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-1/2 p-3 border rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="Apellidos"
                                className="w-1/2 p-3 border rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Teléfono"
                            className="w-full p-3 border rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="w-full p-3 border rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="w-full p-3 border rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Número de Tarjeta RFID (Opcional)"
                            className="w-full p-3 border rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </form>
                </div>
                <br />
                {/* Selección de Plan */}
                <div className="text-center mb-6">
                    <label className="font-semibold text-green-400 text-lg">Selecciona tu plan:</label>
                    <div className="flex space-x-4 mt-4 justify-center">
                        <button
                            type="button"
                            onClick={() => setSelectedPlan("free")}
                            className={`p-3 rounded-md w-1/2 text-sm font-bold transition-all ${selectedPlan === "free"
                                    ? "bg-blue-500 text-white hover:bg-blue-600"
                                    : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            Free
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedPlan("pro")}
                            className={`p-3 rounded-md w-1/2 text-sm font-bold transition-all ${selectedPlan === "pro"
                                    ? "bg-green-500 text-white hover:bg-green-600"
                                    : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            Pro - $99/mes
                        </button>
                    </div>
                </div>

                {/* Tabla Comparativa de Planes */}
                <section className="mb-8 w-full bg-gray-900 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-green-500 mb-4">Comparativa de Planes</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-3 text-green-500 border-b border-gray-700 text-lg">Funcionalidad</th>
                                    <th className="p-3 text-blue-400 border-b border-gray-700 text-lg">Free</th>
                                    <th className="p-3 text-green-500 border-b border-gray-700 text-lg">Pro</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-800 transition-all">
                                    <td className="p-3 border-b border-gray-700">Cashback limitado</td>
                                    <td className="p-3 border-b border-gray-700 text-blue-400">✅ Hasta 2%</td>
                                    <td className="p-3 border-b border-gray-700 text-green-500">✅ Hasta 5%</td>
                                </tr>
                                <tr className="hover:bg-gray-800 transition-all">
                                    <td className="p-3 border-b border-gray-700">Acceso a promociones exclusivas</td>
                                    <td className="p-3 border-b border-gray-700 text-blue-400">❌</td>
                                    <td className="p-3 border-b border-gray-700 text-green-500">✅</td>
                                </tr>
                                <tr className="hover:bg-gray-800 transition-all">
                                    <td className="p-3 border-b border-gray-700">Sin anuncios</td>
                                    <td className="p-3 border-b border-gray-700 text-blue-400">❌</td>
                                    <td className="p-3 border-b border-gray-700 text-green-500">✅</td>
                                </tr>
                                <tr className="hover:bg-gray-800 transition-all">
                                    <td className="p-3 border-b border-gray-700">Puntos extra por horas pico</td>
                                    <td className="p-3 border-b border-gray-700 text-blue-400">❌</td>
                                    <td className="p-3 border-b border-gray-700 text-green-500">✅</td>
                                </tr>
                                <tr className="hover:bg-gray-800 transition-all">
                                    <td className="p-3 border-b border-gray-700">Viajes gratis acumulados</td>
                                    <td className="p-3 border-b border-gray-700 text-blue-400">1 al mes</td>
                                    <td className="p-3 border-b border-gray-700 text-green-500">3 al mes</td>
                                </tr>
                                <tr className="hover:bg-gray-800 transition-all">
                                    <td className="p-3 border-b border-gray-700">Funciones de seguridad básicas</td>
                                    <td className="p-3 border-b border-gray-700 text-blue-400">✅ Básica</td>
                                    <td className="p-3 border-b border-gray-700 text-green-500">✅ Premium</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Botón de Crear Cuenta */}
                <button
                    onClick={handleRegister}
                    className={`w-full p-3 mt-6 rounded-md text-lg font-bold transition-all ${selectedPlan === "pro"
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                >
                    Crear Cuenta
                </button>
            </div>
        </div>
    );
}

export default Register;