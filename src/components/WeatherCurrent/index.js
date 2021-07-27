import React, { useState, useEffect } from 'react'
import { getCurrentWeather } from '../../services/getCurrentWeather'

export default function WeatherCurrent ({ cytiId }) {
  const [cyti, setCyti] = useState([])

  useEffect(() => {
    getCurrentWeather({ cytiId }).then(cyti => setCyti(cyti))
  }, [cytiId])

  return (
    <div>
      <h1>{cyti.name}</h1>
      <p>Temperatura: {cyti.temp}</p>
      <p> <img alt="Weather icon" src={`http://openweathermap.org/img/w/${cyti.icon}.png`} /> </p>
      <p>Estado: {cyti.main}</p>
      <p>Temperatura minima: {cyti.tempMin}</p>
      <p>Temperatura maxima: {cyti.tempMax}</p>
    </div>
  )
}
