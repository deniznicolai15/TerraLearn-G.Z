// ===== TOPIC DATA =====
var topics = [
  {
    id: 1,
    label: "TOPIC 01",
    name: "Flora & Vegetation",
    color: "#8EB09A",
    image: "/images/topic-flora.jpg",
    description:
      "Discover the diverse plant species found along the trails of Mt. Pamitinan, from lowland tropical trees to rare endemic ferns and orchids that thrive in the mountain's unique microclimate.",
    sections: [
      { title: "Lowland Tropical Forest", text: "The base of Mt. Pamitinan is covered in lowland tropical forest, featuring towering Narra and Molave trees. These trees form a dense canopy that provides shade and moisture for the understory plants below. The forest floor is carpeted with various species of ferns, mosses, and seedlings." },
      { title: "Endemic Plant Species", text: "Mt. Pamitinan is home to several endemic plant species found only in the Philippines. Among them are rare orchids like the Waling-Waling and various species of pitcher plants. These plants have adapted to the unique microclimate of the mountain over thousands of years." },
      { title: "Medicinal Plants", text: "Local communities have long used plants from Mt. Pamitinan for traditional medicine. Species like Lagundi, Sambong, and Tsaang Gubat grow wild along the trails and are still harvested by local healers for various remedies." },
      { title: "Conservation Status", text: "Many of the plant species in this area face threats from illegal logging, land conversion, and climate change. Conservation efforts by local organizations and the DENR aim to protect the remaining forest cover and promote reforestation of degraded areas." }
    ],
    location: "Mt. Pamitinan",
    detail1: "50+ species documented",
    detail2: "Endemic flora sanctuary",
  },
  {
    id: 2,
    label: "TOPIC 02",
    name: "Wildlife & Fauna",
    color: "#A8B7B5",
    image: "/images/topic-wildlife.jpg",
    description:
      "Learn about the birds, reptiles, insects, and mammals that call Mt. Pamitinan home. Understand their roles in the ecosystem and the conservation efforts protecting them.",
    sections: [
      { title: "Bird Species", text: "Mt. Pamitinan serves as a habitat for over 30 bird species, including the Philippine Hawk-Eagle, Luzon Hornbill, and various species of kingfishers. Birdwatching is best during the early morning hours when most species are active and foraging." },
      { title: "Reptiles & Amphibians", text: "The mountain's streams and forest floor are home to various lizard species, snakes, and frogs. The Philippine Sailfin Lizard, a species unique to the Philippines, can occasionally be spotted near the river systems at the base of the mountain." },
      { title: "Insects & Invertebrates", text: "The rich insect diversity includes colorful butterflies, beetles, and various species of ants. These invertebrates play crucial roles as pollinators, decomposers, and food sources for larger animals in the ecosystem." },
      { title: "Mammalian Wildlife", text: "While larger mammals are rare due to habitat fragmentation, the mountain still supports populations of fruit bats, Philippine deer mice, and civets. Nocturnal surveys have revealed a surprisingly rich mammalian community that emerges after dark." }
    ],
    location: "Montalban, Rizal",
    detail1: "30+ species documented",
    detail2: "Active conservation zone",
  },
  {
    id: 3,
    label: "TOPIC 03",
    name: "River Ecosystems",
    color: "#4B6B55",
    image: "/images/topic-river.jpg",
    description:
      "Explore the Wawa River system and its vital role in sustaining biodiversity. Study how water quality, flow patterns, and surrounding vegetation create a rich aquatic habitat.",
    sections: [
      { title: "The Wawa River System", text: "The Wawa River originates from the Sierra Madre mountain range and flows through the limestone gorges of Montalban. It serves as the primary water source for the Wawa Dam, which historically supplied water to Metro Manila. The river's crystal-clear waters support a diverse aquatic ecosystem." },
      { title: "Aquatic Biodiversity", text: "The river is home to various freshwater fish species, crustaceans, and aquatic invertebrates. Native species like the Ludong and freshwater gobies can be found in the cleaner upstream sections. The river also supports aquatic plants and algae that form the base of the food chain." },
      { title: "Riparian Zones", text: "The vegetation along the riverbanks, known as riparian zones, plays a critical role in preventing erosion, filtering pollutants, and providing habitat for wildlife. These zones feature bamboo groves, riverside ferns, and various tree species that stabilize the soil." },
      { title: "Environmental Threats", text: "The river ecosystem faces challenges from illegal quarrying, domestic waste, and upstream development. Community-led clean-up drives and monitoring programs are working to preserve water quality and protect the aquatic habitats that depend on the river." }
    ],
    location: "Wawa River, Montalban",
    detail1: "Vital river ecology",
    detail2: "Water conservation area",
  },
  {
    id: 4,
    label: "TOPIC 04",
    name: "Cultural Heritage",
    color: "#7A9E8C",
    image: "/images/topic-heritage.jpg",
    description:
      "Uncover the rich cultural history of Mt. Pamitinan and Montalban, from the Katipunan's historic ties to the area to the indigenous communities that have shaped this landscape for generations.",
    sections: [
      { title: "The Katipunan Connection", text: "Mt. Pamitinan holds a special place in Philippine history. It was here at Pamitinan Cave where Andres Bonifacio and members of the Katipunan reportedly held secret meetings and inscribed 'Viva la Independencia Filipina' on the cave walls in 1895. This act of defiance symbolized the growing revolutionary movement against Spanish colonial rule." },
      { title: "Pamitinan Cave", text: "The cave itself is a significant archaeological and historical site. Beyond its Katipunan connections, the cave contains formations that are thousands of years old. It has been declared a National Historical Landmark and National Geological Monument, recognizing both its cultural and natural significance." },
      { title: "Indigenous Communities", text: "The Dumagat-Remontado people are the indigenous inhabitants of the Montalban area. They have lived in harmony with the mountain environment for generations, possessing deep knowledge of the local flora, fauna, and natural resources. Their traditional practices offer valuable insights into sustainable living." },
      { title: "Preserving Heritage", text: "Efforts to preserve the cultural heritage of Mt. Pamitinan include documentation of oral histories, protection of historical sites, and community-based tourism that benefits local populations. These initiatives aim to balance development with the preservation of the area's rich cultural identity." }
    ],
    location: "Montalban, Rizal",
    detail1: "National landmark",
    detail2: "Heritage conservation",
  },
];

