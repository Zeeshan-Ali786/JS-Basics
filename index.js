//this is my first java script code
console.log('Hello World')

let name = 'Zeeshan';
console.log(name);
                            // VARIABLES
                            console.log('VARIABLES')
//Rules for naming variables 
//the variable name cannot be a reserved keyword name like if let etc    // let if = 'zeeshan'
// And variable name also should be meaningfull like a, b, x, y, a1, b1 thess are not meaning full variables
//variable name cannot start with a number like (1name) etc
//variable name cannot contain  spaces and hyphen (-)
//long name should be written in camel notation
// we can also define multiple variables in on line
let firstName = 'Zeeshan', lastName = 'Ali';  
console.log(firstName,lastName)

                            // CONSTANT
                            console.log('CONSTANT')
let intrestRate = 0.5;
intrestRate = 1;
console.log(intrestRate);
// if you change value of variable the last updated value would be should and previous value would be terminated
const intrestPrice = 0.5;
// intrestPrice = 1;
console.log(intrestPrice);
// but if you use constant then you cant change its value

                            //PRIMITIVE/VALUE TYPEs
//what kind of value you can assign to the variable String,Number,boolean,undefined,null
let myName = 'Zeeshan';       //string literal
let age = 20;                 //Number Literal
let isApproved = true;       //Boolean
let fname = undefined;       //if you dont give it value it also undefined
let lNmae = null;

//REFRENCE TYPE   Objects, Array and Functions
console.log('REFRENCE TYPE')
// Objects       //{}  this bracket is object literal
 let person = {
    perName: 'Waqas',
    perAge: '22'
};
// to change the name we have two properties
// 1 : Dot Notation
person.perName = 'Adeel';

// 2: Bracket Notation
// person['perName'] = 'Ahmad';  //2.1
let selected = 'perName';           //2.2
person[selected] = 'Ahmad';
console.log(person);
console.log(person.perName);

// Array     //[] this bracket is array literal
let selectedColor = ['red', 'green'];
selectedColor[2] = 'yellow'
selectedColor[3] = 1
console.log(selectedColor);     //each item have index number that determines the position of element in the array 
console.log(selectedColor[1]);   //color in index one is green and index 0 is red

console.log('Length of Array is ',selectedColor.length);   // this property returns number of items and length in a array

// Another EXample of Array
const numbers = [1, -1, 2, 3];
let sum = 0;
for(let n of numbers)
    sum += n;
console.log('Sum = ', sum)
// OR
const add = numbers.reduce(
    (accumilator, currentValue) => accumilator +currentValue
);
console.log("(Using Reduce function) Sum = ", add)

// Filtering an Array
console.log('Filtering an Array');
const filtered = numbers.filter(n => n >= 0);  
console.log('Filter Array (PositiveValus) = ' , filtered)
//filter function is use in reasl life like if you search opened resturents of all available returents available in array then if filter the timing of all resturents and display all opened resturents

// Mapping An Array
console.log('Mapping An Array')
const mappedItems= numbers
        .filter(n => n >= 0)
        .map(n => ({value: n}))
        .filter(obj => obj.value > 1)
        .map(obj => obj.value);
console.log('Mapping an array = ', mappedItems)

// FUNCTIONS
console.log('FUNCTIONS');
//This function performing a task
console.log('This function performing a task')
function greet(friendName, fatherName){       //friendName is parameter of this function
    console.log('Hello ' + friendName + ' ' + fatherName)
}
greet('Mohsin','Shahid')    //mohsin is argument
greet('Hassan','Shahid')    //hassan is argument

//This Function Calculating a value
console.log('This Function Calculating a value')
function square(numberSquare){
    return numberSquare * numberSquare;
}
console.log(square(3))   //here 2 functions defines one is cnsole and second is square

// Bitwise OPerator
console.log('BITWISE OPERATOR')
// console.log(1 || 2); //logical OR
console.log('Bitwise OR = ' , 1 | 2); //bitwise OR
// 1 = 00000001
// 2 = 00000010
// Bitwise Or(Plus) = 00000011   (that is equal to 3)

console.log('Bitwise AND = ' , 1 & 2); //bitwise AND
// 1 = 00000001
// 2 = 00000010
// Bitwise Or(mul) = 00000000   (that is equal to 0)

// Real Life Example
// Read(00000100 = 4), Write(00000010 = 2), Execute(00000001 = 1)
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message)

// Let vs Var
//var => function-scoped
//let, const => block-scoped
function start(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    // console.log(i)    if we use var instead of let these two console will work bcz var is global/function scoped
}
start();

// Strings
console.log('String')
// String Primitives
const stringPrimitives = 'This is String Primitive';
console.log(stringPrimitives);

// string Object
const stringObject = new String('typeof this string is object');
console.log(stringObject);

// escape Notations
console.log('Escape Notation in String')
console.log('This is how using \'Single Quote\'')
console.log('This is how using \"Double Quote\"')
console.log('This is how using \\BackSlash')
console.log('This is how using \tTab')
console.log('This is how using \nNew Line')

// Template Literals
console.log('\nTemplate Literals')
//object Literal  : {}
// Boolean Literal : true, false
// string Literal : '' , ""
// Template Literal : ``

// in template literal there is no need to use \n 