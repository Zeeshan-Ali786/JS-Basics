// ECMA Script 6       in june 2015
// Changes in ES6
document.write("<h2>Changes in ES6</h2>") 
            // let const
document.write("<h3>1. Let & Const</h3>")
document.write("In ES5 we have just <b>var</b> but now we have <b>Let</b><br>");
// in es5
var count = 1
var count = 2;

document.write("Window Variable : ",window.count,"<br>")
document.write("Count var : ",count);
document.write("<br>Variable is window global obj and we can declare 2 or more variable with same name.<br>");

// ES6
document.write("<br>In <b>ES6</b> <b>var</b> is replaced by  <b>Let</b><br>");
let count1 = 1;
// let count1;
document.write("Count Let : ",count1);
count1 = 20;
document.write("<br>Count Let (Value Changed): ",count1);
document.write("<br>By using let Variable with same name cannot be declared and it is not window global variable.<br>");

// const
document.write("<br>In <b>ES6</b> <b>Const</b> is introduced<br>");
const count2 = 10;
// let count1;
document.write("Count Constant : ",count2);
// count2 = 20;
// document.write("<br>Count Let (Value Changed): ",count2);
document.write("<br>By using const we cant dublicate it and cant change its value<br>");

            // Default parameter
document.write("<h3>2. Default parameter</h3>")
function sayHello(hi="Hi"){
    document.write(hi)
}
sayHello()
// sayHello("Hello")
document.write("<br>Default parameter means to assign default value of parameter so if you dont give the value to parameter while calling function the default value would be printed(shown).")

// rest Parameters
document.write("<h3>3. Rest parameter</h3>")
function Sum(a,b){
    document.write("A + B : ",a+b);
}
Sum(2,3)
document.write("<br>We pass here arguments according to number of parameters.");
document.write("<br><br><b>BUT</b> by using rest parameter we can pass n number of parameter.");
// rest parameter
function restSum(...args){     //all arguments store  in Array
    let result = 0;
    for(let i=0; i<args.length; i++){
        result += args[i]
    }
    document.write("<br><br>Sum of All Given Parameters are : ",result);
}
restSum(1,2,3,4,5,6,7)
// restSum()          //this return 0 

            // Spread Operator
document.write("<h3>4. Spread Operator</h3>")
 let arr1 = [1,2,3]
 let arr2 = [4,5,6]

// print arrays
document.write("Array 1 : ",arr1);
document.write("<br>Array 2 : ",arr2);

//  if you want to include arr2 in arr1 then we use here spread operator
document.write("<br><br>if you want to include arr2 in arr1 then we use here spread operator");
arr2 = [4,5,6,...arr1];
arr2 = [4,5,...arr1,6];
arr2 = [...arr1,4,5,6];
document.write("<br>After Using Spread operator Array 2 : ",arr2)


arr1 = [1,2,3]
arr2 = [4,5,6]
let arr3 = [...arr1,...arr2];
document.write("<br><br>After Using spread Function Array 3 = ",arr3);

            // for-of Loop
document.write("<h3>5. for-of Loop</h3>")
document.write("This is use for iterate string array without tell him length<br>");

let ofArray = [22,33,44,55,66,77];
let ofString = "hello world";

document.write("Check in console")
for(let x of ofArray){
    // document.write(x);
    console.log("Array (for-of): ",x)
}

for(let y of ofString){
    // document.write(y);
    console.log("String (for-of) : ",y);
}


            // TemplateLiterals
document.write("<h3>6. Template Literals</h3>")
let temLiteral = `my
name
is
zeeshan.`;
// document.write(temLiteral)
console.log(temLiteral)

let name1 = "Zeeshan";
document.write(`My Name Is ${name1}. No need of Concatination after usinf Template Literals.`)

let num = 10;
document.write(`<br>Number is ${num*3}. In Template Literal we can also use Methametical Functions.`)


    	    // Array Destructuring
document.write("<h3>7. Array Destructuring</h3>")
let book = ["Advance js", 250, 500, ["john", 2000]];   //nested array

let bookName = book[0];
let pages = book[1];
let price = book[2];
document.write("Name of Book : ",bookName);
document.write("<br>Pages of Book : ",pages);
document.write("<br>Price of Book : ",price);

document.write("<br><br> but if we want to do same thing in one line ");
// same work in one line
let[bookName1, pages1, price1, [publication, year]] = book;
document.write("<br>Name of Book : ",bookName);
document.write("<br>Pages of Book : ",pages);
document.write("<br>Price of Book : ",price);
// nested array
document.write("<br>Publisher of Book : ",publication);
document.write("<br>Publish year of Book : ",year);

// example 2
document.write("<h4>Example 2.</h4>")
// problem
function book1(){
    // some code here
    // return "Book";
    return ["Advance js", 250];
}
let bookFunc = book1();
document.write("Book Function Returns(in the case of return array in book func it cause problem) : ",bookFunc);

// solution
document.write("<br><br>Array Destructuring Apply here");
let[bookTitle, bookPrice] = book1();

document.write("<br>Solution (Array return) : Book Title = ",bookTitle)
document.write("<br>Solution (Array return) : Book Price = ",bookPrice)

document.write("<h4>If function returns us Array then we use Array Destructuring.</h4>");

                        // Object Destructuring
document.write("<h3>8. Object Destructuring</h3>")
let book2 = {
    name2 : "Advance JS",
    pages2 : 200,
    // price2 : 500 

    // nested object
    publication2 : {
        pubName:"John",
        pubYear:2000
    }
};

let name3 = book2.name2;
let pages3 = book2.pages2;
let price3 = book2.price2;

document.write("Book Name = ",name3)
document.write("<br>Book Pages = ",pages3)
document.write("<br>Book Price = ",price3)

document.write("<br><br> but if we want to do same thing in one line ");
document.write("<br><b>Object Destructuring</b> Uses Here : ");

let{name2 : title, pages2, price2 = 500, publication2 : {pubName : publisher, pubYear}} = book2;   //property names must be same 
//change name of property name2 
// default value of price2 is 500 if user not give price then default value would returned

document.write("<br>Book Name = ",title)
document.write("<br>Book Pages = ",pages2)
document.write("<br>Book Price = ",price2)

// document.write("<br>Book Publisher = ",pubName)
// change name from pubName to publisher
document.write("<br>Book Publisher = ",publisher)
document.write("<br>Book Publish Year = ",pubYear)
