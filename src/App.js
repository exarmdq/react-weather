import React, { useState } from 'react'
import CurrentWeather from './Components/CurrentWeather'
import OneCallWeather from './Components/OneCallWeather'
import { cities } from './Services/defaultCities'

function App () {
  const [getState, setGetState] = useState(cities[0])

  const selectHandler = (event) => {
    setGetState(event.target.value)
  }

  return (
    <div className="App">
      <section className="section weather">
        <div className="container">
          <h1 className="title">React Weather</h1>
          <div></div>
          <div className="select weather__select">
          <select value={getState.id} onChange={selectHandler}>
            <option>Seleccione una ciudad</option>
            {cities.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
          </div>
          <CurrentWeather cytiId={getState.id}></CurrentWeather>
          <OneCallWeather location={{ lat: getState.lat, lon: getState.lon }} />
        </div>
      </section>
    </div>
  )
}

export default App
