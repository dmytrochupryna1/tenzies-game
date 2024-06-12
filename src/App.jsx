import Dice from './components/Dice'
import { useState } from 'react'

export default function App() {

    const [diceValues, setDiceValues] = useState(Array(10).fill().map(generateRandomNumber))

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }

  function rollDice() {
    setDiceValues(diceValues.map(generateRandomNumber))
  }

  return (
    <>
      <main>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceValues.map((value, index) => (
            <Dice key={index} randomNumber={value} />
          ))}
        </div>
        <button onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}