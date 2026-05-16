const questions = [
  {
    icon: "🦁",
    title: "Wildlife Protection",
    description: "Which action helps protect endangered animals?",
    options: [
      "Protect natural habitats",
      "Cut forests",
      "Pollute rivers",
      "Hunt animals"
    ],
    answer: "Protect natural habitats"
  },
  {
    icon: "🌳",
    title: "Forest Ecosystems",
    description: "Forests are important because they...",
    options: [
      "Support many species",
      "Increase pollution",
      "Destroy habitats",
      "Reduce oxygen"
    ],
    answer: "Support many species"
  },
  {
    icon: "🐝",
    title: "Pollinators",
    description: "Which insect is a major pollinator?",
    options: [
      "Bee",
      "Mosquito",
      "Cockroach",
      "Termite"
    ],
    answer: "Bee"
  },
  {
    icon: "🐢",
    title: "Habitat Loss",
    description: "What is the biggest threat to biodiversity?",
    options: [
      "Habitat destruction",
      "Tree planting",
      "Recycling",
      "Water saving"
    ],
    answer: "Habitat destruction"
  },
  {
    icon: "🌊",
    title: "Marine Biodiversity",
    description: "Coral reefs are home to...",
    options: [
      "Thousands of species",
      "No organisms",
      "Only plants",
      "Only fish"
    ],
    answer: "Thousands of species"
  },
  {
    icon: "🦋",
    title: "Food Chains",
    description: "Biodiversity helps maintain...",
    options: [
      "Balanced ecosystems",
      "Air pollution",
      "Deforestation",
      "Waste dumping"
    ],
    answer: "Balanced ecosystems"
  },
  {
    icon: "🐘",
    title: "Conservation",
    description: "National parks are created to...",
    options: [
      "Protect wildlife",
      "Increase hunting",
      "Dump waste",
      "Build factories"
    ],
    answer: "Protect wildlife"
  },
  {
    icon: "🌱",
    title: "Native Plants",
    description: "Planting native species helps...",
    options: [
      "Local ecosystems",
      "Plastic pollution",
      "Soil erosion",
      "Habitat loss"
    ],
    answer: "Local ecosystems"
  },
  {
    icon: "🦜",
    title: "Endangered Species",
    description: "Which species may disappear forever?",
    options: [
      "Endangered species",
      "Common plants",
      "Domestic animals",
      "Farm crops"
    ],
    answer: "Endangered species"
  },
  {
    icon: "🐟",
    title: "Water Ecosystems",
    description: "Clean rivers help...",
    options: [
      "Aquatic life survive",
      "Increase toxins",
      "Destroy habitats",
      "Reduce biodiversity"
    ],
    answer: "Aquatic life survive"
  },
  {
    icon: "🌍",
    title: "Global Importance",
    description: "Biodiversity is essential for...",
    options: [
      "Life on Earth",
      "More waste",
      "Higher pollution",
      "Forest destruction"
    ],
    answer: "Life on Earth"
  },
  {
    icon: "🦉",
    title: "Nocturnal Wildlife",
    description: "Owls help ecosystems by...",
    options: [
      "Controlling pests",
      "Producing plastic",
      "Causing pollution",
      "Destroying crops"
    ],
    answer: "Controlling pests"
  },
  {
    icon: "🌺",
    title: "Flower Diversity",
    description: "Flower diversity supports...",
    options: [
      "Pollinators",
      "Landfills",
      "Deforestation",
      "Overfishing"
    ],
    answer: "Pollinators"
  },
  {
    icon: "🐼",
    title: "Conservation Efforts",
    description: "Zoos can help through...",
    options: [
      "Breeding programs",
      "Habitat destruction",
      "Waste burning",
      "Illegal trade"
    ],
    answer: "Breeding programs"
  },
  {
    icon: "🏆",
    title: "Best Practice",
    description: "The best way to conserve biodiversity is to...",
    options: [
      "Protect habitats and species",
      "Cut more forests",
      "Increase pollution",
      "Ignore conservation"
    ],
    answer: "Protect habitats and species"
  }
];

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