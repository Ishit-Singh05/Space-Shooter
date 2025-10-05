 document.getElementById("startBtn").addEventListener("click", () => {
    const name = document.getElementById("playerName").value.trim();
    if (!name) return alert("Please enter your name!");
    localStorage.setItem("playerName", name);
    window.location.href = "game.html";
});