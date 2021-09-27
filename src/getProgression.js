const getProgression = (startNumber, gapProgression, lengthProgression) => {
  const result = [];
  let number = startNumber;
  for (let i = 0; i < lengthProgression; i += 1) {
    result.push(number);
    number += gapProgression;
  }
  return result;
};

export default getProgression;
