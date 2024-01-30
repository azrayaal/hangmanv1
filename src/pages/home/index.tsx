import React, { useState, useEffect } from "react";
import words1 from "../../../src/components/words/lv1.json";
import GuessWords from "../../components/words";
import KeyboardText from "../../components/keyboard";

export default function Home() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [result, setResult] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [lifeImg, setLifeImg] = useState("./lifedefault.jpg");
  const [lifeImgSm, setLifeImgSm] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words1.length);
    setWordToGuess(words1[randomIndex].name.toUpperCase());
  }, []);

  const handleKeyPress = (letter: string) => {
    const normalizedLetter = letter.toUpperCase();
    if (!guessedLetters.includes(normalizedLetter)) {
      setGuessedLetters([...guessedLetters, normalizedLetter]);
      if (!wordToGuess.includes(normalizedLetter)) {
        setRemainingAttempts(remainingAttempts - 1);
      }
    }
  };

  const restartGame = () => {
    window.location.reload();
  };
  const imgLife6 = "./life6-removebg-preview.png";
  const imgLife5 = "./life5-removebg-preview.png";
  const imgLife4 = "./life4-removebg-preview.png";
  const imgLife3 = "./life3-removebg-preview.png";
  const imgLife2 = "./life2-removebg-preview.png";
  const imgLife1 = "./life1-removebg-preview.png";

  useEffect(() => {
    const wordArray = wordToGuess.split("");
    const displayWord = wordArray
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join("");

    if (displayWord === wordToGuess && guessedLetters.length > 0) {
      setResult("You Win!");
    } else if (remainingAttempts === 5) {
      setLifeImg(imgLife1);
      setLifeImgSm(imgLife1);
    } else if (remainingAttempts === 4) {
      setLifeImg("");
      setLifeImg(imgLife2);
      setLifeImgSm(imgLife2);
    } else if (remainingAttempts === 3) {
      setLifeImg("");
      setLifeImg(imgLife3);
      setLifeImgSm(imgLife3);
    } else if (remainingAttempts === 2) {
      setLifeImg("");
      setLifeImg(imgLife4);
      setLifeImgSm(imgLife4);
    } else if (remainingAttempts === 1) {
      setLifeImg("");
      setLifeImg(imgLife5);
      setLifeImgSm(imgLife5);
    } else if (remainingAttempts === 0) {
      setLifeImg("");
      setLifeImg(imgLife6);
      setLifeImgSm(imgLife6);
      setResult("Game Over!");
      setTimeout(restartGame, 3000);
    }
  }, [wordToGuess, guessedLetters, remainingAttempts]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="mx-auto hidden md:block">
          <img src={`${lifeImg}`} className="center w-56 mt-10" />
        </div>
        <div className="mt-10 App flex justify-center items-center mx-auto">
          <div className="content flex-1 pt-3">
            <button
              className="md:hidden block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={restartGame}
            >
              Restart
            </button>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold my-4">Hangman</h1>
              <GuessWords
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
              />
              <div
                className={`text-gray-800 ${
                  remainingAttempts === 0 ? "text-red-500" : ""
                }`}
              >
                Attempts Remaining: {remainingAttempts}
              </div>
              <div
                className={`text-2xl font-bold py-5 ${
                  result === "You Win!" ? "text-white" : "text-red-500"
                }`}
              >
                {result}
              </div>
            </div>
            <KeyboardText
              onKeyPress={handleKeyPress}
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
            />
          </div>
        </div>
        <div className="mx-auto md:hidden block">
          <img src={`${lifeImgSm}`} className="center w-56" />
        </div>
        <div className="hidden md:flex md:justify-end pt-5 pr-5">
          <div className="">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={restartGame}
            >
              Restart
            </button>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
}
