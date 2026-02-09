// ===== TOPIC DATA =====
const topics = [
  {
    id: 1,
    label: "TOPIC 01",
    name: "Flora & Vegetation",
    color: "#8EB09A",
    description:
      "Discover the diverse plant species found along the trails of Mt. Pamitinan, from lowland tropical trees to rare endemic ferns and orchids that thrive in the mountain's unique microclimate.",
    location: "Mt. Pamitinan",
    detail1: "50+ species",
    detail2: "Endemic flora",
  },
  {
    id: 2,
    label: "TOPIC 02",
    name: "Wildlife & Fauna",
    color: "#A8B7B5",
    description:
      "Learn about the birds, reptiles, insects, and mammals that call Mt. Pamitinan home. Understand their roles in the ecosystem and the conservation efforts protecting them.",
    location: "Montalban, Rizal",
    detail1: "30+ species",
    detail2: "Conservation",
  },
  {
    id: 3,
    label: "TOPIC 03",
    name: "River Ecosystems",
    color: "#4B6B55",
    description:
      "Explore the Wawa River system and its vital role in sustaining biodiversity. Study how water quality, flow patterns, and surrounding vegetation create a rich aquatic habitat.",
    location: "Wawa River",
    detail1: "River ecology",
    detail2: "Water systems",
  },
  {
    id: 4,
    label: "TOPIC 04",
    name: "Cultural Heritage",
    color: "#7A9E8C",
    description:
      "Uncover the rich cultural history of Mt. Pamitinan and Montalban, from the Katipunan's historic ties to the area to the indigenous communities that have shaped this landscape for generations.",
    location: "Montalban, Rizal",
    detail1: "History",
    detail2: "Heritage sites",
  },
];

// ===== SVG ICONS =====
const icons = {
  mountain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  leaf: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.5 6.5c2.5-.5 5-1 6.5-1.5-1 2.5-3.5 5-7 7.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
};

// ===== STATE =====
let activeIndex = -1;

// ===== BUILD CARDS =====
const grid = document.getElementById("topics-grid");

function buildCards() {
  topics.forEach(function (topic, index) {
    var card = document.createElement("div");
    card.className = "topic-card";
    card.setAttribute("data-index", index);

    card.innerHTML =
      '<div class="topic-card-tint" style="background-color: ' + topic.color + '"></div>' +
      '<div class="topic-card-center">' +
        '<div class="topic-card-icon" style="background-color: ' + topic.color + '">' +
          icons.leaf +
        '</div>' +
        '<span class="topic-card-hint">Click to explore</span>' +
      '</div>' +
      '<div class="topic-card-bottom">' +
        '<div class="topic-card-label">' + topic.label + '</div>' +
        '<div class="topic-card-name">' + topic.name + '</div>' +
      '</div>' +
      '<div class="topic-card-expanded">' +
        '<div class="expanded-image">' +
          '<div class="expanded-image-placeholder">' +
            icons.image +
            '<span>Image coming soon</span>' +
          '</div>' +
        '</div>' +
        '<div class="expanded-info">' +
          '<div class="expanded-info-label">' + topic.label + '</div>' +
          '<div class="expanded-info-title">' + topic.name + '</div>' +
          '<div class="expanded-info-swatch" style="background-color: ' + topic.color + '"></div>' +
          '<p class="expanded-info-desc">' + topic.description + '</p>' +
          '<div class="expanded-info-details">' +
            '<div class="expanded-detail">' + icons.mapPin + '<span>' + topic.location + '</span></div>' +
            '<div class="expanded-detail">' + icons.leaf + '<span>' + topic.detail1 + '</span></div>' +
            '<div class="expanded-detail">' + icons.info + '<span>' + topic.detail2 + '</span></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    card.addEventListener("click", function () {
      toggleCard(index);
    });

    grid.appendChild(card);
  });
}

// ===== TOGGLE EXPAND/COLLAPSE =====
function toggleCard(index) {
  var cards = document.querySelectorAll(".topic-card");

  if (activeIndex === index) {
    // Collapse: clicking the same card again
    activeIndex = -1;
    grid.classList.remove("has-active");
    cards.forEach(function (c) {
      c.classList.remove("active");
    });
  } else {
    // Expand this card
    activeIndex = index;
    grid.classList.add("has-active");
    cards.forEach(function (c, i) {
      if (i === index) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
  }
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

// Escape key to close
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && panelOpen) {
    closePanel();
  }
});

// ===== INIT =====
buildCards();
