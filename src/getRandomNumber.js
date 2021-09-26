const getRandomNumber = (max) => {
  let number = Math.floor(Math.random() * max);
  if (number === 0) {
    number = 1;
  }
  return number;
};

export default getRandomNumber;
