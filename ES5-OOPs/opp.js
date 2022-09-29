// ES5 - OOP
// class not introduced in es5-oop
// so we use constructor function in ES5 instead of using classes


// object defining
let person1 = {
    // props
    firstName : 'Zeeshan',
    'last Name' : 'Ali',        //if property name have space then it can be writen inside single or double quotes
    age : 20,

    // method(Action)
    fullName : function(){
        // access props of obj inside obj
        document.write(this.firstName+" "+this["last Name"])
    }
};

// two more methods to create object
let per = {};
let per1 = new Object();

// lineBreak
let lineBreak = "<br>"
// Access the properties of person1 object
// dot notation
document.write("Person First Name : ",person1.firstName,lineBreak)
// bracket notation
document.write("Person Last Name : ",person1["last Name"],lineBreak)
document.write("Person Age : ",person1.age,lineBreak,lineBreak)

// change property value
person1.age = 30;
document.write("Person Age (Changed) : ",person1.age,lineBreak,lineBreak)

// access method of obj
document.write("Full Name method inside person1 object : ")
person1.fullName();
document.write(lineBreak,lineBreak)
// person1.fullName()

// Adding prop inside per object
per.height = '5.6F'
per.weight = '70Kg'
document.write("Adding prop inside per object",lineBreak);
document.write("Person Height (Add outside of obj) : ",per.height,lineBreak);
document.write("Person Weight (Add outside of obj) : ",per.weight,lineBreak,lineBreak);

// Adding method inside per1 
per1.sayHello = function(){
    document.write("Hello from sayHello function")
}
document.write("Adding method inside per1",lineBreak);
document.write("sayHello() : ")
per1.sayHello()
document.write(lineBreak,lineBreak)

console.log(person1)
console.log(per)
console.log(per1)

                        //Constructor function 
// let person2 = {
//     firstName : 'Adeel',
//     lastName : 'Ali', 
//     age : 25,

//     fullName : function(){
//         document.write(this.firstName+" "+this.lastName)
//     }
// };

document.write(`<h2 style="text-align:center;">Constructor function</h2>`,lineBreak);
document.write("<h4>Class not introduced in ES5-OOPs</h4><b>so we use constructor function in ES5 instead of using classes</b><br><br>")
document.write(`<b>this obj properties is same as person 1 obj so repetation voilate here so the solution is this we have to <br>
 create constructor funtion to define the same props and methods of person and we can use that props and method <br>
 in all objects where we want.</b><br><br>
 `)

// constructor function
function Person(fname,lname,a){     //frist world of construction fnc must be Uppercase
    this.firstName = fname;
    this.lastName = lname;
    this.age = a;

    this.fullName = function(){
        document.write(this.firstName+" "+this.lastName)
    }

    this.changeAge = function(newAge){
        this.age = newAge;
    }
}
document.write("now we can create much more person objects without repetetion by using Peron constructor function",lineBreak);

let personOne = new Person("Adeel","Zaffar",22);
document.write("<h4>personOne : </h4>",lineBreak);
document.write("PersonOne : First Name = ",personOne.firstName," , ","Last Name = ",personOne.lastName," , ","Age = ",personOne.age,lineBreak);
document.write("PersonOne Full Name : ");
personOne.fullName()
document.write(lineBreak);
personOne.changeAge(30);
document.write("Change Age of Person One : ",personOne.age);

let personTwo = new Person("Ahmad","Ijaz",25);
document.write("<h4>personTwo : </h4>",lineBreak);
document.write("PersonTwo : First Name = ",personTwo.firstName," , ","Last Name = ",personTwo.lastName," , ","Age = ",personTwo.age,lineBreak);
document.write("PersonTwo Full Name : ");
personTwo.fullName()


let personThree = new Person("Ali","Raza",23);
document.write("<h4>personThree : </h4>",lineBreak);
document.write("PersonTwo : First Name = ",personThree.firstName," , ","Last Name = ",personThree.lastName," , ","Age = ",personThree.age,lineBreak);
document.write("PersonThree Full Name : ");
personThree.fullName()


                        // Prototype
document.write(`<h2 style="text-align:center;">Prototype</h2>`,lineBreak);
let person = {};
console.log(person) //All objects connected with prototype with some built in methods

// constructor function one
function Bike(n,mod,avrg,eng){
    this.Name = n;
    this.Model = mod;
    this.Average = avrg;
    this.Engine = eng;

    // this.title = function(){
    //     document.write(this.Name," ",this.Model);
    // }
}

