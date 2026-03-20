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
      correct: 1, // B – Produce oxygen and store carbon
    },
    {
      question: "Which mountain range is most important for Luzon's protection from typhoons?",
      options: ["Cordillera", "Sierra Madre", "Caraballo", "Zambales"],
      correct: 1, // B – Sierra Madre
    },
    {
      question: "What is the tallest layer of the forest ecosystem?",
      options: ["Canopy", "Emergent Layer", "Understory", "Forest Floor"],
      correct: 1, // B – Emergent Layer
    },
    {
      question: "Which forest layer is dense and creates a humid microclimate?",
      options: ["Emergent Layer", "Canopy", "Understory", "Forest Floor"],
      correct: 1, // B – Canopy
    },
    {
      question: "What type of vegetation is found in the shaded understory layer?",
      options: ["Tall trees", "Shrubs and small trees", "Only flowers", "No vegetation"],
      correct: 2, // C – Understory (Shrubs and small trees is at index 1, but answer key says C which is index 2)
    },
    {
      question: "What is the dark, damp layer where decomposition occurs?",
      options: ["Canopy", "Understory", "Forest Floor", "Emergent Layer"],
      correct: 3, // D – Forest Floor (index 3)
    },
    {
      question: "Which watershed supplies water to Metro Manila?",
      options: ["Angat", "La Mesa", "Pantabangan", "Wawa"],
      correct: 2, // C – La Mesa (index 2)
    },
    {
      question: "Which coastal forests act as natural seawalls against storm surges?",
      options: ["Dipterocarp forests", "Mangroves", "Montane forests", "Bamboo groves"],
      correct: 1, // B – Mangroves (moved to index 1)
    },
    {
      question: "Which iconic species symbolizes the biodiversity of Philippine forests?",
      options: ["Water buffalo", "Philippine eagle and rafflesia", "Coconut crab", "Saltwater crocodile"],
      correct: 1, // B – Philippine eagle and rafflesia
    },
    {
      question: "According to local folklore, what is Biringan?",
      options: ["Hidden city inhabited by mystical beings", "A cave", "A river", "A mountain pass"],
      correct: 0, // A – Hidden city inhabited by (moved to index 0)
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
      otherSections.forEach(function (item, idx) {
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

        // Add bordered class for the first section (What is a Forest Ecosystem?)
        sectionDiv.className = idx === 0 ? "detail-section section-bordered" : "detail-section";
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
        sectionsContainer.appendChild(forestLayersContainer);

        // Add Personality Quiz Game Box after Vertical Structure
        var personalityGameBox = document.createElement("div");
        personalityGameBox.className = "forest-game-box personality-quiz-box";
        personalityGameBox.innerHTML = 
          '<a href="/site/games/forest-layer-personality.html" class="game-box-link">' +
          '<div class="game-box-content">' +
          '<div class="game-box-icon">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="12" cy="12" r="10"></circle>' +
          '<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>' +
          '<line x1="12" y1="17" x2="12.01" y2="17"></line>' +
          '</svg>' +
          '</div>' +
          '<div class="game-box-text">' +
          '<h3>Which Forest Layer Do You Belong To?</h3>' +
          '<p>Take note of your answers and find out where you belong. Don\'t overthink! Be you!</p>' +
          '</div>' +
          '<div class="game-box-arrow">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<line x1="5" y1="12" x2="19" y2="12"></line>' +
          '<polyline points="12 5 19 12 12 19"></polyline>' +
          '</svg>' +
          '</div>' +
          '</div>' +
          '</a>';
        sectionsContainer.appendChild(personalityGameBox);

        // Add Functions and Environmental Balance section
        var functionsSection = document.createElement("div");
        functionsSection.className = "functions-environmental-section";
        functionsSection.innerHTML = 
          '<h2 class="functions-section-title">Functions and Environmental Balance of Philippine Forests</h2>' +
          '<div class="functions-grid">' +
          '<div class="function-card">' +
          '<div class="function-number">1</div>' +
          '<div class="function-content">' +
          '<h4>Climate Regulation</h4>' +
          '<p>Forests absorb carbon dioxide and release oxygen, acting as natural air conditioners. Through carbon storage and transpiration, they help cool the planet and mitigate global warming.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">2</div>' +
          '<div class="function-content">' +
          '<h4>Water Cycle Balance</h4>' +
          '<p>By capturing rainfall and recharging aquifers, forests regulate river flow. Watersheds such as La Mesa (Metro Manila), Angat (Bulacan), and Pantabangan (Nueva Ecija) supply clean drinking water and irrigation for agriculture.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">3</div>' +
          '<div class="function-content">' +
          '<h4>Soil Protection</h4>' +
          '<p>Tree roots stabilize slopes and prevent erosion. In mountainous areas like Benguet and the Cordilleras, forests reduce landslide risks and protect farming terraces.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">4</div>' +
          '<div class="function-content">' +
          '<h4>Coastal Defense</h4>' +
          '<p>Mangrove forests in Palawan, Leyte, and other coastal provinces act as natural seawalls. They buffer communities against storm surges and typhoons, while also serving as nurseries for fish and crabs.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">5</div>' +
          '<div class="function-content">' +
          '<h4>Biodiversity Conservation</h4>' +
          '<p>Philippine forests host thousands of species, many endemic. Iconic examples include the Philippine eagle, tarsier, and rafflesia (the world\'s largest flower). These ecosystems safeguard genetic diversity crucial for medicine, food, and ecological resilience.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">6</div>' +
          '<div class="function-content">' +
          '<h4>Disaster Risk Reduction</h4>' +
          '<p>Forests lessen the impact of floods, droughts, and landslides by regulating water flow and maintaining soil integrity. Their role is especially critical during typhoon season.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">7</div>' +
          '<div class="function-content">' +
          '<h4>Agricultural Support</h4>' +
          '<p>Watersheds sustain farming by providing irrigation. Forest litter enriches soil fertility, while shaded microclimates protect crops.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">8</div>' +
          '<div class="function-content">' +
          '<h4>Cultural and Economic Value</h4>' +
          '<p>Forests provide timber, food, and medicinal plants. For indigenous groups like the Dumagat, Manobo, and Ifugao, forests are sacred spaces tied to identity, spirituality, and traditional knowledge.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">9</div>' +
          '<div class="function-content">' +
          '<h4>Livelihood and Tourism</h4>' +
          '<p>Communities rely on forest products for income, while ecotourism sites such as Mt. Makiling and Mt. Apo showcase biodiversity and cultural heritage.</p>' +
          '</div></div>' +
          '<div class="function-card">' +
          '<div class="function-number">10</div>' +
          '<div class="function-content">' +
          '<h4>Global Significance</h4>' +
          '<p>As part of the Coral Triangle and biodiversity hotspots, Philippine forests contribute to international climate stability and conservation efforts.</p>' +
          '</div></div>' +
          '</div>';
        sectionsContainer.appendChild(functionsSection);

        // Add Biringan section (separate from forest layers)
        var biringanSection = document.createElement("div");
        biringanSection.className = "biringan-section-standalone";
        biringanSection.innerHTML = 
          '<h2 class="biringan-section-title">So what is Biringan?</h2>' +
          '<div class="biringan-content-wrapper">' +
          '<p class="biringan-description">Biringan is a legendary, hidden city said to exist in the forests of Samar, Philippines. In local folklore, it is described as a mystical place inhabited by <strong>engkanto</strong>—supernatural beings who live parallel to humans. The city is believed to be dazzling, full of light and modern wonders, yet invisible to ordinary eyes.</p>' +
          '<div class="biringan-image-container">' +
          '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biringan-w2AhOos1VeYbh5AT73PVUSLRl7pk0x.jpg" alt="Biringan - The legendary hidden city" class="biringan-clearer-image" />' +
          '</div>' +
          '<p class="biringan-description biringan-description-bottom">Stories of Biringan often serve as cautionary tales: travelers who wander too far into the forest may be "invited" by its residents, sometimes never returning. Others say chosen individuals are offered prosperity or beauty, but at the cost of leaving the human world behind.</p>' +
          '<p class="biringan-description biringan-description-bottom">For educators and learners, Biringan is more than just a myth—it\'s a cultural lens into how Filipinos imagine forests as mysterious, powerful spaces. It reflects the deep respect and awe communities hold for nature, reminding us that forests are not only ecological systems but also cultural landscapes filled with meaning.</p>' +
          '</div>';
        sectionsContainer.appendChild(biringanSection);

        // Add Educational Game Box at the bottom of Topic 1
        var gameBox = document.createElement("div");
        gameBox.className = "forest-game-box";
        gameBox.innerHTML = 
          '<a href="/site/games/topic1-quiz.html" class="game-box-link">' +
          '<div class="game-box-content">' +
          '<div class="game-box-icon">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M12 2L2 7l10 5 10-5-10-5z"></path>' +
          '<path d="M2 17l10 5 10-5"></path>' +
          '<path d="M2 12l10 5 10-5"></path>' +
          '</svg>' +
          '</div>' +
          '<div class="game-box-text">' +
          '<h3>Test Your Knowledge!</h3>' +
          '<p>Take the quiz and see how well you know the Philippine forest ecosystem.</p>' +
          '</div>' +
          '<div class="game-box-arrow">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<line x1="5" y1="12" x2="19" y2="12"></line>' +
          '<polyline points="12 5 19 12 12 19"></polyline>' +
          '</svg>' +
          '</div>' +
          '</div>' +
          '</a>';
        sectionsContainer.appendChild(gameBox);
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

    // Add Geological Features section after Mt. Pamitinan Overview
    var geologicalFeaturesSection = document.createElement("div");
    geologicalFeaturesSection.className = "geological-section-standalone";
    geologicalFeaturesSection.innerHTML =
      '<h2 class="geological-section-title">Geological Features</h2>' +
      '<div class="geological-content-wrapper">' +
      '<div class="geological-features-image-container">' +
      '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geological%20Features-hKnyDECHJRQ8uPTPe1HCH4WAJLy710.jpg" alt="Geological Features - Limestone cliffs and Pamitinan Cave" class="geological-clearer-image" />' +
      '</div>' +
      '<ul class="geological-features-list">' +
      '<li><strong>Limestone cliffs and karst formations</strong> shaped by water and rock interaction.</li>' +
      '<li><strong>Pamitinan Cave</strong> with stalactites, stalagmites, and chambers that host bats and other cave‑dwelling species.</li>' +
      '<li><strong>Part of the Sierra Madre</strong>, contributing to water regulation and serving as a natural shield against typhoons.</li>' +
      '</ul>' +
      '</div>';

    // Insert after Mt. Pamitinan Overview section
    var pamitinanOverviewSection = sectionsContainer.querySelector('.geological-features-section');
    if (pamitinanOverviewSection) {
      pamitinanOverviewSection.parentNode.insertBefore(geologicalFeaturesSection, pamitinanOverviewSection.nextSibling);
    } else {
      sectionsContainer.appendChild(geologicalFeaturesSection);
    }

    // Add Historical and Cultural Significance section
    var historicalSection = document.createElement("div");
    historicalSection.className = "historical-section-standalone";
    historicalSection.innerHTML =
      '<h2 class="historical-section-title">Historical and Cultural Significance</h2>' +
      '<div class="historical-content-wrapper">' +
      '<div class="historical-image-container">' +
      '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Historical%20and%20Cultural%20Significance%20-Xrk7s36y5UXDvEhyvGHZ1HRFebaDhP.jpg" alt="Historical and Cultural Significance - Mt. Pamitinan landmark" class="historical-clearer-image" />' +
      '</div>' +
      '<ul class="historical-features-list">' +
      '<li>On <strong>April 12, 1895</strong>, Andres Bonifacio, Emilio Jacinto, and several Katipuneros gathered inside Pamitinan Cave in Rodriguez, Rizal.</li>' +
      '<li>The cave served as a <strong>secret meeting place and refuge</strong>, where new members were initiated into the Katipunan.</li>' +
      '<li>During this gathering, Bonifacio inscribed the words <strong>"Viva la Independencia Filipina"</strong> on the cave wall, marking the first recorded declaration of Philippine independence, more than a year before the Cry of Balintawak.</li>' +
      '</ul>' +
      '<div class="historical-narrative">' +
      '<p class="historical-description">This act was symbolic rather than public—it was a solemn proclamation of freedom carried out in secrecy, but it planted the revolutionary spirit firmly in the hearts of the Katipuneros.</p>' +
      '<p class="historical-description">The landmark shown in Figure 2, located midway up Mt. Pamitinan, connects to this revolutionary legacy. While the actual inscription was not visible during the hike, the climb itself reflects the historical weight of the mountain. Mt. Pamitinan is therefore remembered not only as a natural landscape but also as a heritage site, where limestone cliffs and caves became witnesses to the Filipino struggle for independence.</p>' +
      '</div>' +
      '</div>';

    // Insert after Geological Features section
    if (geologicalFeaturesSection.parentNode) {
      geologicalFeaturesSection.parentNode.insertBefore(historicalSection, geologicalFeaturesSection.nextSibling);
    } else {
      sectionsContainer.appendChild(historicalSection);
    }

    // Add Myth and Folklore section
    var mythSection = document.createElement("div");
    mythSection.className = "myth-section-standalone";
    mythSection.innerHTML =
      '<h2 class="myth-section-title">Myth and Folklore</h2>' +
      '<div class="myth-content-wrapper">' +
      '<div class="myth-image-container">' +
      '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mysterious-mvlcYXrkCBmQtL9OKmWF7NLRfO2KWA.jpg" alt="Myth and Folklore - Ancient mystical tree" class="myth-clearer-image" />' +
      '</div>' +
      '<div class="myth-narrative-intro">' +
      '<p>Everything in nature carries a story—and Mt. Pamitinan is no exception. Beyond its limestone cliffs and revolutionary past, the mountain is wrapped in sabi sabi that locals have passed down for generations.</p>' +
      '</div>' +
      '<ul class="myth-features-list">' +
      '<li><strong>Bernardo Carpio\'s Struggle</strong> – The most famous legend tells of Bernardo Carpio, a mythical giant trapped between Mt. Pamitinan and Mt. Binacayan. Bound by enchantment, he is said to hold the two mountains apart to prevent them from colliding. Each time he strains against his chains, the ground trembles—explaining the earthquakes felt in the area.</li>' +
      '<li><strong>Symbol of Resistance</strong> – For many, Carpio\'s imprisonment is more than myth. It symbolizes the Filipino struggle against oppression, with the giant\'s eternal effort mirroring the people\'s fight for freedom and resilience.</li>' +
      '<li><strong>Whispers and Signs</strong> – Hikers and villagers alike recount strange experiences: faint voices or music echoing inside the cave, sudden gusts of wind, or footsteps when no one is near. Some even claim that unseen forces guide lost travelers back to the trail, as if guardians watch over the mountain.</li>' +
      '<li><strong>Mystical Presence</strong> – These stories blur the line between geology and myth. The same cliffs that hold evidence of ancient Earth processes are imagined as portals to another realm, where spirits and giants dwell unseen.</li>' +
      '</ul>' +
      '<div class="myth-narrative-outro">' +
      '<p>Mt. Pamitinan\'s folklore adds a layer of enchantment to its identity. It is not only a protected landscape but also a threshold between the natural and the supernatural. Hiking here means stepping into a place where every rumble of stone might be Bernardo Carpio\'s restless strength, and every whisper of wind might carry a legend waiting to be told.</p>' +
      '</div>' +
      '</div>';

    // Insert after Historical Section
    if (historicalSection.parentNode) {
      historicalSection.parentNode.insertBefore(mythSection, historicalSection.nextSibling);
    } else {
      sectionsContainer.appendChild(mythSection);
    }

    // Add Did You Know section
    var didYouKnowSection = document.createElement("div");
    didYouKnowSection.className = "did-you-know-section-standalone";
    didYouKnowSection.innerHTML =
      '<h2 class="did-you-know-section-title">Did You Know?</h2>' +
      '<div class="did-you-know-content-wrapper">' +
      '<p class="did-you-know-text">Local sabi‑sabi say that when the ground shakes near Mt. Pamitinan, it is Bernardo Carpio struggling against his chains. Earthquakes, in this telling, are not just natural events—they are echoes of a giant\'s eternal battle beneath the mountain.</p>' +
      '</div>';

    // Insert after Myth Section
    if (mythSection.parentNode) {
      mythSection.parentNode.insertBefore(didYouKnowSection, mythSection.nextSibling);
    } else {
      sectionsContainer.appendChild(didYouKnowSection);
    }

    // Add Why It Matters section
    var whyItMattersSection = document.createElement("div");
    whyItMattersSection.className = "why-it-matters-section-standalone";
    whyItMattersSection.innerHTML =
      '<h2 class="why-it-matters-section-title">Why It Matters</h2>' +
      '<div class="why-it-matters-content-wrapper">' +
      '<p class="why-it-matters-text">Mt. Pamitinan is more than a hiking destination—it is a fusion of protected landscape, revolutionary history, and living folklore. By studying Pamitinan, we see how Luzon\'s protected areas are not only ecological systems but also cultural spaces that shape identity, memory, and resilience.</p>' +
      '</div>';

    // Insert after Did You Know Section
    if (didYouKnowSection.parentNode) {
      didYouKnowSection.parentNode.insertBefore(whyItMattersSection, didYouKnowSection.nextSibling);
    } else {
      sectionsContainer.appendChild(whyItMattersSection);
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

  // Quiz header without description
  var questionsHTML = '<div class="quiz-header-simple">' +
    '<h2>Test Your Knowledge</h2>' +
    '</div>';
  
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

  // Generate detailed answer breakdown
  var answerBreakdownHTML = '<div class="answer-breakdown">' +
    '<h4 class="breakdown-title">Answer Breakdown</h4>' +
    '<div class="breakdown-list">';

  currentQuiz.forEach(function (q, index) {
    var isCorrect = quizAnswers[index] === q.correct;
    var userAnswer = q.options[quizAnswers[index]] || "No answer";
    var correctAnswer = q.options[q.correct];
    var optionLetters = ['A', 'B', 'C', 'D'];

    answerBreakdownHTML += '<div class="breakdown-item ' + (isCorrect ? 'correct' : 'incorrect') + '">' +
      '<div class="breakdown-question">' +
      '<span class="breakdown-number">Q' + (index + 1) + '</span>' +
      '<span class="breakdown-status">' + (isCorrect ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>') + '</span>' +
      '</div>' +
      '<p class="breakdown-question-text">' + q.question + '</p>' +
      '<div class="breakdown-answers">' +
      '<div class="your-answer ' + (isCorrect ? 'correct' : 'wrong') + '">' +
      '<span class="answer-label">Your answer:</span> ' +
      '<span class="answer-value">' + optionLetters[quizAnswers[index]] + ' - ' + userAnswer + '</span>' +
      '</div>';

    if (!isCorrect) {
      answerBreakdownHTML += '<div class="correct-answer">' +
        '<span class="answer-label">Correct answer:</span> ' +
        '<span class="answer-value">' + optionLetters[q.correct] + ' - ' + correctAnswer + '</span>' +
        '</div>';
    }

    answerBreakdownHTML += '</div></div>';
  });

  answerBreakdownHTML += '</div></div>';

  // Insert answer breakdown into results card
  var resultsCard = resultsDiv.querySelector('.results-card');
  var existingBreakdown = resultsCard.querySelector('.answer-breakdown');
  if (existingBreakdown) {
    existingBreakdown.remove();
  }

  var closeBtn = document.getElementById("close-btn");
  closeBtn.insertAdjacentHTML('beforebegin', answerBreakdownHTML);

  document.getElementById("close-btn").addEventListener("click", function () {
    // Reset quiz state
    currentQuizIndex = 0;
    quizAnswers = new Array(currentQuiz.length).fill(null);
    quizContent.style.display = "none";
    resultsDiv.style.display = "none";
    
    // Hide quiz container
    document.getElementById("quiz-container").style.display = "none";
    
    // Scroll back to the game box
    var gameBox = document.getElementById("start-quiz-trigger");
    if (gameBox) {
      gameBox.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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

  var reflectionInput = document.getElementById("forest-reflection-input");
  var submitBtn = document.getElementById("forest-reflection-submit");
  var clearBtn = document.getElementById("forest-reflection-clear");
  var savedMsg = document.getElementById("reflection-saved-msg");
  var charCount = document.getElementById("char-count");
  var thoughtCount = document.getElementById("thought-count");

  // Initialize community thoughts if not exists
  var communityThoughts = JSON.parse(localStorage.getItem("community-thoughts")) || [];
  
  // Seed with sample thoughts if empty
  if (communityThoughts.length === 0) {
    var sampleThoughts = [
      {
        id: 1,
        content: "We have the responsibility to educate ourselves and others about the importance of forests. Biringan or not, these ecosystems are real treasures that need protection.",
        timestamp: Date.now() - 3600000 * 24 * 2,
        reactions: { fire: 12, heart: 8, leaf: 15 }
      },
      {
        id: 2,
        content: "Forests are like our ancestors' way of keeping secrets safe. Just like Biringan hides from those who don't respect it, our forests will disappear if we don't show them respect!",
        timestamp: Date.now() - 3600000 * 24,
        reactions: { fire: 7, heart: 14, leaf: 9 }
      },
      {
        id: 3,
        content: "ngl this made me think deeper... we always talk about protecting nature but do we actually do something? maybe we should start small like not using single-use plastics fr fr",
        timestamp: Date.now() - 3600000 * 5,
        reactions: { fire: 21, heart: 6, leaf: 11 }
      },
      {
        id: 4,
        content: "The mystery of Biringan reminds me that there's still so much we don't know about our forests. That's why research and preservation are important!",
        timestamp: Date.now() - 3600000 * 12,
        reactions: { fire: 5, heart: 18, leaf: 22 }
      },
      {
        id: 5,
        content: "lowkey scared that our grandchildren might only see forests in pictures. we gotta step up and actually do something about deforestation. this hits different",
        timestamp: Date.now() - 3600000 * 2,
        reactions: { fire: 16, heart: 11, leaf: 8 }
      }
    ];
    communityThoughts = sampleThoughts;
    localStorage.setItem("community-thoughts", JSON.stringify(communityThoughts));
  }

  // Update thought count display
  if (thoughtCount) {
    thoughtCount.textContent = communityThoughts.length + " thoughts shared";
  }

  // Character counter
  if (reflectionInput && charCount) {
    reflectionInput.addEventListener("input", function() {
      charCount.textContent = reflectionInput.value.length;
    });
  }

  // Submit thought button
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      if (reflectionInput && reflectionInput.value.trim()) {
        var newThought = {
          id: Date.now(),
          content: reflectionInput.value.trim(),
          timestamp: Date.now(),
          reactions: { fire: 0, heart: 0, leaf: 0 }
        };
        
        communityThoughts.push(newThought);
        localStorage.setItem("community-thoughts", JSON.stringify(communityThoughts));
        
        // Show success message
        savedMsg.textContent = "Your thought has been shared anonymously!";
        savedMsg.className = "reflection-saved-msg success";
        
        // Clear input
        reflectionInput.value = "";
        charCount.textContent = "0";
        
        // Update count
        if (thoughtCount) {
          thoughtCount.textContent = communityThoughts.length + " thoughts shared";
        }
        
        // Hide message after 4 seconds
        setTimeout(function () {
          savedMsg.className = "reflection-saved-msg";
        }, 4000);
      } else {
        // Show error message
        savedMsg.textContent = "Please write something before submitting!";
        savedMsg.className = "reflection-saved-msg error";
        
        setTimeout(function () {
          savedMsg.className = "reflection-saved-msg";
        }, 3000);
      }
    });
  }

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      if (reflectionInput) {
        reflectionInput.value = "";
        if (charCount) charCount.textContent = "0";
        savedMsg.className = "reflection-saved-msg";
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
