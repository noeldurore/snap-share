/* filename: complex_code.js */

// This code is an example of a complex javascript program that demonstrates various concepts and functionalities.

// Variable to store the final result
let finalResult = 0;

// Function to calculate the factorial of a number
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// Loop to calculate the sum of factorials of the first 10 numbers
for (let i = 1; i <= 10; i++) {
  finalResult += factorial(i);
}

// Output the final result
console.log("The sum of the factorials of the first 10 numbers is: " + finalResult);

// Array to store random numbers
let numbersArray = [];

// Generate 100 random numbers between 1 and 1000 and store them in the array
for (let i = 0; i < 100; i++) {
  let randomNumber = Math.floor(Math.random() * 1000) + 1;
  numbersArray.push(randomNumber);
}

// Function to filter even numbers from the array
function filterEvenNumbers(array) {
  let filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

// Filter even numbers from the array
let evenNumbersArray = filterEvenNumbers(numbersArray);

// Output the even numbers
console.log("Even numbers from the generated array:", evenNumbersArray);

// Class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

// Create new person objects
let person1 = new Person("John Doe", 25);
let person2 = new Person("Jane Smith", 30);

// Call the greet method on the objects
person1.greet();
person2.greet();

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Output prime numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i + " is a prime number.");
  }
}

// Recursive function to calculate the Fibonacci sequence
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Output the Fibonacci sequence up to the 10th number
console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

// Function to reverse a string
function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// Reverse a given string
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

// ... continue the code with more complexity and functionality ...

// Note: This code is for demonstrative purposes and may not serve any practical use.