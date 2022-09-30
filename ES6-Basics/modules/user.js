//this function use in module.js 

// now if user.js give permission to any other file like module.js to use its code then basic.js can use 
export let userName = "Zeeshan Ali"
let userAge = 20;

export function userDetail(){
    // alert(`User Name is ${userName} and User Age is ${userAge}`);
    console.log(`User Name is ${userName} and User Age is ${userAge}`);
}
// by using export we allow all other js files to use username and userdetail()

function code(){
    console.log("Coding...")
}

// function ith same name asin account js file so when we import it we change its name check in module.js
export function withdraw(){
    console.log("User Function Cash Withdraw")
}



// import deposite from account.js here in same folder and then use that in module.js
import { deposite } from "./account.js";

export function userAccount(){
    console.log("Calling Deposite from user.js But it is the function of account.js and imported in user.js")
    deposite();
}