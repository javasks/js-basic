
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


Number('123')     // 123
Number('123') === 123 // true
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('foo')     // NaN
Number('100a')    // NaN
Number('-Infinity') // -Infinity

console.log(Number('-Infinity'))

const biggestNum     = Number.MAX_VALUE
const smallestNum    = Number.MIN_VALUE
const infiniteNum    = Number.POSITIVE_INFINITY
const negInfiniteNum = Number.NEGATIVE_INFINITY
const notANum        = Number.NaN

console.log(biggestNum)
console.log(smallestNum)