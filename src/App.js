import React, { useState } from 'react';
import AUD from './components/AUD'; 
import USD from './components/USD';
import Footer from './components/Footer';

function App() {
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
      <AUD amount={amount} setAmount={setAmount} />
      <USD amountInAUD={amount} />
      <Footer />
    </div>
  );
}

export default App;








