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

  // Add topic class for styling
  if (topicData.id === 4) {
    document.body.classList.add("topic-4");
  }

  // Populate introduction section
  var introElement = document.getElementById("detail-intro");
  if (introElement) {
    introElement.textContent = topicData.description;
  }

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

  // Render AVIFAUNA section if available
  renderAvifaunaSection();

  // Initialize Forest 101 section if topic is 1
  initializeForest101();

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

// ===== AVIFAUNA SECTION (FOR TOPIC 4) =====
// ===== FOREST 101 INITIALIZATION =====
function initializeForest101() {
  // Only show Forest 101 section for Topic 1
  if (topicData.id !== 1) return;

  var forest101Container = document.getElementById("forest-101-container");
  if (!forest101Container) return;

  forest101Container.style.display = "block";

  // Load saved reflection from localStorage
  var savedReflection = localStorage.getItem("forest-reflection");
  var reflectionInput = document.getElementById("forest-reflection-input");
  if (savedReflection && reflectionInput) {
    reflectionInput.value = savedReflection;
  }

  // Save reflection button
  var saveBtn = document.getElementById("forest-reflection-save");
  var clearBtn = document.getElementById("forest-reflection-clear");
  var savedMsg = document.getElementById("reflection-saved-msg");

  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      if (reflectionInput && reflectionInput.value.trim()) {
        localStorage.setItem("forest-reflection", reflectionInput.value);
        savedMsg.style.display = "block";
        setTimeout(function () {
          savedMsg.style.display = "none";
        }, 3000);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      if (reflectionInput) {
        reflectionInput.value = "";
        localStorage.removeItem("forest-reflection");
        savedMsg.style.display = "none";
      }
    });
  }
}

function renderAvifaunaSection() {
  // Only show AVIFAUNA section for Topic 4
  if (topicData.id !== 4) return;

  var avifaunaContainer = document.getElementById("avifauna-container");
  var avifaunaGrid = document.getElementById("avifauna-grid");
  var avifaunaIntro = document.getElementById("avifauna-intro");

  avifaunaContainer.style.display = "block";
  avifaunaIntro.textContent = "Explore the diverse bird species that inhabit Mt. Pamitinan. Click on any species to learn more about their characteristics, habitat, and role in the ecosystem.";

  // Render species boxes (alphabetically arranged)
  avifaunaSpecies.forEach(function (species) {
    var box = document.createElement("div");
    box.className = "species-box";

    var controlsHTML = '';
    var creditHTML = '';
    
    if (species.voiceUrl) {
      var credit = species.soundCredit || { photographer: "Unknown", location: "Unknown", date: "Unknown" };
      creditHTML = 
        '<div class="sound-credit">' +
          '<div class="credit-photographer">' + credit.photographer + '</div>' +
          '<div class="credit-location">' + credit.location + '</div>' +
          '<div class="credit-date">' + credit.date + '</div>' +
        '</div>';
      
      controlsHTML =
        '<div class="species-voice-indicator" title="Click to play sound">' +
          '<button class="voice-indicator-btn" title="Play sound">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
          '</button>' +
          '<div class="voice-waveform">' +
            '<div class="voice-bar"></div>' +
            '<div class="voice-bar"></div>' +
            '<div class="voice-bar"></div>' +
            '<div class="voice-bar"></div>' +
          '</div>' +
          '<div class="voice-duration">0:00</div>' +
        '</div>' + creditHTML;
    } else {
      controlsHTML =
        '<div class="species-controls">' +
          '<button class="voice-btn" disabled style="opacity: 0.5; cursor: not-allowed;">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
            'No audio' +
          '</button>' +
        '</div>';
    }

    box.innerHTML =
      '<div class="species-image">' +
        '<img src="' + species.image + '" alt="' + species.commonName + '" />' +
      '</div>' +
      '<div class="species-info">' +
        '<div class="species-name">' + species.commonName + '</div>' +
        '<div class="species-scientific">' + species.scientificName + '</div>' +
        '<div class="species-family">Family: ' + species.family + '</div>' +
        controlsHTML +
      '</div>';

    box.addEventListener("click", function () {
      openSpeciesModal(species);
    });

    // Voice indicator click handler - opens floating player
    if (species.voiceUrl) {
      var voiceIndicator = box.querySelector(".species-voice-indicator");
      var voiceBtn = voiceIndicator.querySelector(".voice-indicator-btn");

      voiceBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        openFloatingAudioPlayer(species);
      });
    }

    avifaunaGrid.appendChild(box);
  });
}

