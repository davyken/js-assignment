
function minNumber(a, b) {
  if (a < b) {
    return a
  } else if (a > b) {
    return b
  }
}
console.log(minNumber(5, 15))




function maxNumber(c, d) {
  if (c < d) {
    return d
  } else if (c > d) {
    return c
  }
}
console.log(maxNumber(50, 15))



function sum(a, b) {
  return a + b
}
console.log(sum(5, 25))




function pow(a, b) {
  let sum = 1
  for (let i = 1; i <= b; i++) {
    sum *= a
  }
  return (sum)
}
console.log(pow(5, 3))
console.log(pow(6, 3))