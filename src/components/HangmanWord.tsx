import "./HangmanWord.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToFind: string;
  reveal: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToFind,
  reveal,
}: HangmanWordProps) => {
  return (
    <div className="wordContainer">
      {wordToFind.split("").map((item, index) => (
        <div className="letterContainer" key={index}>
          <div
            className={`
              ${
                guessedLetters.includes(item) || reveal
                  ? "letterContainer__letter"
                  : "letterContainer__letter--hidden"
              }
                ${
                  reveal &&
                  !guessedLetters.includes(item) &&
                  "letterContainer__reveal"
                }`}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HangmanWord;
