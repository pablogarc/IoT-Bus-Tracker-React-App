import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rfid, setRfid] = useState('');

    const handleRegister = () => {
        // Lógica para registrar al usuario
    };

    return (
        <div>
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Número de Tarjeta RFID (Opcional)" value={rfid} onChange={(e) => setRfid(e.target.value)} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;