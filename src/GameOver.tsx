export const GameOver = ({
  guesses,
  setGuesses,
  secretWord,
}: {
  guesses: Array<string>;
  setGuesses: React.Dispatch<React.SetStateAction<Array<string>>>;
  secretWord: string;
}) => {
  const hasWon = guesses.includes(secretWord);
  const hasGuessesLeft = guesses.length < 5;

  const playAgain = () => {
    setGuesses([]);
  };

  if (hasGuessesLeft && !hasWon) {
    return null;
  }

  return (
    <div className="vStack">
      <div>You {hasWon ? 'win' : 'lose'}!</div>
      <button className="button primary" type="submit" onClick={playAgain}>
        Play again
      </button>
    </div>
  );
};
