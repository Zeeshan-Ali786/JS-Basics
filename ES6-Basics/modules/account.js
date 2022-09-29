//this function use in module.js 

let acountNo = 12346890;
let accountType = "Current";

function withdraw(){
    console.log("Cash Withdraw")
}

function deposite(){
    console.log("Cash Credit")
} 
// export export multiple things in one line
export {withdraw, deposite}
// these to method allow all other js file to use it

