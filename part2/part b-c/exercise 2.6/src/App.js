import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PhoneBook from './components/PhoneBook'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSubmit = (event) =>{
    console.log(newName,newNumber)
    event.preventDefault()
    const newPerson= {name: newName, number: newNumber}
    if (persons.find(person => person.name==newPerson.name)){window.alert("The name '"+newName+"' is already Added to phonebook" )}
    else {setPersons(persons.concat(newPerson))}
  }
  
  useEffect(() => axios.get('http://localhost:3001/persons').then(response =>setPersons(response.data)))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers:</h2>
      <PhoneBook filter={filter} persons={persons}/>
    </div>
  )
}

export default App