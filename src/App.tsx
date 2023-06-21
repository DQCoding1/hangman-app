import "./App.css";
import { useEffect, useState } from "react";
import { wordList } from "./data/wordList";
import HangmanDrawing from "./components/HangmanDrawing";
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

  const addGuessedLetter = (key: string) => {
    if (guessedLetters.includes(key)) return;
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
      <HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToFind={wordToFind} />
      <Keyboard
        incorrectLetter={incorrectLetters}
        correctLetters={guessedLetters.filter(item => wordToFind.includes(item))}
        addGuesedLetters={addGuessedLetter}
      />
    </main>
  );
}

export default App;
