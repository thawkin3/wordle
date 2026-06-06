import { Letter } from './Letter';

export const GameGrid = ({
  guesses,
  secretWord,
}: {
  guesses: Array<string>;
  secretWord: string;
}) => {
  const remainingGuesses = 5 - guesses.length;

  return (
    <div className="grid">
      {guesses.map((guess) => {
        return (
          <div className="gridRow">
            {guess
              .split('')
              .map((character: string, characterIndex: number) => (
                <Letter
                  character={character}
                  characterIndex={characterIndex}
                  secretWord={secretWord}
                />
              ))}
          </div>
        );
      })}
      {Array(remainingGuesses)
        .fill('     ')
        .map((guess) => {
          return (
            <div className="gridRow">
              {guess
                .split('')
                .map((character: string, characterIndex: number) => (
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
