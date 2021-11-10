// create your calculator module here
var calculator = (function(){
  return {
     plus(firstNumber){
       return function(secondNumber){
         return firstNumber + secondNumber;
       }
     },
     minus(firstNumber){
       return function(secondNumber){
         return secondNumber - firstNumber;
       }
     },
     times(firstNumber){
       return function(secondNumber){
         return firstNumber * secondNumber;
       }
     },
     dividedBy(firstNumber){
       return function(secondNumber){
         return secondNumber / firstNumber;
       }
     }
  }
})();


// Do NOT touch this code
const testCases = [
  { type: "plus", n1: 3, n2: [1, 2, 3], expected: [4, 5, 6] },
  { type: "minus", n1: 1, n2: [1, 0, -1], expected: [0, -1, -2] },
  { type: "times", n1: 5, n2: [2, 5, 10], expected: [10, 25, 50] },
  { type: "dividedBy", n1: 10, n2: [10, 100, 1000], expected: [1, 10, 100] }
];
​
const result = testCases.every(test => {
  const operation = calculator[test.type](test.n1);
  return test.n2.every((number, i) => {
    const testPassed = operation(number) === test.expected[i];
    if (!testPassed) {
      console.log(`Expected: ${operation(number)} to be: ${test.expected[i]}. Operation: secondNumber(${number}) ${test.type} firstNumber(${test.n1})`);
    }
    return testPassed;
  });
});
​
console.log("All tests passed: ", result);