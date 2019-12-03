// Function counts how many people report to a specific person. Function takes organization chart and id number
// of the person as parameters. 
function countReports (chart, query) {
  let reportingPersons = 0

  function findID (list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === query) {
        reportingPersons++
        countReporting(list[i].reports)
        break
      } else if (list[i].reports !== []) {
        findID(list[i].reports)
      }
    }
  }
  function countReporting (list) {
    for (let i = 0; i < list.length; i++) {
      reportingPersons++
      if (list[i] !== []) {
        countReporting(list[i].reports)
      }
    }
  }

  if (chart.id === query) {
    reportingPersons++
    countReporting(chart.reports)
  } else {
    findID(chart.reports)
  }
  return reportingPersons
}

// Examples:

console.log(
  countReports({
    id: 1,
    reports: [
      {
        id: 2,
        reports: []
      },
      {
        id: 3,
        reports: [
          {
            id: 4,
            reports: []
          }
        ]
      }
    ]
  }, 3))

console.log(countReports({
  id: 1,
  reports: [
    {
      id: 2,
      reports: []
    },
    {
      id: 3,
      reports: [
        {
          id: 4,
          reports: []
        }
      ]
    }
  ]
}, 1))
