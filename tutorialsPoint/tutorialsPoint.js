let lineBreak = "<br>";

// document.write('Hello World')
// document.write(lineBreak)\

                        // Functions
// document.write(`<h1 style="text-align:center;">Functions</h1>`);
// calling a function
// document.write("<h4>calling a function</h4>")
function callFunc(){
    document.write("Calling a function from java script")
}
// Function parameters
// document.write('<h4>Function Parameters</h4>');
function callPara(x,y){
    document.write('My Name is ',x,' ',y);
}
// the return Statement
function concatenate(first,last){
    let full;
    full = first + ' ' + last;
    return full;
}
function secondFunction(){
    let res;
    res = concatenate('Waqas','Afzal');
    document.write(res);
}

                        // Events
// document.write(`<h1 style="text-align:center;">Events</h1>`);
// Alert Event
function sayHello(){
    alert('Hello World')
}
// onsubmit event
function validation(){
    // document.write(`all validation goes here
    // .........
    // return either true or false`)
}
// onmouseoevr and onmouseout
function over(){
    document.write('Mouse Over');
}
function out(){
    document.write('Mouse Out');
}

                        // Cookie
// document.cookie = "key1 = value1;key2 = value2;expires = date";
// read
// document.cookie = "userName=Zeeshan Ali;"   //check this coockie inside application in inspect
// update
// document.write="userName=waqas"     //whenever you want to change value your key must be same

// storing cookie
function writeCookie(){
    if(document.myform.customer.value == "" || document.myform.customerEmail.value == ""){
        alert('Enter Some Value Here.')
        return;
    }
    let cookievalue = document.myform.customer.value + ';';
    let customerEmail = document.myform.customerEmail.value + ';';
    document.cookie = "nameOfCustomer = " + cookievalue; //this key and value show inside application in inspect
    document.cookie = "emailOfCustomer = " + customerEmail;  //this key and value show inside application in inspect
    document.write("Setting Cookie: name = ",cookievalue,lineBreak);
    document.write("Setting Cookie: Email = ",customerEmail);
}

//Setting cookie expiry date
// method:1
// document.cookie = "emailOfCustomer= " + customerEmail + "expires=fri 23 sep 2022 12:00:00 UTC"   //Universal Time Coordinate
// Method:2
function expireCookie(){
    if(document.myform1.customer1.value == "" || document.myform1.customerEmail1.value == ""){
        alert('Enter Some Value Here.')
        return;
    }
    //new lines here in previous copied code
    let now = new Date();
    now.setMonth(now.getMonth() + 1);
    let cookievalue = document.myform1.customer1.value + ';';
    let customerEmail = document.myform1.customerEmail1.value + ';';
    document.cookie = "nameOfCustomer = " + cookievalue + "expires = " + now.toUTCString() + ';'; //this key and value  and expire date show inside application in inspect
    document.cookie = "emailOfCustomer = " + customerEmail + "expires = " + now.toUTCString() + ';'; 
    // These name and email expires after 1 month of adding
    
    document.write("Setting Cookie: name = ",cookievalue,lineBreak);
    document.write("Setting Cookie: Email = ",customerEmail);
}

// Deleting a Cookie
// same code like expiry date just change in month like addind detail month - 1
function deleteCookie(){
    if(document.myform2.customer2.value == "" || document.myform2.customerEmail2.value == ""){
        alert('Enter Some Value Here.')
        return;
    }
    //new lines here in previous copied code
    let now = new Date();
    now.setMonth(now.getMonth() - 1);
    let cookievalue = document.myform2.customer2.value + ';';
    let customerEmail = document.myform2.customerEmail2.value + ';';
    document.cookie = "nameOfCustomer = " + cookievalue + "expires = " + now.toUTCString() + ';'; //this key and value  and expire date show inside application in inspect
    document.cookie = "emailOfCustomer = " + customerEmail + "expires = " + now.toUTCString() + ';'; 
    // These name and email delete before 1 month of adding detail
    
    document.write("Setting Cookie: name = ",cookievalue,lineBreak);
    document.write("Setting Cookie: Email = ",customerEmail);
}
function ReadCookie() {
    var allcookies = document.cookie;
    document.write ("All Cookies : ",allcookies);
    // Get all the cookies pairs in an array
    // cookiearray = allcookies.split(';');
    
    // // Now take key value pair out of this array
    // for(var i=0; i<cookiearray.length; i++) {
    //    name = cookiearray[i].split('=')[0];
    //    value = cookiearray[i].split('=')[1];
    //    document.write ("Key is : ", name, " and Value is : ", value, lineBreak);
    // }
 }

                        //  Page Redirection
function redirect(){
    // window.location = ('https://www.tutorialspoint.com';
    window.open(
        'https://www.tutorialspoint.com',
        '_blank' // <- This is what makes it open in a new window.
      );
}
// set time Out
// function setTimeOut() {
//     window.open(
//         'https://www.tutorialspoint.com',
//         '_blank' // <- This is what makes it open in a new window.
//       );
//  }            
//  document.write("You will be redirected to main page in 10 sec.");
//  setTimeout('Redirect()', 10000);


                        // Dialog Boxes
