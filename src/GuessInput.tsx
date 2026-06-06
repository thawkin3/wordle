import React from 'react';

export const GuessInput = ({
  guesses,
  setGuesses,
}: {
  guesses: Array<string>;
  setGuesses: React.Dispatch<React.SetStateAction<Array<string>>>;
}) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (currentGuess.length === 5) {
      setGuesses((prevGuesses) => [...prevGuesses, currentGuess.toUpperCase()]);
      setCurrentGuess('');
    }
  };
  return guesses.length < 5 ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
      />
      <button type="submit" disabled={currentGuess.length !== 5}>
        Submit guess
      </button>
    </form>
  ) : null;
};
