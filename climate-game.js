const scenarios = [
  {
    icon: "🚌",
    title: "Transportation",
    description: "Which travel option produces fewer greenhouse gas emissions?",
    options: ["Drive alone", "Use public transport", "Idle the car", "Take multiple short trips"],
    answer: "Use public transport"
  },
  {
    icon: "💡",
    title: "Electricity Usage",
    description: "What helps reduce carbon emissions at home?",
    options: ["Leave lights on", "Turn off unused appliances", "Use old bulbs", "Keep chargers plugged in"],
    answer: "Turn off unused appliances"
  },
  {
    icon: "🌳",
    title: "Tree Plantation",
    description: "Why is planting trees important?",
    options: ["Increase pollution", "Absorb carbon dioxide", "Waste water", "Reduce biodiversity"],
    answer: "Absorb carbon dioxide"
  },
  {
    icon: "☀️",
    title: "Renewable Energy",
    description: "Which energy source is clean and renewable?",
    options: ["Coal", "Solar Energy", "Diesel", "Petroleum"],
    answer: "Solar Energy"
  },
  {
    icon: "🚴",
    title: "Daily Commute",
    description: "Which choice has the smallest carbon footprint?",
    options: ["Cycling", "Driving SUV", "Using generator", "Burning fuel"],
    answer: "Cycling"
  },
  {
    icon: "🏠",
    title: "Home Insulation",
    description: "What reduces heating and cooling energy use?",
    options: ["Open windows all day", "Proper insulation", "Using more AC", "Ignoring leaks"],
    answer: "Proper insulation"
  },
  {
    icon: "🥗",
    title: "Food Choices",
    description: "Which habit can lower emissions?",
    options: ["Wasting food", "Eating locally produced food", "Using disposable plates", "Overbuying groceries"],
    answer: "Eating locally produced food"
  },
  {
    icon: "♻️",
    title: "Recycling",
    description: "How does recycling help the climate?",
    options: ["Increases waste", "Reduces energy use", "Raises emissions", "Consumes more resources"],
    answer: "Reduces energy use"
  },
  {
    icon: "🏭",
    title: "Industrial Emissions",
    description: "What can factories do to reduce emissions?",
    options: ["Burn more coal", "Use cleaner technologies", "Ignore monitoring", "Waste energy"],
    answer: "Use cleaner technologies"
  },
  {
    icon: "🌍",
    title: "Global Warming",
    description: "What is the main cause of climate change?",
    options: ["Excess greenhouse gases", "Moon phases", "Ocean tides", "Cloud color"],
    answer: "Excess greenhouse gases"
  },
  {
    icon: "🔌",
    title: "Standby Power",
    description: "What reduces phantom electricity use?",
    options: ["Leave devices plugged in", "Unplug unused electronics", "Keep TVs on", "Use extra adapters"],
    answer: "Unplug unused electronics"
  },
  {
    icon: "🚮",
    title: "Waste Burning",
    description: "Why should waste not be burned openly?",
    options: ["It improves air quality", "It releases greenhouse gases", "It saves energy", "It creates oxygen"],
    answer: "It releases greenhouse gases"
  },
  {
    icon: "🌊",
    title: "Sea Level Rise",
    description: "What contributes to rising sea levels?",
    options: ["Melting glaciers", "Fewer clouds", "Lower tides", "Less rainfall"],
    answer: "Melting glaciers"
  },
  {
    icon: "📢",
    title: "Community Action",
    description: "What can communities do to fight climate change?",
    options: ["Promote sustainable practices", "Increase waste", "Cut forests", "Ignore pollution"],
    answer: "Promote sustainable practices"
  },
  {
    icon: "🏆",
    title: "Personal Responsibility",
    description: "What is the best long-term climate strategy?",
    options: ["Increase fossil fuel use", "Adopt sustainable lifestyles", "Waste electricity", "Drive unnecessarily"],
    answer: "Adopt sustainable lifestyles"
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

  let badge = "🌍 Climate Awareness Beginner";
  if (accuracy >= 90) badge = "🏆 Climate Action Expert";
  else if (accuracy >= 75) badge = "🌟 Carbon Reduction Champion";
  else if (accuracy >= 50) badge = "🌱 Climate Conscious Learner";

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