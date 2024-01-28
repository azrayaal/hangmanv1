// import words1 from "./lv1.json";

// export interface WordsProps {
//   wordToGuess: string;
// }

// export default function GuessWords(props: WordsProps) {
//   const { wordToGuess } = props;
//   return <div className="text-xl mb-4">{wordToGuess}</div>;
// }

import React from "react";

interface GuessWordsProps {
  wordToGuess: string;
  guessedLetters: string[];
}

const GuessWords: React.FC<GuessWordsProps> = ({
  wordToGuess,
  guessedLetters,
}) => {
  const displayWord = wordToGuess
    .split("")
    .map((letter) =>
      guessedLetters.includes(letter.toUpperCase()) ? letter : "_"
    )
    .join(" ");

  return <div>{displayWord}</div>;
};

export default GuessWords;
