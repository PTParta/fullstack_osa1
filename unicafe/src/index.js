import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )


}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {

  if (all === 0) {
    return (
      <div>
        <br></br>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        {/*         <h1>statistics</h1>
      good {good}
        <br></br>
      neutral {neutral}
        <br></br>
      bad {bad}
        <br></br>
      all {all}
        <br></br>
      average {average}
        <br></br>
      positive {positive} % */}

        <br></br>
        <table><tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody></table>


      </div>
    )
  }

}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr><td>{props.text}</td><td>{props.value} %</td></tr>
    )
  }
  else {
    return (
      <tr><td>{props.text}</td><td>{props.value}</td></tr>
    )
  }




}

const App = () => {
  // tallenna napit omaan tilaansa
  const title = "give feedback"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setSum(sum + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setSum(sum - 1)
  }

  return (
    <div>
      <Header title={title} />

      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}
        average={sum / all} sum={sum} positive={100 * good / all} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)