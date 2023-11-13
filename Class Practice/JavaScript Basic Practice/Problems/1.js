// Data Types-Lab 1:

// 1. Write a program to enter two numbers and find their sum.

var a = prompt("Enter 1st number: ");
var b = prompt("Enter 2nd number: ");
sum = (+a) + (+b);
console.log("Result: " + sum);

// 2. Write a program to enter two numbers and perform all arithmetic operations.

var a = prompt("Enter 1st number: ");
var b = prompt("Enter 2nd number: ");

sum = (+a) + (+b);
console.log("Sum = " + sum);
sub = (+a) - (+b);
console.log("Sub = " + sub);
mul = (+a) * (+b);
console.log("Mul = " + mul);
div = (+a) / (+b);
console.log("Div =  " + div);

// 3. Write a program to enter length and breadth of a rectangle and find its perimeter.

var length = prompt("Enter length: ");
var breadth = prompt("Enter breadth: ");
perimeter = 2 * ((+length) + (+breadth));
console.log("Perimeter = " + perimeter);

// 4. Write a program to enter length and breadth of a rectangle and find its area.

var length = prompt("Enter length: ");
var breadth = prompt("Enter breadth: ");
area = (+length) * (+breadth);
console.log("Area = " + area);

// 5. Write a program to enter radius of a circle and find its diameter, circumference and area.

var radius = prompt("Enter radius: ");
diameter = 2 * radius;
circumference = 2 * Math.PI * radius;
area = Math.PI * Math.pow (radius , 2);
console.log("Diameter = " + diameter);
console.log("Circumference = " + circumference);
console.log("Area = " + area);

// 6. Write a program to enter length in centimeter and convert it into meter and kilometer.

var length = prompt("Enter length in centimeter: ");
console.log("Length in meter = " + length / 100);
console.log("Length in kilometer = " + length / 100000);

// 7. Write a program to enter temperature in °Celsius and convert it into °Fahrenheit. C/5=(F-32)/9

var temperature = prompt("Enter temperature in °Celsius: ");
console.log("Temperature in °Fahrenheit = " + (temperature * 9 + (5*32))/5);

// 8. Write a program to enter temperature in Fahrenheit(°F) and convert it into Celsius(°C)

var temperature = prompt("Enter temperature in °Fahrenheit: ");
console.log("Temperature in °Celsius = " + ((temperature - 32)*5) / 9);

// 9. Write a program to convert days into years, weeks and days.

var days = prompt("Enter days: ");
console.log("Years = " + days / 365);
console.log("Weeks = " + days / 7);
console.log("Days = " + days);

// 10.Write a program to find power of any number x ^ y.

var number = prompt("Enter number: ");
var power = prompt("Enter power: ");
console.log("Power = " + Math.pow(number, power));

// Conditional Logic- Lab 2, Lab 3:

// 1. Write a program to find maximum between two numbers.

var number1 = prompt("Enter number 1: ");
var number2 = prompt("Enter number 2: ");
var max = Math.max(number1, number2);
console.log("Maximum = " + max);

// 2. Write a program to find maximum between three numbers.

var number1 = prompt("Enter number 1: ");
var number2 = prompt("Enter number 2: ");
var number3 = prompt("Enter number 3: ")
var max = Math.max(number1, number2, number3);
console.log("Maximum = " + max);

// 3. Write a program to check whether a number is even or odd.

var number = prompt("Enter number: ");
var remainder = number % 2;
if (remainder == 0) {
    console.log("Number is even");
} else {
  console.log("Number is odd");
}

// 4. Write a C program to check whether a year is leap year or not.

var year = prompt("Enter year: ");
var year = parseInt(year);
if (year % 4 == 0) {
    console.log("Leap year");
} else {
  console.log("Not leap year");
}

// 5. Write a program to check whether a number is negative, positive or zero.

