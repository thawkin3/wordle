export const validateLetter = (character, characterIndex, secretWord) => {
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
