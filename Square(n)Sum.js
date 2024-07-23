//   Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
 
// 1²+2²+2² = 9
function squareSum(numbers){
    let sum = 0 ;
    for(let ele of numbers){
         sum += ele ** 2;
    }
    return sum;
  }

  console.log(squareSum([1, 2, 2]));