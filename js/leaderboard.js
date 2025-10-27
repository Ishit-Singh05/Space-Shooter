const leaderboard = JSON.parse(localStorage.getItem("leaderboardData") || "[]");

const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = leaderboard
  .map(entry => `<p><span class="player-name">${entry.name}</span>-><span class="player-score">${entry.score} points</span></p>`)
  .join("");

function restart() {
  localStorage.removeItem("playerName");
  window.location.href = "index.html";
}