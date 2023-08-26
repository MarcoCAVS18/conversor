// More.js
import React from 'react';

function More({ addValue }) {
  const handleAddValue = () => {
    addValue(); // Llama a la función proporcionada por el componente padre para agregar un nuevo valor
  };

  return (
    <div className="w-full text-center mt-4">
      <button
        className="bg-green-500 text-white py-2 px-4 rounded inline-block"
        onClick={handleAddValue}
      >
        +
      </button>
    </div>
  );
}

export default More;


