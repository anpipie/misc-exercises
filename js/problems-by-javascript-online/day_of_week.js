// returns the day of the week for a given date. Ready-made date methods were not used.
function dayOfWeek (year, month, day) {
  let daysTotal = 0
  const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const daysPerMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const dayNames = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']

  function isLeapYear (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true
    } if (year % 400 === 0) {
      return true
    } else {
      return false
    }
  }

  function totalSum (total, value) {
    return total + value
  }

  // years
  for (let i = 1900; i < year; i++) {
    if (isLeapYear(i)) {
      daysTotal = daysTotal + daysPerMonthLeap.reduce(totalSum)
    } else {
      daysTotal = daysTotal + daysPerMonth.reduce(totalSum)
    }
  }

  // months
  for (let i = 1; i < month; i++) {
    if (isLeapYear(year)) {
      daysTotal = daysTotal + daysPerMonthLeap[i - 1]
    } else {
      daysTotal = daysTotal + daysPerMonth[i - 1]
    }
  }

  // days
  daysTotal = daysTotal + day - 1
  console.log(dayNames[daysTotal % 7])
  return dayNames[daysTotal % 7]
}

dayOfWeek(1900, 1, 2)
dayOfWeek(2019, 10, 19)
