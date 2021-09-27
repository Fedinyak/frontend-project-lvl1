const getGreatestCommonDivisor = (firstNum, secondNum) => {
  let divisor;
  if (firstNum < secondNum) {
    divisor = firstNum;
  } else {
    divisor = secondNum;
  }
  for (let i = divisor; i > 0; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      return i;
    }
  }
  return false;
};

export default getGreatestCommonDivisor;
