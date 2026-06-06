import React from 'react';
import { GameGrid } from './GameGrid';
import { GuessInput } from './GuessInput';
import { GameOver } from './GameOver';
import { secretWords, generateSecretWord } from './utils/secretWords';
import './App.css';

export const App = () => {
  const [guesses, setGuesses] = React.useState<Array<string>>([]);
  const [secretWord, setSecretWord] = React.useState<string>(
    generateSecretWord(secretWords)
  );

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
        setSecretWord={setSecretWord}
      />
    </main>
  );
};
