// ES6-OOPs (ECMA Script Version 6)   in 2015
//Classes and Object

// class literals are {}

class friend{
    constructor(n, a){    //constructor function automatically called when call object is created like person 1
        this.name = n;
        this.age = a;
    }

    // method inside class  (all method automatically connected with friend class prototype)
    sayhi(){
        console.log("Hi... from person class")
    }

    // static method not connected with object (of class(like person1)) it is only connected with class
    static hello(){
        console.log("hello....statis function from friend class")
    }

    // static Property
    static sProperty = "StaticProperty inside friend class"
}

console.log(`
            Classes`)

// creating object of person class
let person1 = new friend("Waqas",22)

// calling method sayhi
person1.sayhi()
console.log(person1)

// static method cant called by object it called by class name 
console.log(`
Static Method : `)
friend.hello();

// static property (called by class name not by class object name)
console.log(`
Static Property : `,friend.sProperty)






                        //Inheritance
// to use property and methods of another classes
console.log(`
            Inheritance (to use property and methods of another classes)`)

class emp{
    constructor(n){
        console.log("Constructor function inside employee class")
        this.name = n;
    }

    // method
    msg(){
        console.log("Message from emp class")
    }
}

// managaer class inherit all prop method constructer func of emp class
class manager extends emp{
    constructor(z,d){
        // super call the parent class constructor
        super(z); //name come from class emp constructor
        console.log("Constructor function inside Manager class")
        this.department = d;  //profession of this class constructor
    }

    // method
    info(){
        console.log(this.name, " is a Manager of department ", this.department)
    }

    msg(){
        console.log("Message from Manager class")
    }

    // call method of emp class here
    info2(){
        // this.msg();  //to access this class method msg()
        super.msg();
        console.log(this.name, " is a Manager of department ", this.department)
    }
}

class admin extends manager{
    //it extends all property method and constructor of manager and emp class
    //parent of admin class is mananger and its grandparent is emp class
}

// object of manager class can access all prop method constructer func of emp class
let admin1 = new admin("Zeeshan","web Development");

console.log(admin1);

// MEthod inside Emp Class
console.log(`
MEthod inside Emp Class : `)
admin1.msg();

// MEthod inside Maneger Class
console.log(`
MEthod inside Maneger Class (using prop of emp class constructor): `)
admin1.info();

// both methods (msg, info2) calls once
console.log(`
both methods (msg, info2) calls once : `)
admin1.info2();




                        // Public or private property
console.log(`
            Public or private property`)
class empl{
    // # (Hash) is use to create a prop and method private
    #name = ""; //this is private property and called only inside this class methods
    constructor(n){
        this.#name = n;   //#name (private property) must be defined outside the constructor
    }
    getName(){
        console.log("Person Name : ",this.#name);   //name is private
    }
    // private method
    #prifun(){
        console.log("Person Name (private function) : ",this.#name);   //name is private
    }
    // public fun
    pubfun(){
        this.#prifun();
    }
}                        
let empl1 = new empl("Mohsin");

// console.log(empl.#name);  //private prop cant acces directly like this
console.log(empl1);

// method access private property
console.log(`getName method access private property (#name) : `)
empl1.getName();

// private function must be called in public function and then public function called here
console.log(`
private function must be called in public function and then public function called here : `)
empl1.pubfun();




                        // Mixin
console.log(`
            Mixin (to give extra power to any class)`)

// object Mixin 1
let objMethod = {
    sayhi(){
        console.log("Hi...")
    },

    sayby(){
        console.log("Bye...")
    }
}

// object Mixin 2
let objMethod2 = {
    sayhi2(){
        console.log("Hi...Mixin 2")
    },

    sayby2(){
        console.log("Bye...Mixin 2")
    }
}

// class 
class user{
    constructor(){
        this.name = "Zeeshan";
    }
}

// inheritance
class userAdmin extends user{

}

let useradmin1 = new userAdmin();
 console.log(useradmin1)

// if you want inherite multiple thing then you can use extend and mixin 
//  assign object methods to user class
Object.assign(userAdmin.prototype, objMethod);   //mixin 1
Object.assign(userAdmin.prototype, objMethod2);   //mixin 2

// now obj of useradmin class access the methods inside objMethod object
console.log(`now obj of userAdmin class access the methods inside objMethod object and user class constructor`)

// Mixin 1
console.log(`
        Mixin 1`)

console.log(`
say hi Method : `)
useradmin1.sayhi()

console.log(`
say Bye Method : `)
useradmin1.sayby()

// Mixin 2
console.log(`
        Mixin 2`)

console.log(`
say hi Method : `)
useradmin1.sayhi2()

console.log(`
say Bye Method : `)
useradmin1.sayby2()


// Conclusion
console.log(`
            Conclusion

In Extends : 
we only can extend one class

In Mixn : 
we can mixin multiple things`)