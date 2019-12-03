// SELECTING THE ELECTION WINNER
// function president returns the number of candidate that got most votes.
// note: in case of even votes, the first candidate in the list getting most votes gets elected

function president (votes) {
  const candidateList = new Set(votes)
  const winningCandidate = {
    candidate: '',
    votesTotal: 0
  }
  function countVotes (candidateNumber) {
    let numberOfvotes = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] === candidateNumber) {
        numberOfvotes++
      }
    }
    if (numberOfvotes > winningCandidate.votesTotal) {
      winningCandidate.candidate = candidateNumber
      winningCandidate.votesTotal = numberOfvotes
    }
  }

  candidateList.forEach(countVotes)
  return winningCandidate.candidate
}
console.log(president([
  3,
  2,
  1,
  3,
  2,
  2,
  1,
  2,
  2
]))
