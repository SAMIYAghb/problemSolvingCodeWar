// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arr = s.split(' ');
    let small= arr[0].length; // Initialize with the length of the first word;
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element)
        let arrlength = element.toString().split('').length;
        if (arrlength < small) {
            small = arrlength;
        }
       
    }
    return small;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


