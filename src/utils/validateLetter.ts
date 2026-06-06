export const validateLetter = (
  character: string,
  characterIndex: number,
  secretWord: string
) => {
  if (character === ' ') {
    return 'empty';
  }

  if (secretWord[characterIndex] === character) {
    return 'correctLetterAndPlace';
  }

  if (secretWord.includes(character)) {
    return 'correctLetter';
  }

  return 'incorrectLetter';
};
