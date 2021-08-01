
const responseTodata = apiResponse => {
  const { list = [] } = apiResponse

  if (Array.isArray(list)) {
    const weathers = list.map(item => {
      const { dt } = item
      const { icon, main, description } = item.weather[0]
      const dtTxt = item.dt_txt
      const temp = item.main.temp
      const tempMin = item.main.temp_min
      const tempMax = item.main.temp_max
      return { dt, dtTxt, icon, main, description, temp, tempMin, tempMax }
    })
    return weathers
  }
  return []
}

export function getForecastWeather ({ cytiId }) {
  // return fetch(`${process.env.REACT_APP_API_URL}/forecast?id=${cytiId}&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
  return fetch('./jsonForecast.json')
    .then(res => res.json())
    .then(responseTodata)
}
