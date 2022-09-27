function validation(){
    if(document.myForm.Name.value == ""){
        alert("Please Provide your Name ");
        document.myForm.Name.focus();
        return false;
    }

    if(document.myForm.EMail.value == ""){
        alert("Please Provide your Email Address ");
        document.myForm.Email.focus();
        return false;
    }

    if(document.myForm.Zip.value == "" || document.myForm.Zip.value.length != 5){
        alert("Please Provide a Zip in the format #####");
        document.myForm.Zip.focus();
        return false;
    }

    if(document.myForm.Country.value == "-1"){
        alert("Please select your Country ");
        return false;
    }
    return(true);
    
}

