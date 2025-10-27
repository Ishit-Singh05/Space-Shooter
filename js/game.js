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


// Collision helper
function isColliding(a, b) {
  const rectA = a.getBoundingClientRect();
  const rectB = b.getBoundingClientRect();
  return !(
    rectA.bottom < rectB.top ||
    rectA.top > rectB.bottom ||
    rectA.right < rectB.left ||
    rectA.left > rectB.right
  );
}

// Game over → save score and redirect
function gameOver() {
  const name = localStorage.getItem("playerName");

  // Get previous leaderboard or empty array
  const leaderboardData = JSON.parse(localStorage.getItem("leaderboardData") || "[]");

  // Add current player & score
  leaderboardData.push({ name, score });

  // Save back to localStorage
  localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
  localStorage.setItem("lastScore", score);

  // Redirect to leaderboard page
  window.location.href = "../leaderboard.html";
}

// Main game loop
function animate() {
  const playerX = mouseX - player.offsetWidth / 2;
  player.style.left = Math.min(Math.max(playerX, 0), window.innerWidth - player.offsetWidth) + "px";

  // Move bullets
  bullets.forEach((bullet, i) => {
    bullet.style.top = bullet.offsetTop - 10 + "px";
    if (bullet.offsetTop < -20) {
      bullet.remove();
      bullets.splice(i, 1);
    }
  });

  // Move enemies
  enemies.forEach((enemy, i) => {
    enemy.style.top = enemy.offsetTop + 2 + "px";
    if (enemy.offsetTop > window.innerHeight) {
      enemy.remove();
      enemies.splice(i, 1);
      health -= 10;
      if (health <= 0) return gameOver();
    }
  });

  // Move healthkits
  healthkits.forEach((kit, i) => {
    kit.style.top = kit.offsetTop + 2 + "px";
    if (kit.offsetTop > window.innerHeight) {
      kit.remove();
      healthkits.splice(i, 1);
    }
  });

  // Bullet–Enemy collision
  enemies.forEach((enemy, ei) => {
    bullets.forEach((bullet, bi) => {
      if (isColliding(enemy, bullet)) {
        enemy.remove();
        bullet.remove();
        enemies.splice(ei, 1);
        bullets.splice(bi, 1);
        score++;
      }
    });
  });

  // Bullet–Healthkit collision
  healthkits.forEach((kit, ki) => {
    bullets.forEach((bullet, bi) => {
      if (isColliding(kit, bullet)) {
        kit.remove();
        bullet.remove();
        healthkits.splice(ki, 1);
        bullets.splice(bi, 1);
        health = Math.min(100, health + 10);
      }
    });
  });

  // Update UI
  const scoreNum = document.getElementById("score-num");
  const healthNum = document.getElementById("health-num");

  scoreNum.textContent = score;
  healthNum.textContent = health;


  requestAnimationFrame(animate);
}

// Start animation
animate();
