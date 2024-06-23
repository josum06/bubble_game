var timer=12;
var hit=0;
var score=0;

// jispe click kroge us par event raise hoga  aur event listener na milne par event element ke parent par listener dhundega or wha bhi na milne par event parent ke parent ke parent par listener dhundega
function makebubbble(){
    var clutter="";
    for(var i=1; i<=80 ;i++){
        var rn =Math.floor(Math.random()*10);
        clutter+=`<div class="bubble"> ${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

// making the timer for bubble game.
function runtimer(){
   var time=  setInterval(function() {
    if (timer > 0){
      timer--;
      document.querySelector("#timerinterval").textContent =timer;
    }else{
        // if we get our timer == 0 then it will remove the extra memory. 
        clearInterval(time);
        document.querySelector("#pbottom").innerHTML = `<h1> Oops! Game Over! </h1>`; // if timer is 0 game will be over .
    }
    },1000);
}

// new hit updation
function newhit(){
    hit= Math.floor(Math.random() * 10);
    document.querySelector("#hitimer").textContent = hit;
}

// updating the score if get clicked on th same number that appeared in hit .
function increasescore(){
    score+= 10;
    document.querySelector("#scores").textContent =score;
}
// accesssing the value inside the each bubble.
document.querySelector("#pbottom").addEventListener("click" , function(details) {
   var clickednum = (Number(details.target.textContent)); // we use to number to get the numbr rather than string.
   if(clickednum == hit){
        increasescore();
        makebubbble(); // making new bubble after it get matched with the hit.
        newhit();  // updating the new hit after it get matched with the hit.
   } 
})

newhit();
runtimer();
makebubbble();