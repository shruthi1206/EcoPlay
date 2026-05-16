// ==========================================
// EcoPlay Dynamic Quiz System
// One file for all 6 topics
// Save this as: quiz.js
// ==========================================

// ---------- Question Database ----------
const quizData = {
  "Waste Management": [
  {
    question: "What does the first 'R' in Reduce, Reuse, Recycle stand for?",
    options: ["Reduce", "Reuse", "Recycle", "Recover"],
    answer: "Reduce"
  },
  {
    question: "Which bin is commonly used for recyclable waste?",
    options: ["Blue Bin", "Red Bin", "Black Bin", "Brown Bin"],
    answer: "Blue Bin"
  },
  {
    question: "Which of the following is biodegradable?",
    options: ["Plastic Bottle", "Banana Peel", "Glass", "Aluminum Can"],
    answer: "Banana Peel"
  },
  {
    question: "Composting is mainly used for:",
    options: ["Organic Waste", "Plastic", "Metal", "Glass"],
    answer: "Organic Waste"
  },
  {
    question: "Which item is considered e-waste?",
    options: ["Old Computer", "Banana Peel", "Paper Bag", "Cardboard"],
    answer: "Old Computer"
  },
  {
    question: "What does waste segregation mean?",
    options: [
      "Separating waste into categories",
      "Burning all waste",
      "Throwing waste in rivers",
      "Mixing all waste"
    ],
    answer: "Separating waste into categories"
  },
  {
    question: "Which of these is hazardous waste?",
    options: ["Batteries", "Leaves", "Newspaper", "Vegetable Peels"],
    answer: "Batteries"
  },
  {
    question: "Reusing bags helps reduce:",
    options: ["Plastic Waste", "Rainfall", "Oxygen", "Sunlight"],
    answer: "Plastic Waste"
  },
  {
    question: "Landfills are places where:",
    options: [
      "Waste is dumped",
      "Trees are planted",
      "Water is stored",
      "Animals live"
    ],
    answer: "Waste is dumped"
  },
  {
    question: "Paper recycling helps save:",
    options: ["Trees", "Plastic", "Sand", "Coal"],
    answer: "Trees"
  },
  {
    question: "The second 'R' stands for:",
    options: ["Reuse", "Reduce", "Recycle", "Repair"],
    answer: "Reuse"
  },
  {
    question: "The third 'R' stands for:",
    options: ["Recycle", "Reduce", "Reuse", "Recover"],
    answer: "Recycle"
  },
  {
    question: "Which is the best waste management practice?",
    options: [
      "Reduce Waste",
      "Dump in Rivers",
      "Burn Everything",
      "Bury Plastics"
    ],
    answer: "Reduce Waste"
  },
  {
    question: "Which material can be recycled many times?",
    options: ["Glass", "Food Waste", "Leaves", "Soil"],
    answer: "Glass"
  },
  {
    question: "What is the most sustainable approach?",
    options: [
      "Minimize waste generation",
      "Use more disposables",
      "Burn trash openly",
      "Ignore segregation"
    ],
    answer: "Minimize waste generation"
  }
],
"Water Conservation": [
  {
    question: "Which activity saves water?",
    options: [
      "Turning off the tap while brushing",
      "Keeping taps running",
      "Ignoring leaks",
      "Overwatering plants"
    ],
    answer: "Turning off the tap while brushing"
  },
  {
    question: "Rainwater harvesting is used to:",
    options: [
      "Store rainwater",
      "Increase pollution",
      "Waste water",
      "Cut trees"
    ],
    answer: "Store rainwater"
  },
  {
    question: "Which appliance helps save water?",
    options: [
      "Low-flow showerhead",
      "Broken tap",
      "Leaking pipe",
      "Open hose"
    ],
    answer: "Low-flow showerhead"
  },
  {
    question: "Fixing leaking taps helps:",
    options: [
      "Prevent water wastage",
      "Increase pollution",
      "Raise temperatures",
      "Damage pipes"
    ],
    answer: "Prevent water wastage"
  },
  {
    question: "Which method is used to collect rainwater?",
    options: [
      "Rainwater harvesting",
      "Deforestation",
      "Segregation",
      "Composting"
    ],
    answer: "Rainwater harvesting"
  },
  {
    question: "Drip irrigation is mainly used to:",
    options: [
      "Save water in agriculture",
      "Waste water",
      "Increase soil erosion",
      "Cut trees"
    ],
    answer: "Save water in agriculture"
  },
  {
    question: "Which of these uses the least water?",
    options: [
      "Bucket bath",
      "Long shower",
      "Running hose",
      "Overflowing tank"
    ],
    answer: "Bucket bath"
  },
  {
    question: "Groundwater is stored:",
    options: [
      "Underground",
      "In clouds",
      "In oceans",
      "In factories"
    ],
    answer: "Underground"
  },
  {
    question: "Closing the tap while soaping hands helps:",
    options: [
      "Conserve water",
      "Increase water use",
      "Pollute rivers",
      "Reduce oxygen"
    ],
    answer: "Conserve water"
  },
  {
    question: "Which crop irrigation method is most efficient?",
    options: [
      "Drip irrigation",
      "Flood irrigation",
      "Overflow irrigation",
      "Open canal"
    ],
    answer: "Drip irrigation"
  },
  {
    question: "Water conservation helps reduce:",
    options: [
      "Water scarcity",
      "Biodiversity",
      "Rainfall",
      "Oxygen"
    ],
    answer: "Water scarcity"
  },
  {
    question: "A water meter helps to:",
    options: [
      "Monitor usage",
      "Cut trees",
      "Generate waste",
      "Store plastic"
    ],
    answer: "Monitor usage"
  },
  {
    question: "Which is a freshwater source?",
    options: [
      "Rivers",
      "Oceans",
      "Seas",
      "Salt lakes"
    ],
    answer: "Rivers"
  },
  {
    question: "Using native plants in gardens helps:",
    options: [
      "Reduce water demand",
      "Increase pollution",
      "Cause flooding",
      "Waste fertilizers"
    ],
    answer: "Reduce water demand"
  },
  {
    question: "The best way to conserve water is to:",
    options: [
      "Use water wisely",
      "Leave taps open",
      "Ignore leaks",
      "Waste water"
    ],
    answer: "Use water wisely"
  }
],
"Climate Change": [
  {
    question: "Which gas is a major greenhouse gas?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Global warming causes:",
    options: [
      "Rising temperatures",
      "Less sunlight",
      "More oxygen",
      "Cleaner air"
    ],
    answer: "Rising temperatures"
  },
  {
    question: "Planting trees helps by:",
    options: [
      "Absorbing CO₂",
      "Increasing pollution",
      "Cutting oxygen",
      "Producing plastic"
    ],
    answer: "Absorbing CO₂"
  },
  {
    question: "The greenhouse effect traps:",
    options: [
      "Heat in the atmosphere",
      "Rainwater underground",
      "Plastic in oceans",
      "Oxygen in forests"
    ],
    answer: "Heat in the atmosphere"
  },
  {
    question: "Which activity increases carbon emissions?",
    options: [
      "Burning fossil fuels",
      "Planting trees",
      "Using bicycles",
      "Recycling"
    ],
    answer: "Burning fossil fuels"
  },
  {
    question: "Which energy source is renewable?",
    options: [
      "Solar Energy",
      "Coal",
      "Petrol",
      "Diesel"
    ],
    answer: "Solar Energy"
  },
  {
    question: "Melting glaciers contribute to:",
    options: [
      "Sea level rise",
      "Reduced rainfall",
      "More forests",
      "Less sunlight"
    ],
    answer: "Sea level rise"
  },
  {
    question: "The main cause of climate change is:",
    options: [
      "Human activities",
      "Moonlight",
      "Wind direction",
      "Ocean color"
    ],
    answer: "Human activities"
  },
  {
    question: "Using public transport helps:",
    options: [
      "Reduce emissions",
      "Increase pollution",
      "Cut trees",
      "Waste fuel"
    ],
    answer: "Reduce emissions"
  },
  {
    question: "Which sector emits large amounts of greenhouse gases?",
    options: [
      "Transportation",
      "Libraries",
      "Schools",
      "Parks"
    ],
    answer: "Transportation"
  },
  {
    question: "Deforestation worsens climate change because trees:",
    options: [
      "Absorb carbon dioxide",
      "Produce plastic",
      "Cause flooding",
      "Increase pollution"
    ],
    answer: "Absorb carbon dioxide"
  },
  {
    question: "Climate change can lead to:",
    options: [
      "Extreme weather events",
      "More stable temperatures",
      "Less rainfall variability",
      "Cleaner air everywhere"
    ],
    answer: "Extreme weather events"
  },
  {
    question: "Wind energy generates electricity using:",
    options: [
      "Moving air",
      "Plastic waste",
      "Coal dust",
      "Rainwater"
    ],
    answer: "Moving air"
  },
  {
    question: "Which practice reduces your carbon footprint?",
    options: [
      "Saving electricity",
      "Leaving lights on",
      "Driving unnecessarily",
      "Burning waste"
    ],
    answer: "Saving electricity"
  },
  {
    question: "The best way to combat climate change is to:",
    options: [
      "Reduce emissions and use clean energy",
      "Burn more fossil fuels",
      "Cut more forests",
      "Ignore environmental issues"
    ],
    answer: "Reduce emissions and use clean energy"
  }
],
"Plastic Pollution": [
  {
    question: "Which item contributes to plastic pollution?",
    options: [
      "Single-use plastic bags",
      "Paper bags",
      "Cloth bags",
      "Metal bottles"
    ],
    answer: "Single-use plastic bags"
  },
  {
    question: "Plastic in oceans harms:",
    options: [
      "Marine life",
      "Mountains",
      "Deserts",
      "Clouds"
    ],
    answer: "Marine life"
  },
  {
    question: "Best alternative to plastic bags:",
    options: [
      "Reusable cloth bags",
      "More plastic bags",
      "Plastic wrappers",
      "Foam cups"
    ],
    answer: "Reusable cloth bags"
  },
  {
    question: "Microplastics are:",
    options: [
      "Tiny plastic particles",
      "Small fish",
      "Paper fibers",
      "Metal fragments"
    ],
    answer: "Tiny plastic particles"
  },
  {
    question: "Which animal is commonly affected by ocean plastic?",
    options: [
      "Sea turtles",
      "Camels",
      "Eagles",
      "Butterflies"
    ],
    answer: "Sea turtles"
  },
  {
    question: "The most effective way to reduce plastic waste is to:",
    options: [
      "Avoid single-use plastics",
      "Burn plastic",
      "Dump it in rivers",
      "Bury it in gardens"
    ],
    answer: "Avoid single-use plastics"
  },
  {
    question: "Plastic bottles should be:",
    options: [
      "Recycled properly",
      "Thrown into oceans",
      "Burned openly",
      "Mixed with food waste"
    ],
    answer: "Recycled properly"
  },
  {
    question: "Which item is reusable?",
    options: [
      "Steel water bottle",
      "Plastic straw",
      "Disposable cup",
      "Snack wrapper"
    ],
    answer: "Steel water bottle"
  },
  {
    question: "Plastic takes approximately how long to decompose?",
    options: [
      "Hundreds of years",
      "One week",
      "One month",
      "One year"
    ],
    answer: "Hundreds of years"
  },
  {
    question: "Which practice helps reduce plastic packaging?",
    options: [
      "Buying in bulk",
      "Using extra wrappers",
      "Choosing disposable items",
      "Ignoring recycling"
    ],
    answer: "Buying in bulk"
  },
  {
    question: "Marine animals may mistake plastic for:",
    options: [
      "Food",
      "Shelter",
      "Clean water",
      "Oxygen"
    ],
    answer: "Food"
  },
  {
    question: "Which material is a sustainable substitute for plastic bags?",
    options: [
      "Cotton cloth",
      "PVC",
      "Polystyrene",
      "Nylon film"
    ],
    answer: "Cotton cloth"
  },
  {
    question: "Plastic burning releases:",
    options: [
      "Toxic gases",
      "Fresh oxygen",
      "Rainwater",
      "Soil nutrients"
    ],
    answer: "Toxic gases"
  },
  {
    question: "Extended Producer Responsibility means:",
    options: [
      "Manufacturers manage product waste",
      "Consumers burn plastic",
      "Retailers ignore packaging",
      "Schools ban recycling"
    ],
    answer: "Manufacturers manage product waste"
  },
  {
    question: "The best long-term solution is to:",
    options: [
      "Reduce, reuse, and recycle plastics",
      "Use more disposable items",
      "Dump plastic in landfills only",
      "Ignore pollution"
    ],
    answer: "Reduce, reuse, and recycle plastics"
  }
],
"Biodiversity": [
  {
    question: "Biodiversity means:",
    options: [
      "Variety of living organisms",
      "Only trees",
      "Only animals",
      "Only humans"
    ],
    answer: "Variety of living organisms"
  },
  {
    question: "Which helps protect wildlife?",
    options: [
      "Protecting habitats",
      "Cutting forests",
      "Polluting rivers",
      "Hunting animals"
    ],
    answer: "Protecting habitats"
  },
  {
    question: "Bees are important because they:",
    options: [
      "Pollinate plants",
      "Cause pollution",
      "Destroy crops",
      "Cut trees"
    ],
    answer: "Pollinate plants"
  },
  {
    question: "An endangered species is one that:",
    options: [
      "Is at risk of extinction",
      "Has many populations",
      "Lives only in oceans",
      "Produces more oxygen"
    ],
    answer: "Is at risk of extinction"
  },
  {
    question: "National parks are created to:",
    options: [
      "Protect ecosystems and wildlife",
      "Increase pollution",
      "Cut more forests",
      "Dump waste"
    ],
    answer: "Protect ecosystems and wildlife"
  },
  {
    question: "Food chains depend on:",
    options: [
      "Interactions among organisms",
      "Plastic waste",
      "Traffic signals",
      "Concrete buildings"
    ],
    answer: "Interactions among organisms"
  },
  {
    question: "Which ecosystem has high biodiversity?",
    options: [
      "Rainforests",
      "Parking lots",
      "Factories",
      "Deserts with no life"
    ],
    answer: "Rainforests"
  },
  {
    question: "Poaching threatens:",
    options: [
      "Wildlife populations",
      "Recycling systems",
      "Rainwater storage",
      "Solar panels"
    ],
    answer: "Wildlife populations"
  },
  {
    question: "Native species are organisms that:",
    options: [
      "Naturally occur in an area",
      "Are made of plastic",
      "Only live in zoos",
      "Cause pollution"
    ],
    answer: "Naturally occur in an area"
  },
  {
    question: "Habitat loss often results from:",
    options: [
      "Deforestation",
      "Tree planting",
      "Recycling",
      "Composting"
    ],
    answer: "Deforestation"
  },
  {
    question: "Coral reefs are important because they:",
    options: [
      "Support marine biodiversity",
      "Increase plastic waste",
      "Reduce oxygen",
      "Destroy fish habitats"
    ],
    answer: "Support marine biodiversity"
  },
  {
    question: "Invasive species can:",
    options: [
      "Disrupt ecosystems",
      "Improve biodiversity automatically",
      "Reduce pollution",
      "Increase rainfall"
    ],
    answer: "Disrupt ecosystems"
  },
  {
    question: "Conservation biology focuses on:",
    options: [
      "Protecting species and ecosystems",
      "Building roads",
      "Mining minerals",
      "Burning waste"
    ],
    answer: "Protecting species and ecosystems"
  },
  {
    question: "Wetlands are valuable because they:",
    options: [
      "Provide habitat and filter water",
      "Increase plastic production",
      "Cause deforestation",
      "Reduce pollination"
    ],
    answer: "Provide habitat and filter water"
  },
  {
    question: "The best way to conserve biodiversity is to:",
    options: [
      "Protect habitats and use resources sustainably",
      "Cut forests",
      "Pollute rivers",
      "Overhunt wildlife"
    ],
    answer: "Protect habitats and use resources sustainably"
  }
],
"Deforestation": [
  {
    question: "Deforestation means:",
    options: [
      "Cutting down trees",
      "Planting forests",
      "Saving wildlife",
      "Cleaning rivers"
    ],
    answer: "Cutting down trees"
  },
  {
    question: "Planting trees is called:",
    options: [
      "Afforestation",
      "Pollution",
      "Segregation",
      "Composting"
    ],
    answer: "Afforestation"
  },
  {
    question: "Forests help reduce climate change by:",
    options: [
      "Absorbing carbon dioxide",
      "Producing smoke",
      "Increasing heat",
      "Cutting oxygen"
    ],
    answer: "Absorbing carbon dioxide"
  },
  {
    question: "Tree roots help prevent:",
    options: [
      "Soil erosion",
      "Photosynthesis",
      "Rainfall",
      "Recycling"
    ],
    answer: "Soil erosion"
  },
  {
    question: "A major cause of forest loss is:",
    options: [
      "Illegal logging",
      "Tree planting",
      "Rainwater harvesting",
      "Composting"
    ],
    answer: "Illegal logging"
  },
  {
    question: "Forests provide habitat for:",
    options: [
      "Thousands of species",
      "Only humans",
      "No animals",
      "Only insects"
    ],
    answer: "Thousands of species"
  },
  {
    question: "Forest destruction can lead to:",
    options: [
      "Loss of biodiversity",
      "Cleaner air",
      "More habitats",
      "Less erosion"
    ],
    answer: "Loss of biodiversity"
  },
  {
    question: "Wildfires can cause:",
    options: [
      "Large-scale forest loss",
      "Increased afforestation",
      "More rainfall",
      "Reduced pollution"
    ],
    answer: "Large-scale forest loss"
  },
  {
    question: "Protected forests are maintained as:",
    options: [
      "National parks and reserves",
      "Factories",
      "Parking lots",
      "Landfills"
    ],
    answer: "National parks and reserves"
  },
  {
    question: "Sustainable forestry means:",
    options: [
      "Managing forests responsibly",
      "Cutting all trees quickly",
      "Ignoring regeneration",
      "Burning woodlands"
    ],
    answer: "Managing forests responsibly"
  },
  {
    question: "Forests help maintain the:",
    options: [
      "Water cycle",
      "Plastic cycle",
      "Traffic flow",
      "Internet speed"
    ],
    answer: "Water cycle"
  },
  {
    question: "Many communities depend on forests for:",
    options: [
      "Food and livelihoods",
      "Plastic production",
      "Air pollution",
      "Waste disposal"
    ],
    answer: "Food and livelihoods"
  },
  {
    question: "Clearing forests for farming can:",
    options: [
      "Reduce biodiversity",
      "Increase habitats",
      "Clean the air",
      "Protect wildlife"
    ],
    answer: "Reduce biodiversity"
  },
  {
    question: "Students can help by:",
    options: [
      "Planting trees and spreading awareness",
      "Cutting trees",
      "Burning forests",
      "Ignoring conservation"
    ],
    answer: "Planting trees and spreading awareness"
  },
  {
    question: "The best long-term solution is to:",
    options: [
      "Protect and restore forests",
      "Expand deforestation",
      "Increase logging",
      "Ignore environmental issues"
    ],
    answer: "Protect and restore forests"
  }
],
};