// ===== FLOATING AUDIO PLAYER FUNCTIONALITY =====
var floatingPlayer = null;
var currentPlayingAudio = null;

function openFloatingAudioPlayer(species) {
  // Close existing player if open
  if (floatingPlayer) {
    closeFloatingAudioPlayer();
  }

  // Create floating player modal
  floatingPlayer = document.createElement("div");
  floatingPlayer.className = "floating-audio-player";
  floatingPlayer.innerHTML = `
    <div class="floating-player-content">
      <div class="floating-player-header">
        <button class="floating-player-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6l-12 12M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="floating-player-body">
        <div class="floating-player-waveform">
          <div class="floating-voice-bar"></div>
          <div class="floating-voice-bar"></div>
          <div class="floating-voice-bar"></div>
          <div class="floating-voice-bar"></div>
          <div class="floating-voice-bar"></div>
          <div class="floating-voice-bar"></div>
          <div class="floating-voice-bar"></div>
          <div class="floating-voice-bar"></div>
        </div>
        <button class="floating-play-btn">
          <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="display: block;"><path d="M8 5v14l11-7z"/></svg>
          <svg class="pause-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="display: none;"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
        </button>
        <div class="floating-player-time">
          <span class="current-time">0:00</span> / <span class="duration-time">0:00</span>
        </div>
        <div class="floating-progress-bar">
          <div class="floating-progress-fill"></div>
          <input type="range" class="floating-progress-slider" min="0" max="100" value="0">
        </div>
      </div>
      <div class="floating-player-info">
        <h3>${species.commonName}</h3>
        <p class="floating-credits">
          <strong>${species.soundCredit?.photographer || 'Unknown'}</strong><br>
          ${species.soundCredit?.location || 'Unknown'} • ${species.soundCredit?.date || 'Unknown'}
        </p>
      </div>
    </div>
  `;

  document.body.appendChild(floatingPlayer);
  setTimeout(() => floatingPlayer.classList.add("active"), 10);

  // Setup audio
  currentPlayingAudio = new Audio(species.voiceUrl);
  const playBtn = floatingPlayer.querySelector(".floating-play-btn");
  const closeBtn = floatingPlayer.querySelector(".floating-player-close");
  const progressSlider = floatingPlayer.querySelector(".floating-progress-slider");
  const progressFill = floatingPlayer.querySelector(".floating-progress-fill");
  const currentTimeEl = floatingPlayer.querySelector(".current-time");
  const durationTimeEl = floatingPlayer.querySelector(".duration-time");
  const waveformBars = floatingPlayer.querySelectorAll(".floating-voice-bar");
  
  let isPlaying = false;

  // Format time
  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // Update progress bar and time
  currentPlayingAudio.addEventListener("timeupdate", function() {
    const percent = (currentPlayingAudio.currentTime / currentPlayingAudio.duration) * 100;
    progressFill.style.width = percent + "%";
    progressSlider.value = percent;
    currentTimeEl.textContent = formatTime(currentPlayingAudio.currentTime);
  });

  // Set duration when loaded
  currentPlayingAudio.addEventListener("loadedmetadata", function() {
    durationTimeEl.textContent = formatTime(currentPlayingAudio.duration);
  });

  // Update waveform bars
  currentPlayingAudio.addEventListener("play", function() {
    waveformBars.forEach(bar => bar.classList.add("active"));
  });

  currentPlayingAudio.addEventListener("pause", function() {
    waveformBars.forEach(bar => bar.classList.remove("active"));
  });

  // Play/pause button
  playBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (isPlaying) {
      currentPlayingAudio.pause();
      playBtn.classList.remove("playing");
      isPlaying = false;
    } else {
      currentPlayingAudio.play();
      playBtn.classList.add("playing");
      isPlaying = true;
    }
  });

  // Audio ended
  currentPlayingAudio.addEventListener("ended", function() {
    playBtn.classList.remove("playing");
    isPlaying = false;
    currentPlayingAudio.currentTime = 0;
    progressSlider.value = 0;
    progressFill.style.width = "0%";
  });

  // Progress slider
  progressSlider.addEventListener("input", function(e) {
    e.stopPropagation();
    const percent = this.value;
    const time = (percent / 100) * currentPlayingAudio.duration;
    currentPlayingAudio.currentTime = time;
    progressFill.style.width = percent + "%";
  });

  // Close button
  closeBtn.addEventListener("click", closeFloatingAudioPlayer);

  // Close on backdrop click
  floatingPlayer.addEventListener("click", function(e) {
    if (e.target === floatingPlayer) {
      closeFloatingAudioPlayer();
    }
  });
}