// ===== SVG ICONS =====
var icons = {
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  leaf: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.5 6.5c2.5-.5 5-1 6.5-1.5-1 2.5-3.5 5-7 7.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
};

// ===== STATE =====
var activeTopicIndex = -1;

// ===== BUILD CARDS =====
var grid = document.getElementById("topics-grid");
var topicPanel = document.getElementById("topic-panel");
var topicPanelOverlay = document.getElementById("topic-panel-overlay");
var topicPanelClose = document.getElementById("topic-panel-close");
var topicPanelScroll = document.getElementById("topic-panel-scroll");
// topicPanelOpen removed - accordion uses activeTopicIndex instead

function buildCards() {
  topics.forEach(function (topic, index) {
    var card = document.createElement("div");
    card.className = "topic-card";
    card.setAttribute("data-index", index);

    // Build sections HTML for expanded view
    var sectionsHTML = "";
    if (topic.sections) {
      topic.sections.forEach(function (section) {
        sectionsHTML +=
          '<h3 class="topic-expanded-section-title">' + section.title + '</h3>' +
          '<p class="topic-expanded-text">' + section.text + '</p>';
      });
    }

    card.innerHTML =
      // Default card face
      '<div class="topic-card-face">' +
        '<div class="topic-card-tint" style="background-color: ' + topic.color + '"></div>' +
        '<div class="topic-card-image">' +
          '<img src="' + topic.image + '" alt="' + topic.name + '" />' +
        '</div>' +
        '<div class="topic-card-body">' +
          '<div class="topic-card-label">' + topic.label + '</div>' +
          '<div class="topic-card-name">' + topic.name + '</div>' +
          '<p class="topic-card-desc">' + topic.description + '</p>' +
        '</div>' +
        '<div class="topic-card-accent" style="background-color: ' + topic.color + '"></div>' +
      '</div>' +
      // Collapsed label (shown when another card is expanded)
      '<div class="topic-card-collapsed-label">' +
        '<span>' + topic.name + '</span>' +
      '</div>' +
      // Expanded content (shown inside card when expanded)
      '<div class="topic-card-expanded-content">' +
        '<div class="topic-expanded-image">' +
          '<img src="' + topic.image + '" alt="' + topic.name + '" />' +
          '<div class="topic-expanded-image-overlay"></div>' +
        '</div>' +
        '<div class="topic-expanded-body">' +
          '<div class="topic-expanded-label">' + topic.label + '</div>' +
          '<div class="topic-expanded-title">' + topic.name + '</div>' +
          '<div class="topic-expanded-swatch" style="background-color: ' + topic.color + '"></div>' +
          '<p class="topic-expanded-desc">' + topic.description + '</p>' +
          sectionsHTML +
          '<div class="topic-expanded-details">' +
            '<div class="topic-expanded-detail">' + icons.mapPin + '<span>' + topic.location + '</span></div>' +
            '<div class="topic-expanded-detail">' + icons.leaf + '<span>' + topic.detail1 + '</span></div>' +
            '<div class="topic-expanded-detail">' + icons.info + '<span>' + topic.detail2 + '</span></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Enable mouse wheel scrolling inside the expanded body
    var expandedBody = card.querySelector(".topic-expanded-body");
    if (expandedBody) {
      expandedBody.addEventListener("wheel", function (e) {
        var el = this;
        var scrollTop = el.scrollTop;
        var scrollHeight = el.scrollHeight;
        var clientHeight = el.clientHeight;
        var delta = e.deltaY;

        // Only handle if content is scrollable
        if (scrollHeight > clientHeight) {
          // Prevent page scroll, let the inner element scroll
          var atTop = scrollTop === 0 && delta < 0;
          var atBottom = scrollTop + clientHeight >= scrollHeight && delta > 0;
          if (!atTop && !atBottom) {
            e.stopPropagation();
          }
          // Manually scroll
          el.scrollTop += delta;
          e.preventDefault();
        }
      }, { passive: false });
    }

    card.addEventListener("click", function (e) {
      // Don't toggle when clicking inside the scrollable expanded body
      if (e.target.closest(".topic-expanded-body")) return;
      // Open topic in new tab instead of accordion
      openTopicPage(index);
    });

    grid.appendChild(card);
  });
}

