// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num){
    let array = num.toString().split('').map(Number);
    // console.log(array);
    // console.log(typeof(array));
    let result= '';
    for(let i = 0; i < array.length; i++){
        // console.log(array[i])
        result += (array[i] * array[i]).toString()
        // console.log(result);
        // console.log(typeof(result));
    }
    return parseInt(result); // Convert the result string back to a number
  }


  console.log(squareDigits(3212)); //9414