// Confermation Dialog box
function getConfirmation(){
    let getVal = confirm("Do you want to Continue?");
    if(getVal == true){
        document.write("User Wants To Continue");
        return true;
    }else{
        document.write('User Does not Want to Continue');
    }
}
//prompt Didalog Box
function promptConfirmation(){
    let getprompt = prompt("Enetr your Name : ", "Your Name Here");
    document.write("You have enetred : ",getprompt)
    
}
                        // Variables
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

                        // Operators
document.write(`<h1 style="text-align:center;">Operators</h1>`);

// Arithemetic Operators +, *, /, %, ++(increment), --(decrement)
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
// example 3
function typeOfOperator2(x){
    const resulttop2 = (typeof x == 'string') ? "X is String" : "X is Numeric";
    document.write("<strong>Typeof Operator</strong> (type of x) = ",resulttop2);
    document.write(lineBreak);
}
typeOfOperator2(3);

                        // if-else Statement
document.write(`<h1 style="text-align:center;">if-else Statement</h1>`)
let car = "BMW";
if (car == "BMW"){
    document.write("Car Name : <b>BMW</b>")
} else if(car == "Corola"){
    document.write("Car Name : <b>Corola</b>")
}else if(car == "Land Cruiser"){
    document.write("Car Name : <b>Land Cruiser</b>")
}else if(car == "KIA"){
    document.write("Car Name : <b>KIA</b>")
}else{
    document.write("<b>There is no Car here!</b>")
}

                        // Switch Case
document.write(`<h1 style="text-align:center;">Switch Case</h1>`)
let grade = "B";
document.write("<p>Entering switch block</p>");
switch(grade){
    case 'A+' : document.write("<b>Exellent Job</b>");
    break;
    case 'A' : document.write("<b>Good job</b>");
    break;
    case 'B' : document.write("<b>Preety Job</b>");
    break;
    case 'C' : document.write("<b>Passed</b>");
    break;
    case 'D' : document.write("<b>Not so Good</b>");
    break;
    case 'F' : document.write("<b>Failed</b>");
    break;
    default: document.write("Unknown Grade")
}
document.write("<p>Exiting switch block</p>");

// switch case without using breake statement
document.write("<h3>Switch case without using breake statement</h3>")
let Grade = "A+";
document.write("<p>Entering switch block</p>");
switch(Grade){
    case 'A+' : document.write("<b>Exellent Job</b><br>");
    case 'A' : document.write("<b>Good job</b><br>");
    case 'B' : document.write("<b>Preety Job</b><br>");
    case 'C' : document.write("<b>Passed</b><br>");
    case 'D' : document.write("<b>Not so Good</b><br>");
    case 'F' : document.write("<b>Failed</b><br>");
    default: document.write("Unknown Grade")
}
document.write("<p>Exiting switch block</p>");


                        //While Loop 
document.write(`<h1 style="text-align:center;">While Loop</h1>`)
let count = 0;
// statement is to be execite if expression is true
document.write("Starting Loop<br>")
while(count < 10){    //expression
    document.write("Current Count : " + count + "<br />");   //statement
    count++;
}
document.write("Loop Stoped");

                        // Do While
document.write(`<h1 style="text-align:center;">Do While Loop</h1>`)
// in do while loop condition is check at the end thats why loop would always execute at least once
let doCount = 10;
document.write("Starting Loop<br>")
do{    //expression
    document.write("Current Count : " + doCount + lineBreak);   //statement
    doCount++;
}while(doCount < 5)
document.write("Loop Stoped<br>");
document.write(`In do while loop condition is check at the end thats why loop would always execute at least once.
Means i give count value 10 but it is not less then 5 but statement is executed once before checking while condition`)

                        // For Loop
document.write(`<h1 style="text-align:center;">For Loop</h1>`)

for(let i=0; i<=5; i++){  //expression
    document.write("Current Value = ",i,lineBreak)    //condition
}

                        // For in Loop
document.write(`<h1 style="text-align:center;">For in Loop</h1>`)
let obj = {
    objName : "Zeeshan",
    objAge : 20,
    dob:function(){
        document.write('7 April')
    },
    hobby:function(){
        document.write('Cricket')
    }
}
// In this example for in loop is use to find keys/values in object
// for in loop
for(let key in obj){
    if(typeof obj[key] !== 'function')    //function key is not shown here
    document.write(key);
    document.write(lineBreak)
}
// Anothor example of for in loop
// document.write('<h4>Example 2</h4>')
// for(let key1 in navigator){
//     document.write(key1);
//     document.write(lineBreak);
// }

                        // Loop Control
