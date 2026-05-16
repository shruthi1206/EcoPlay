const wasteItems = [
  { name: "Banana Peel", emoji: "🍌", type: "wet" },
  { name: "Vegetable Scraps", emoji: "🥬", type: "wet" },
  { name: "Tea Leaves", emoji: "🍃", type: "wet" },
  { name: "Apple Core", emoji: "🍎", type: "wet" },
  { name: "Dry Leaves", emoji: "🍂", type: "wet" },

  { name: "Newspaper", emoji: "📰", type: "dry" },
  { name: "Cardboard Box", emoji: "📦", type: "dry" },
  { name: "Paper Bag", emoji: "🛍️", type: "dry" },
  { name: "Notebook Paper", emoji: "📄", type: "dry" },
  { name: "Egg Carton", emoji: "🥚", type: "dry" },

  { name: "Plastic Bottle", emoji: "🧴", type: "recycle" },
  { name: "Aluminum Can", emoji: "🥫", type: "recycle" },
  { name: "Glass Bottle", emoji: "🍾", type: "recycle" },
  { name: "Milk Carton", emoji: "🥛", type: "recycle" },
  { name: "Yogurt Cup", emoji: "🥣", type: "recycle" }
];

let currentIndex = 0;
let score = 0;
let attempts = 0;
let timeLeft = 60;
let timerInterval;

function shuffleItems() {
  wasteItems.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showFinalResult();
    }
  }, 1000);
}

function loadItem() {
  if (currentIndex >= wasteItems.length) {
    showFinalResult();
    return;
  }

  const item = wasteItems[currentIndex];

  document.getElementById("item-emoji").textContent = item.emoji;
  document.getElementById("item-name").textContent = item.name;
  document.getElementById("score").textContent = score;
  document.getElementById("progress").textContent =
    `${currentIndex + 1} / ${wasteItems.length}`;

  const accuracy = attempts === 0 ? 0 : Math.round((score / attempts) * 100);
  document.getElementById("accuracy").textContent = `${accuracy}%`;
  document.getElementById("progress-bar").style.width =
    `${(currentIndex / wasteItems.length) * 100}%`;

  document.getElementById("feedback-message").textContent = "";
}

function handleSelection(selectedType) {
  const item = wasteItems[currentIndex];
  attempts++;

  const labels = {
    wet: "Organic Waste",
    dry: "Dry Waste",
    recycle: "Recycling"
  };

  const feedback = document.getElementById("feedback-message");

  if (selectedType === item.type) {
    score++;
    feedback.textContent =
      `✅ Correct! ${item.name} belongs to ${labels[item.type]}.`;
    feedback.style.color = "#22c55e";
  } else {
    feedback.textContent =
      `❌ Incorrect. ${item.name} should go to ${labels[item.type]}.`;
    feedback.style.color = "#f87171";
  }

  document.getElementById("score").textContent = score;

  setTimeout(() => {
    currentIndex++;
    loadItem();
  }, 1200);
}

function showFinalResult() {
  clearInterval(timerInterval);

  const accuracy = attempts === 0 ? 0 : Math.round((score / attempts) * 100);

  let badge = "🌍 Environmental Beginner";
  if (accuracy >= 90) badge = "🏆 Sustainability Expert";
  else if (accuracy >= 75) badge = "🌟 Green Guardian";
  else if (accuracy >= 50) badge = "🌱 Eco Learner";

  document.getElementById("final-badge").textContent = badge;
  document.getElementById("final-score").textContent =
    `Final Score: ${score} / ${wasteItems.length}`;
  document.getElementById("final-accuracy").textContent =
    `Accuracy: ${accuracy}%`;

  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("result-modal").classList.remove("hidden");
}

function restartGame() {
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  shuffleItems();
  loadItem();
  startTimer();

  document.querySelectorAll(".bin").forEach(bin => {
    bin.addEventListener("click", () => {
      handleSelection(bin.dataset.type);
    });
  });
});