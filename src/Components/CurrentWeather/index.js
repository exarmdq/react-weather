import React, { useState, useEffect } from 'react'
import { getCurrentWeather } from '../../Services/getCurrentWeather'
import './CurrentWeather.css'
import { ConvertMStoKH } from '../../Helpers/ConvertMStoKH'
import { ConvertMToKm } from '../../Helpers/ConvertMToKm'

export default function CurrentWeather ({ cityId }) {
  const [city, setCity] = useState([])

  useEffect(() => {
    getCurrentWeather({ cityId }).then(city => setCity(city))
  }, [cityId])

  return (
    <div className="card current-weather">
      <div className="card-content">
        <p className="title">{city.name}</p>
        <div className="columns">
          <div className="column is-2">
            <figure className="image is-128x128">
              <img alt="Weather icon" src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`} />
            </figure>
          </div>
          <div className="column is-2">
            <p className="current-weather__description">{city.description}</p>
            <p className="current-weather__temp-m">HOY <span>{city.tempMin}° MIN.</span> - <span>{city.tempMax}° MAX.</span></p>
          </div>
          <div className="column pb-0">
          <table className="table current-weather__table">
          <tbody>
            <tr>
              <td>TEMPERATURA</td>
              <td>{city.temp}°</td>
            </tr>
            <tr>
            <td>SENSACIÓN TÉRMICA</td>
              <td>{city.feelsLike}°</td>
            </tr>
            <tr>
              <td>HUMEDAD</td>
              <td>{city.humidity}%</td>

            </tr>
            </tbody>
          </table>
          </div>
          <div className="column pb-0">
          <table className="table current-weather__table">
          <tbody>
            <tr>
              <td>VISIBILIDAD</td>
              <td>{ConvertMToKm(city.visibility)} Km</td>
            </tr>
            <tr>
              <td>VIENTO</td>
              <td>{ConvertMStoKH(city.wind)} Km/H</td>
            </tr>
            <tr>
              <td>PRESIÓN</td>
              <td>{city.pressure} hPa</td>

            </tr>
            </tbody>
          </table>
          </div>
        </div>

      </div>
    </div>
  )
}