// ---------- Variables ----------
let selectedTopic = "";
let questions = [];
let currentQuestion = 0;
let score = 0;

// ---------- Start Application ----------
document.addEventListener("DOMContentLoaded", showTopics);

// ---------- Show Topic Buttons ----------
function showTopics() {
  const quizBox = document.getElementById("quiz-box");

  quizBox.innerHTML = `
    <h3>Select a Topic Quiz</h3>
    <div style="display:grid; gap:15px; margin-top:20px;">
      <button class="btn" onclick="startQuiz('Waste Management')">♻️ Waste Management</button>
      <button class="btn" onclick="startQuiz('Water Conservation')">💧 Water Conservation</button>
      <button class="btn" onclick="startQuiz('Climate Change')">🌡️ Climate Change</button>
      <button class="btn" onclick="startQuiz('Plastic Pollution')">🚯 Plastic Pollution</button>
      <button class="btn" onclick="startQuiz('Biodiversity')">🌿 Biodiversity</button>
      <button class="btn" onclick="startQuiz('Deforestation')">🌳 Deforestation</button>
    </div>
  `;
}

// ---------- Start Quiz ----------
function startQuiz(topic) {
  selectedTopic = topic;
  questions = quizData[topic];
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// ---------- Load Current Question ----------
function loadQuestion() {
  const quizBox = document.getElementById("quiz-box");

  // Quiz completed
  if (currentQuestion >= questions.length) {
    saveScore();

    quizBox.innerHTML = `
      <h2>🎉 Quiz Completed!</h2>
      <h3>${selectedTopic}</h3>
      <p>Your Score: <strong>${score} / ${questions.length}</strong></p>
      <button class="btn" onclick="showTopics()">Choose Another Topic</button>
      <br><br>
      <a href="leaderboard.html" class="btn">🏆 View Leaderboard</a>
    `;
    return;
  }

  const q = questions[currentQuestion];

  let optionsHTML = "";
  q.options.forEach(option => {
    optionsHTML += `
      <button class="btn"
              style="display:block; width:100%; margin:10px 0;"
              onclick="checkAnswer('${option.replace(/'/g, "\\'")}')">
        ${option}
      </button>
    `;
  });

  quizBox.innerHTML = `
    <h2>${selectedTopic}</h2>
    <p><strong>Question ${currentQuestion + 1} of ${questions.length}</strong></p>
    <p><strong>Score:</strong> ${score}</p>
    <hr style="margin:15px 0;">
    <h3>${q.question}</h3>
    <div style="margin-top:20px;">
      ${optionsHTML}
    </div>
    <p id="feedback" style="font-weight:bold; margin-top:15px;"></p>
  `;
}

// ---------- Check Answer ----------
function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    score++;
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "lightgreen";
  } else {
    feedback.textContent = "❌ Correct Answer: " + correct;
    feedback.style.color = "#ff8080";
  }

  setTimeout(() => {
    currentQuestion++;
    loadQuestion();
  }, 1000);
}

// ---------- Save Score to Leaderboard ----------
function saveScore() {
  const username = localStorage.getItem("ecoUser") || "Player";
  const leaderboard =
    JSON.parse(localStorage.getItem("ecoLeaderboard")) || [];

  leaderboard.push({
    name: username,
    topic: selectedTopic,
    score: score
  });

  leaderboard.sort((a, b) => b.score - a.score);

  localStorage.setItem(
    "ecoLeaderboard",
    JSON.stringify(leaderboard)
  );
}