// src/components/USD.js
import React, { useEffect, useState } from 'react';

function USD({ values }) {
  const [totalInUSD, setTotalInUSD] = useState(0.00);
  const [totalInAUD, setTotalInAUD] = useState(0.00);

  const customExchangeRate = 0.66; // Tasa de conversión manual

  useEffect(() => {
    // Calcular el valor total en USD y AUD aquí cuando los valores cambien
    const totalUSD = values.reduce((acc, value) => {
      const parsedValue = parseFloat(value);
      return isNaN(parsedValue) ? acc : acc + parsedValue * customExchangeRate;
    }, 0);

    const totalAUD = values.reduce((acc, value) => {
      const parsedValue = parseFloat(value);
      return isNaN(parsedValue) ? acc : acc + parsedValue;
    }, 0);

    setTotalInUSD(totalUSD.toFixed(2));
    setTotalInAUD(totalAUD.toFixed(2));
  }, [values]);

  return (
    <div className="w-full bg-gray-100 p-4 mt-4 text-center">
      <p className="mb-2 text-md font-semibold">El valor total en USD es:</p>
      <p className="text-3xl font-black">{totalInUSD} USD</p>
      <p className="text-3xl font-black text-gray-300">{totalInAUD} AUD</p>
    </div>
  );
}

export default USD;
