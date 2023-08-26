// src/components/USD.js
import React from 'react'; // Elimina 'useState' de la importación

function USD({ amountInAUD }) {
  // Definir tu propia tasa de conversión manualmente
  const customExchangeRate = 0.66; // Por ejemplo, 1 AUD = 0.66 USD

  const amountInUSD = (amountInAUD * customExchangeRate).toFixed(2);

  return (
    <div className="w-full bg-gray-100 p-4 mt-4 text-center">
      <p className="mb-2 text-large font-semibold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
        El valor en USD es de: 
      </p>
      <p className="text-3xl font-semibold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>
        {amountInUSD} USD
      </p>
    </div>
  );
}

export default USD;



