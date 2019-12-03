// Calculate the minimum number of coins needed to change a given amount of money.
// For the purpose of this problem, the coin nominations are 1, 2, 5, 10, and 25 cents.
function changeCoins (money) {
  const ListOfCoinValues = [25, 10, 5, 2, 1]
  let coinsNeeded = 0

  function howManyCoins (value, coinValue) {
    coinsNeeded = coinsNeeded + Math.floor(value / coinValue)
    money = value % coinValue
  }

  for (let i = 0; i < ListOfCoinValues.length; i++) {
    howManyCoins(money, ListOfCoinValues[i])
    if (money === 0) {
      break
    }
  }
  return coinsNeeded
}
console.log(changeCoins(12))
