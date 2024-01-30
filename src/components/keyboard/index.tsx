export interface KeyboardTextProps {
  onKeyPress: (value: string) => void;
  guessedLetters: string[];
  wordToGuess: string;
}

export default function KeyboardText(props: KeyboardTextProps) {
  const { onKeyPress, guessedLetters, wordToGuess } = props;
  const letters1 = "QWERTYUIOP".split("");
  const letters2 = "ASDFGHJKL".split("");
  const letters3 = "ZXCVBNM".split("");

  const handleClick = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      onKeyPress(letter);
    }
  };

  const isWrongLetter = (letter: string) => {
    return !wordToGuess.includes(letter) && guessedLetters.includes(letter);
  };
  return (
    <div>
      <div>
        {letters1.map((letter) => (
          <button
            key={letter}
            className={`text-gray-800 font-bold py-2 px-2 mx-1 rounded text-sm ${
              // className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 mx-1 rounded text-sm ${
              isWrongLetter(letter) ? "text-red-500 pointer-events-none" : ""
            }`}
            disabled={guessedLetters.includes(letter)}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div>
        {letters2.map((letter) => (
          <button
            key={letter}
            className={`text-gray-800 font-bold py-2 px-2 mx-1 rounded text-sm ${
              // className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 mx-1 rounded text-sm ${
              isWrongLetter(letter) ? "text-red-500 pointer-events-none" : ""
            }`}
            disabled={guessedLetters.includes(letter)}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div>
        {letters3.map((letter) => (
          <button
            key={letter}
            className={`text-gray-800 font-bold py-2 px-2 mx-1 rounded text-sm ${
              // className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 mx-1 rounded text-sm ${
              isWrongLetter(letter) ? "text-red-500 pointer-events-none" : ""
            }`}
            disabled={guessedLetters.includes(letter)}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
