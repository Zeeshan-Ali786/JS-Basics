// Image Slider JavaScript


let flag = 0;
// for let right controller

function controller(x){
    flag = flag + x;
    slideshow(flag)

}

function slideshow(num){
    let slides = document.getElementsByClassName('slide');  //store all div slide in array form
    
    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    
    
    //first all slides invisible 
    for(let i of slides){
        i.style.display = "none";
    }
    // show first slide in 0 index by using flag current value
    slides[num].style.display = "block"
}
slideshow(flag)


