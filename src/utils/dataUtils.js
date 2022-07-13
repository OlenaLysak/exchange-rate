const setUpUrl = (to, from, amount) => {
  return `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
};

export { setUpUrl };
