import './App.css'
import { useState } from "react"
import { wordList } from './data/wordList'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'


function App() {
  const [wordToFind, setWordToFind] = useState(() => {
    return "sdst"
    return wordList[Math.round(Math.random() * wordList.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>(["g", "t", "r"])
  const incorrectLetters = guessedLetters.filter(item => !wordToFind.includes(item))

  return (
    <main className='app'>
      <HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length}/>
      <HangmanWord />
      <Keyboard />
    </main>
  )
}

export default App