function closeFloatingAudioPlayer() {
  if (floatingPlayer) {
    floatingPlayer.classList.remove("active");
    setTimeout(() => {
      if (floatingPlayer && floatingPlayer.parentNode) {
        floatingPlayer.parentNode.removeChild(floatingPlayer);
      }
      floatingPlayer = null;
    }, 300);

    if (currentPlayingAudio) {
      currentPlayingAudio.pause();
      currentPlayingAudio = null;
    }
  }
}

// ===== SPECIES MODAL FUNCTIONALITY =====
var speciesModal = document.getElementById("species-modal");
var speciesModalClose = document.getElementById("species-modal-close");

function openSpeciesModal(species) {
  document.getElementById("species-modal-image").src = species.image;
  document.getElementById("species-modal-name").textContent = species.commonName;
  document.getElementById("species-modal-scientific").textContent = species.scientificName;
  document.getElementById("species-modal-family").textContent = species.family;
  document.getElementById("species-modal-description").textContent = species.description;
  document.getElementById("species-modal-habitat").textContent = species.habitat;
  document.getElementById("species-modal-role").textContent = species.roleInEcosystem;

  // Setup audio player
  const audioPlayerContainer = document.getElementById("audio-player-container");
  const audio = document.getElementById("species-audio");
  
  if (species.voiceUrl) {
    audio.src = species.voiceUrl;
    audioPlayerContainer.style.display = "block";
    setupAudioPlayer(audio);
  } else {
    audioPlayerContainer.style.display = "none";
    audio.src = "";
  }

  speciesModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSpeciesModal() {
  speciesModal.classList.remove("active");
  document.body.style.overflow = "";
}

speciesModalClose.addEventListener("click", closeSpeciesModal);

// Close modal when clicking outside
speciesModal.addEventListener("click", function (e) {
  if (e.target === speciesModal) {
    closeSpeciesModal();
  }
});

// Close modal on Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && speciesModal.classList.contains("active")) {
    closeSpeciesModal();
  }
});

// ===== AUDIO PLAYER SETUP =====
function setupAudioPlayer(audioElement) {
  const playBtn = document.getElementById("audio-play-btn");
  const progressSlider = document.getElementById("audio-progress-slider");
  const progressFill = document.getElementById("audio-progress-fill");
  const currentTimeDisplay = document.getElementById("audio-current-time");
  const durationDisplay = document.getElementById("audio-duration");

  let isPlaying = false;

  // Format time to MM:SS
  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
  }

  // Play/Pause button
  playBtn.addEventListener("click", function () {
    if (isPlaying) {
      audioElement.pause();
      playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    } else {
      audioElement.play();
      playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
    }
    isPlaying = !isPlaying;
  });

  // Update duration when metadata loads
  audioElement.addEventListener("loadedmetadata", function () {
    durationDisplay.textContent = formatTime(audioElement.duration);
    progressSlider.max = audioElement.duration;
  });

  // Update progress bar as audio plays
  audioElement.addEventListener("timeupdate", function () {
    const percentage = (audioElement.currentTime / audioElement.duration) * 100;
    progressFill.style.width = percentage + "%";
    progressSlider.value = audioElement.currentTime;
    currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
  });

  // Seek bar input
  progressSlider.addEventListener("input", function () {
    audioElement.currentTime = progressSlider.value;
  });

  // Reset when audio ends
  audioElement.addEventListener("ended", function () {
    isPlaying = false;
    playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    audioElement.currentTime = 0;
    progressFill.style.width = "0%";
    currentTimeDisplay.textContent = "0:00";
  });
}

