let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function addToHome(n) {
    homeScore += n;
    homeScoreEl.textContent = homeScore;
}

function addToGuest(n) {
    guestScore += n;
    guestScoreEl.textContent = guestScore;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
}
