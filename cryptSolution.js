let crypt = ["SEND", "MORE", "MONEY"];

let solution = [['O', '0'],
                ['M', '1'],
                ['Y', '2'],
                ['E', '5'],
                ['N', '6'],
                ['D', '7'],
                ['R', '8'],
                ['S', '9']];



function isCryptSolution(crypt, solution) {
  let expectedResult = true
  
  solution = solution.reduce((acc, index) => {
    acc[index[0]] = index[1]
    return acc
  }, {})
  
  let result = crypt.map(word => {
    let num = ''
    word.split('').forEach(letter => {
      num += solution[letter]
    })
    return num
  })
  
  if ((+result[0] + +result[1] !== +result[2])) {
    expectedResult = false
  }
  if ((result[0][0] === '0' || result[0][1] === '0' && result [2][0] === '0'|| result[1][0] === '0' && result[1][1] === '0') && result[0].length !== 1) {
    expectedResult = false
  }

  return expectedResult
}function isCryptSolution(crypt, solution) {
  let expectedResult = true
  
  solution = solution.reduce((acc, index) => {
    acc[index[0]] = index[1]
    return acc
  }, {})
  
  let result = crypt.map(word => {
    let num = ''
    word.split('').forEach(letter => {
      num += solution[letter]
    })
    return num
  })
  
  if ((+result[0] + +result[1] !== +result[2])) {
    expectedResult = false
  }
  if ((result[0][0] === '0' || result[0][1] === '0' && result [2][0] === '0'|| result[1][0] === '0' && result[1][1] === '0') && result[0].length !== 1) {
    expectedResult = false
  }

  return expectedResult
}

console.log(isCryptSolution(crypt, solution));





