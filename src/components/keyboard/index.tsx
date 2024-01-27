import React, { useState } from "react";
import letter1 from "./letter.json";

interface KeyboardProps {
  onKeyPress: (value: string) => void;
}

export default function KeyboardText() {
  const [letters, setLetters] = useState([{}]);
  //   setLetters(letter1);
  console.log(letter1);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* {letters.map((item, index) => (
        <button
          key={index}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          //   onClick={() => onKeyPress(item.letter)}
        >
          {item.letter}
        </button>
      ))} */}
    </div>
  );
}
