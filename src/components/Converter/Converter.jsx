import React, { useState, useEffect } from 'react';

//Style
import styles from './Converter.module.css';
import classNames from 'classnames/bind';

//Components
import { TextField } from '@mui/material';
import MySelect from '../Select/MySelect';

//Utils
import { setUpUrl } from '../../utils/dataUtils';

//Constants
import { REQUEST_OPTIONS, CURRENCY_OPTIONS } from '../../constants/constants';

let cx = classNames.bind(styles);

const Converter = () => {
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [amount, setAmount] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const isResult =
      !!currencyFrom.length && !!currencyTo.length && !!amount.length;
    setShowResult(isResult);

    if (isResult) {
      const currUrl = setUpUrl(currencyTo, currencyFrom, amount);
      fetch(currUrl, REQUEST_OPTIONS)
        .then((response) => response.json())
        .then((data) => {
          setResult(data.result.toFixed(2));
        })
        .catch((error) => setError(error.message));
    }
  }, [currencyFrom, currencyTo, amount]);

  const handleAmountChange = (event) => {
    if (event.target.value > 0) {
      setAmount(event.target.value);
    }
  };

  const handleCurrencyFromChange = (event) => {
    setCurrencyFrom(event.target.value);
  };

  const handleCurrencyToChange = (event) => {
    setCurrencyTo(event.target.value);
  };

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectionBlock}>
        <div className={styles.node}>Convert</div>
        <TextField
          id="amount"
          className={cx({ node: true, input: true })}
          type="number"
          label="Amount"
          InputProps={{ inputProps: { min: 1 } }}
          onChange={handleAmountChange}
          value={amount}
        />
        <MySelect
          options={CURRENCY_OPTIONS}
          value={currencyFrom}
          handleChange={handleCurrencyFromChange}
        />
        <div className={styles.node}>to</div>
        <MySelect
          options={CURRENCY_OPTIONS}
          value={currencyTo}
          handleChange={handleCurrencyToChange}
        />
      </div>
      {showResult ? <div className={styles.resultBlock}>{result}</div> : null}
    </div>
  );
};

export default Converter;
