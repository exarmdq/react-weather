
const DAY_NAMES = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
const MONTH_NAMES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

export const FormatDate = (value) => {
  let { dateFormat, dateValue, unix } = value

  dateValue = unix ? new Date(dateValue * 1000) : new Date(dateValue)

  let hour = dateValue.getHours()
  hour = (hour < 10 ? '0' : '') + hour

  let minutes = dateValue.getMinutes()
  minutes = (minutes < 10 ? '0' : '') + minutes

  const date = dateValue.getDate()
  const month = dateValue.getMonth() + 1
  const year = dateValue.getFullYear()

  const monthName = MONTH_NAMES[dateValue.getMonth()]
  const dateName = DAY_NAMES[dateValue.getDay()]

  dateFormat = dateFormat.replace('%h', hour)
  dateFormat = dateFormat.replace('%hm', minutes)
  dateFormat = dateFormat.replace('%d', date)
  dateFormat = dateFormat.replace('%D', dateName)
  dateFormat = dateFormat.replace('%m', month)
  dateFormat = dateFormat.replace('%M', monthName)
  dateFormat = dateFormat.replace('%y', year)

  return dateFormat
}
