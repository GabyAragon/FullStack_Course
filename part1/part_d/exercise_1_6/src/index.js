import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({eventHandler, name}) => {
  return (
    <button onClick={eventHandler}>
    {name}
    </button>
  )
}
const Statistic = ({name,value}) =>{
  return(
    <>
      <td>{name}</td>
      <td>{value}</td>
    </>
  )
}
const Statistics = ({good,neutral,bad}) =>{
  if ((good+neutral+bad)===0) {
    return(
      <div>
      <h3>No Feedback Given</h3>
      </div>
    )
  }
  return(
    <>
        <h3> Statistics </h3>
        <table>
          <tbody>
            <tr><Statistic name="Good" value={good}/></tr>
            <tr><Statistic name="Neutral" value={neutral}/></tr>
            <tr><Statistic name="Bad" value={bad}/></tr>
            <tr><Statistic name="All" value={good}/></tr>
            <tr><Statistic name="Average" value={(good-bad)/(good+neutral+bad)}/></tr>
            <tr><Statistic name="Positive" value={(((good)/(good+neutral+bad))*100)+" %"}/></tr>
          </tbody>
        </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const clickHandler = (state, setState) => { 
    const handler = () => {
      setState(state+1)
    }
    return handler
  }
  return (
    <div>
      <h3> Give Feedback </h3>
      <Button eventHandler= {clickHandler(good,setGood)} name= "Good"/>
      <Button eventHandler= {clickHandler(neutral,setNeutral)} name= "Neutral"/>
      <Button eventHandler= {clickHandler(bad,setBad)} name= "Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
