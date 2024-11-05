import React, { useState } from 'react';

const ReloadCard: React.FC = () => {
    const [amount, setAmount] = useState<number | string>('');
    const [cardNumber, setCardNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    // Formato de moneda
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0;
        setAmount(value);
    };

    const handleReload = () => {
        if (!cardNumber || parseFloat(amount as string) <= 0 || !paymentMethod) {
            alert("Por favor, completa todos los campos antes de recargar.");
            return;
        }
        alert(`Recarga exitosa de ${formatCurrency(amount as number)} en la tarjeta ${cardNumber} usando ${paymentMethod}.`);
        setAmount('');
        setCardNumber('');
        setPaymentMethod('');
    };

    return (
        <div className="flex flex-col items-center justify-start h-full bg-dark text-white pt-4">
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-lg mt-4">
                <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">Recargar Tarjeta RFID</h2>
                <p className="text-center text-lg mb-6 text-gray-200">
                    Puedes recargar tu tarjeta en tiendas de conveniencia participantes, estaciones de transporte público, o desde esta plataforma en línea. Las recargas son instantáneas y reflejan el saldo al momento.
                </p>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2">Número de Tarjeta</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full p-2 rounded-md text-white placeholder-gray-500"
                        placeholder="**** **** **** 1234"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2">Monto de Recarga</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        className="w-full p-2 rounded-md text-white placeholder-gray-500"
                        placeholder="0.00"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2">Selecciona Método de Pago</label>
                    <div className="flex justify-between gap-2">
                        <button
                            onClick={() => setPaymentMethod('Tarjeta de Crédito')}
                            className={`flex-1 p-2 rounded-md font-bold ${paymentMethod === 'Tarjeta de Crédito' ? 'bg-blue-700 text-white' : 'bg-blue-600'
                                } hover:bg-blue-700 transition-all`}
                        >
                            Tarjeta de Crédito
                        </button>
                        <button
                            onClick={() => setPaymentMethod('Tarjeta de Débito')}
                            className={`flex-1 p-2 rounded-md font-bold ${paymentMethod === 'Tarjeta de Débito' ? 'bg-green-700 text-white' : 'bg-green-600'
                                } hover:bg-green-700 transition-all`}
                        >
                            Tarjeta de Débito
                        </button>
                        <button
                            onClick={() => setPaymentMethod('PayPal')}
                            className={`flex-1 p-2 rounded-md font-bold ${paymentMethod === 'PayPal' ? 'bg-yellow-700 text-white' : 'bg-yellow-600'
                                } hover:bg-yellow-700 transition-all`}
                        >
                            PayPal
                        </button>
                    </div>
                </div>
                <button
                    onClick={handleReload}
                    className="w-full bg-green-500 p-3 rounded-md text-white font-bold hover:bg-green-700 transition-all"
                >
                    Recargar
                </button>
                <p className="text-gray-400 text-sm mt-4 text-center">
                    * La recarga en línea puede estar sujeta a comisiones dependiendo del método de pago. Consulta con tu proveedor para más detalles.
                </p>
            </div>
            <br>
            
            </br>
        </div>
    );
};

export default ReloadCard;