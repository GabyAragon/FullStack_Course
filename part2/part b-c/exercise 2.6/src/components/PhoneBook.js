import React from 'react'
import Person from './Person'

const PhoneBook = ({filter, persons}) =>{
    const filteredPersons = persons.filter(person => person.name.includes(filter))
    return(
        <>
            <ul>{filteredPersons.map((person,i) => <Person person={person} key={i}/>)}</ul>
        </>
    )
}

export default PhoneBook