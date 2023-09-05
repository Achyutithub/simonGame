let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
    
}); 

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSeq= [];
    level++;
    h2.innerText = "Level " + level;

    let i = Math.floor(Math.random() * 3);
    let randColor = btns[i];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn); 
}

function checkans(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500)
;       }
    } else {
        h2.innerText = "Game Over and press any key to start !!";
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(b of allbtns) {
    b.addEventListener("click", btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}