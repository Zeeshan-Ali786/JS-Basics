
                        // Errors & Exceptions Handling
// try catch statement

function tryCatch(){
    let a = 100;
    try {
        alert("Value of a is : " + a );
    } 
    catch ( e ) {
        // alert("Error: " + e.description );
        alert(e);
    }
}

// finally 
function finallyBlock(){
    let a = 100;
    try {
        alert("Value of a is : " + a );
    } 
    catch ( e ) {
        // alert("Error: " + e.description );
        alert(e);
    }finally{
        alert("Finally block always execute")
    }
}                       

// throw statement 
function throwStatement(){
    let a = 100,b = 10;
    try {
        if(b == 0){
        throw("B is 0");
        }else {
            // throw("B is not 0")
            let c = a/b;
            throw("a/b = " + c)
        }
    } 
    catch ( e ) {
        // alert("Error: " + e.description );
        alert(e);
    }
}                       

// onerror() Method
window.onerror = function onError(msg,url,line){
    alert("An Error Occured")
    alert("Message : "+ msg);
    alert("URL : " + url);
    alert("Line Number : " + line);
    
}