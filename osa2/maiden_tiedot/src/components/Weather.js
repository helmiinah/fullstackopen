import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {
    const [ temperature, setTemperature ] = useState(null)
    const [ icon, setIcon ] = useState(null)
    const [ windSpeed, setWindSpeed ] = useState(null)
    const [ windDir, setWindDir ] = useState(null)
  
    const api_key = process.env.REACT_APP_API_KEY
  
    useEffect(() => {
      console.log('effect')
      axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.capital}`)
        .then(response => {
          console.log('promise fulfilled')
          console.log(response.data)
          setTemperature(response.data.current.temperature)
          setIcon(response.data.current.weather_icons[0])
          setWindSpeed(response.data.current.wind_speed)
          setWindDir(response.data.current.wind_dir)
        })
    }, [])
  
    return (
      <div>
        <h2>Weather in {props.capital}</h2>
        <p><b>Temperature:</b> {temperature} celcius</p>
        <img src={icon} width="50px" heigth="50px" alt="" />
        <p><b>Wind: </b>  {windSpeed} mph direction {windDir} </p>
      </div>
    )
  }

export default Weather