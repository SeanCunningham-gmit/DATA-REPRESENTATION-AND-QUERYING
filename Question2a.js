
const x = (input) => {
    console.log("Data Representation & Querying");
    return input;  // Return the passed argument
};

const result = x("This is the output for question 2 b");  // Call the function 
console.log(result);  // Output the returned value

// Arrow function
const sumNumbers = (num1, num2) => {
    return num1 + num2;  // Return the sum 
};

const sumResult = sumNumbers(5, 10);  // Call the function 
console.log(sumResult);  // Output the sum to the console

// New function 
const ages = [25, 31, 42, 77];
// this will take all of the ages in the array under 70 and will muiplty them by 2.
const multiplyUnder70 = ages.map(num => {
    return num < 70 ? num * 2 : num;  
});

console.log(multiplyUnder70); //outputting the results from the fucntion to the console 