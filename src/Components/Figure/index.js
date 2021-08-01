import React from 'react'

export default function Figure ({ classDimension, icon }) {
  return (
    <figure className={`image ${classDimension}`}>
      <img alt="Weather icon" src={`http://openweathermap.org/img/wn/${icon}.png`} />
    </figure>
  )
}
