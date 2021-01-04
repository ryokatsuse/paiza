// https://paiza.jp/challenges/331/ready

/**
 *
 *
 * @param {number} funding 元手
 * @param {number} before 株価上昇前の金額
 * @param {number} after  株価上昇後の金額
 */
const stockProfit = (funding, before, after) => {
  console.log(funding)
  console.log(before)
  console.log(after)
  const profit = (funding * after) - (funding * before)
  console.log(profit)
}

stockProfit(50, 2, 5)