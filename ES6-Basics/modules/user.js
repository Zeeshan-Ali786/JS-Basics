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

