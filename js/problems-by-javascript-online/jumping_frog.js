// A frog can either hop 5 cm or jump 10 cm forward. Calculate how many different ways there are for the frog
// to move forward by a given distance. For example, the frog can move forward 15 cm in 3 different ways:
//  "hop->hop->hop", "jump->hop", and "hop->jump". The maximum distance is 4 meters.
// Note: Fibonacci sequence!
function jumpingFrog (d) {
  let combinations = [0, 1]
  let sumPrevius = 0
  for (let i = 1; i <= d / 5; i++) {
    sumPrevius = combinations[0] + combinations[1]
    combinations = [combinations[1], sumPrevius]
  }
  return combinations[1]
}
console.log(jumpingFrog(20))
