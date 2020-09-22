import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import './index.css'
import Find from './components/Find.js'
import Countries from './components/Countries'


const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const filteredCountries =  countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }
  
  const handleClick = (props) => {
    console.log(props)
    setNewSearch(props.name)
    console.log(newSearch)
  }

  return (
    <div>
      <Find value={newSearch} onChange={handleSearchChange} />
      <Countries filteredCountries={filteredCountries} handleClick={handleClick} />
    </div>
  )
}

export default App
