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
let fname = undefined;       //if you font give it value it also undefined
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
console.log(square(3))