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
  const lifedefault = "./lifedefault.jpg";
  const imgLife6 = "./life6.jpg";
  const imgLife5 = "./life5.jpg";
  const imgLife4 = "./life4.jpg";
  const imgLife3 = "./life3.jpg";
  const imgLife2 = "./life2.jpg";
  const imgLife1 = "./life1.jpg";

  useEffect(() => {
    const wordArray = wordToGuess.split("");
    const displayWord = wordArray
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join("");

    console.log("wordArray", wordArray);
    console.log("displayWord", displayWord);
    if (displayWord === wordToGuess) {
      setResult("You Win!");
    } else if (remainingAttempts === 5) {
      setLifeImg(imgLife1);
    } else if (remainingAttempts === 4) {
      setLifeImg("");
      setLifeImg(imgLife2);
    } else if (remainingAttempts === 3) {
      setLifeImg("");
      setLifeImg(imgLife3);
    } else if (remainingAttempts === 2) {
      setLifeImg("");
      setLifeImg(imgLife4);
    } else if (remainingAttempts === 1) {
      setLifeImg("");
      setLifeImg(imgLife5);
    } else if (remainingAttempts === 0) {
      setLifeImg("");
      setLifeImg(imgLife6);
      setResult("Game Over!");
      setTimeout(restartGame, 3000);
    }
  }, [wordToGuess, guessedLetters, remainingAttempts]);

  return (
    <div className="App">
      <button onClick={restartGame}>Restart</button>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold my-4">Hangman Game</h1>
        <GuessWords wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        <div
          className={`text-gray-800 ${
            remainingAttempts === 0 ? "text-white" : ""
          }`}
        >
          Attempts Remaining: {remainingAttempts}
        </div>
        <div>{result}</div>
      </div>
      <KeyboardText
        onKeyPress={handleKeyPress}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <img src={`${lifeImg}`} />
    </div>
  );
}
