// src/components/AUD.js
import React, { useEffect } from 'react'; // Añadir useEffect
import InputWithMoreButton from './InputWithMoreButton';

function AUD({ values, setValues }) { // Recibir setValues desde la prop
  const handleAmountChange = (event, index) => {
    const newValue = event.target.value;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const addValue = () => {
    setValues([...values, '']);
  };

  // Agregar un efecto para actualizar el estado en USD cuando values cambia
  useEffect(() => {
    setValues(values);
  }, [values, setValues]);

  return (
    <div className="w-full bg-gray-100 p-4 flex flex-col items-center">
      <p className="mb-2 text-2xl font-semibold">
        Ingrese los montos en AUD:
      </p>
      {values.map((value, index) => (
        <InputWithMoreButton
          key={index}
          value={value}
          onChange={(event) => handleAmountChange(event, index)}
          addValue={addValue}
          isLast={index === values.length - 1}
        />
      ))}
    </div>
  );
}

export default AUD;
