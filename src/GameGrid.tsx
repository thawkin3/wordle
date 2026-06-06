import { Letter } from './Letter';

export const GameGrid = ({
  guesses,
  secretWord,
}: {
  guesses: Array<string>;
  secretWord: string;
}) => {
  return (
    <div className="grid">
      {guesses.map((guess) => {
        return (
          <div className="gridRow">
            {guess.split('').map((character, characterIndex) => (
              <Letter
                character={character}
                characterIndex={characterIndex}
                secretWord={secretWord}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
