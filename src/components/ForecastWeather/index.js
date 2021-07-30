import React, { useState, useEffect } from 'react'
import { getForecastWeather } from '../../services/getForecastWeather'

export default function ForecastWeather ({ cytiId }) {
  const [cyties, setCyties] = useState([])

  useEffect(() => {
    getForecastWeather({ cytiId }).then(cyties => setCyties(cyties))
  }, [cytiId])

  const DAY_NAMES = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  const MONTH_NAMES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

  const formatDate = (values) => {
    let { dateFormat, dateValue } = values
    dateValue = new Date(dateValue)

    let hour = dateValue.getHours()
    hour = (hour < 10 ? '0' : '') + hour

    let minutes = dateValue.getMinutes()
    minutes = (minutes < 10 ? '0' : '') + minutes

    const date = dateValue.getDate()
    const month = dateValue.getMonth() + 1
    const year = dateValue.getFullYear()

    const monthName = MONTH_NAMES[dateValue.getMonth()]
    const dateName = DAY_NAMES[dateValue.getDay()]

    dateFormat = dateFormat.replace('%h', hour)
    dateFormat = dateFormat.replace('%hm', minutes)
    dateFormat = dateFormat.replace('%d', date)
    dateFormat = dateFormat.replace('%D', dateName)
    dateFormat = dateFormat.replace('%m', month)
    dateFormat = dateFormat.replace('%M', monthName)
    dateFormat = dateFormat.replace('%y', year)

    return dateFormat
  }

  console.log(cyties[0])
  return (
    <div>
     {
        cyties.map(({ dt, dtTxt, icon, main, temp, tempMin, tempMax }) =>
       <div key={dt}>

          <p>dt: {formatDate({ dateFormat: '%D, %d de %M ', dateValue: dtTxt })}</p>
          <p>Temperatura: {temp}</p>
          <p> <img alt="Weather icon" src={`http://openweathermap.org/img/w/${icon}.png`} /> </p>
          <p>Estado: {main}</p>
          <p>Temperatura minima: {tempMin}</p>
          <p>Temperatura maxima: {tempMax}</p>
        </div>
        )
      }

    </div>
  )
}
