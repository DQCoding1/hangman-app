import "./HangmanWord.css";

const HangmanWord = () => {
  const wordToFind = "environment";
  const guessedLetter = ["e", "r"];

  return (
    <div className="wordContainer">
      {wordToFind.split("").map((item, index) => (
        <div className="letterContainer" key={index}>
          <div
            className={
              guessedLetter.includes(item)
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
