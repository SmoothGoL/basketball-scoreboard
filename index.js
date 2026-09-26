let homeScore = 0;
let guestScore = 0;
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

const teamButtonContainers = document.querySelectorAll('.score-editors');

teamButtonContainers[0].addEventListener('click', (e) => {
    if (e.target.dataset.team) {
        addToHome(Number(e.target.dataset.team));
    }
});

teamButtonContainers[1].addEventListener('click', (e) => {
    if (e.target.dataset.team) {
        addToGuest(Number(e.target.dataset.team));
    }
});

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
