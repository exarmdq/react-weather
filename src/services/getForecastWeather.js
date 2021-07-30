
const checkDate = (endDate, startDate) => {
  if (startDate === '') return true

  const diffInMs = new Date(endDate) - new Date(startDate)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  return diffInDays === 1
}

const responseTodata = apiResponse => {
  const { list = [] } = apiResponse
  const data = []

  if (Array.isArray(list)) {
    let element = ''
    list.forEach(item => {
      if (checkDate(item.dt_txt, element)) {
        element = item.dt_txt
        data.push(item)
      }
    })

    const weathers = data.map(item => {
      const { dt } = item
      const { icon, main } = item.weather[0]
      const dtTxt = item.dt_txt
      const temp = item.main.temp
      const tempMin = item.main.temp_min
      const tempMax = item.main.temp_max
      return { dt, dtTxt, icon, main, temp, tempMin, tempMax }
    })
    return weathers
  }
  return []
}

export function getForecastWeather ({ cytiId }) {
  console.log(`${process.env.REACT_APP_API_URL}/forecast?id=${cytiId}&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
  // return fetch(`${process.env.REACT_APP_API_URL}/forecast?id=${cytiId}&appid=${process.env.REACT_APP_API_KEY}&lang=es&units=metric`)
  return fetch('./jsonForecast.json')
    .then(res => res.json())
    .then(responseTodata)
}
