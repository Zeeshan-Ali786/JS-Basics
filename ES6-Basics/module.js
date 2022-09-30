

                        //Modules 
// type of this file would be module while calling in html file.
// import username that is exported from user.js
import {userName} from './modules/user.js';
console.log("UserName is imported from user.js : ",userName);
// document.write("UserName is imported from user.js : ",userName);

// You will need to replace any document.write() statements in that script with 
// explicit DOM manipulations by creating the DOM elements and then inserting 
// them into a particular parent with 
// .appendChild() or 
// .insertBefore() or setting 
// .innerHTML or 
// some mechanism for direct DOM manipulation like that.

import { userDetail } from './modules/user.js';
import { withdraw } from './modules/user.js';    //if same name import then rename it 
// console.log("UserDetail() imported form user.js",userDetail())
console.log(`
UserDetail() imported form user.js`)
userDetail()

// account.js 
// export multiple things in one line
import { withdraw as wd, deposite } from './modules/account.js';   //now withdraw is user func and wd(withdraw) is account func.

console.log(`
withdraw() imported form account.js`)
withdraw();  //this is withdraw function from user that is imported 

console.log(`
wd() (withdraw) imported form account.js`)
wd()   //this is withdraw function from Account that is imported

// deposite
console.log(`
deposite() imported form account.js`)
deposite()

            //Shortcut to import all exported func and var in small line code
// import all func and var which is exported in pass.js
import *  as pass from './modules/pass.js'
// OTG Function
console.log(`
OTG Function imported from pass.js`);
pass.otgFunc();

// Password Function
console.log(`
Password Function imported from pass.js`);
pass.passFunc();

// default function of pass.js
import {default as df} from './modules/pass.js';
console.log(`
default Function imported from pass.js`);
df();
//1. you can use default function when you put all your code inside default func and call at once
// 2. in the case of same name of functions and var like withdraw you can put that func inside default func


// calling deposite that is imported inside user.js
import { userAccount } from "./modules/user.js";
console.log(`
User Account : `)
userAccount();

                //
// import here shape.js and access circle,triangle and square inside shapes folder
import {circle, square, triangle} from './modules/shapes.js' 

console.log(`

Agregating module (All files import in shape.js and again export and then import in module.js from shapes.js)`)

console.log(`
Circle Function from Shapes Folder : `)
circle()

console.log(`
Square Function from Shapes Folder : `)
square()

console.log(`
Triangle Function from Shapes Folder : `)
triangle()
