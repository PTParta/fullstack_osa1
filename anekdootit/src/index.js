import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        next anecdote
      </button>
    </div>
  )
}

/* const Anecdote = () => {
  return (
    <div>

    </div>
  )
} */

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const randomNumber = (min, max) => {

    const r = Math.floor(Math.random() * (max - min + 1)) + min
    /* setSelected(r) */
    console.log("r", r)
    return r
  }

  return (
    <div>
      {/* {props.anecdotes[selected]} */}
      <Button onClick={randomNumber(0, 6)} />
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