const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
const scoreText = document.getElementById("score");
const healthText = document.getElementById("health");

let bullets = [];
let enemies = [];
let healthkits = [];
let score = 0;
let health = 100;
let mouseX = window.innerWidth / 2;

// Move player with mouse/touch
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
});
document.addEventListener("touchmove", (e) => {
  mouseX = e.touches[0].clientX;
});
