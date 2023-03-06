export const formatDate = (date: any) => {
  let dateToConvert
  if (date === '') {
    dateToConvert = new Date()
  } else {
    dateToConvert = new Date(date)
  }

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const curr = dateToConvert.getDate()
  const day = days[dateToConvert.getDay()]
  const month = months[dateToConvert.getMonth()]

  return {
    dayAndMonth: `${day}, ${curr} ${month}`,
  }
}
