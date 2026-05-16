const questions = [
  {
    icon: "🌳",
    title: "Forest Importance",
    description: "Forests are important because they...",
    options: [
      "Produce oxygen and support wildlife",
      "Increase pollution",
      "Destroy habitats",
      "Reduce rainfall"
    ],
    answer: "Produce oxygen and support wildlife"
  },
  {
    icon: "🪓",
    title: "Deforestation",
    description: "Deforestation means...",
    options: [
      "Cutting down trees on a large scale",
      "Planting new forests",
      "Saving wildlife",
      "Cleaning rivers"
    ],
    answer: "Cutting down trees on a large scale"
  },
  {
    icon: "🌱",
    title: "Afforestation",
    description: "Afforestation means...",
    options: [
      "Planting trees",
      "Burning forests",
      "Mining land",
      "Cutting wood"
    ],
    answer: "Planting trees"
  },
  {
    icon: "🐅",
    title: "Wildlife Habitat",
    description: "Forest destruction causes...",
    options: [
      "Loss of animal habitats",
      "Cleaner air",
      "More biodiversity",
      "Less soil erosion"
    ],
    answer: "Loss of animal habitats"
  },
  {
    icon: "🌧️",
    title: "Rainfall",
    description: "Forests help by...",
    options: [
      "Maintaining the water cycle",
      "Reducing rainfall",
      "Increasing drought",
      "Producing plastic"
    ],
    answer: "Maintaining the water cycle"
  },
  {
    icon: "🌍",
    title: "Climate",
    description: "Trees reduce climate change by...",
    options: [
      "Absorbing carbon dioxide",
      "Producing smoke",
      "Increasing heat",
      "Cutting oxygen"
    ],
    answer: "Absorbing carbon dioxide"
  },
  {
    icon: "⛰️",
    title: "Soil Protection",
    description: "Tree roots help prevent...",
    options: [
      "Soil erosion",
      "Photosynthesis",
      "Rainfall",
      "Recycling"
    ],
    answer: "Soil erosion"
  },
  {
    icon: "🔥",
    title: "Forest Fires",
    description: "A major cause of forest loss is...",
    options: [
      "Wildfires",
      "Tree planting",
      "Rainfall",
      "Recycling"
    ],
    answer: "Wildfires"
  },
  {
    icon: "🚜",
    title: "Agriculture",
    description: "Clearing forests for farming can...",
    options: [
      "Reduce biodiversity",
      "Increase habitats",
      "Clean the air",
      "Protect animals"
    ],
    answer: "Reduce biodiversity"
  },
  {
    icon: "🌿",
    title: "Conservation",
    description: "The best way to protect forests is...",
    options: [
      "Sustainable forestry",
      "Illegal logging",
      "Burning trees",
      "Overgrazing"
    ],
    answer: "Sustainable forestry"
  },
  {
    icon: "🦜",
    title: "Species Protection",
    description: "Forests provide shelter for...",
    options: [
      "Thousands of species",
      "Only humans",
      "No animals",
      "Only insects"
    ],
    answer: "Thousands of species"
  },
  {
    icon: "🏞️",
    title: "National Parks",
    description: "Protected forests are maintained as...",
    options: [
      "National parks and reserves",
      "Landfills",
      "Factories",
      "Parking lots"
    ],
    answer: "National parks and reserves"
  },
  {
    icon: "🌾",
    title: "Local Communities",
    description: "Many communities depend on forests for...",
    options: [
      "Food and livelihoods",
      "Plastic production",
      "Air pollution",
      "Waste burning"
    ],
    answer: "Food and livelihoods"
  },
  {
    icon: "📚",
    title: "Awareness",
    description: "Students can help by...",
    options: [
      "Planting trees and spreading awareness",
      "Cutting trees",
      "Ignoring conservation",
      "Burning waste"
    ],
    answer: "Planting trees and spreading awareness"
  },
  {
    icon: "🏆",
    title: "Best Solution",
    description: "The best long-term solution is...",
    options: [
      "Protect and restore forests",
      "Increase logging",
      "Expand deforestation",
      "Ignore environmental issues"
    ],
    answer: "Protect and restore forests"
  }
];

// Reuse same game logic as biodiversity game
let current = 0;
let score = 0;

function loadQuestion() {
  if (current >= questions.length) {
    document.querySelector('.game-container').innerHTML = `
      <div class="scenario-card">
        <h1>🏆 Game Completed!</h1>
        <h2>Your Score: ${score} / ${questions.length}</h2>
        <button class="option-card" onclick="location.reload()">Play Again</button>
      </div>
    `;
    return;
  }

  const q = questions[current];

  document.getElementById('scenario-icon').textContent = q.icon;
  document.getElementById('question-title').textContent = q.title;
  document.getElementById('question-description').textContent = q.description;
  document.getElementById('score').textContent = score;
  document.getElementById('progress').textContent =
    `${current + 1} / ${questions.length}`;
  document.getElementById('progress-bar-fill').style.width =
    `${(current / questions.length) * 100}%`;

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  document.getElementById('feedback-message').textContent = '';

  q.options.forEach(option => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.innerHTML = `<h3>${option}</h3>`;
    card.onclick = () => checkAnswer(option);
    container.appendChild(card);
  });
}

function checkAnswer(selected) {
  const q = questions[current];
  const feedback = document.getElementById('feedback-message');

  if (selected === q.answer) {
    score++;
    feedback.textContent = '✅ Correct!';
    feedback.style.color = '#22c55e';
  } else {
    feedback.textContent = `❌ Correct Answer: ${q.answer}`;
    feedback.style.color = '#f87171';
  }

  setTimeout(() => {
    current++;
    loadQuestion();
  }, 1000);
}

document.addEventListener('DOMContentLoaded', loadQuestion);