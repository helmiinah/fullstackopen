import React from 'react'
import Weather from './Weather'

const OneCountry = (props) => {
    console.log(props.weather)
    return ( 
      <div>
        <h1>
          {props.country.name}
        </h1>
        <div>
          Capital: {props.country.capital}
        </div>
        <div>
          Population: {props.country.population}
        </div>
        <h2>
          Languages
        </h2>
        <ul>
          {props.country.languages.map(language =>
            <li key={language.name}> {language.name}</li>)}
        </ul>
        <img src={props.country.flag} width="150" height="100" alt="" />
        <div>
          <Weather capital={props.country.capital}  />
        </div>
      </div>
    )
  } 

export default OneCountry