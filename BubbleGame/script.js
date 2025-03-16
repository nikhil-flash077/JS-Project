
var timer = 60;
var score = 0;
var hitrn = 0;

// makes bubble
function makeBubble() {
    let clutter = "";

    for (var i = 1; i <= 150; i++) {
        // clutter += ` <div class="bubble">${i}</div>`;
        var rn = Math.floor(Math.random() * 10)
        clutter += ` <div class="bubble">${rn}</div>`;
    }

    var bubble = document.querySelector("#pbtm")
    bubble.innerHTML = clutter;

}

// timer function
function runTimer() {

    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER YOUR SCORE : ${score}</h1>`

        }
    }, 1000)

}

// hit function
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

// increase score
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// increase hit 
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    console.log(clickednum)

    if (clickednum === hitrn) {
        increaseScore()
        makeBubble();
        getNewHit();

    } else {
        document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER SCORE : ${score}</h1>`;
       

    }
})

runTimer()
makeBubble();
getNewHit();




// start the game
// function startGame() {
//     document.querySelector("#startbtn").addEventListener("click", function () {
//         getNewHit()
//         runTimer();
//         makeBubble();
//     })
// }
// startGame();








