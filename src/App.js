import React, { useState } from 'react'
import ErrorMessage from './Components/ErrorMessage'
import OneCallWeather from './Components/OneCallWeather'
import { cities } from './Services/defaultCities'

function App () {
  const [getState, setGetState] = useState(cities[0])

  const selectHandler = (event) => {
    const id = parseInt(event.target.value)
    if (id === 0) {
      setGetState(cities[0])
    } else {
      const citi = cities.filter(obj => {
        return obj.id === id
      })
      setGetState(citi[0])
    }
  }

  const setting = !(!process.env.REACT_APP_API_URL || !process.env.REACT_APP_API_KEY)
  const location = getState ? { lon: getState.coord.lon, lat: getState.coord.lat } : ''

  return (
      <section className="section weather">
        <div className="container">
          <h1 className="title">React Weather</h1>
          <div></div>
          <div className="select weather__select">
          <select value={getState.id} onChange={selectHandler}>
            <option value='0'>Seleccione una ciudad</option>
            {cities.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
          </div>
          {setting
            ? <OneCallWeather location={location} />
            : <ErrorMessage message="Configurar el API_KEY"/>
          }

        </div>
      </section>

  )
}

export default App
