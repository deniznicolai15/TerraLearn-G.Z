// ===== LOADING ANIMATION =====
window.addEventListener("load", function() {
  var loadingScreen = document.getElementById("loading-screen");
  setTimeout(function() {
    loadingScreen.classList.add("loaded");
  }, 4400); // Total animation time (sequential path drawing + text fade)
});

// ===== GET TOPIC DATA FROM URL =====
function getTopicData() {
  var params = new URLSearchParams(window.location.search);
  var data = params.get("data");
  if (data) {
    try {
      return JSON.parse(decodeURIComponent(data));
    } catch (e) {
      console.error("Failed to parse topic data", e);
      return null;
    }
  }
  return null;
}

// ===== TOPIC QUIZZES DATABASE =====
var quizzes = {
  1: [
    {
      question: "Which type of forest covers the base of Mt. Pamitinan?",
      options: ["Subtropical forest", "Lowland tropical forest", "Montane forest", "Deciduous forest"],
      correct: 1,
    },
    {
      question: "What is the Waling-Waling?",
      options: ["A type of bird", "A rare endemic orchid", "A medicinal tree", "A river tributary"],
      correct: 1,
    },
    {
      question: "Which medicinal plant is NOT mentioned as found in Mt. Pamitinan?",
      options: ["Lagundi", "Sambong", "Tsaang Gubat", "Oregano"],
      correct: 3,
    },
    {
      question: "What is the primary threat to the plant species in Mt. Pamitinan?",
      options: ["Drought", "Flooding", "Illegal logging and land conversion", "Pests"],
      correct: 2,
    },
    {
      question: "What type of pitcher plants grow in Mt. Pamitinan?",
      options: ["Only lowland species", "Only highland species", "Endemic to the Philippines", "Imported species"],
      correct: 2,
    },
  ],
  2: [
    {
      question: "How many bird species are found in Mt. Pamitinan?",
      options: ["Over 20", "Over 30", "Over 50", "Over 100"],
      correct: 1,
    },
    {
      question: "Which bird species is mentioned as inhabiting Mt. Pamitinan?",
      options: ["Philippine Hawk-Eagle", "Bald Eagle", "Toucan", "Peacock"],
      correct: 0,
    },
    {
      question: "What is the Philippine Sailfin Lizard unique for?",
      options: ["It can fly", "It is endemic to the Philippines", "It is aquatic only", "It glows in the dark"],
      correct: 1,
    },
    {
      question: "What is the primary role of insects in the Mt. Pamitinan ecosystem?",
      options: ["Predators only", "Pollinators, decomposers, and food sources", "Herbivores only", "Parasites"],
      correct: 1,
    },
    {
      question: "When is birdwatching best in Mt. Pamitinan?",
      options: ["Midday", "Evening", "Early morning", "Night"],
      correct: 2,
    },
  ],
  3: [
    {
      question: "Which mountain range does the Wawa River originate from?",
      options: ["Cordillera", "Sierra Madre", "Caraballo", "Zambales"],
      correct: 1,
    },
    {
      question: "What geographic feature does the Wawa River flow through?",
      options: ["Valley", "Desert", "Limestone gorges", "Swamps"],
      correct: 2,
    },
    {
      question: "What is a riparian zone?",
      options: ["A desert area", "Vegetation along riverbanks", "An underground cave", "A mountain peak"],
      correct: 1,
    },
    {
      question: "Which native fish species is found in the Wawa River?",
      options: ["Salmon", "Ludong", "Tuna", "Catfish"],
      correct: 1,
    },
    {
      question: "What is the primary environmental threat to the Wawa River?",
      options: ["Drought only", "Erosion only", "Illegal quarrying and domestic waste", "Plant overgrowth"],
      correct: 2,
    },
  ],
  4: [
    {
      question: "When did the Katipunan reportedly meet at Pamitinan Cave?",
      options: ["1893", "1895", "1897", "1899"],
      correct: 1,
    },
    {
      question: "Who is associated with the Katipunan activities at Mt. Pamitinan?",
      options: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo", "Gregorio del Pilar"],
      correct: 1,
    },
    {
      question: "What was inscribed on the Pamitinan Cave walls?",
      options: ["Mga salawikain", "Viva la Independencia Filipina", "Names of soldiers", "Mathematical formulas"],
      correct: 1,
    },
    {
      question: "What are the indigenous inhabitants of Montalban?",
      options: ["Igorot", "Dumagat-Remontado", "Aeta", "Tagalog"],
      correct: 1,
    },
    {
      question: "What status does Pamitinan Cave hold?",
      options: ["Private property", "National Historical Landmark and National Geological Monument", "Military base", "Private museum"],
      correct: 1,
    },
  ],
};

// ===== PAGE INITIALIZATION =====
var topicData = getTopicData();

if (!topicData) {
  document.body.innerHTML = "<div style='padding: 40px; text-align: center;'><h1>Error: Topic data not found</h1></div>";
} else {
  initializePage();
}

