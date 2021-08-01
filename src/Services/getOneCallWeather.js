
const responseTodata = apiResponse => {
  const { daily = [], current } = apiResponse
  if (Array.isArray(daily)) {
    const { temp, humidity, wind, feelsLike, visibility, pressure } = current
    const tempMin = daily[0].temp.min
    const tempMax = daily[0].temp.max
    const { icon, description } = current.weather

    const weathers = daily.slice(1, -2).map(item => {
      const { dt } = item
      const { min, max } = item.temp
      const { icon, main, description } = item.weather[0]

      return { dt, icon, main, description, min, max }
    })
    return [{ temp, humidity, wind, feelsLike, visibility, pressure, tempMax, tempMin, icon, description }, weathers]
  }
  return null
}

export function getOneCallWeather ({ location }) {
  if (location) {
    console.log(`${process.env.REACT_APP_API_URL}/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
    // return fetch(`${process.env.REACT_APP_API_URL}/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
    return fetch('./jsonOneCall.json')
      .then(res => res.json())
      .then(responseTodata)
  } else {
    return 'Ingrese una ciudad'
  }
}
