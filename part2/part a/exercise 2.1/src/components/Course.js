import React from 'react'

const Part = (props) => {
    return (
      <>
        <p> {props.part} {props.exercises} </p>
      </>
    )
  }
  const Header = (props) => {
    return (
      <>
        <h1>{props.courseName}</h1>
      </>
    )
  }
  
  const Content = ({parts}) => {
    return(
      <>
        {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
      </>
    )
  }
  
  const Total = (props) => {
    const exercises = props.parts.map(part => part.exercises)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return(
      <>
        <p>Number of exercises: {exercises.reduce(reducer)} </p>
      </>
    )
  }
  
  const Course = ({course}) => {
    return(
      <>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }
export default Course