function initializePage() {
  // Set page title
  document.title = "TerraLearn G.Z. - " + topicData.name;

  // Populate hero section
  document.getElementById("detail-hero-img").src = topicData.image;
  document.getElementById("detail-label").textContent = topicData.label;
  document.getElementById("detail-title").textContent = topicData.name;
  document.getElementById("detail-swatch").style.backgroundColor = topicData.color;

  // Populate description
  document.getElementById("detail-description").textContent = topicData.description;

  // Populate sections
  var sectionsContainer = document.getElementById("detail-sections-container");
  if (topicData.sections && topicData.sections.length > 0) {
    topicData.sections.forEach(function (section) {
      var sectionDiv = document.createElement("div");
      sectionDiv.className = "detail-section";
      sectionDiv.innerHTML =
        '<h3>' + section.title + '</h3>' +
        '<p>' + section.text + '</p>';
      sectionsContainer.appendChild(sectionDiv);
    });
  }

  // Populate info bar
  document.getElementById("detail-location").textContent = topicData.location;
  document.getElementById("detail-detail1").textContent = topicData.detail1;
  document.getElementById("detail-detail2").textContent = topicData.detail2;

  // Create gallery (using different versions of the same image as placeholders)
  var galleryGrid = document.getElementById("gallery-grid");
  for (var i = 0; i < 4; i++) {
    var item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = '<img src="' + topicData.image + '?v=' + i + '" alt="' + topicData.name + ' image ' + (i + 1) + '" />';
    item.addEventListener("click", function (e) {
      openLightbox(e.target.src);
    });
    galleryGrid.appendChild(item);
  }

  // Initialize quiz
  initializeQuiz();

  // Back button
  document.getElementById("back-btn").addEventListener("click", function () {
    window.history.back();
  });

  // Start Quiz button
  document.getElementById("start-quiz-btn").addEventListener("click", function () {
    document.getElementById("quiz-content").style.display = "flex";
    this.style.display = "none";
  });
}

// ===== QUIZ FUNCTIONALITY =====
var currentQuizIndex = 0;
var quizAnswers = [];
var currentQuiz = [];

function initializeQuiz() {
  currentQuiz = quizzes[topicData.id] || [];
  quizAnswers = new Array(currentQuiz.length).fill(null);

  renderQuizQuestions();
}

function renderQuizQuestions() {
  var quizContent = document.getElementById("quiz-content");
  quizContent.innerHTML = "";

  var questionsHTML = "";
  currentQuiz.forEach(function (q, index) {
    questionsHTML += '<div class="quiz-question">' +
      '<div class="question-number">Question ' + (index + 1) + ' of ' + currentQuiz.length + '</div>' +
      '<div class="question-text">' + q.question + '</div>' +
      '<div class="quiz-options">';

    q.options.forEach(function (option, optIndex) {
      questionsHTML +=
        '<label class="quiz-option">' +
        '<input type="radio" name="question-' + index + '" value="' + optIndex + '" data-question="' + index + '" />' +
        '<span class="quiz-option-label">' +
        '<span class="option-checkmark"></span>' +
        '<span class="quiz-option-text">' + option + '</span>' +
        '</span>' +
        '</label>';
    });

    questionsHTML += '</div></div>';
  });

  questionsHTML += '<div class="quiz-actions">' +
    '<button class="btn btn-primary" id="submit-quiz-btn">Submit Quiz</button>' +
    '<button class="btn btn-secondary" id="cancel-quiz-btn">Cancel</button>' +
    '</div>';

  quizContent.innerHTML = questionsHTML;

  // Add event listeners
  var radioButtons = quizContent.querySelectorAll("input[type='radio']");
  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", function () {
      var question = parseInt(this.getAttribute("data-question"));
      quizAnswers[question] = parseInt(this.value);
    });
  });

  document.getElementById("submit-quiz-btn").addEventListener("click", submitQuiz);
  document.getElementById("cancel-quiz-btn").addEventListener("click", function () {
    // Reset quiz and hide it
    currentQuizIndex = 0;
    quizAnswers = new Array(currentQuiz.length).fill(null);
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("start-quiz-btn").style.display = "block";
  });
}

function submitQuiz() {
  // Check if all questions are answered
  var allAnswered = quizAnswers.every(function (answer) {
    return answer !== null;
  });

  if (!allAnswered) {
    alert("Please answer all questions before submitting.");
    return;
  }

  // Calculate score
  var correctAnswers = 0;
  currentQuiz.forEach(function (q, index) {
    if (quizAnswers[index] === q.correct) {
      correctAnswers++;
    }
  });

  var percentage = Math.round((correctAnswers / currentQuiz.length) * 100);
  showResults(correctAnswers, currentQuiz.length, percentage);
}

function showResults(correct, total, percentage) {
  var quizContent = document.getElementById("quiz-content");
  var resultsDiv = document.getElementById("quiz-results");

  quizContent.style.display = "none";
  resultsDiv.style.display = "block";

  document.getElementById("score-text").textContent = percentage + "%";

  var message = "";
  if (percentage === 100) {
    message = "Perfect score! You are a Terra Master!";
  } else if (percentage >= 80) {
    message = "Excellent work! You have great knowledge about this topic.";
  } else if (percentage >= 60) {
    message = "Good job! You know quite a bit about this topic.";
  } else if (percentage >= 40) {
    message = "Not bad! Try learning more about this topic.";
  } else {
    message = "Keep learning! Read through the information above to learn more.";
  }

  document.getElementById("results-message").textContent = message + " (You got " + correct + " out of " + total + " correct)";

  document.getElementById("retry-btn").addEventListener("click", function () {
    currentQuizIndex = 0;
    quizAnswers = new Array(currentQuiz.length).fill(null);
    quizContent.style.display = "flex";
    resultsDiv.style.display = "none";
    document.getElementById("start-quiz-btn").style.display = "none";
    renderQuizQuestions();
  });

  document.getElementById("close-btn").addEventListener("click", function () {
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    currentQuizIndex = 0;
    quizAnswers = new Array(currentQuiz.length).fill(null);
    quizContent.style.display = "none";
    resultsDiv.style.display = "none";
    document.getElementById("start-quiz-btn").style.display = "block";
    document.getElementById("start-quiz-btn").textContent = "Start Quiz Again";
  });
}

// ===== LIGHTBOX FUNCTIONALITY =====
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var lightboxOverlay = document.getElementById("lightbox-overlay");
var lightboxClose = document.getElementById("lightbox-close");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});
