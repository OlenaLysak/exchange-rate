import React from 'react';

//Style
import styles from './App.module.css';

//Components
import RatesHeader from './components/RatesHeader/RatesHeader';
import Converter from './components/Converter/Converter';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Exchange Rate</header>
      <RatesHeader />
      <Converter />
    </div>
  );
}

export default App;
