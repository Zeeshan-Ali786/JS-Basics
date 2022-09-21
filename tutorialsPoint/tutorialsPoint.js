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




