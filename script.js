// ================================
// EcoPlay Topics Data
// ================================
const ecoContent = [
  {
    title: "Waste Management",
    video: "https://www.youtube.com/watch?v=OasbYWF4_S8",
    game: "waste-game.html"
  },
  {
    title: "Water Conservation",
    video: "https://www.youtube.com/watch?v=4ND0vY8jNAk",
    game: "water-game.html"
  },
  {
    title: "Climate Change",
    video: "https://www.youtube.com/watch?v=EtW2rrLHs08",
    game: "climate-game.html"
  },
  {
    title: "Plastic Pollution",
    video: "https://www.youtube.com/watch?v=ODni_Bey154",
    game: "plastic-game.html"
  },
  {
    title: "Biodiversity and Wildlife Conservation",
    video: "https://www.youtube.com/watch?v=GK_vRtHJZu4",
    game: "biodiversity-game.html"
  },
  {
    title: "Deforestation and Forest Conservation",
    video: "https://www.youtube.com/watch?v=Ic-J6hcSKa8",
    game: "deforestation-game.html"
  }
];

// ================================
// Open YouTube Video
// ================================
function openVideo(index) {
  window.open(ecoContent[index].video, "_blank");
}

// ================================
// Open Topic Game
// ================================
function openGame(index) {
  window.location.href = ecoContent[index].game;
}

// ================================
// Quiz Loader (works only on quiz.html)
// ================================
function loadQuiz() {
  const quizBox = document.getElementById("quiz-box");
  if (!quizBox) return;

  quizBox.innerHTML = `
    <h3>🌍 EcoPlay Quiz Module</h3>
    <p>Select a topic quiz from the buttons below.</p>

    <a href="waste-quiz.html" class="hero-btn">Waste Management Quiz</a><br><br>
    <a href="water-quiz.html" class="hero-btn">Water Conservation  Quiz</a><br><br>
    <a href="climate-quiz.html" class="hero-btn">Climate Change Quiz</a><br><br>
    <a href="plastic-quiz.html" class="hero-btn">Plastic Pollution Quiz</a><br><br>
    <a href="biodiversity-quiz.html" class="hero-btn">Biodiversity Quiz</a><br><br>
    <a href="deforestation-quiz.html" class="hero-btn">Deforestation Quiz</a>
  `;
}

// ================================
// Leaderboard Loader
// ================================
function loadLeaderboard() {
  const box = document.getElementById("leaderboard-list");
  if (!box) return;

  const leaderboard =
    JSON.parse(localStorage.getItem("ecoLeaderboard")) || [];

  if (leaderboard.length === 0) {
    box.innerHTML = "<p>No scores yet.</p>";
    return;
  }

  leaderboard.sort((a, b) => b.score - a.score);

  box.innerHTML = leaderboard
    .map(
      (item, index) =>
        `<p>${index + 1}. ${item.name} - ${item.score} points</p>`
    )
    .join("");
}

// ================================
// Auto Load Based on Current Page
// ================================
window.addEventListener("DOMContentLoaded", function () {
  loadQuiz();
  loadLeaderboard();
});