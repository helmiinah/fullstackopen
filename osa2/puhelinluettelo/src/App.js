import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ newSearch, setNewSearch ] = useState('')
  const [ newMessage, setNewMessage ] = useState(null)
  const [ newError, setNewError ] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    const person = {
        name: newName,
        number: newNumber
    }

    if (persons.some(p => p.name === newName)) {
      const oldPerson = persons.find( ({name}) => name === newName)
      console.log(`old person ${oldPerson.number}`)
      console.log(`new person ${person.number}`)
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        personService
          .update(oldPerson.id, person)
          .then(response => {
            setPersons(persons.map(person => person.id === oldPerson.id ? response.data : person))
            setNewMessage(`Updated ${person.name}`)
          })
          .catch((error) => {
            console.log(error)
            setNewError(true)
            setNewMessage(
              `Information of ${person.name} has already been removed from server`
              )
            setTimeout(() => {
              setNewMessage(null)
              setNewError(false)
            }, 5000)
          })
      }

    } else {
      event.preventDefault()
    
      personService
        .create(person)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
      setNewMessage(`Added ${person.name}`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
    setShowAll(false)
  }

  const filteredPersons = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const onDeleteClick = (delPerson) => {
    if (window.confirm(`Delete ${delPerson.name} ?`)) {
      personService
      .remove(delPerson.id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== delPerson.id))
      })
      setNewMessage(`Deleted ${delPerson.name}`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage} error={newError} />
      <Filter value={newSearch} onChange={handleSearchChange} />
      <h2>Add new</h2>
      <NewPerson onSubmit={addPerson} nameValue={newName} onNameChange={handleNameChange} 
                 numberValue={newNumber} onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} onDeleteClick={onDeleteClick} />
    </div>
  )

}

export default App