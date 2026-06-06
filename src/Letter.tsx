import { validateLetter } from './utils/validateLetter';

export const Letter = ({
  character,
  characterIndex,
  secretWord,
}: {
  character: string;
  characterIndex: number;
  secretWord: string;
}) => {
  return (
    <div
      className={`letter ${validateLetter(character, characterIndex, secretWord)}`}
    >
      {character}
    </div>
  );
};
