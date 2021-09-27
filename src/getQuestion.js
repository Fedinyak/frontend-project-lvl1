const getQuestion = (hiddenNumber, progression) => {
  const question = progression;
  question[hiddenNumber] = '..';

  return question.join(' ');
};

export default getQuestion;
