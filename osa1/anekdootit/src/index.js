import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>
    {props.text}
  </h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const setToRandom = () => (
    setSelected(generateRandomNumber(0, anecdotes.length-1))
  )

  const vote = () => {
    const copyVotes = [...votes]
    copyVotes[selected]++
    setVotes(copyVotes)
  }

  const getIndexOfMostVoted =  votes.indexOf(Math.max.apply(Math, votes))
  
  return (
    <div>
      <Header text="Anecdote of the day" />
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button handleClick={() => vote()} text="vote" />
      <Button handleClick={() => setToRandom()} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      {props.anecdotes[getIndexOfMostVoted]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)