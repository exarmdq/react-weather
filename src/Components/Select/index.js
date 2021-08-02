import React, { useEffect, useState } from 'react'
import { cities } from '../../Services/defaultCities'

export default function Select ({ setCity }) {
  const [getState, setGetState] = useState([])

  useEffect(() => {
    setCity(cities[0])
  }, [])

  const selectHandler = (event) => {
    const id = parseInt(event.target.value)
    if (id === 0) {
      setGetState(cities[0])
      setCity(cities[0])
    } else {
      const city = cities.filter(obj => {
        return obj.id === id
      })
      setGetState(city[0])
      setCity(city[0])
    }
  }

  return (
    <select value={getState.id} onChange={selectHandler}>
      <option value='0'>Seleccione una ciudad</option>
      {cities.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  )
}
