

function changeBG(color){
    document.body.style.background = color;
    
    let txt = document.getElementsByClassName('text');
    if(color == '#000'){  //single is for assign and == is for chek condition
         for(let elem of txt){
            elem.style.color = '#fff'
         }
    }else{
        for(let elem of txt){
           elem.style.color = '#000'
        }
    }
}