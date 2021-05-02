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
        arr.push(parseInt(args[i])); //
    }
    convertNumToString(arr); // <-- The function where we'll do all the work
}

// Array of Integers -> Array of Strings
let convertNumToString = function(array) {
    let result = []; // <-- push the strings into result
    if (array.length === 0 || array === null) {
        console.log("");
        return;
    }

    let cache = new Map(); // Optimize, trade space for time, so it'll be faster if we run the function with duplicate entries i.e. (node main.js 3 3 3)

    for (let i = 0; i < array.length; i++) {
        if (cache.has(array[i])) {
            result.push(cache.get(array[i]));
        } else {
            let convertedNumber = convert(array[i]); // Convert each entry into its phonetics with a helper function
            cache.set(array[i], convertedNumber);
            result.push(convertedNumber);
        }
    }
    console.log(result.join(',')); // Join the array to form a new string with commas between each entry
}

let convert = function(num) {
    num = num.toString();
    let numString = "";
    for (let n of num) { // get the mappings of each digit and add it to the string
        numString += map[n];
    }
    return numString;
}

main();
