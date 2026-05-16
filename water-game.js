const scenarios = [
  {
    icon: "🚰",
    title: "Leaking Tap",
    description: "A tap is leaking continuously in your kitchen.",
    options: [
      "Ignore it",
      "Fix it immediately",
      "Let it drip",
      "Open the tap fully"
    ],
    answer: "Fix it immediately"
  },
  {
    icon: "🪥",
    title: "Brushing Teeth",
    description: "How should you use water while brushing your teeth?",
    options: [
      "Keep the tap running",
      "Turn off the tap while brushing",
      "Use more water",
      "Wash for 20 minutes"
    ],
    answer: "Turn off the tap while brushing"
  },
  {
    icon: "🌧️",
    title: "Rainwater",
    description: "What is the best use of rainwater?",
    options: [
      "Let it flow away",
      "Store it using rainwater harvesting",
      "Mix it with chemicals",
      "Ignore it"
    ],
    answer: "Store it using rainwater harvesting"
  },
  {
    icon: "🚗",
    title: "Car Washing",
    description: "What is the most water-efficient way to wash a car?",
    options: [
      "Use a hose continuously",
      "Use a bucket and cloth",
      "Wash every day",
      "Use extra water"
    ],
    answer: "Use a bucket and cloth"
  },
  {
    icon: "🌱",
    title: "Garden Watering",
    description: "When is the best time to water plants?",
    options: [
      "At noon",
      "Early morning or evening",
      "During rain",
      "Anytime with maximum water"
    ],
    answer: "Early morning or evening"
  },
  {
    icon: "🚿",
    title: "Bathing",
    description: "Which method saves more water?",
    options: [
      "Long shower",
      "Bucket bath",
      "Keep shower running",
      "Two showers a day"
    ],
    answer: "Bucket bath"
  },
  {
    icon: "🍽️",
    title: "Dish Washing",
    description: "What helps reduce water use while washing dishes?",
    options: [
      "Wash under running water",
      "Fill a basin and rinse efficiently",
      "Use extra soap and water",
      "Wash one item at a time"
    ],
    answer: "Fill a basin and rinse efficiently"
  },
  {
    icon: "🏫",
    title: "School Awareness",
    description: "What should schools encourage?",
    options: [
      "Water wastage",
      "Water conservation campaigns",
      "Ignoring leaks",
      "Overwatering gardens"
    ],
    answer: "Water conservation campaigns"
  },
  {
    icon: "👕",
    title: "Laundry",
    description: "How can you save water while doing laundry?",
    options: [
      "Wash one item at a time",
      "Run only full loads",
      "Use extra rinse cycles",
      "Wash daily"
    ],
    answer: "Run only full loads"
  },
  {
    icon: "🏠",
    title: "Household Reuse",
    description: "How can greywater be reused?",
    options: [
      "Throw it away",
      "Use it for gardening",
      "Mix with drinking water",
      "Ignore it"
    ],
    answer: "Use it for gardening"
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description: "Why is water conservation important?",
    options: [
      "Freshwater is limited",
      "Water is unlimited",
      "It has no environmental impact",
      "It increases waste"
    ],
    answer: "Freshwater is limited"
  },
  {
    icon: "🚽",
    title: "Toilet Usage",
    description: "Which toilet system saves more water?",
    options: [
      "Leaking flush",
      "Dual-flush system",
      "Continuous flush",
      "Open tap nearby"
    ],
    answer: "Dual-flush system"
  },
  {
    icon: "❄️",
    title: "Defrosting Food",
    description: "How should frozen food be thawed?",
    options: [
      "Under running water",
      "In the refrigerator",
      "Using excess hot water",
      "In a sink full of water"
    ],
    answer: "In the refrigerator"
  },
  {
    icon: "🏭",
    title: "Industry",
    description: "How can industries reduce water use?",
    options: [
      "Discharge untreated water",
      "Recycle and treat water",
      "Increase waste",
      "Ignore monitoring"
    ],
    answer: "Recycle and treat water"
  },
  {
    icon: "📢",
    title: "Community Action",
    description: "What can communities do?",
    options: [
      "Promote conservation awareness",
      "Waste more water",
      "Ignore shortages",
      "Remove rainwater systems"
    ],
    answer: "Promote conservation awareness"
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

  let badge = "💧 Water Awareness Beginner";
  if (accuracy >= 90) badge = "🏆 Water Conservation Expert";
  else if (accuracy >= 75) badge = "🌟 Water Guardian";
  else if (accuracy >= 50) badge = "🌱 Responsible Water Saver";

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