let homeScore = document.querySelector(".homeScore");
let guestScore = document.querySelector(".guestScore");

let homeboard = document.getElementById("home-board");
let guestboard = document.getElementById("guest-board");
let countHome = 0;
let countGuest = 0;

window.onload = function () {
  updateHomeBoard(countHome);
  updateGuestBoard(countGuest);
  homeScore.textContent = "Home : ----";
  guestScore.textContent = "Guest : ----";
 
};
function reset() {
  countHome = 0;
  countGuest = 0;
  updateHomeBoard(countHome);
  updateGuestBoard(countGuest);
  homeScore.textContent = "Home : ----";
  guestScore.textContent = "Guest : ----";
}

function homeAdd1() {
  countHome += 1;
  updateHomeBoard(countHome);
}

function homeAdd2() {
  countHome += 2;
  updateHomeBoard(countHome);
}
function homeAdd3() {
  countHome += 3;
  updateHomeBoard(countHome);
}

function updateHomeBoard(count) {
  homeboard.textContent = count;
}

function guestAdd1() {
  countGuest += 1;
  updateGuestBoard(countGuest);
}
function guestAdd2() {
  countGuest += 2;
  updateGuestBoard(countGuest);
}
function guestAdd3() {
  countGuest += 3;
  updateGuestBoard(countGuest);
}
function updateGuestBoard(count) {
  guestboard.textContent = count;
}

function done() {
  if (countGuest > countHome) {
    homeScore.textContent = "Home : Loser";
    guestScore.textContent = "Guest : Winner";
  } else if (countHome > countGuest) {
    homeScore.textContent = "Home : Winner";
    guestScore.textContent = "Guest : Loser";
  } else {
    homeScore.textContent = "Home : Draw";
    guestScore.textContent = "Guest : Draw";
  }
}