// ===== TOGGLE TOPIC CARD (ACCORDION) =====
function toggleTopicCard(index) {
  var cards = document.querySelectorAll(".topic-card");

  // If clicking the already expanded card, collapse everything
  if (activeTopicIndex === index) {
    cards.forEach(function (c) {
      c.classList.remove("expanded", "collapsed");
    });
    activeTopicIndex = -1;
    return;
  }

  // If clicking a collapsed card, expand it
  activeTopicIndex = index;

  cards.forEach(function (c, i) {
    if (i === index) {
      c.classList.add("expanded");
      c.classList.remove("collapsed");
      // Scroll expanded content to top
      var body = c.querySelector(".topic-expanded-body");
      if (body) body.scrollTop = 0;
    } else {
      c.classList.remove("expanded");
      c.classList.add("collapsed");
    }
  });
}

// ===== HAMBURGER TOGGLE =====
var hamburger = document.getElementById("hamburger");
if (hamburger) {
  hamburger.addEventListener("click", function () {
    var links = document.querySelector(".navbar-links");
    if (links.style.display === "flex") {
      links.style.display = "none";
    } else {
      links.style.display = "flex";
      links.style.flexDirection = "column";
      links.style.position = "absolute";
      links.style.top = "100%";
      links.style.left = "0";
      links.style.right = "0";
      links.style.background = "rgba(16, 26, 20, 0.95)";
      links.style.padding = "20px";
      links.style.gap = "20px";
      links.style.borderBottom = "1px solid var(--border)";
    }
  });
}

// ===== MAP PANEL INTERACTION =====
var mapPin = document.getElementById("map-pin");
var treeIcon = document.getElementById("tree-icon");
var mapPanel = document.getElementById("map-panel");
var mapPanelOverlay = document.getElementById("map-panel-overlay");
var mapPanelClose = document.getElementById("map-panel-close");
var panelOpen = false;

function openPanel() {
  if (panelOpen) return;
  panelOpen = true;
  mapPanel.classList.remove("closing");
  mapPanel.classList.add("active");
  mapPanelOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePanel() {
  if (!panelOpen) return;
  panelOpen = false;

  // Start panel closing animation
  mapPanel.classList.add("closing");
  mapPanel.classList.remove("active");
  mapPanelOverlay.classList.remove("active");

  // Shrink tree icon
  treeIcon.classList.remove("growing");
  treeIcon.classList.add("shrinking");

  // After panel closes, grow tree back
  setTimeout(function () {
    mapPanel.classList.remove("closing");
    document.body.style.overflow = "";
    treeIcon.classList.remove("shrinking");
    treeIcon.classList.add("growing");
  }, 500);

  // Remove growing class after animation completes
  setTimeout(function () {
    treeIcon.classList.remove("growing");
  }, 1100);
}

// Click tree pin to open panel
if (mapPin) {
  mapPin.addEventListener("click", function () {
    if (panelOpen) {
      closePanel();
    } else {
      openPanel();
    }
  });
}

// Click overlay to close
if (mapPanelOverlay) {
  mapPanelOverlay.addEventListener("click", closePanel);
}

// Click close button to close
if (mapPanelClose) {
  mapPanelClose.addEventListener("click", closePanel);
}

// Escape key to close any open panel
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (panelOpen) closePanel();
    if (activeTopicIndex !== -1) {
      var cards = document.querySelectorAll(".topic-card");
      cards.forEach(function (c) { c.classList.remove("expanded", "collapsed"); });
      activeTopicIndex = -1;
    }
  }
});

// ===== OPEN TOPIC PAGE =====
function openTopicPage(topicIndex) {
  var topic = topics[topicIndex];
  var topicData = encodeURIComponent(JSON.stringify(topic));
  window.location.href = "topic-detail.html?data=" + topicData;
}

// ===== INIT =====
buildCards();
