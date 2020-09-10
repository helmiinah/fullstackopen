import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.total} />
        <StatisticsLine text="average" value={props.average} />
        <StatisticsLine text="positive" value={props.positivePercentage} />
      </table>
    </div>
  )
}

const Header = (props) => (
  <h1>
    {props.text}
  </h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValueGood = newValue => {
    setGood(newValue)
  }

  const setToValueNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToValueBad = newValue => {
    setBad(newValue)
  }

  const average = (good, neutral, bad) => (
    (good*1 + neutral*0 + bad*(-1)) / (good+neutral+bad)
  )

  const positivePercentage = (good, neutral, bad) => (
    ((good / (good+neutral+bad)) * 100) + " %"
  )

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setToValueGood(good + 1)} text="good" />
      <Button handleClick={() => setToValueNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToValueBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} average={average(good, neutral, bad)} 
                  total={bad + good + neutral} positivePercentage={positivePercentage(good, neutral, bad)} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)