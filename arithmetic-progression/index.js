
/**
 * @see https://paiza.jp/challenges/40/show
 *
 * @param {*} n
 * @param {*} m
 */
const arithmeticProgression = (n, m) => {
  Array.apply(null,new Array(10)).map((v,i) => {
    return n+(i*m)
  })
}

console.log(arithmeticProgression(2, 4))