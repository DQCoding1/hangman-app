import "./HangmanWord.css";

type HangmanWordProps = {
  guessedLetters: string[],
  wordToFind: string 
}

const HangmanWord = ({ guessedLetters , wordToFind }: HangmanWordProps) => {
  return (
    <div className="wordContainer">
      {wordToFind.split("").map((item, index) => (
        <div className="letterContainer" key={index}>
          <div
            className={
              guessedLetters.includes(item)
                ? "letterContainer__letter"
                : "letterContainer__letter--hidden"
            }
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HangmanWord;
