export const handleAnswer = (array) => {
  array.pop();
  const arrFull = [...array];

  const arrChecked = [...array].filter(item => item.checked);

  const mpFull = new Map();
  const mpChecked = new Map();

  arrFull.forEach(item => {
    const temp = item.id.split('-');
    mpFull.set(temp[0], "-1");
  })

  arrChecked.forEach(item => {
    const temp = item.id.split('-');
    mpChecked.set(temp[0], temp[1]);
  })

  const result = [];

  mpFull.forEach((val, key) => {
    const questionId = key;
    let answer = val;

    const keySearch = mpChecked.get(key);
    if (keySearch) {
      answer = keySearch;
    }

    result.push({
      questionId: questionId,
      answer: parseInt(answer)
    });
  })

  return result;
}

export const handleResult = (array) => {
  const result = {
    correct: 0,
    quantity: 0
  }

  array.forEach(item => {
    ++result.quantity;
    
    if (item.answer === item.correctAnswer) {
      ++result.correct;
    }
  });

  return result;
}