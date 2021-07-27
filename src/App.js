import React, { useState } from 'react'
import WeatherCurrent from './components/WeatherCurrent'
import './App.css'

const cyties = [
  { id: 3430863, name: 'Mar del Plata' },
  { id: 3435907, name: 'Buenos Aires' },
  { id: 3860259, name: 'Córdoba' },
  { id: 3861887, name: 'Chaco' },
  { id: 3836276, name: 'Santa Fe' },
  { id: 3844419, name: 'Mendoza' }]

function App () {
  const [getState, setGetState] = useState(cyties[0].id)

  const selectHandler = (event) => {
    setGetState(event.target.value)
  }

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">React Weather</h1>
          <select value={getState} onChange={selectHandler}>
            {cyties.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
          <WeatherCurrent cytiId={getState}></WeatherCurrent>
        </div>
      </section>
    </div>
  )
}

export default App
