'use strict'

/**
 * Take n as argument push all even number from 1 to n
 * in array and returns array back
 * @param {Number}
 * @return {Array} - even numbers up to n
 */
const pushEventUpToN = (n) => {
  const results = []

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      results.push(i)
    }
  }

  return results
}

exports.pushEventUpToN = pushEventUpToN
