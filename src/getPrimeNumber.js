const getPrimeNumber = (num) => {
  if (num < 2) {
    return 'no';
  }
  const startDivisor = Math.round(num / 2);
  for (let i = startDivisor; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default getPrimeNumber;
