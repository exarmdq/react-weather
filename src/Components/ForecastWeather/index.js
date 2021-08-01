import React, { useState, useEffect } from 'react'
import { getForecastWeather } from '../../Services/getForecastWeather'
import { FormatDate } from '../../Helpers/FormatDate'
import './ForecastWeather.css'

export default function ForecastWeather ({ cityId }) {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getForecastWeather({ cityId }).then(cities => setCities(cities))
  }, [cityId])

  return (
    <div className="columns">
    {
      cities.map(({ dt, dtTxt, icon, description, tempMin, tempMax }) =>
      <div key={dt} className="column">
        <div className="card forecast-weather">
        <div className="card-content">
        <p>{dtTxt}</p>
          <p className="title forecast-weather__date">{FormatDate({ dateFormat: '%D, %d de %M ', dateValue: dtTxt })}</p>
          <div className="columns is-multiline">
            <div className="column is-12">
              <figure className="image is-48x48">
                <img alt="Weather icon" src={`http://openweathermap.org/img/wn/${icon}.png`} />
              </figure>
            </div>
            <div className="column is-12">
              <p className="forecast-weather__description">{description}</p>
              <p className="forecast-weather__temp">{tempMin}° MIN {tempMax}° MAX</p>
            </div>

          </div>
        </div>
        </div>
        </div>
      )
      }

    </div>
  )
}
