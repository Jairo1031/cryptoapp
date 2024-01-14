import { useState } from "react";
import { Typography, Select } from "antd";
import { cryptocurrencies, fiatCurrencies } from "./currencies/currencies.jsx";
import { useExchangeRate } from "./useExchangeRate.jsx";

function ExchangeRateUI() {
  const [fromCurrency, setFromCurrency] = useState(cryptocurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e);
    console.log(e);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e);
    console.log(e);
  };

  return (
    <section className="exchange-rate">
      <Typography.Title style={{ color: "#4d4add" }} level={2}>
        Exchange Rate
      </Typography.Title>
    </section>
  );
}
