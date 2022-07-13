import React, { useState, useEffect } from 'react';

//Style
import styles from './RatesHeader.module.css';

//Utils
import { setUpUrl } from '../../utils/dataUtils';

//Icons
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EuroIcon from '@mui/icons-material/Euro';

//Constants
import { REQUEST_OPTIONS } from '../../constants/constants';

const RatesHeader = () => {
  const [error, setError] = useState('');
  const [usdRate, setUsdRate] = useState(0);
  const [eurRate, setEurRate] = useState(0);

  useEffect(() => {
    const currUrl = setUpUrl('UAH', 'USD', 1);
    fetch(currUrl, REQUEST_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setUsdRate(data.result.toFixed(2));
      })
      .catch((error) => setError(error.message));
  }, []);

  useEffect(() => {
    const currUrl = setUpUrl('UAH', 'EUR', 1);
    fetch(currUrl, REQUEST_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setEurRate(data.result.toFixed(2));
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.container}>
      <h3 className={styles.item}>
        <AttachMoneyIcon className={styles.icon} color="primary" />{' '}
        <span>{usdRate}</span>
      </h3>
      <h3 className={styles.item}>
        <EuroIcon className={styles.icon} color="primary" size="small" />{' '}
        <span>{eurRate}</span>
      </h3>
    </div>
  );
};

export default RatesHeader;
