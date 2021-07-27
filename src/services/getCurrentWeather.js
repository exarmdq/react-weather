import { getConversion } from './getConversion'

const responseTodata = apiResponse => {
  const { name } = apiResponse
  const { icon, main } = apiResponse.weather[0]
  const temp = getConversion(apiResponse.main.temp)
  const tempMin = getConversion(apiResponse.main.temp_min)
  const tempMax = getConversion(apiResponse.main.temp_max)
  return { name, icon, main, temp, tempMin, tempMax }
}

export function getCurrentWeather ({ cytiId }) {
  // return fetch(`${process.env.REACT_APP_API_URL}/weather?id=${cytiId}&appid=${process.env.REACT_APP_API_KEY}`)
  return fetch('./jsonCurrent.json')
    .then(res => res.json())
    .then(responseTodata)
}
