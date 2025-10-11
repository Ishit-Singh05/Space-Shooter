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


// Fire bullets automatically
setInterval(() => {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");

  const bulletOffsetX = 50; // adjust this value to match your PNG tip
  bullet.style.left = player.offsetLeft + player.offsetWidth / 2 - 3 - bulletOffsetX + "px";

  bullet.style.top = player.offsetTop - 10 + "px";
  gameArea.appendChild(bullet);
  bullets.push(bullet);
}, 200);


// Spawn enemies
setInterval(() => {
  const enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.style.left = Math.random() * (window.innerWidth - 60) + "px";
  enemy.style.top = "-40px";
  gameArea.appendChild(enemy);
  enemies.push(enemy);
}, 500);

// Spawn healthkits
setInterval(() => {
  const kit = document.createElement("div");
  kit.classList.add("healthkit");
  kit.style.left = Math.random() * (window.innerWidth - 32) + "px";
  kit.style.top = "-32px";
  gameArea.appendChild(kit);
  healthkits.push(kit);
}, 5200);
