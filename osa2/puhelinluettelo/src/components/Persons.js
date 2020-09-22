import React from 'react';

const Person = ( {person, onDeleteClick} ) => (
    <div>
      {person.name} {person.number} <button onClick={() => onDeleteClick(person)}>delete</button>
    </div>
  )

const Persons = ({filteredPersons, onDeleteClick}) => (
    <div>
        {filteredPersons.map(person =>
        <Person key={person.name} person={person} onDeleteClick={onDeleteClick} />)}
    </div>
)

export default Persons