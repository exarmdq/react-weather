import React, { useState, useEffect } from 'react'
import { getOneCallWeather } from '../../Services/getOneCallWeather'
import { FormatDate } from '../../Helpers/FormatDate'
import { ConvertMToKm } from '../../Helpers/ConvertMToKm'

import './OneCallWeather.css'
import Figure from '../Figure'
import { ConvertMStoKH } from '../../Helpers/ConvertMStoKH'
import Table from '../Table'
import ErrorMessage from '../ErrorMessage'

export default function OneCallWeather ({ location }) {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    getOneCallWeather({ location }).then((weather) => {
      setWeather(weather)
    })
  }, [location])

  const values = weather[0] ? [{ item: 'TEMPERATURA', value: `${weather[0].temp}°C` }, { item: 'SENSACIÓN TÉRMICA', value: `${weather[0].feelsLike}°C` }, { item: 'HUMEDAD', value: `${weather[0].humidity}%` }] : ''
  const values2 = weather[0] ? [{ item: 'VISIBILIDAD', value: `${ConvertMToKm(weather[0].visibility)} Km` }, { item: 'VIENTO', value: `${ConvertMStoKH(weather[0].wind)} Km/H` }, { item: 'PRESIÓN', value: `${weather[0].pressure} hPa` }] : ''

  return <>
    {
      weather.cod
        ? <ErrorMessage message={weather.message}/>
        : ''
    }
    {weather[0]
      ? <div className="card current-weather">
          <div className="card-content">
          <p className="title"></p>
          <div className="columns">
            <div className="column is-2">
            <Figure classDimension='is-128x128' icon={`${weather[0].icon}@2x`}/>
            </div>
            <div className="column is-2">
              <p className="current-weather__description">{weather[0].description}</p>
              <p className="current-weather__description">HOY</p>
              <p className="current-weather__temp-m">{weather[0].tempMin}°C MIN.</p>
              <p className="current-weather__temp-m">{weather[0].tempMax}°C MAX.</p>
            </div>
            <div className="column pb-0">
            <Table claseTable="current-weather__table" values={values} />
            </div>
            <div className="column pb-0">
            <Table claseTable="current-weather__table" values={values2} />
            </div>
          </div>
        </div>
        </div>
      : ''
    }
    {weather[1]
      ? <div className="columns">
       {weather[1].map(({ dt, icon, description, min, max }) =>
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
       )}</div>
      : ''
    }
  </>
}
