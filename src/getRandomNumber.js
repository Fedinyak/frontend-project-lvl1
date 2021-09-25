const getRandomNumber = () => {
  let number = Math.floor(Math.random() * 100);
  if (number === 0) {
    number = 1;
  }
  return number;
};

export default getRandomNumber;
