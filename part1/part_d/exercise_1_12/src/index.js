import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))
  const [maxIndex, setMaxIndex] = useState(0)
  const vote = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
    maximum(copy)
  }
  const randomizer = () => {
    setSelected(Math.floor(Math.random()*props.anecdotes.length))
  }
  var maxValue= 0
  const maximum = (newVotes) => {
    for (let i=0;i<newVotes.length;i++){
      if (newVotes[i]>maxValue){
        maxValue=newVotes[i]
        setMaxIndex(i)
      }
    }
  }
  
  return (
    <div>
      <button onClick={randomizer}>
        New Anecdote
      </button>

      <p>{props.anecdotes[selected]}</p>
      <p> Has {votes[selected]} votes</p>
      <button onClick={vote}>
        Vote this Anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[maxIndex]}</p>
      <p> Has {votes[maxIndex]} votes</p>

    </div>
  )
}

const anecdotes = [
  'I used to be an adventurer like you but then I took an arrow to the knee',
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