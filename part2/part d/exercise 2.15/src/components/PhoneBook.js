import React from 'react'
import Person from './Person'

const PhoneBook = ({filter, persons, handleRemove}) =>{
    const filteredPersons = persons.filter(person => person.name.includes(filter))
    return(
        <>
            <ul>{filteredPersons.map(person => <Person person={person} handleRemove={handleRemove} key={person.id} />)}</ul>
        </>
    )
}

export default PhoneBook