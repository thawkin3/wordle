import React from 'react';
import { GameGrid } from './GameGrid';
import { GuessInput } from './GuessInput';
import { GameOver } from './GameOver';
import './App.css';

const secretWord = 'TOKEN';

export const App = () => {
  const [guesses, setGuesses] = React.useState<Array<string>>([]);

  return (
    <main>
      <h1>Wordle</h1>
      <GameGrid guesses={guesses} secretWord={secretWord} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        secretWord={secretWord}
      />
      <GameOver
        guesses={guesses}
        setGuesses={setGuesses}
        secretWord={secretWord}
      />
    </main>
  );
};
