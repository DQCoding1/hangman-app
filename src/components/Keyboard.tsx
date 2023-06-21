import { KEYS } from "../data/alphabet";
import "./Keyboard.css";

type KeyboardProps = {
  incorrectLetter: string[],
  correctLetters: string[],
  disable : boolean,
  addGuesedLetters: (key: string) => void
};


const Keyboard = ({
  incorrectLetter,
  correctLetters,
  disable,
  addGuesedLetters,
}: KeyboardProps) => {
  return (
    <ul className="keyboard">
      {KEYS.map((item, index) => {
        const isLetterCorrect = correctLetters.includes(item)
        const isLetterIncorrect = incorrectLetter.includes(item)
        return (
          <li
            className={`keyboard__li 
            ${isLetterCorrect  ? "keyboard__li--correct" : ""} 
            ${ isLetterIncorrect ? "keyboard__li--incorrect" : ""}`}
          >
            <button
              key={index}
              onClick={() => addGuesedLetters(item)}
              className="keyboard__button"
              disabled={isLetterCorrect || isLetterIncorrect || disable}
            >
              {item}
            </button>
          </li>
      )})}
    </ul>
  );
};

export default Keyboard;
