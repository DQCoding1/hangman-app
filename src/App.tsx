import './App.css'
import { useState } from "react"
import { wordList } from './wordList'
import HangmanDrawing from './components/HangmanDrawing'


function App() {
  const [wordToFind, setWordToFind] = useState(() => {
    return wordList[Math.round(Math.random() * wordList.length)]
  })

  const [guessedWord, setGuessedWord] = useState<string[]>([])


  return (
    <main className='app'>
      <HangmanDrawing />
    </main>
  )
}

export default App
