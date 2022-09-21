let lineBreak = "<br>";

document.write('Hello World')
document.write(lineBreak)

function sayHello(){
    alert('Hello World')
}

document.write(`<h1 style="text-align:center;">Variables</h1>`);
// global or local variable
var globalVar = "Global";
function checkscope(){
    var localVar = "Local";
    document.write("Local variable inside function : ",localVar);
    document.write(lineBreak);
    document.write("Global variable inside function : ",globalVar);
    document.write(lineBreak);
}
checkscope();
document.write("Global variable outside function : ",globalVar)
document.write(lineBreak)
// document.write(localVar)     local variable cant access outside function bcz scope of local variable only inside function chekscope()
document.write("<strong>local variable cant access outside function bcz scope of local variable only inside function chekscope()</strong>")

// Operators +, *, /, %, ++(increment), --(decrement)
document.write(`<h1 style="text-align:center;">Operators</h1>`);

// Arithemetic Operators
document.write("<h4>Arithemetic Operators</h4>")
// Addition
function resultAdd(x,y){
    const add = x + y;
    document.write("<strong>Addition</strong> : x = ",x," + ", "y = ",y," = ",add);
    document.write(lineBreak);
}
resultAdd(10,20)
// Subtraction
function resultSub(x,y){
    const sub = x - y;
    document.write("<strong>Subtraction</strong> : x = ",x," - ", "y = ",y," = ",sub);
    document.write(lineBreak);
}
resultSub(9,5)
// Multiplication
function resultMul(x,y){
    const mul = x * y;
    document.write("<strong>Multiplication</strong> : x = ",x," * ", "y = ",y," = ",mul);
    document.write(lineBreak)
}
resultMul(10,20)
// Division
function resultDiv(x,y){
    const div = x / y;
    document.write("<strong>Division</strong> : x = ",x," / ", "y = ",y," = ",div);
    document.write(lineBreak)
}
resultDiv(10,20)
// Modulus
function resultMod(x,y){
    const mod = x % y;
    document.write("<strong>Modulus</strong> : x = ",x," % ", "y = ",y," = ",mod);
    document.write(lineBreak)
}
resultMod(10,20)
// increment
function resultInc(x){
    const inc = ++x;
    document.write("<strong>Increment</strong> : ++x = ",inc);
    document.write(lineBreak)
}
resultInc(10)
// Decrement
function resultDec(x){
    const dec = --x;
    document.write("<strong>Decrement</strong> : --x = ",dec);
    document.write(lineBreak)
}
resultDec(10)


// Comparison Operators
document.write("<h4>Comparison Operators</h4>")
// Equal
function resultEq(x,y){
    const eq = (x == y);
    document.write("<strong>Equal</strong> : (x = ",x,") == ", "(y = ",y,") = ",eq);
    document.write(lineBreak);
}
resultEq(10,20)
// NotEqual
function resultNeq(x,y){
    const neq = x != y;
    document.write("<strong>NotEqual</strong> : (x = ",x,") != ", "(y = ",y,") = ",neq);
    document.write(lineBreak);
}
resultNeq(9,5)
// Greater Than
function resultGt(x,y){
    const gt = x > y;
    document.write("<strong>Greater Than</strong> : (x = ",x,") > ", "(y = ",y,") = ",gt);
    document.write(lineBreak)
}
resultGt(10,20)
// Less Than
function resultLt(x,y){
    const lt = x < y;
    document.write("<strong>Less Than</strong> : (x = ",x,") < ", "(y = ",y,") = ",lt);
    document.write(lineBreak)
}
resultLt(10,20)
// Greater Than or Equal to
function resultGteq(x,y){
    const gteq = x >= y;
    document.write("<strong>Greater Than or Equal to</strong> : (x = ",x,") >= ", "(y = ",y,") = ",gteq);
    document.write(lineBreak)
}
resultGteq(10,20)
// Less Than or Equal to
function resultLteq(x,y){
    const lteq = x <= y;
    document.write("<strong>Less Than or Equal to</strong> : (x = ",x,") <= ", "(y = ",y,") = ",lteq);
    document.write(lineBreak)
}
resultLteq(10,13)


//  Logical Operators
document.write("<h4>Logical Operators</h4>")
// Logical AND &&
function resultAnd(x,y){
    const and = (x && y);
    document.write("<strong>Logical AND</strong> : (x = ",x,") && ", "(y = ",y,") = ",and);
    document.write(lineBreak);
}
resultAnd(true,false)
// Logical OR ||
function resultOr(x,y){
    const or = (x || y);
    document.write("<strong>Logical OR</strong> : (x = ",x,") || ", "(y = ",y,") = ",or);
    document.write(lineBreak);
}
resultOr(true,false)
// Logical NOT ||
function resultNot(x,y){
    const not = (!(x && y));
    document.write("<strong>Logical NOT</strong> : (x = ",x,") !&& ", "(y = ",y,") = ",not);
    document.write(lineBreak);
}
resultNot(true,false)

// Bitwise Operator
document.write("<h4>Bitwise Operators</h4>")
// bitwise and
function bitwiseAnd(x,y){
    const bitand = x & y;
    document.write("<strong>Bitwise And</strong> : x & y = ",bitand);
    document.write(lineBreak);
}
bitwiseAnd(2,3);  // 2 = 00000010 //3 = 00000011
// Bitwise Or
function bitwiseOr(x,y){
    const bitor = x | y;
    document.write("<strong>Bitwise Or</strong> : x | y = ",bitor);
    document.write(lineBreak);
}
bitwiseOr(2,3);  // 2 = 00000010 //3 = 00000011
// Bitwise Not
function bitwiseNot(x){
    const bitnot = ~x;
    document.write("<strong>Bitwise Not</strong> : x ~ y = ",bitnot);
    document.write(lineBreak);
}
bitwiseNot(2);  // 2 = 00000010 

// Assignment Operator
document.write("<h4>Assignment Operator</h4>")
// Simple Assignment
function simpleAssignment(x,y){
    const resultass = (x + y);
    document.write("<strong>Simple Assignment</strong> : x + y = ",resultass)
    document.write(lineBreak)
}
simpleAssignment(2,3);
// Add and Assignment
function addAssignment(x,y){
    const resultaddass = (x += y);   //a=a+b
    document.write("<strong>Add and Assignment</strong> : x += y = ",resultaddass)
    document.write(lineBreak)
}
addAssignment(2,3);
// Subtract and Assignment
function subAssignment(x,y){
    const resultsubass = (x -= y);   //a=a+b
    document.write("<strong>Subtract and Assignment</strong> : x += y = ",resultsubass)
    document.write(lineBreak)
}
subAssignment(2,3);

// Miscellaneous Operator
document.write("<h2>Miscellaneous Operator</h4>")
// typeof operator
// Conditional operator(?:)
function typeOfOperator(x,y){
    const resulttop = (x > y) ? true : false;
    document.write("<strong>Typeof Operator</strong> ((x > y) ? true : false) = ",resulttop);
    document.write(lineBreak);
}
typeOfOperator(5,3);
// example 2
function typeOfOperator1(x,y){
    const resulttop1 = (x < y) ? true : false;
    document.write("<strong>Typeof Operator Less than</strong> ((x < y) ? true : false) = ",resulttop1);
    document.write(lineBreak);
}
typeOfOperator1(2,3);