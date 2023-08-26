// src/components/AUD.js
import React from 'react';

function AUD({ amount, setAmount }) {
  const handleAmountChange = (event) => {
    const newValue = event.target.value;
    
    if (newValue === '' || /^[0-9]*\.?[0-9]*$/.test(newValue)) {
      setAmount(newValue);
    }
  };

  return (
    <div className="w-full bg-gray-100 p-4 text-center">
      <p className="mb-2 text-1xl font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
        Ingrese el monto en AUD:
      </p>
      <input
        type="text"
        id="amount"
        placeholder="Solo valores numericos"
        value={amount}
        onChange={handleAmountChange}
        className="w-full px-3 py-2 border rounded-md text-center placeholder-center" // Agregar las clases aquí
        pattern="[0-9]*\.?[0-9]*"
      />
    </div>
  );
}

export default AUD;



