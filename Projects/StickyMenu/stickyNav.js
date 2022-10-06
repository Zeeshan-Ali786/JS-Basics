// Script

window.addEventListener('scroll', function(){
    let navbar = this.document.getElementById('menu-bar')

    if(this.window.pageYOffset >= 190){
        // add class
        navbar.classList.add('sticky')
    }else{
        // delete class
        navbar.classList.remove('sticky')
    }
});