var number = prompt("Enter number: ");
var number = parseInt(number);
if (number == 0) {
    console.log("Number is zero");
} else if (number > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// 6. Write a program to check whether a number is divisible by 5 and 11 or not.

var number = prompt("Enter number: ");
var number = parseInt(number);
if (number % 5 == 0 && number % 11 == 0) {
    console.log("Number is divisible by 5 and 11");
} else {
  console.log("Number is not divisible by 5 and 11");
}

// 7. Write a program to count total number of notes in given amount. 5986

var amount = prompt("Enter amount: ");
var amount = parseInt(amount);
var notes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var count = 0;
for (var i = 0; i < notes.length; i++) {
  var note = notes[i];
  var noteCount = Math.floor(amount / note);
  count += noteCount;
  amount = amount % note;
}
console.log(count);

// 8. Write a program to check whether a character is alphabet or not.

var character = prompt("Enter character: ");
if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
    console.log("Character is alphabet");
} else {
  console.log("Character is not alphabet");
}

// 9. Write a program to input any alphabet and check whether it is vowel or consonant.

var character = prompt("Enter character: ");
if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
  if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' ||
    character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U') {
    console.log("Character is vowel");
  } else {
  console.log("Character is consonant");
}
} else {
console.log("Character is not alphabet");
}

// 10.Write a program to input any character and check whether it is alphabet, digit or special character.

var character = prompt("Enter character: ");
if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
  console.log("Character is alphabet");
} else if (character >= '0' && character <= '9') {
  console.log("Character is digit");
} else {
  console.log("Character is special character");
}

// 11.Write a program to check whether a character is uppercase or lowercase alphabet.

var character = prompt("Enter character: ");
if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
  if (character >= 'A' && character <= 'Z') {
    console.log("Character is uppercase alphabet");
  } else {
    console.log("Character is lowercase alphabet");
  }
} else {
  console.log("Character is not alphabet");
}

// 12.Write a program to input week number and print week day.

var weekNumber = prompt("Enter week number: ");
var weekNumber = parseInt(weekNumber);
switch (weekNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid week number");
}

// 13.Write a program to input month number and print number of days in that month.
// 14.Write a program to input angles of a triangle and check whether triangle is valid or not.
// 15.Write a program to input all sides of a triangle and check whether triangle is valid or not.
// 16.Write a program to check whether the triangle is equilateral, isosceles or scalene triangle.
// 17.Write a program to find all roots of a quadratic equation.
// 18.Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer Calculate percentage and grade
    // according to following:
    // Percentage >= 90%: Grade A
    // Percentage >= 80%: Grade B
    // Percentage >= 70%: Grade C
    // Percentage >= 60%: Grade D
    // Percentage >= 40%: Grade E
    // Percentage < 40%: Grade F
// 19.Write a C program to input basic salary of an employee and calculate its
    // Gross salary according to following:
    // Basic Salary <= 10000: HRA = 20%, DA = 80%
    // Basic Salary <= 20000: HRA = 25%, DA = 90%
    // Basic Salary > 2000: HRA = 30%, DA = 95%

// 20. Write a C program to input electricity unit charges and calculate total
    // electricity bill according to the given condition:
    // For first 50 units Rs. 0.50/unit
    // For next 100 units Rs. 0.75/unit
    // For next 100 units Rs. 1.20 / unit
    // For unit above 250 Rs. 1.50/unit
              // An additional surcharge of 20% is added to the bill

// Loop/Nested Loop-Lab 4, Lab 5, and Lab 6:

// 1. Write a program to print all natural numbers from 1 to n. - using while loop
// 2. Write a program to print all natural numbers in reverse (from n to 1). - using while loop
// 3. Write a program to print all alphabets from a to z. - using while loop





