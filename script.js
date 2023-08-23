var timer = 3;
var score = 0;
var hitrn = 0;
var fscore;

// jispe click karoge wo element par event raise hoga , aur event listner na milne par event element ke parent par listner dhundega wha bhi na milne par event parent ke parent ke parent par listner dhundega

function increaseScore(){
    fscore = score += 10;
    document.querySelector("#scoreval").textContent = score;
    
}

function makebubble(){

var clutter ="";

for (var i = 0; i <= 101; i++) {
    var rn = Math.floor(Math.random()*10)
    // floor remove decimar and math.random generate any number btw 0 to 1 so we multiply it by 10
    clutter += `<div class="bubble">${rn}</div>`;
    // yha ise store karana jaruri hai isliye ise var bnake clutter name se save kar diya
    // agar ham = lagate he to wha pichla div remove hota rhega and nya banta rhega to isliye hamne use kiya += ka jo pichla save kara rhega aur agla bnata rhega
    
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer(){
    var timerit = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timervalue").textContent=timer;
    }
    else{
        document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER!</h1> <br> <h2>Score ${fscore} </h2> `;
        clearInterval(timerint);
    }
    },1000);
}
function getnewhit(){
hitrn = Math.floor(Math.random()*10)
document.querySelector("#hitval").textContent=hitrn;
}

document.querySelector("#pbtm").addEventListener("click" , function(details){
var clickednum = Number( details.target.textContent);
if(clickednum == hitrn){
    increaseScore();
    makebubble();
    getnewhit();
}

})

getnewhit()
runtimer();
makebubble();
