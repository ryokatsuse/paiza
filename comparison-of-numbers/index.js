
/**
 * @see https://paiza.jp/challenges/31/show
 *
 * @param {*} a
 * @param {*} b
 * @return {*} 
 */
const comparisonOfNumbers = (a, b) => {
  if(a === b) {
    return console.log('eq')
  } else {
    const array1 = [a, b]
    console.log(Math.max(...array1))
  }
}

comparisonOfNumbers(20, 20) // eq
comparisonOfNumbers(9, 20) // 20