import './App.css'
import { useState } from "react"
import { wordList } from './data/wordList'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'


function App() {
  const [wordToFind, setWordToFind] = useState(() => {
    return wordList[Math.round(Math.random() * wordList.length)]
  })

  const [guessedWord, setGuessedWord] = useState<string[]>([])


  return (
    <main className='app'>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </main>
  )
}

export default App
