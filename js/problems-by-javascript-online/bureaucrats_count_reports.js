
// We have access to the organizational chart of a company. We would like to know how many people are in the organization
// led by a specific person, or in other words, how many people (including that specific person) directly or indirectly
// report to him. Every person except for the head of the company reports to exactly one other person.
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
