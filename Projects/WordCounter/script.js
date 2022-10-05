// Word and Character couter Script

// get textarea
let textBox = document.getElementById('textBox');

// get character span
let character = document.getElementById('char');


textBox.addEventListener('input', function(){
    let text = this.value;
    let char = text.length;
    character.innerHTML = char;


    // trim function remove extra spaces from start and end
    text = text.trim();
    // split jaha space dekhy ga to ak word count kr ly ga but issue is k jb ham normal space b daly gy then it considered it as a word
    let word = text.split(" ");  //split word and store in array
    
    // filter elements and move only element in array that not equal to "" space.
    
    // let cleanList = word.filter(function(elem){
    //     return elem != "";
    // })
                        //by using arrow anonomous function
    let cleanList = word.filter( elem => elem != "");

    // upadte count inside word span
    document.getElementById('word').innerHTML = cleanList.length;
});