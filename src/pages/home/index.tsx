import React from "react";
import { useState } from "react";
import words1 from "./lv1.json";
import InputBar from "../../components/inputBar";
import KeyboardText from "../../components/keyboard";
import GuessWords from "../../components/words";

export default function Home() {
  const [wordToguess, setRandomToGuess] = useState(() => {
    return words1[Math.floor(Math.random() * words1.length)];
  });
  console.log(wordToguess.name);
  const [checkAnswer, setCheckAnswer] = useState("");
  const [result, setResult] = useState("");

  const answerTheword = (e: any) => {
    e.preventDefault();
    if (wordToguess.name === checkAnswer) {
      setResult("benar");
    } else {
      setResult("coba lagi bos");
    }
  };
  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold my-4">Hangman Game</h1>
        <GuessWords wordToGuess={wordToguess.name} />
        <InputBar
          answerTheword={answerTheword}
          checkAnswer={checkAnswer}
          setCheckAnswer={setCheckAnswer}
        />
        {result}
      </div>

      <KeyboardText />
    </div>
  );
}
