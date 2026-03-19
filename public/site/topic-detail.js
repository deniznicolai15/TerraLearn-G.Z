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
      question: "What is the primary function of forests in producing oxygen and storing carbon?",
      options: ["Provide shelter only", "Produce oxygen and store carbon", "Regulate temperature only", "Supply water"],
      correct: 1,
    },
    {
      question: "Which mountain range is most important for Luzon's protection from typhoons?",
      options: ["Cordillera", "Sierra Madre", "Caraballo", "Zambales"],
      correct: 1,
    },
    {
      question: "What is the tallest layer of the forest ecosystem?",
      options: ["Canopy", "Emergent Layer", "Understory", "Forest Floor"],
      correct: 1,
    },
    {
      question: "Which forest layer is dense and creates a humid microclimate?",
      options: ["Emergent Layer", "Canopy", "Understory", "Forest Floor"],
      correct: 1,
    },
    {
      question: "What type of vegetation is found in the shaded understory layer?",
      options: ["Tall trees", "Shrubs and small trees", "Only flowers", "No vegetation"],
      correct: 1,
    },
    {
      question: "What is the dark, damp layer where decomposition occurs?",
      options: ["Canopy", "Understory", "Forest Floor", "Emergent Layer"],
      correct: 2,
    },
    {
      question: "Which watershed supplies water to Metro Manila?",
      options: ["Angat", "La Mesa", "Pantabangan", "Wawa"],
      correct: 1,
    },
    {
      question: "Which coastal forests act as natural seawalls against storm surges?",
      options: ["Dipterocarp forests", "Montane forests", "Mangroves", "Bamboo groves"],
      correct: 2,
    },
    {
      question: "Which iconic species symbolizes the biodiversity of Philippine forests?",
      options: ["Water buffalo", "Philippine eagle and rafflesia", "Coconut crab", "Saltwater crocodile"],
      correct: 1,
    },
    {
      question: "According to local folklore, what is Biringan?",
      options: ["A cave", "A hidden city inhabited by mystical beings", "A river", "A mountain pass"],
      correct: 1,
    },
  ],
  2: [
    {
      question: "What is the elevation of Mt. Pamitinan's summit?",
      options: ["326+ meters", "426+ meters", "526+ meters", "626+ meters"],
      correct: 1,
    },
    {
      question: "When did Andres Bonifacio and the Katipunan meet at Pamitinan Cave?",
      options: ["April 12, 1893", "April 12, 1895", "April 12, 1897", "April 12, 1899"],
      correct: 1,
    },
    {
      question: "What was inscribed on Pamitinan Cave walls by Bonifacio?",
      options: ["Mga salawikain", "Viva la Independencia Filipina", "Names of soldiers", "Mathematical formulas"],
      correct: 1,
    },
    {
      question: "According to local folklore, who is trapped between Mt. Pamitinan and Mt. Binacayan?",
      options: ["A princess", "Bernardo Carpio", "A mysterious spirit", "An ancient warrior"],
      correct: 1,
    },
    {
      question: "What geological feature makes Mt. Pamitinan geologically significant?",
      options: ["Volcanic crater", "Limestone cliffs and karst cave systems", "Sand dunes", "Crystal formations"],
      correct: 1,
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
  document.title = "TerraLearn G.Z - " + topicData.name;

  // Populate hero section
  document.getElementById("detail-hero-img").src = topicData.image;
  document.getElementById("detail-label").textContent = topicData.label;
  document.getElementById("detail-title").textContent = topicData.name;
  document.getElementById("detail-swatch").style.backgroundColor = topicData.color;

  // Populate description
  document.getElementById("detail-description").textContent = topicData.description;

  // Add topic class for styling
  if (topicData.id === 1) {
    document.body.classList.add("topic-1");
  }
  if (topicData.id === 2) {
    document.body.classList.add("topic-2");
  }
  if (topicData.id === 4) {
    document.body.classList.add("topic-4");
  }

  // Populate introduction section
  var introElement = document.getElementById("detail-intro");
  if (introElement) {
    if (topicData.intro) {
      if (topicData.id === 1 || topicData.id === 2) {
        // Topic 1 & 2: Two-column layout with small image left, text right
        var introHTML = '<div class="detail-intro-wrapper topic2-intro">';
        introHTML += '<div class="intro-image-section">';
        introHTML += '<img src="' + topicData.intro.image + '" alt="' + topicData.intro.caption + '" class="intro-image-small" />';
        introHTML += '<p class="intro-caption">' + topicData.intro.caption + '</p>';
        introHTML += '</div>';
        introHTML += '<p class="intro-text">' + topicData.intro.text + '</p>';
        introHTML += '</div>';
      } else {
        // Default intro layout
        var introHTML = '<div class="detail-intro-wrapper">';
        introHTML += '<img src="' + topicData.intro.image + '" alt="' + topicData.intro.caption + '" class="intro-image" />';
        introHTML += '<p class="intro-caption">' + topicData.intro.caption + '</p>';
        introHTML += '<p class="intro-text">' + topicData.intro.text + '</p>';
        introHTML += '</div>';
      }
      introElement.innerHTML = introHTML;
    } else {
      introElement.textContent = topicData.description;
    }
  }

  // Render video player if available
  if (topicData.video) {
    var videoContainer = document.createElement("div");
    videoContainer.className = "video-section";

    var videoTitle = document.createElement("h2");
    videoTitle.className = "video-title";
    videoTitle.textContent = topicData.video.title;

    var videoWrapper = document.createElement("div");
    videoWrapper.className = "video-wrapper";

    // Convert Google Drive link to embeddable format
    var fileId = topicData.video.url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    var embedUrl = fileId ? 'https://drive.google.com/file/d/' + fileId[1] + '/preview' : topicData.video.url;

    videoWrapper.innerHTML = '<iframe src="' + embedUrl + '" allowfullscreen="" allow="autoplay" class="video-player"></iframe>';

    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(videoWrapper);

    // Add video caption for Topic 2
    if (topicData.id === 2) {
      var videoCaption = document.createElement("p");
      videoCaption.className = "video-caption";
      videoCaption.textContent = "This 360° video was captured by one of the researchers above the 426+ MASL marker.";
      videoContainer.appendChild(videoCaption);
    }

    var sectionsContainer = document.getElementById("detail-sections-container");
    sectionsContainer.parentNode.insertBefore(videoContainer, sectionsContainer);
  }

  // Populate sections
  var sectionsContainer = document.getElementById("detail-sections-container");
  if (topicData.sections && topicData.sections.length > 0) {
    // For Topic 1, create a special card layout for forest layers
    if (topicData.id === 1) {
      var forestLayerIndices = [1, 2, 3, 4]; // Emergent, Canopy, Understory, Forest Floor
      var forestLayerSections = [];
      var otherSections = [];

      topicData.sections.forEach(function (section, index) {
        if (forestLayerIndices.includes(index)) {
          forestLayerSections.push({ section: section, index: index });
        } else {
          otherSections.push({ section: section, index: index });
        }
      });

      // Render non-forest layer sections first
      otherSections.forEach(function (item) {
        var sectionDiv = document.createElement("div");
        var imageHTML = item.section.image ? '<img src="' + item.section.image + '" alt="' + item.section.title + '" class="section-image" />' : '';

        var textContent = '';
        if (item.section.text.includes('\n\n')) {
          var paragraphs = item.section.text.split('\n\n');
          textContent = paragraphs.map(function (para) {
            return '<p>' + para.replace(/\n/g, '<br>') + '</p>';
          }).join('');
        } else if (item.section.text.includes('\n')) {
          textContent = '<p>' + item.section.text.replace(/\n/g, '<br>') + '</p>';
        } else {
          textContent = '<p>' + item.section.text + '</p>';
        }

        sectionDiv.className = "detail-section";
        sectionDiv.innerHTML =
          '<h3>' + item.section.title + '</h3>' +
          imageHTML +
          textContent +
          (item.section.content ? '<div class="section-content-expanded">' + item.section.content + '</div>' : '');
        sectionsContainer.appendChild(sectionDiv);
      });

      // Create forest layers card section
      if (forestLayerSections.length > 0) {
        var forestLayersContainer = document.createElement("div");
        forestLayersContainer.className = "forest-layers-section";

        var titleDiv = document.createElement("div");
        titleDiv.className = "forest-layers-title";
        titleDiv.innerHTML = '<h2>Vertical Structure of the Forest Ecosystems</h2><p>Forests here are layered systems, each with distinct ecological roles:';
        forestLayersContainer.appendChild(titleDiv);

        var gridDiv = document.createElement("div");
        gridDiv.className = "forest-layers-grid";

        forestLayerSections.forEach(function (item) {
          var card = document.createElement("div");
          card.className = "forest-layer-card";

          var imageHTML = item.section.image ?
            '<div class="forest-layer-image-container"><img src="' + item.section.image + '" alt="' + item.section.title + '" /></div>' : '';

          card.innerHTML =
            imageHTML +
            '<div class="forest-layer-content">' +
            '<h3 class="forest-layer-name">' + item.section.title + '</h3>' +
            '<p class="forest-layer-description">' + item.section.text + '</p>' +
            '</div>';

          gridDiv.appendChild(card);
        });

        forestLayersContainer.appendChild(gridDiv);

        // Add Biringan section after forest layers
        var biringanImageSection = document.createElement("div");
        biringanImageSection.className = "biringan-clearer-image-section";
        biringanImageSection.innerHTML = 
          '<h3 class="biringan-title">So what is Biringan?</h3>' +
          '<p class="biringan-description">Biringan is a legendary, hidden city said to exist in the forests of Samar, Philippines. In local folklore, it is described as a mystical place inhabited by <strong>engkanto</strong>—supernatural beings who live parallel to humans. The city is believed to be dazzling, full of light and modern wonders, yet invisible to ordinary eyes.</p>' +
          '<div class="biringan-image-container">' +
          '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biringan-w2AhOos1VeYbh5AT73PVUSLRl7pk0x.jpg" alt="Biringan - The legendary hidden city" class="biringan-clearer-image" />' +
          '</div>' +
          '<p class="biringan-description biringan-description-bottom">Stories of Biringan often serve as cautionary tales: travelers who wander too far into the forest may be "invited" by its residents, sometimes never returning. Others say chosen individuals are offered prosperity or beauty, but at the cost of leaving the human world behind.</p>' +
          '<p class="biringan-description biringan-description-bottom">For educators and learners, Biringan is more than just a myth—it\'s a cultural lens into how Filipinos imagine forests as mysterious, powerful spaces. It reflects the deep respect and awe communities hold for nature, reminding us that forests are not only ecological systems but also cultural landscapes filled with meaning.</p>';
        forestLayersContainer.appendChild(biringanImageSection);

        sectionsContainer.appendChild(forestLayersContainer);
      }
    } else {
      // For other topics, render sections normally
      topicData.sections.forEach(function (section, index) {
        var sectionDiv = document.createElement("div");
        var imageHTML = section.image ? '<img src="' + section.image + '" alt="' + section.title + '" class="section-image" />' : '';

        // Convert newlines to paragraph breaks
        var textContent = '';
        if (section.text.includes('\n\n')) {
          // Split by double newlines and create separate paragraphs
          var paragraphs = section.text.split('\n\n');
          textContent = paragraphs.map(function (para) {
            return '<p>' + para.replace(/\n/g, '<br>') + '</p>';
          }).join('');
        } else if (section.text.includes('\n')) {
          // Single newlines become line breaks
          textContent = '<p>' + section.text.replace(/\n/g, '<br>') + '</p>';
        } else {
          // No newlines, just wrap in paragraph
          textContent = '<p>' + section.text + '</p>';
        }

        // Special styling for sections that need the Pamitinan info box style
        if ((index === 0 && section.title === "Geological Features") ||
          (section.title === "Historical & Cultural Significance") ||
          (section.title === "Myth & Folklore")) {
          sectionDiv.className = "detail-section geological-features-section";
          sectionDiv.innerHTML =
            '<h3>' + section.title + '</h3>' +
            imageHTML +
            '<div class="geological-info-box">' +
            textContent +
            (section.content ? '<div class="geological-content">' + section.content + '</div>' : '') +
            '</div>';
        } else {
          sectionDiv.className = "detail-section";
          sectionDiv.innerHTML =
            '<h3>' + section.title + '</h3>' +
            imageHTML +
            textContent +
            (section.content ? '<div class="section-content-expanded">' + section.content + '</div>' : '');
        }
        sectionsContainer.appendChild(sectionDiv);
      });
    }
  }

  // Remove Mt. Pamitinan info section from video container and move it to sections
  if (topicData.id === 2) {
    var pamitinanInfoInVideo = document.querySelector('.video-section .pamitinan-info-section');
    if (pamitinanInfoInVideo) {
      pamitinanInfoInVideo.remove();

      // Create a section div for Mt. Pamitinan info in the sections container
      var pamitinanSection = document.createElement("div");
      pamitinanSection.className = "detail-section geological-features-section";
      pamitinanSection.innerHTML =
        '<h3>Mt. Pamitinan Overview</h3>' +
        '<div class="geological-info-box">' +
        '<p>Mt. <u>Pamitinan</u> is a limestone mountain located in <b>Montalban (Rodriguez), Rizal</b>, rising to <b>426+ meters</b> above sea level. It forms part of the <u>Sierra Madre mountain range</u> and is officially recognized as a <b>DENR��protected landscape</b>, which means visitors must secure permits before entry. Its rugged cliffs, sharp limestone rocks, and karst cave systems make it both a geological wonder and a challenging climb.</p>' +
        '<p>But Mt. <u>Pamitinan</u> is more than just a natural site. It is a <b>multi‑layered landmark</b>:</p>' +
        '<ul class="pamitinan-features">' +
        '<li><b><u>Geological</u></b> – jagged limestone cliffs, caves with stalactites and stalagmites, and a terrain that supports unique biodiversity.</li>' +
        '<li><b><u>Historical</u></b> – in <u>1895</u>, <u>Andres Bonifacio</u> and the <u>Katipunan</u> declared independence inside <u>Pamitinan Cave</u>, leaving the inscription "<i>Viva la Independencia Filipina</i>" as a lasting symbol of freedom.</li>' +
        '<li><b><u>Mythical</u></b> – local folklore imagines the mountain as enchanted, inhabited by mystical beings (<i>engkanto</i>), and sometimes linked to hidden realms similar to <u>Biringan</u>.</li>' +
        '</ul>' +
        '<p>Because of this blend of <b>nature, nationhood, and myth</b>, Mt. <u>Pamitinan</u> stands out among Luzon\'s protected areas. It is not only a hiking destination but also a <b>living classroom</b> where geology, history, and culture converge. Visiting <u>Pamitinan</u> means walking through layers of stone, memory, and imagination all in one place.</p>' +
        '</div>';

      // Insert it at the beginning of the sections container
      sectionsContainer.insertBefore(pamitinanSection, sectionsContainer.firstChild);
    }
  }

  // Populate Figure 1 image and caption
  var figureImg = document.getElementById("detail-figure-img");
  if (figureImg) {
    figureImg.src = topicData.image;
    figureImg.alt = "Figure 1: " + topicData.name;
  }
  var figureCaption = document.getElementById("figure-caption");
  if (figureCaption) {
    figureCaption.textContent = "Figure 1: An AI generated image illustrating " + topicData.name;
  }

  // Populate info bar
  document.getElementById("detail-location").textContent = topicData.location;
  document.getElementById("detail-detail1").textContent = topicData.detail1;
  document.getElementById("detail-detail2").textContent = topicData.detail2;

  // Create gallery - use topic gallery if available, otherwise use default images
  var galleryImages = [];

  if (topicData.gallery && topicData.gallery.length > 0) {
    // Use gallery from topic data
    topicData.gallery.forEach(function (item) {
      galleryImages.push(item.image);
    });
  } else {
    // Default gallery images (Mt. Pamitinan)
    galleryImages = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7087.PNG-6K0l4UhRzwHIMHq41OX0jemra2zjPg.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7089.PNG-PAwUvvNckrLYJ7Ko40gWSwnG502o7j.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7092.PNG-CLFpcNspQ7BV2icaw6GSbRRXRVpyGn.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7088.PNG-NFq4fwNtOmFjLtrH77c6EV1ZPk66Da.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7093.PNG-rulFPZAvZFJ01s27AHHjsa4Ys5xcEB.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7090.PNG-Npy6PLe7NqLONJZu2odsCv1K126XGJ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7091.PNG-leWjnQWbzjiVKkrHJFX9iyG1vHQe5c.jpeg"
    ];
  }

  var galleryGrid = document.getElementById("gallery-grid");
  for (var i = 0; i < galleryImages.length; i++) {
    var item = document.createElement("div");
    item.className = "gallery-item";
    var img = document.createElement("img");
    img.src = galleryImages[i];
    img.alt = topicData.name + ' gallery image ' + (i + 1);
    // Hide gallery item if image fails to load
    img.onerror = function () {
      this.parentElement.style.display = 'none';
    };
    item.appendChild(img);
    item.addEventListener("click", function (e) {
      if (e.target.tagName === 'IMG') {
        openLightbox(e.target.src);
      }
    });
    galleryGrid.appendChild(item);
  }

  // Initialize quiz
  initializeQuiz();

  // Render AVIFAUNA section if available
  renderAvifaunaSection();

  // Old Forest 101 section disabled - now using the new Topic 2 style layout for Topic 1
  // initializeForest101();

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
  currentPlayingAudio.addEventListener("timeupdate", function () {
    const percent = (currentPlayingAudio.currentTime / currentPlayingAudio.duration) * 100;
    progressFill.style.width = percent + "%";
    progressSlider.value = percent;
    currentTimeEl.textContent = formatTime(currentPlayingAudio.currentTime);
  });

  // Set duration when loaded
  currentPlayingAudio.addEventListener("loadedmetadata", function () {
    durationTimeEl.textContent = formatTime(currentPlayingAudio.duration);
  });

  // Update waveform bars
  currentPlayingAudio.addEventListener("play", function () {
    waveformBars.forEach(bar => bar.classList.add("active"));
  });

  currentPlayingAudio.addEventListener("pause", function () {
    waveformBars.forEach(bar => bar.classList.remove("active"));
  });

  // Play/pause button
  playBtn.addEventListener("click", function (e) {
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
  currentPlayingAudio.addEventListener("ended", function () {
    playBtn.classList.remove("playing");
    isPlaying = false;
    currentPlayingAudio.currentTime = 0;
    progressSlider.value = 0;
    progressFill.style.width = "0%";
  });

  // Progress slider
  progressSlider.addEventListener("input", function (e) {
    e.stopPropagation();
    const percent = this.value;
    const time = (percent / 100) * currentPlayingAudio.duration;
    currentPlayingAudio.currentTime = time;
    progressFill.style.width = percent + "%";
  });

  // Close button
  closeBtn.addEventListener("click", closeFloatingAudioPlayer);

  // Close on backdrop click
  floatingPlayer.addEventListener("click", function (e) {
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