Bike.prototype.start = function(){
        // document.write(this.Name," ",this.Engine);
        document.write("Starting Bike (Bike Prototype Function)")
    }

let honda = new Bike("Honda","2016","35km","125");
document.write("Bike Name : ",honda.Name,lineBreak)
document.write("Bike Name : ",honda.Model,lineBreak)
document.write("Bike Name : ",honda.Average,lineBreak)
document.write("Bike Name : ",honda.Engine,lineBreak,lineBreak)

console.log(honda)    //all props or methods copy paste in honda object
// when constructer function created it connected with its seperate prototype and that prototype is connected with object prototype

document.write(`<b>Check in console </b> all props or methods copy paste in honda object . And Prototype is connected (not copied) with all objects<br>
 when constructer function created it connected with its seperate prototype and that prototype is connected with object prototype<br>
<br>`)
document.write(`<b>Check in console </b> method define in Bike(Constructor) and copied in all objects but we want to not copy with all object it could be connected with all objects inside constructor func prototype.<br>
 thats why we move all methods in constructer func prototype<br>
<br>`)

document.write("Honda Start : ")
honda.start()

document.write("<br>Now title method will not copied in all objects DRY(setisfied)")

// prototype Inheritance
document.write("<h3>Prototype Inheritance</h3>");


// 2nd Constructor function
function HeavyBike(hp){
    this.horsepower = hp;
}
HeavyBike.prototype.cylender = function(n){
    document.write(n)
}

let kawasakiNinja = new HeavyBike("249mph")
document.write("Kawasaki Ninja hoursePower : ",kawasakiNinja.horsepower,lineBreak);
document.write("Cylender Count : ")
kawasakiNinja.cylender(2); 

document.write("<br><br>Now we want Method in Bike Protype inherit in HeavyBike prototype",lineBreak)

console.log(kawasakiNinja)

// heavyBike prototype connected with Bike prototype
HeavyBike.prototype.__proto__ = Bike.prototype;

// now we can acess methodds of bike prototype in heavybike prototype
// kawasakiNinja.cylender(2)
document.write("<br><br>We are using Bike Constructor Start func in Heavy bike Constructor obj.<br>")
kawasakiNinja.start()

                        // Prototype example  2
document.write(`<h2 style="text-align:center;">Prototype Example 2</h2>`,lineBreak);
// Constructor function one
document.write("<h3>First Constructor Function</h3>")
function Creature(ls){
    this.lifeSpan = ls;
}

// method in creature prototype
Creature.prototype.breath = function(){
    document.write("Breathing (Creature Prototype Function)")
}

// object of Creature func
let creature1 = new Creature(60);

// Print life Span on document
document.write("Life Span : ",creature1.lifeSpan,lineBreak)
// print method
document.write("Breath Function : ")
creature1.breath();
document.write(lineBreak);

// console
console.log("creature1 : ",creature1)


// constructor function two
document.write("<h3>2nd Constructor Function</h3>")

function PerSon(f,n,a){
    this.firstName = f;
    this.lastName = n;
    this.Age = a;
}

PerSon.prototype.fullName = function(){
    document.write(this.firstName," ",this.lastName);
}

let perone = new PerSon("Mohsin","Shahid",24);
let pertwo = new PerSon("Hassan","Shahid",23);

// print per one
document.write("Peron One Detail : "," First Name : ",perone.firstName," , ","Last Name : ",perone.lastName," , ","Age : ",perone.Age,lineBreak);
document.write("Peron Two Detail : "," First Name : ",pertwo.firstName," , ","Last Name : ",pertwo.lastName," , ","Age : ",pertwo.Age,lineBreak);

// print fullname func
document.write("Full Name Person One: ");
perone.fullName()
document.write(lineBreak)
document.write("Full Name Person Two: ");
pertwo.fullName();

// Console 
console.log("Perone : ",perone)
console.log("Pertwo : ",pertwo)

// Prototype inheritance
document.write("<h3>Prototype Inheritance</h3>")
document.write("PerSon inherit the props and methods of Creature",lineBreak)

PerSon.prototype.__proto__ = Creature.prototype
 
document.write("<br>Now person prototype use the props and methods of creature prototype.",lineBreak)

document.write("<br>Breath function inherited in PerSon Constructor Soooo : ")
pertwo.breath();
document.write(lineBreak)
// document.write(creature1.lifeSpan)

// console perone
console.log("Perone inherit Method From Creature : ",perone)

document.write("<h4>This Process is also called prototype chaning</h4>")

