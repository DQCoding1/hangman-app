import "./App.css";
import { useEffect, useState } from "react";
import { wordList } from "./data/wordList";
import HangmanDrawing, { bodyPartsArr } from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";


function App() {
  const [wordToFind] = useState(() => {
    return wordList[Math.round(Math.random() * wordList.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (item) => !wordToFind.includes(item)
  );
  const isWinner = wordToFind.split("").every(item => guessedLetters.includes(item))
  const isLoser = guessedLetters.length > bodyPartsArr.length

  const addGuessedLetter = (key: string) => {
    if (guessedLetters.includes(key) || isLoser) return;
    setGuessedLetters((currentLetters) => [...currentLetters, key]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <main className="app">
      {isWinner && "You won 🎉, try again"}
      {isLoser && "You Loose 😒, try again"}
      <HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToFind={wordToFind} reveal={isLoser}/>
      <Keyboard
        incorrectLetter={incorrectLetters}
        disable={isWinner || isLoser}
        correctLetters={guessedLetters.filter(item => wordToFind.includes(item))}
        addGuesedLetters={addGuessedLetter}
      />
    </main>
  );
}

export default App;
