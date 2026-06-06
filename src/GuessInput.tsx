import React from 'react';

export const GuessInput = ({
  guesses,
  setGuesses,
  secretWord,
}: {
  guesses: Array<string>;
  setGuesses: React.Dispatch<React.SetStateAction<Array<string>>>;
  secretWord: string;
}) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (currentGuess.length === 5) {
      setGuesses((prevGuesses) => [...prevGuesses, currentGuess.toUpperCase()]);
      setCurrentGuess('');
    }
  };

  const hasWon = guesses.includes(secretWord);
  const hasGuessesLeft = guesses.length < 5;

  return hasGuessesLeft && !hasWon ? (
    <form onSubmit={handleSubmit}>
      <div className="vStack">
        <input
          type="text"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          className="textInput"
        />
        <button
          type="submit"
          className="button primary"
          disabled={currentGuess.length !== 5}
        >
          Submit guess
        </button>
      </div>
    </form>
  ) : null;
};
