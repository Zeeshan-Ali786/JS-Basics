// third java file where we export func and var for usage in other file which type is module


let password = 123;
let otg = 67453;

function otgFunc(){
    console.log("OTG is  : ",otg);
}

function passFunc(){
    console.log("Password is  : ",password);
}

export{otgFunc, passFunc}

// default function (Every file have one default func)
export default function(){   //it must be exported and nameless
    console.log("Default function from pass.js")
}

// reasons why default func use
//1. you can use default function when you put all your code inside default func and call at once
// 2. in the case of same name of functions and var like withdraw you can put that func inside default func.

