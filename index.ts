export const turingTest = (k: string[]): string[] => {
  const result = [];
  const first = k[0];
  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    const isLetterInEveryWord = k.every((word) => {
      const idx = word.indexOf(letter);
      if (idx === -1) {
        return false;
      }
      k[k.indexOf(word)] = word.slice(0, idx) + word.slice(idx + 1);
      return true;
    });
    if (isLetterInEveryWord) {
      result.push(letter);
    }
  }
  return result;
};
