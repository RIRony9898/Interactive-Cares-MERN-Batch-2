//class - 1.2 Basis JS structure and how to show js output
console.log("Hello World");


//class - 1.3 variable & constant in js

//Variable neyar jonno let & var use kora hoy
let firstName = 'John' //output: John
var lastName = 'Islam'
var age = '26'
console.log(firstName);
console.log(lastName);
console.log(age);

//variable jekono somoy change kora jay
firstName = 'Raisul'
console.log(firstName); //output: Raisul

//constant neyar jonno const use kora hoy
const PI = 3.1416
console.log(PI);


//class - 1.4 Naming a variable

/*Naming conversion er jonno 4 ta way ase
1. firstName -This is mostly use - etar nam hocche camelCase
2. first_Name -eta php te besi use kora hoy
3. FirstName -class er nam er khetre erkm vabe lekha hoy
4. FIRSTNAME -constant lkhar khetre eta use kora hoy*/
const TITLE = 'I live in Bangladesh'
console.log(TITLE);

//Varaible er khetre ki ki lkha jay - a-z,_,$.0-9


//class - 1.5 Comments in JS

//Single Line Comment

/*
Multiple
Line
Comment
*/


//class - 1.6 Understanding Data Types

/*
String - 'I am a student'
Number - 26
Boolean - true/false
Float - 45.34
Array - ["fruit","vegetables",drinks]
*/


//class - 1.7 Data Types in JS

/**
/**
 * 1. Primitive values
 *  a. String*/
let str = "Raisul Islam Rony";
console.log(str);
console.log(typeof str); //typeof deyar karone bole dicche data ta kon type er

/* b. Number
*  c. Boolean -bool
*  d. Undefined -und
*  e. Null
*/
let nl = null;
console.log(typeof nl); //eta js er ekta bug
/*  f. BigInt
*  g. Symbol

* 2.Object -uporer 7 ta type chara baki ja thake sb e object ex:array
* 
* check: typeof
*/
//-----initiate data------
let atr;
//-----assign data------
atr= 'Raisul Islam Rony'


//class - 1.8 Implicit Type Coersion
//perseInt


//class - 1.9 Truthy Value Falsy Value

//Falsy Values
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN));

//Falsy values gulo chara baki ja kisu ase sb e truthy value
console.log(Boolean("Hello"));
console.log(Boolean(123456));

















