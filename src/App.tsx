import './App.css'
import { useState } from "react"
import { wordList } from './components/data/wordList'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'


function App() {
  const [wordToFind, setWordToFind] = useState(() => {
    return wordList[Math.round(Math.random() * wordList.length)]
  })

  const [guessedWord, setGuessedWord] = useState<string[]>([])


  return (
    <main className='app'>
      <HangmanDrawing />
      <HangmanWord />
    </main>
  )
}

export default App
