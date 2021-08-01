export const CheckDate = (endDate, startDate) => {
  if (startDate === '') return true

  const diffInMs = new Date(endDate) - new Date(startDate)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  return diffInDays === 1
}

/*  function timeConverter (unix) {
    const a = new Date(unix * 1000)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const year = a.getFullYear()
    const month = months[a.getMonth()]
    const date = a.getDate()
    const hour = a.getHours()
    const min = a.getMinutes()
    const sec = a.getSeconds()
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
    return time
  } */
