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
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [1, 4, 27, 16, 125]


