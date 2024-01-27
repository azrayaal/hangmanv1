import "./App.css";

function App() {
  // const [wordToguess, setRandomToGuess] = useState(()=>{
  //   return words[Math]
  // })

  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold my-4">Hangman Game</h1>
        <div className="text-xl mb-4">
          {/* {renderWord()}
        {renderMessage()} */}
        </div>
        <div className="flex flex-wrap">{/* {renderLetters()} */}</div>
        <button className="mt-4 p-2 bg-green-500 text-white rounded">
          {/* <button className="mt-4 p-2 bg-green-500 text-white rounded" onClick={selectRandomWord}> */}
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
