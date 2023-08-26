// InputWithMoreButton.js
import React from 'react';
import More from './More';

function InputWithMoreButton({ value, onChange, addValue, isLast }) {
  const handleBlur = () => {
    // Al dejar el campo, verifica si es un número válido y corrige si es necesario.
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      // Si es un número válido, actualiza el valor en el estado.
      onChange({ target: { value: parsedValue } });
    }
  };

  return (
    <div className="mb-2">
      <input
        type="number" // Cambia el tipo de entrada a "number"
        placeholder="Ingrese un monto en AUD"
        value={value}
        onChange={onChange}
        onBlur={handleBlur} // Agrega el evento onBlur
        className="w-full px-3 py-2 border rounded-md"
        step="0.01" // Permite números decimales con dos decimales
      />
      {isLast && <More addValue={addValue} />}
    </div>
  );
}

export default InputWithMoreButton;
