// src/App.js
import React, { useState } from 'react';
import AUD from './components/AUD';
import USD from './components/USD';
import Footer from './components/Footer';

function App() {
  const [values, setValues] = useState(['']);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <AUD values={values} setValues={setValues} />
      <USD values={values} />
      <div className="flex-grow"></div> {/* Esto ocupará el espacio restante */}
      <Footer />
    </div>
  );
}

export default App;









