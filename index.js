let homeScoreEl = document.getElementById("homeScore-el");
let gustScoreEl = document.getElementById("guestScore-el");

let homeScore = 0;
let guestScore = 0;
function homeadd1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function homeadd2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function homeadd3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function guestadd1() {
    guestScore += 1;
    gustScoreEl.textContent = guestScore;
}

function guestadd2() {
    guestScore += 2;
    gustScoreEl.textContent = guestScore;
}

function guestadd3() {
    guestScore += 3;
    gustScoreEl.textContent = guestScore;
}