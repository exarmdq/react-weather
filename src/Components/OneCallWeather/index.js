import React, { useState, useEffect } from 'react'
import { getOneCallWeather } from '../../Services/getOneCallWeather'
import { FormatDate } from '../../Helpers/FormatDate'
import { ConvertMToKm } from '../../Helpers/ConvertMToKm'

import './OneCallWeather.css'
import Figure from '../Figure'
import { ConvertMStoKH } from '../../Helpers/ConvertMStoKH'

export default function OneCallWeather ({ location }) {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    getOneCallWeather({ location }).then(weather => setWeather(weather))
  }, [location])
  console.log(weather)
  return (
    <div className="columns">
    <div className="card current-weather">
      <div className="card-content">
        <p className="title"></p>
        <div className="columns">
          <div className="column is-2">
            <figure className="image is-128x128">
              <img alt="Weather icon" src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
            </figure>
          </div>
          <div className="column is-2">
            <p className="current-weather__description">{weather[0].description}</p>
            <p className="current-weather__temp-m">HOY <span>{weather[0].tempMin}° MIN.</span> - <span>{weather[0].tempMax}° MAX.</span></p>
          </div>
          <div className="column pb-0">
          <table className="table current-weather__table">
          <tbody>
            <tr>
              <td>TEMPERATURA</td>
              <td>{weather[0].temp}°</td>
            </tr>
            <tr>
            <td>SENSACIÓN TÉRMICA</td>
              <td>{weather[0].feelsLike}°</td>
            </tr>
            <tr>
              <td>HUMEDAD</td>
              <td>{weather[0].humidity}%</td>

            </tr>
            </tbody>
          </table>
          </div>
          <div className="column pb-0">
          <table className="table current-weather__table">
          <tbody>
            <tr>
              <td>VISIBILIDAD</td>
              <td>{ConvertMToKm(weather[0].visibility)} Km</td>
            </tr>
            <tr>
              <td>VIENTO</td>
              <td>{ConvertMStoKH(weather[0].wind)} Km/H</td>
            </tr>
            <tr>
              <td>PRESIÓN</td>
              <td>{weather[0].pressure} hPa</td>

            </tr>
            </tbody>
          </table>
          </div>
        </div>

      </div>
    </div>
    {weather && weather[1]
      ? weather[1].map(({ dt, icon, description, min, max }) =>
      <div key={dt} className="column">
        <div className="card onecall-weather">
        <div className="card-content">
          <p className="title onecall-weather__date">{FormatDate({ dateFormat: '%D, %d de %M ', dateValue: dt, unix: true })}</p>
          <div className="columns is-multiline">
            <div className="column is-12">
            <Figure classDimension='is-48x48' icon={icon}/>
            </div>
            <div className="column is-12">
              <p className="onecall-weather__description">{description}</p>
              <p className="onecall-weather__temp">{min}° MIN {max}° MAX</p>
            </div>

          </div>
        </div>
        </div>
      </div>
      )
      : ''
      }

    </div>
  )
}
