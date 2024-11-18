import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !password) {
            alert("Por favor, ingresa tu usuario y contraseña.");
            return;
        }
        alert(`Bienvenido, ${username}!`);
        setUsername("");
        setPassword("");
        navigate("/map");
    };

    return (
        <div className="flex flex-col items-center justify-start h-full bg-dark text-white pt-4">
            <br /><br />
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-green-500 mb-3">Iniciar Sesión</h2>
                <p className="text-center text-lg mb-5 text-gray-200">
                    Accede a tu cuenta o utiliza una de las opciones de acceso rápido.
                </p>

                {/* Botones de redes sociales */}
                <div className="flex justify-between gap-4 mb-5">
                    <button className="flex items-center justify-center w-1/5 p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-all">
                        <FaFacebook size={28} />
                    </button>
                    <button className="flex items-center justify-center w-1/5 p-3 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition-all">
                        <FaTwitter size={28} />
                    </button>
                    <button className="flex items-center justify-center w-1/5 p-3 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all">
                        <FaGoogle size={28} />
                    </button>
                    <button className="flex items-center justify-center w-1/5 p-3 bg-blue-700 rounded-full text-white hover:bg-blue-800 transition-all">
                        <FaLinkedin size={28} />
                    </button>
                    <button className="flex items-center justify-center w-1/5 p-3 bg-gray-700 rounded-full text-white hover:bg-gray-800 transition-all">
                        <FaGithub size={28} />
                    </button>
                </div>

                {/* Formulario */}
                <div className="mb-4">
                    <label className="block text-gray-300 text-lg font-bold mb-2">Usuario</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 rounded-md text-white placeholder-gray-500 bg-gray-700"
                        placeholder="Usuario"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-lg font-bold mb-2">Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-md text-white placeholder-gray-500 bg-gray-700"
                        placeholder="Contraseña"
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-green-500 p-3 rounded-md text-white font-bold text-lg hover:bg-green-700 transition-all"
                >
                    Iniciar Sesión
                </button>

                {/* Redirección a Registro */}
                <p className="text-center text-gray-400 mt-3 text-lg">
                    ¿No tienes una cuenta?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-blue-400 cursor-pointer hover:underline"
                    >
                        Crear cuenta
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;