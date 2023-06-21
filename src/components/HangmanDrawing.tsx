import "./HangmanDrawing.css"

const bodyparts = {
  head: (
    <div className="structure__head"/>
  ),
  body:  (
    <div className="structure__body"/>
  ), 
  rightArm: (
    <div className="structure__rightArm"/>
  ),
  leftArm: (
    <div className="structure__leftArm"/>
  ),
  rightleg:(
    <div className="structure__rightleg"/>  
  ),
  leftleg: (
    <div className="structure__leftleg"/>  
  )
}

export const bodyPartsArr = Object.values(bodyparts)

type HangmanDrawingProps = {
  numberOfIncorrectGuesses: number 
}


const HangmanDrawing = ({ numberOfIncorrectGuesses }: HangmanDrawingProps) => {
  return (
    <div className="structure">
      <div className="structure__topBar"></div>
      <div className="structure__hangBar"></div>
      <div className="structure__middleBar"></div>
      <div className="structure__bottomBar"></div>
      <div className="structure__bodyparts">
        {/* {bodyparts.head}
        {bodyparts.body}
        {bodyparts.rightArm}
        {bodyparts.leftArm}
        {bodyparts.rightleg}
        {bodyparts.leftleg} */}
      {bodyPartsArr.slice(0, numberOfIncorrectGuesses)}
      </div>
    </div>
  )
}

export default HangmanDrawing