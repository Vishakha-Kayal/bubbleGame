
var timer = 60;
var timerInt ;
var hitActualValue = 0;

function makeBubble(){
    var clutter = " ";
    
    for(var i = 0 ; i < 144 ; i++)
    {
        var a = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${a}</div>`;
        // console.log(clutter)
    }
    
    document.querySelector("#p-btm").innerHTML = clutter;
}
var timerInt = function runTimer(){
    setInterval(function(){
        if(timer > 0){
            timer--;
            document.getElementById("timervalue").innerHTML = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#p-btm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000);
}

var score = 0 ; 
function increaseScore(){
    score = score+10;
    document.querySelector("#Score_i").textContent = score;
}


function hitRandom(){
    var hitValue = Math.floor(Math.random() * 10);
    hitActualValue = document.querySelector("#hitt").textContent = hitValue;
    console.log(hitActualValue)
}

var a = document.querySelector("#p-btm")
a.addEventListener("click",function(details){
    var bubbleData = Number(details.target.textContent)

    if(hitActualValue === bubbleData){
    increaseScore()
    makeBubble()
    hitRandom()
    }
else{
    alert("entered wrong input");
}
})


makeBubble()
timerInt()
hitRandom()
