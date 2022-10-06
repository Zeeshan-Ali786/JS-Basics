// Form Validation Script

let userName = document.getElementById("user-name")
let password = document.getElementById("pass")


function validate(){
    // for UserName
    if(userName.value == ""){
        let errorMsg = document.getElementById('user-error');
        errorMsg.innerHTML = "Enter User Name";
        userName.focus()
        return false
    }else if(userName.value.length < 3){
        document.getElementById('user-error').innerHTML = "Enter Minimum 3 Characters"
        userName.focus()
        return false
    }
    else{
        document.getElementById('user-error').innerHTML = "";
    }

    // For Password
    if(password.value == ""){
        document.getElementById('pass-error').innerHTML = "Enter Password";
        password.focus();
        return false
    }else if(password.value.length < 3){
        document.getElementById('pass-error').innerHTML = "Enter Minimum 3 Numbers"
        password.focus();
        return false
    }else{
        document.getElementById('pass-error').innerHTML = ""
    }

    // if both statement true
    return true
}