document.write(`<h1 style="text-align:center;">Loop Control</h1>`);
// the break statement
document.write('<h4>The Break Statement</h4>');
let xBreak = 0;
while(xBreak < 20){
    if(xBreak == 6){
        break;
    }
    xBreak += 1;
    document.write(xBreak,lineBreak);
}
// the continue statement
document.write('<h4>Continue Statement</h4>');
xBreak = 1;
while(xBreak < 10){
    xBreak += 1;
    if(xBreak == 5){
        continue;
    }
    document.write(xBreak);
    document.write(lineBreak);
}
// Using Labels to Control the Flow
document.write('<h4>Using Labels to Control the Flow</h4>');
outerloop: //Label Name
for(let i = 0; i <= 5; i++){
    document.write('OuterLoop = ',i,lineBreak);
    innerloop:
    for(let j = 0; j < 5; j++){
        if(j == 3) break;
        if(i == 2) break innerloop;
        if(i == 4) break outerloop;
        document.write("InnerLoop = ",j,lineBreak);
    }
}

                        // Object overview
document.write(`<h1 style="text-align:center;">Objects</h1>`);
let book = {
    subject:"Perl",
    author:"Mohtashim"
}
document.write("Book Name is : ",book.subject,lineBreak)
document.write("Author Name is : ",book.author)
// By using function
document.write("<h4>By using Function</h4>")
function Book(title,author){      //first word of constructor function should be uppercase
    this.title = title;
    this.author = author;  
}
const book1 = new Book("Perl","Mohtashim")
document.write("Book Name is : ",book1.title,lineBreak);
document.write("Auther Name is : ",book1.author,lineBreak);
// Defining Methods for an Object
document.write("<h4>Defining Methods for an Object</h4>")
function addPrice(amount){
    this.price = amount;
}
// function addPrice(amount) {        //The 'with' Keyword
//     with(this) {
//        price = amount;
//     }
//  }
function Book1(title,author){      //first word of constructor function should be uppercase
    this.title = title;
    this.author = author;
    this.addPrice = addPrice;       // Assign that method as property.  
}
const book2 = new Book1("Perl","Mohtashim");
book2.addPrice(10)
document.write("Book Name is : ",book2.title,lineBreak);
document.write("Auther Name is : ",book2.author,lineBreak);
document.write("Book Price is : ",book2.price,lineBreak);

// The Number Object
document.write(`<h1 style="text-align:center;">The Number Object</h1>`);
// Number Properties
document.write("<h4>Number Properties</h4>");
document.write("<span><b>MAX_VALUE :  </b>It represents constants for the largest possible positive numbers that JavaScript can work with.</span>",lineBreak);
let maxVal = Number.MAX_VALUE;
document.write("Maximum Value of number = ",maxVal,lineBreak);
//MIN_VALUE
document.write("<span><b>MIN_VALUE :  </b>It represents constants for the Smallest possible positive numbers that JavaScript can work with.</span>",lineBreak);
let minVal = Number.MIN_VALUE;
document.write("Maximum Value of number = ",minVal,lineBreak);
// constructor
document.write("<b>Constructor :  </b>",lineBreak);
const num = new Number(199.111);
document.write("num.constructor = ",num.constructor)

// Number Methods
document.write("<h4>Number Methods</h4>");
// toexponential
document.write("<b>toExponential()</b>",lineBreak);
let numVal = 111.123456
let numExponential = numVal.toExponential(2);
document.write("exponential is 2 (after point there is only 2 digits allow) : ",numExponential,lineBreak);
// tofixed
document.write("<b>tofixed()</b>",lineBreak);
let numFixed = numVal.toFixed(3);
document.write("after point 3 digit is fixed) : ",numFixed,lineBreak);
// toPrecision
document.write("<b>toPrecision()</b>",lineBreak);
let numPrecision = numVal.toPrecision(4);
document.write("4 digit is fixed whatever it is before point or after point) : ",numPrecision,lineBreak);
// toString
document.write("<b>toString()</b>",lineBreak);
let numString = numVal.toString(2);
document.write("Convert a number to a string using base 2) : ",numString,lineBreak);

// The Boolean Object
document.write(`<h1 style="text-align:center;">The Boolean Object</h1>`);
document.write(`<span>The Boolean object represents two values, either "true" or "false".</span>`)
// Boolean Methods
document.write("<h4>Boolean Methods</h4>");
// toSource
// document.write("<b>toSource()</b>",lineBreak);
// function Book3(title, publisher, price) {
//     this.title = title;
//     this.publisher = publisher;
//     this.price = price;
//  } 
// var newBook = new Book3("Perl","Leo Inc",200); 
// document.write(newBook.toSource());

// toString
document.write("<b>toString()</b>",lineBreak)
let flag = false;
document.write(flag.toString(),lineBreak)
// valueOf
document.write("<b>valueOf()</b>",lineBreak)
flag = true;
document.write(flag.valueOf())


// The Boolean Object
document.write(`<h1 style="text-align:center;">The String Object</h1>`);