// 4. Write a program to print all even numbers from 1 to 100. - using while loop
// 5. Write a program to print all odd number from1 to 100.
// 6. Write a program to print sum of all even numbers between 1 to n.
// 7. Write a program to print sum of all odd numbers between 1 to n.
// 8. Write a program to print table of any number.
// 9. Write a program to enter any number and calculate sum of all natural numbers between 1 to n.
// 10.Write a program to find first and last digit of any number.
// 11.Write a program to count number of digits in any number.
// 12.Write a program to calculate sum of digits of any number.
// 13.Write a program to calculate product of digits of any number.
// 14.Write a program to swap first and last digits of any number.
// 15.Write a program to find sum of first and last digit of any number.
// 16.Write a program to enter any number and print its reverse.
// 17.Write a program to enter any number and check whether the number is palindrome or not.
// 18.Write a program to find frequency of each digit in a given integer.
// 19.Write a program to enter any number and print it in words.
// 20.Write a program to print all ASCII character with their values.
// 21.Write a program to find power of any number using for loop.
// 22.Write a program to enter any number and print all factors of the number.
// 23.Write a program to enter any number and calculate its factorial.
// 24.Write a program to find HCF (GCD) of two numbers.
// 25.Write a program to find LCM of two numbers.
// 26.Write a program to check whether a number is Prime number or not.
// 27.Write a program to check whether a number is Armstrong number or not.
// 28.Write a program to check whether a number is Perfect number or not.
// 29.Write a program to check whether a number is Strong number or not.
// 30.Write a program to print all Prime numbers between 1 to n.
// 31.Write a program to print all Armstrong numbers between 1 to n.
// 32.Write a program to print all Perfect numbers between 1 to n.
// 33.Write a program to print all Strong numbers between 1 to n.
// 34.Write a program to enter any number and print its prime factors.
// 35.Write a program to find sum of all prime numbers between 1 to n.
// 36.Write a program to print Fibonacci series up to n terms.

// Array + Function– Lab 7, Lab 8, Lab 9 and Lab 10:

// 1. Write a program to find second largest element in an array.
// 2. Write a program to count total number of even and odd elements in an array.
// 3. Write a program to count total number of negative elements in an array.
// 4. Write a program to copy all elements from an array to another array.
// 5. Write a program to insert an element in an array.
// 6. Write a program to delete an element from an array at specified position.
// 7. Write a program to print all unique elements in the array.
// 8. Write a program to count total number of duplicate elements in an array.
// 9. Write a program to delete all duplicate elements from an array.
// 10.Write a program to count frequency of each element in an array.
// 11.Write a program to merge two arrays to third array.
// 12.Write a program to find reverse of an array.
// 13.Write a program to put even and odd elements of array in two separate arrays.
// 14.Write a program to search an element in an array.
// 15.Write a program to sort array elements in ascending order.
// 16.Write a program to sort array elements in descending order.
// 17.Write a program to sort even and odd elements of array separately.
// 18.Write a program to add two matrices.
// 19.Write a program to subtract two matrices.
// 20.Write a program to perform Scalar matrix multiplication.
// 21.Write a program to multiply two matrices.
// 22.Write a program to check whether two matrices are equal or not.
// 23.Write a program to find sum of main diagonal elements of a matrix.
// 24.Write a program to find sum of minor diagonal elements of a matrix.
// 25.Write a program to find sum of each row and column of a matrix.
// 26.Write a program to interchange diagonals of a matrix.
// 27.Write a program to find upper triangular matrix.
// 28.Write a program to find lower triangular matrix.

// Structure-Lab 11, Lab 12:

// ● Make a data repository/ database like library management, bank
// management, and result management on a very minimal scale.
// Pointer-Lab 13:
// 1. How to use pointer
// 2. Application of pointer
// 3. Why we use it
// 4. Good side / Downside
// 5. Create a simple linked list
// Group Study Problem
// 1. How to find sum of n numbers.
// 2. How to make continue calculation until user want to stop.
// 3. How to make a scientific calculator using C programming language.
// 4. How to serial input numbers in ascending & descending orders.