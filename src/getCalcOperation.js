const getCalcOperation = (operation) => {
  let result;
  if (operation === 1) {
    result = '+';
  } else if (operation === 2) {
    result = '-';
  } else if (operation === 3) {
    result = '*';
  }
  return result;
};

export default getCalcOperation;
