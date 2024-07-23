// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    if(!array || array.length == 0 || array.length == 1){
        return 0;
    }
  const min = Math.min(...array);
  const max = Math.max(...array);
  //   console.log(`Minimum: ${min}`); // Minimum: 1
  //   console.log(`Maximum: ${max}`); // Maximum: 9
//   const newArr = array.filter((elem) => elem !== min && elem !== max);
//   console.log(newArr);
// Crée une copie du tableau pour éviter de modifier l'original
let newArr = [...array];

// Fonction pour supprimer la première occurrence d'un élément
function removeFirstOccurrence(arr, value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

// Retire une occurrence de min et de max
removeFirstOccurrence(newArr, min);
removeFirstOccurrence(newArr, max);

// Calcule la somme des éléments restants
  let sum = 0;
  for (let ele of newArr) {
    sum += ele;
  }
  return sum;
}
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([ 0, 1, 6, 10, 10 ]));      // 17 
