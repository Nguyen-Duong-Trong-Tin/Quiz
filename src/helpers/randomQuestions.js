export const randomQuestions = (array, quantity) => {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * n);

    [array[i], array[j]] = [array[j], array[i]]
  }

  return array.slice(0, quantity);
}