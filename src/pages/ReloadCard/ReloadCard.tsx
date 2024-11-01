import React, { useState } from 'react';

const ReloadCard: React.FC = () => {
    const [amount, setAmount] = useState(0);

    const handleReload = () => {
        alert(`Recarga exitosa de $${amount}`);
        setAmount(0);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-6">Recargar Tarjeta RFID</h2>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                    Monto de Recarga
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full p-2 rounded-md text-gray-800"
                />
                <button
                    onClick={handleReload}
                    className="mt-4 w-full bg-green-500 p-2 rounded-md text-white hover:bg-green-700 transition"
                >
                    Recargar
                </button>
            </div>
        </div>
    );
};

export default ReloadCard;