import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PhoneBook from './components/PhoneBook'
import Notification from './components/Notification'
import phoneService from './services/phoneService'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  
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
    else {
      phoneService.add(newPerson).then(response => {
        setPersons(persons.concat(response))
        setNotificationMessage ('Added '+newPerson.name,'success')
        setTimeout(() => {
          setNotificationMessage(null)
        },5000
        )
      }
      )
    }
  }
  const handleRemove = (person) => {
    const remove=()=> {
      let result = window.confirm('Are you sure you wish to delete '+person.name+'?')
      if(result){
        phoneService.remove(person.id).then(response => {
          let newPersons = persons.concat()
          console.log(newPersons)
          newPersons.splice(newPersons.indexOf(person),1)
          setPersons(newPersons)
        }
        )
      }

    }
    return remove
  }


  
  useEffect(() => phoneService.getAll().then(response => setPersons(response)),[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <Notification message= {notificationMessage} className='success'/>
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
      <PhoneBook filter={filter} persons={persons} handleRemove={handleRemove}/>
    </div>
  )
}

export default App