// ===== PLAY SPECIES SOUND =====
function playSpeciesSound(url) {
  if (!url) return;
  var audio = new Audio(url);
  audio.play().catch(function (err) {
    console.error("Error playing sound:", err);
  });
}

// ===== PLAY SOUND ON CARD WITH VOICE MESSAGE INDICATOR =====
var currentCardAudio = null;
var currentCardIndicator = null;

function playCardSound(url, indicator, durationElement) {
  if (!url) return;

  // Stop any currently playing audio
  if (currentCardAudio) {
    currentCardAudio.pause();
    currentCardAudio.currentTime = 0;
    if (currentCardIndicator) {
      currentCardIndicator.classList.remove("playing");
    }
  }

  var audio = new Audio(url);
  currentCardAudio = audio;
  currentCardIndicator = indicator;

  // Update duration when metadata loads
  audio.addEventListener("loadedmetadata", function () {
    var duration = Math.floor(audio.duration);
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;
    durationElement.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  });

  // Add playing state
  indicator.classList.add("playing");

  // Remove playing state when audio ends
  audio.addEventListener("ended", function () {
    indicator.classList.remove("playing");
    currentCardAudio = null;
    currentCardIndicator = null;
  });

  audio.play().catch(function (err) {
    console.error("Error playing sound:", err);
    indicator.classList.remove("playing");
    currentCardAudio = null;
    currentCardIndicator = null;
  });
}



function closeAudioCreditsModal() {
  var modal = document.getElementById("audio-credits-modal");
  var audio = document.getElementById("credits-audio");
  
  audio.pause();
  audio.currentTime = 0;
  modal.style.display = "none";
  
  var playBtn = document.getElementById("audio-credits-play-btn");
  playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
}

function toggleAudioCreditsPlayback() {
  var audio = document.getElementById("credits-audio");
  var playBtn = document.getElementById("audio-credits-play-btn");
  
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  }
}

function updateCreditsProgress() {
  var audio = document.getElementById("credits-audio");
  var progressFill = document.getElementById("audio-progress-fill-credits");
  var slider = document.getElementById("audio-progress-slider-credits");
  var currentTime = document.getElementById("audio-current-time-credits");
  
  if (audio.duration) {
    var percent = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = percent + "%";
    slider.value = percent;
    currentTime.textContent = formatTime(audio.currentTime);
  }
}

function updateCreditsTimeDisplay() {
  var audio = document.getElementById("credits-audio");
  var duration = document.getElementById("audio-duration-credits");
  duration.textContent = formatTime(audio.duration);
}

function seekAudioCredits(value) {
  var audio = document.getElementById("credits-audio");
  if (audio.duration) {
    audio.currentTime = (value / 100) * audio.duration;
  }
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  var mins = Math.floor(seconds / 60);
  var secs = Math.floor(seconds % 60);
  return mins + ":" + (secs < 10 ? "0" : "") + secs;
}

function drawWaveform(birdName) {
  var canvas = document.getElementById("waveform-canvas");
  var ctx = canvas.getContext("2d");
  
  // Clear canvas
  ctx.fillStyle = "rgba(255, 255, 255, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw waveform bars
  var barWidth = 6;
  var gap = 2;
  var bars = 40;
  var centerY = canvas.height / 2;
  
  ctx.fillStyle = "rgba(168, 213, 168, 0.8)";
  
  for (var i = 0; i < bars; i++) {
    var height = Math.random() * (canvas.height * 0.7) + canvas.height * 0.15;
    var x = i * (barWidth + gap);
    var y = centerY - height / 2;
    
    ctx.fillRect(x, y, barWidth, height);
  }
}
