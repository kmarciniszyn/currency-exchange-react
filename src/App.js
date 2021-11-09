import React, { useState } from 'react';
import Container from './Container';
import Clock from './Container/Clock';
import Form from './Container/Form';
import { currencies } from './currencies';

function App() {
  const [result, setResult] = useState();

  const calculateResult = (fromCurrency, toCurrency, amount) => {
    const currency = currencies.find(({ short }) => short === fromCurrency);
    const rate = currency["rate"][toCurrency];

    const resultAmount = rate * amount;

    setResult({ fromCurrency, toCurrency, amount: +amount, resultAmount });
  };

  return (
    <Container>
      <Clock />
      <Form
        calculateResult={calculateResult}
        result={result}
      />
    </Container>
  );
}

export default App;