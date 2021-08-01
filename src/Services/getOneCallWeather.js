
const responseTodata = apiResponse => {
  console.log(apiResponse)
  if (apiResponse.cod) return apiResponse
  const { daily = [], current } = apiResponse
  if (Array.isArray(daily)) {
    const { humidity, visibility, pressure } = current
    const feelsLike = Math.round(current.feels_like)
    const wind = current.wind_speed
    const temp = Math.round(current.temp)
    const tempMin = Math.round(daily[0].temp.min)
    const tempMax = Math.round(daily[0].temp.max)
    const { description, icon } = current.weather[0]

    const weathers = daily.slice(1, -2).map(item => {
      const { dt } = item
      const min = Math.round(item.temp.min)
      const max = Math.round(item.temp.max)
      const { icon, main, description } = item.weather[0]

      return { dt, icon, main, description, min, max }
    })
    return [{ temp, humidity, wind, feelsLike, visibility, pressure, tempMax, tempMin, icon, description }, weathers]
  }
  return null
}

export function getOneCallWeather ({ location }) {
  // console.log(`${process.env.REACT_APP_API_URL}/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
  return fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
    // return fetch('./jsonOneCall.json')
    .then(res => res.json())
    .then(responseTodata)
}
