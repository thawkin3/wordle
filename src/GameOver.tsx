import { secretWords, generateSecretWord } from './utils/secretWords';

export const GameOver = ({
  guesses,
  setGuesses,
  secretWord,
  setSecretWord,
}: {
  guesses: Array<string>;
  setGuesses: React.Dispatch<React.SetStateAction<Array<string>>>;
  secretWord: string;
  setSecretWord: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const hasWon = guesses.includes(secretWord);
  const hasGuessesLeft = guesses.length < 5;

  const playAgain = () => {
    setGuesses([]);
    setSecretWord(generateSecretWord(secretWords));
  };

  if (hasGuessesLeft && !hasWon) {
    return null;
  }

  return (
    <div className="vStack">
      <div>You {hasWon ? 'win' : 'lose'}!</div>
      {!hasWon ? <div>The word was: {secretWord}</div> : null}
      <button className="button primary" type="submit" onClick={playAgain}>
        Play again
      </button>
    </div>
  );
};
