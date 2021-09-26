const getCalcNumber = (firstNum, operation, secondNum) => {
  let result;
  if (operation === 1) {
    result = firstNum + secondNum;
  } else if (operation === 2) {
    result = firstNum - secondNum;
  } else if (operation === 3) {
    result = firstNum * secondNum;
  }
  return result;
};

export default getCalcNumber;
