// Initialize the map for the function, with each number corresponding to its phonetic counterpart
const map = {
    '1' : 'One',
    '2' : 'Two',
    '3' : 'Three',
    '4' : 'Four',
    '5' : 'Five',
    '6' : 'Six',
    '7' : 'Seven',
    '8' : 'Eight',
    '9' : 'Nine',
    '0' : 'Zero'
}
// I used the string '1' instead of the integer 1 because on terminal when passing extra parameters,
// i.e. (node main.js 3) the 3 is processed as a string which makes it easier to write the funcion by abit


// Creating the main function that we'll use, to process the variables
let main = function() {
    let args = process.argv;
    let arr = [];
    for (let i = 2; i < args.length; i++) {
        arr.push(args[i]);
    }
    convertNumToString(arr); // <-- The function where we'll do all the work
}

let convertNumToString = function(array) {
    let result = []; // <-- push the strings into result
    for (let i = 0; i < array.length; i++) {
        let convertedNumber = convert(array[i]); // Convert each entry into its phonetics with a helper function
        result.push(convertedNumber);
    }
    return result.join(',') // Join the array to form a new string with commas between each entry
}
