// Script of Stop Watch

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

// this var decide either timer is start or stop
let timer = false;    //initially timer false
function start(){
    timer = true;
    stopwatch()

}

function stop(){
    timer = false;
}

function reset(){
    timer= false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";    
}

function stopwatch(){
    if(timer == true){
        count += 1;  //increament in count after 10 milisecond
        
        // for second
            if(count == 100){
                sec += 1;
                count = 0;
            }
        
        // for Minute
            if(sec == 60){
                min += 1;
                sec = 0;
            }
        
        // for Hour
            if(min == 60){
                hr += 1;
                min = 0;
                sec = 0;
            }

            // for double 00  when stopwatch start
            let hrStr = hr;
            let minStr = min;
            let secStr = sec;
            let countStr = count;

            if(hr < 10){
                hrStr = "0" + hrStr;   //now hr becomes string
            }
            if(min < 10){
                minStr = "0" + minStr;   //now hr becomes string
            }
            if(sec < 10){
                secStr = "0" + secStr;   //now hr becomes string
            }

            if(count < 10){
                countStr = "0" + countStr;   //now hr becomes string
            }
            

            
            document.getElementById('hr').innerHTML = hrStr
            document.getElementById('min').innerHTML = minStr
            document.getElementById('sec').innerHTML = secStr;
            document.getElementById('count').innerHTML = countStr;
        
        setTimeout("stopwatch()", 10);  //wait for 10 milisecond
    }
}