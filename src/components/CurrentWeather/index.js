import React, { useState, useEffect } from 'react'
import { getCurrentWeather } from '../../services/getCurrentWeather'
import './CurrentWeather.css'

export default function CurrentWeather ({ cytiId }) {
  const [cyti, setCyti] = useState([])

  const convertMToKm = (values) => {
    const km = (values * 0.001)
    const kmFloor = Math.floor(km)
    return kmFloor
  }
  const convertMStoKH = (values) => {
    const kh = (values * 3.6)
    const khFloor = Math.floor(kh)
    return khFloor
  }

  useEffect(() => {
    getCurrentWeather({ cytiId }).then(cyti => setCyti(cyti))
  }, [cytiId])

  return (
    <div className="card weather-current">
      <div className="card-content">
        <p className="title">{cyti.name}</p>
        <div className="columns">
          <div className="column is-2">
            <figure className="image is-128x128">
              <img alt="Weather icon" src={`http://openweathermap.org/img/wn/${cyti.icon}@2x.png`} />
            </figure>
          </div>
          <div className="column is-2">
            <p className="weather-current__description">{cyti.description}</p>
            <p className="weather-current__temp-m">HOY <span>{cyti.tempMin}° MIN.</span> - <span>{cyti.tempMax}° MAX.</span></p>
          </div>
          <div className="column pb-0">
          <table className="table weather-current__table">
          <tbody>
            <tr>
              <td>TEMPERATURA</td>
              <td>{cyti.temp}°</td>
            </tr>
            <tr>
            <td>SENSACIÓN TÉRMICA</td>
              <td>{cyti.feelsLike}°</td>
            </tr>
            <tr>
              <td>HUMEDAD</td>
              <td>{cyti.humidity}%</td>

            </tr>
            </tbody>
          </table>
          </div>
          <div className="column pb-0">
          <table className="table weather-current__table">
          <tbody>
            <tr>
              <td>VISIBILIDAD</td>
              <td>{convertMToKm(cyti.visibility)} Km</td>
            </tr>
            <tr>
              <td>VIENTO</td>
              <td>{convertMStoKH(cyti.wind)} Km/H</td>
            </tr>
            <tr>
              <td>PRESIÓN</td>
              <td>{cyti.pressure} hPa</td>

            </tr>
            </tbody>
          </table>
          </div>
        </div>

      </div>
    </div>
  )
}
