import React from 'react'
import OneCountry from './OneCountry'

const Countries = (props) => {

    if (props.filteredCountries.length === 1) {
      return (
        <div>
          {props.filteredCountries.map(country =>
            <OneCountry key={country.name} country={country} />)}
        </div>
      )
    }
    else if (props.filteredCountries.length > 10) {
      return (
        <div>
        Too many countries, specify another filter.
      </div>
      )
    } else {
      return (
        <div>
          {props.filteredCountries.map(country =>
          <div key={country.name}>
            {country.name} <button onClick={() => props.handleClick(country)}>show</button>
          </div>
          )}
        </div>
      )
    }
  }

export default Countries