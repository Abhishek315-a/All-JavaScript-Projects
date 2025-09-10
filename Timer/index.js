let button = document.querySelector(".btn")
let reset = document.querySelector(".reset")
let timer = document.querySelector("#timer")
let count=0;
let start = false;
let intervalId;
button.addEventListener("click",function(){
    if(start===false){
        intervalId = setInterval(function(){
            count++;
            start=true
            timer.innerHTML = `${count}`;
            button.innerHTML = "Stop"
            console.log("clicked");
        },1000)
    }
    else{
        clearInterval(intervalId);
        start=false;
        button.innerHTML = "Start"
    }
})
reset.addEventListener("click",function(){
    count=0;
    timer.innerHTML = `${count}`
})

