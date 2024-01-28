import React, { useState, useEffect } from "react";
import words1 from "../../../src/components/words/lv1.json";
import GuessWords from "../../components/words";
import KeyboardText from "../../components/keyboard";
// import myImage from "./line1.png";

export default function Home() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [result, setResult] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [lifeImg, setLifeImg] = useState("");

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

  const img1 = "./line1.png";

  useEffect(() => {
    const wordArray = wordToGuess.split("");
    const displayWord = wordArray
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join("");
    if (displayWord === wordToGuess) {
      setResult("You Win!");
    } else if (remainingAttempts === 5) {
      // setLifeImg(img1);
      console.log(img1);
    } else if (remainingAttempts === 0) {
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
        <div>Attempts Remaining: {remainingAttempts}</div>
        <div>{result}</div>
      </div>
      <KeyboardText
        onKeyPress={handleKeyPress}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
    </div>
  );
}
