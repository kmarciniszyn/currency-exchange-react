import React, { useState } from 'react';
import Container from './Container';
import Clock from './Container/Clock';
import Form from './Container/Form';
import { useRatesData } from './useRatesData';

function App() {
  const [result, setResult] = useState();

  const ratesData = useRatesData();

  const calculateResult = (fromCurrency, toCurrency, amount) => {
    let resultAmount = 0;

    if (fromCurrency === ratesData.base) {
      const rate = ratesData.rates[toCurrency];
      resultAmount = rate * amount;

    } else {
      const rateFromCurrency = ratesData.rates[fromCurrency];
      const rateToCurrency = ratesData.rates[toCurrency];
      resultAmount = (rateToCurrency / rateFromCurrency ) * amount;
    }

    setResult({ fromCurrency, toCurrency, amount: +amount, resultAmount });
  };

  return (
    <Container>
      <Clock />
      <Form
        calculateResult={calculateResult}
        result={result}
        ratesData={ratesData}
      />
    </Container>
  );
}

export default App;