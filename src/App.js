import React, { useState, useEffect } from 'react';

//Style
import styles from './App.module.css';

//Utils
import { setUpUrl } from './utils/dataUtils';

//Components
import RatesHeader from './components/RatesHeader/RatesHeader';

function App() {
  const [error, setError] = useState('');
  // const [usdRate, setUsdRate] = useState(0);
  // const [eurRate, setEurRate] = useState(0);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Exchange Rate</header>
      <RatesHeader />
    </div>
  );
}

export default App;
