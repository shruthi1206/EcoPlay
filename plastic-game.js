const scenarios = [
  {
    icon: "🧴",
    title: "Plastic Bottle Usage",
    description: "What is the best alternative to single-use plastic bottles?",
    options: [
      "Buy more plastic bottles",
      "Use a reusable steel bottle",
      "Throw bottles into rivers",
      "Burn plastic waste"
    ],
    answer: "Use a reusable steel bottle"
  },
  {
    icon: "🛍️",
    title: "Shopping Bags",
    description: "Which option helps reduce plastic pollution?",
    options: [
      "Use cloth bags",
      "Take multiple plastic bags",
      "Discard bags after one use",
      "Burn bags"
    ],
    answer: "Use cloth bags"
  },
  {
    icon: "🥤",
    title: "Plastic Straws",
    description: "What should you use instead of plastic straws?",
    options: [
      "Metal or paper straws",
      "More plastic straws",
      "Single-use straws daily",
      "Throw straws on beaches"
    ],
    answer: "Metal or paper straws"
  },
  {
    icon: "🌊",
    title: "Ocean Protection",
    description: "How can we protect marine life?",
    options: [
      "Dispose waste properly",
      "Dump plastic into the sea",
      "Ignore littering",
      "Use extra packaging"
    ],
    answer: "Dispose waste properly"
  },
  {
    icon: "🍱",
    title: "Food Packaging",
    description: "Which choice reduces plastic waste?",
    options: [
      "Use reusable containers",
      "Use disposable plastic boxes",
      "Wrap everything in plastic",
      "Throw containers away"
    ],
    answer: "Use reusable containers"
  },
  {
    icon: "♻️",
    title: "Recycling",
    description: "What should be done with plastic waste?",
    options: [
      "Recycle it",
      "Burn it openly",
      "Throw it in drains",
      "Bury it randomly"
    ],
    answer: "Recycle it"
  },
  {
    icon: "🏖️",
    title: "Beach Cleanup",
    description: "What is the best action during a beach visit?",
    options: [
      "Collect litter",
      "Leave trash behind",
      "Use more disposable plastics",
      "Ignore pollution"
    ],
    answer: "Collect litter"
  },
  {
    icon: "🏫",
    title: "School Campaign",
    description: "What can schools do to reduce plastic use?",
    options: [
      "Promote plastic-free campaigns",
      "Distribute single-use plastics",
      "Ignore waste",
      "Increase packaging"
    ],
    answer: "Promote plastic-free campaigns"
  },
  {
    icon: "🐢",
    title: "Marine Animals",
    description: "Why is plastic dangerous to sea turtles?",
    options: [
      "They may ingest it",
      "It improves their habitat",
      "It provides food",
      "It increases biodiversity"
    ],
    answer: "They may ingest it"
  },
  {
    icon: "🚯",
    title: "Littering",
    description: "What is the correct habit?",
    options: [
      "Never litter",
      "Throw waste anywhere",
      "Leave wrappers on roads",
      "Dump plastic in lakes"
    ],
    answer: "Never litter"
  },
  {
    icon: "🧼",
    title: "Refill Products",
    description: "How can households reduce plastic packaging?",
    options: [
      "Buy refill packs",
      "Purchase extra packaging",
      "Discard containers",
      "Use more disposables"
    ],
    answer: "Buy refill packs"
  },
  {
    icon: "🏭",
    title: "Industry Responsibility",
    description: "What should manufacturers do?",
    options: [
      "Use sustainable packaging",
      "Increase unnecessary plastics",
      "Ignore recycling",
      "Dump waste illegally"
    ],
    answer: "Use sustainable packaging"
  },
  {
    icon: "📢",
    title: "Community Awareness",
    description: "What helps reduce plastic pollution?",
    options: [
      "Educating people",
      "Encouraging littering",
      "Using more plastic",
      "Ignoring waste problems"
    ],
    answer: "Educating people"
  },
  {
    icon: "🛒",
    title: "Daily Habits",
    description: "Which habit is most sustainable?",
    options: [
      "Carry reusable items",
      "Use disposable products",
      "Accept all plastic packaging",
      "Throw away containers"
    ],
    answer: "Carry reusable items"
  },
  {
    icon: "🏆",
    title: "Long-Term Solution",
    description: "What is the best strategy to reduce plastic pollution?",
    options: [
      "Reduce, Reuse, Recycle",
      "Burn all plastic",
      "Ignore waste",
      "Increase consumption"
    ],
    answer: "Reduce, Reuse, Recycle"
  }
];

let currentIndex = 0;
let score = 0;
let attempts = 0;
let timeLeft = 60;
let timerInterval;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
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

function loadScenario() {
  if (currentIndex >= scenarios.length) {
    showFinalResult();
    return;
  }

  const s = scenarios[currentIndex];

  document.getElementById("scenario-icon").textContent = s.icon;
  document.getElementById("scenario-title").textContent = s.title;
  document.getElementById("scenario-description").textContent = s.description;
  document.getElementById("score").textContent = score;
  document.getElementById("progress").textContent =
    `${currentIndex + 1} / ${scenarios.length}`;

  const accuracy = attempts === 0 ? 0 : Math.round((score / attempts) * 100);
  document.getElementById("accuracy").textContent = `${accuracy}%`;
  document.getElementById("progress-bar").style.width =
    `${(currentIndex / scenarios.length) * 100}%`;

  document.getElementById("feedback-message").textContent = "";

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  shuffle(s.options);

  s.options.forEach(option => {
    const card = document.createElement("div");
    card.className = "option-card";
    card.innerHTML = `<h3>${option}</h3>`;
    card.onclick = () => checkAnswer(option);
    container.appendChild(card);
  });
}

function checkAnswer(selected) {
  const s = scenarios[currentIndex];
  attempts++;

  const feedback = document.getElementById("feedback-message");

  if (selected === s.answer) {
    score++;
    feedback.textContent = `✅ Correct! ${s.answer}.`;
    feedback.style.color = "#22c55e";
  } else {
    feedback.textContent = `❌ Correct Answer: ${s.answer}.`;
    feedback.style.color = "#f87171";
  }

  setTimeout(() => {
    currentIndex++;
    loadScenario();
  }, 1200);
}

function showFinalResult() {
  clearInterval(timerInterval);

  const accuracy = attempts === 0 ? 0 : Math.round((score / attempts) * 100);

  let badge = "🌊 Plastic Awareness Beginner";
  if (accuracy >= 90) badge = "🏆 Ocean Cleanup Champion";
  else if (accuracy >= 75) badge = "🌟 Plastic Pollution Warrior";
  else if (accuracy >= 50) badge = "🌱 Eco-Friendly Learner";

  document.getElementById("final-badge").textContent = badge;
  document.getElementById("final-score").textContent =
    `Final Score: ${score} / ${scenarios.length}`;
  document.getElementById("final-accuracy").textContent =
    `Accuracy: ${accuracy}%`;

  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("result-modal").classList.remove("hidden");
}

function restartGame() {
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  shuffle(scenarios);
  loadScenario();
  startTimer();
});