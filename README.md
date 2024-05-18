# js-for-react-native-11034645

# Array Manipulation and User Profile Creation

This project contains functions to process arrays of numbers and strings, and to create user profiles from modified strings. The project includes three primary tasks:

1. Processing Number Arrays: Transforming arrays of numbers based on whether they are even or odd.
2. Formatting String Arrays: Modifying string arrays based on corresponding processed numbers.
3. Creating User Profiles: Generating user profiles from arrays of original, modified strings and id .

## Table of Contents

- Installation process
- Usage
  - Task One: Process Number Arrays
  - Task Two: Format String Arrays
  - Task Three: Create User Profiles
- Examples
- Developer Information

## Installation

To use this project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject
npm install
```

## Usage

### Task One: Process Number Arrays
The `processArray` function takes an array of numbers and transforms each number based on 
whether it is even or odd:

- If the number is even, it squares the number.
- If the number is odd, it cubes the number.

### Task Two: Format String Arrays

The `formatArrayStrings` function takes two arrays: one of strings and one of numbers. 
It formats the strings based on the corresponding numbers:

- If the number is even, it converts the string to uppercase.
- If the number is odd, it converts the string to lowercase.

### Task Three: Create User Profiles
The `createUserProfiles` function creates user profiles from arrays of original and modified strings. Each profile includes an ID, the original name, and the modified name.

### Example Usage

#### Task One: Process Number Arrays
```javascript
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [1, 4, 27, 16, 125]
```

#### Task Two: Format String Arrays
```javascript
const strings = ;
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(formattedStrings); // Output: [ 'john', 'AMA', 'april', 'BEN', 'ares' ]
```

#### Task Three: Create User Profiles
```javascript
const profiles = createUserProfiles(test, modifiedNames);
console.log(profiles);
// Output:
// [
//     { id: 1, originalName: "John", modifiedName: "john" },
//     { id: 2, originalName: "Ama", modifiedName: "AMA" },
//     { id: 3, originalName: "Aril", modifiedName: "april" },
//     { id: 4, originalName: "Ben", modifiedName: "BEN" },
//     { id: 5, originalName: "Ares", modifiedName: "ares" }
// ]
```

## Developer Information

- **Name**: Ama Addae Montford
- **Student ID**: 11034645

