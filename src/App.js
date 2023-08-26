// src/App.js
import React, { useState } from 'react';
import AUD from './components/AUD';
import USD from './components/USD';
import Footer from './components/Footer';

function App() {
  const [values, setValues] = useState(['']);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
      <AUD values={values} setValues={setValues} /> {/* Pasar el estado y la función */}
      <USD values={values} />
      <Footer />
    </div>
  );
}

export default App;









