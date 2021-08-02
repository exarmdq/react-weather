import React, { useState } from 'react'
import ErrorMessage from './Components/ErrorMessage'
import OneCallWeather from './Components/OneCallWeather'
import Select from './Components/Select'
import useGeoLocation from './Hooks/useGeoLocation'

function App () {
  const geoLocation = useGeoLocation()
  const [state, setstate] = useState(geoLocation)

  const setCity = (city) => {
    const location = { lon: city.coord.lon, lat: city.coord.lat }
    setstate(location)
  }

  const setting = !(!process.env.REACT_APP_API_URL || !process.env.REACT_APP_API_KEY)

  const isGeoLocation = geoLocation.loaded === false ? <ErrorMessage message="Acepte permisos de ubicación o seleccione una"/> : <OneCallWeather location={state} />

  const oneCallWeather = setting ? isGeoLocation : <ErrorMessage message="Configurar el API_KEY"/>

  return (
      <section className="section weather">
        <div className="container">
          <h1 className="title">React Weather</h1>
          <div></div>
          <div className="select weather__select">
            <Select setCity={setCity} />
          </div>
          {oneCallWeather}

        </div>
      </section>

  )
}

export default App
