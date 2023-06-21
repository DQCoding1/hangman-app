import { KEYS } from "../data/alphabet"
import "./Keyboard.css"

const Keyboard = () => {
  return (
    <ul className="keyboard">
      {KEYS.map((item, index) => (
        <li className="keyboard__li--incorrect">
          <button key={index} className="keyboard__button">{item}</button>
        </li>
      ))}
    </ul>
  )
}

export default Keyboard