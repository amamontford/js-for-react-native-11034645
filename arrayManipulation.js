// Task one 
function processArray(numberArray) {
    const emptyArray = [];
    for (let i = 0; i < numberArray.length; i++) {
        const num = numberArray[i];
        if (num % 2 === 0) {
            emptyArray.push(num * num);
        } else {
            emptyArray.push(num * num * num);
        }
    }
    return emptyArray;
}

// Example usage:
// const inputArray = [1, 2, 3, 4, 5];
// const processedArray = processArray(inputArray);
// console.log(processedArray); // Output: [1, 4, 27, 16, 125]


// Task two
function formatArrayStrings(stringArray, numberArray) {
    // Check if both arrays are of the same length
    if (stringArray.length !== numberArray.length) {
        throw new Error("Both arrays must be of the same length.");
    }
    const formattedArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        const number = numberArray[i];
        const str = stringArray[i];

        if (number % 2 === 0) {
            formattedArray.push(str.toUpperCase());
        } else {
            formattedArray.push(str.toLowerCase());
        }
    }

    return formattedArray;
}

// Example usage:
// const strings = ["one", "two", "three", "four", "five"];
// const numbers = [1, 2, 3, 4, 5];
// const processedNumbers = processArray(numbers);
// const formattedStrings = formatArrayStrings(strings, processedNumbers);

// console.log(formattedStrings);


