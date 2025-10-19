const startBtn = document.getElementById("startBtn");
const playerNameInput = document.getElementById("playerName");
const errorMsg = document.getElementById("errorMsg");

startBtn.addEventListener("click", () => {
  const name = playerNameInput.value.trim();
  if (!name) {
    errorMsg.textContent = "Please enter your name!";
    return;
  }
  // Clear error if name entered
  errorMsg.textContent = "";
  localStorage.setItem("playerName", name);
  window.location.href = "game.html";
});

// Optional: remove error as user types
playerNameInput.addEventListener("input", () => {
  if (playerNameInput.value.trim() !== "") {
    errorMsg.textContent = "";
  }
});