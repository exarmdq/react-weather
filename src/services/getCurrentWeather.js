
const responseTodata = apiResponse => {
  const { name, visibility } = apiResponse
  const { icon, main, description } = apiResponse.weather[0]
  const temp = apiResponse.main.temp
  const humidity = apiResponse.main.humidity
  const wind = apiResponse.wind.speed
  const tempMin = apiResponse.main.temp_min
  const tempMax = apiResponse.main.temp_max
  const feelsLike = apiResponse.main.feels_like
  const pressure = apiResponse.main.pressure
  return { name, icon, main, description, temp, tempMin, tempMax, feelsLike, humidity, visibility, wind, pressure }
}
export function getCurrentWeather ({ cytiId }) {
  // return fetch(`${process.env.REACT_APP_API_URL}/weather?id=${cytiId}&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
  return fetch('./jsonCurrent.json')
    .then(res => res.json())
    .then(responseTodata)
}
