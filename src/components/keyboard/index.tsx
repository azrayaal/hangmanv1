import React, { useState } from "react";
import letters from "./letter.json";

interface KeyboardProps {
  onKeyPress: (value: string) => void;
}

export default function KeyboardText() {
  // export default function KeyboardText(props: KeyboardProps) {
  // const { onKeyPress } = props;
  const [lettersState] = useState<string[]>(letters);
  console.log(lettersState);

  const chunkedLetters: string[][] = [];
  const chunkSize = [10, 9, Math.ceil(lettersState.length / 10) * 10 - 19];

  let startIndex = 0;
  chunkSize.forEach((size) => {
    chunkedLetters.push(lettersState.slice(startIndex, startIndex + size));
    startIndex += size;
  });

  return (
    <div>
      {chunkedLetters.map((chunk, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap justify-center gap-3 py-2"
        >
          {chunk.map((letter, index) => (
            <button
              key={index}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={() => console.log(letter)}
              // onClick={() => onKeyPress(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
