// ===== TOPIC DATA =====
var topics = [
  {
    id: 1,
    label: "TOPIC 01",
    name: "Forest 101: Hey, Is this Biringan?",
    color: "#8EB09A",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topic%201-LDSJVje5v40iXByvlTx9b2nPwfAcpG.jpeg",
    description:
      "Forests are more than just clusters of trees; they are complex ecosystems that shape climate, biodiversity, and human life. This opens the door to understanding how forests sustain the planet and why they remain one of nature's greatest mysteries.",
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
    name: "Pamitinan Legends: Myth Meets Revolution",
    color: "#A8B7B5",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topic%202-RzW37tOpY0pxkfvm40mAKuRz3iR6iM.jpeg",
    description:
      "Mountains hold stories both natural and human. Here, we explore how landscapes like Pamitinan connect myth, history, and ecology, showing how nature inspires culture while sustaining life.",
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
  {
    id: 3,
    label: "TOPIC 03",
    name: "3G Lang: Grow, Glow and Green",
    color: "#4B6B55",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topic%203-e1rADcvd9zu2RRJXxzW1cHh4imby4t.jpeg",
    description:
      "Plants are the quiet architects of survival, producing oxygen, food, and balance for all living things. This topic highlights their essential role in ecosystems and how \"green goals\" connect to everyday life and sustainability.",
    sections: [
      { title: "Plant Diversity", text: "Mt. Pamitinan supports a remarkable diversity of plant species across different elevation zones. From lowland tropical forest to montane vegetation, each zone showcases unique adaptations to local conditions. The diverse flora provides food and shelter for numerous animal species." },
      { title: "Photosynthesis & Oxygen Production", text: "Plants are nature's oxygen factories. Through photosynthesis, they convert sunlight into energy and release oxygen, which all animals depend on for survival. The extensive forest cover of Mt. Pamitinan contributes significantly to air quality in the region." },
      { title: "Carbon Sequestration", text: "Forests play a crucial role in combating climate change by absorbing carbon dioxide from the atmosphere. The dense vegetation of Mt. Pamitinan serves as a significant carbon sink, helping mitigate the effects of global warming." },
      { title: "Sustainable Living & Green Goals", text: "Understanding plant ecosystems inspires sustainable practices in our daily lives. Supporting reforestation efforts, reducing our carbon footprint, and using eco-friendly products are ways we can contribute to green goals and protect environments like Mt. Pamitinan for future generations." }
    ],
    location: "Mt. Pamitinan Flora Zones",
    detail1: "100+ plant species",
    detail2: "Oxygen production hub",
  },
  {
    id: 4,
    label: "TOPIC 04",
    name: "Wild Side: Tayo o Sila?",
    color: "#7A9E8C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topic4-88GM4Y6ZCHWMBrNhlUF428cJE0GZzK.jpeg",
    description:
      "Fauna bring the Pamitinan landscape to life, from small creatures to larger wildlife that shape the ecosystem. This section dives into the diversity of animals, and the importance of protecting them for ecological balance.",
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

// ===== AVIFAUNA SPECIES DATABASE =====
var avifaunaSpecies = [
  {
    commonName: "Barn Swallow",
    scientificName: "Hirundo rustica",
    family: "Hirundinidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barn%20Swallow-OVBgm0C3G0sVxu4SjNNoGnWaHmICPh.jpg",
    description: "Slender bird with metallic blue back, cinnamon throat, and a deeply forked tail. Agile in flight, darting low over fields and water. Their graceful aerial movements make them one of the most recognizable migratory birds.",
    habitat: "Open fields, river valleys, and near human dwellings.",
    roleInEcosystem: "Consumes large numbers of flying insects, controlling pests naturally. This reduces insect-borne diseases and supports agricultural balance.",
    voiceUrl: ""
  },
  {
    commonName: "Black-crowned Night Heron",
    scientificName: "Nycticorax nycticorax",
    family: "Ardeidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black%20crowned%20night%20heron-I5nuRTXw3NGK5MyjeeW59m2KWPty1z.jpg",
    description: "Stocky heron with black crown, gray wings, and short legs, often hunched. Mostly nocturnal, feeding at dusk and night. Juveniles are streaked brown, blending with wetland vegetation.",
    habitat: "Wetlands, riversides, and forest streams.",
    roleInEcosystem: "Regulates fish, amphibian, and invertebrate populations. Prevents overpopulation of aquatic species, maintaining food web balance.",
    voiceUrl: ""
  },
  {
    commonName: "Black-naped Oriole",
    scientificName: "Oriolus chinensis",
    family: "Oriole",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black%20naped%20orioke-xkwp45Lnnne66HYdBUkPSZZ68prXal.jpg",
    description: "Bright yellow plumage with a bold black eye-stripe extending to the nape. Active and vocal, often moving through forest canopies. Known for melodious whistles that carry through wooded areas.",
    habitat: "Forest edges, plantations, and wooded areas.",
    roleInEcosystem: "Disperses seeds and controls insect populations. Supports plant diversity and regulates insect numbers.",
    voiceUrl: ""
  },
  {
    commonName: "Brown Shrike",
    scientificName: "Lanius cristatus",
    family: "Laniidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brown%20shrike-EMREEtpISPHsGfe3afuDwkY7fzJll8.jpg",
    description: "Small predatory songbird with brown plumage and a black facial mask. Has a hooked bill adapted for catching prey. Famous for impaling insects and small vertebrates on thorns.",
    habitat: "Open woodlands, scrub, and agricultural areas.",
    roleInEcosystem: "Controls insect and small vertebrate populations. Acts as a natural predator, balancing prey species.",
    voiceUrl: ""
  },
  {
    commonName: "Brown-breasted Kingfisher",
    scientificName: "Halcyon gularis",
    family: "Alcedinidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brow%20breasted%20kingfisher-bJKaHRbCWJlw1FaiXofoVwRKYO06Uj.jpg",
    description: "Large kingfisher with bright blue wings, brown breast, and red bill. Loud and conspicuous, often perched near water. Strong bill adapted for catching fish and amphibians.",
    habitat: "Forest edges, rivers, and wetlands.",
    roleInEcosystem: "Regulates fish, amphibians, and insects. Helps maintain healthy aquatic and terrestrial populations.",
    voiceUrl: ""
  },
  {
    commonName: "Coleto",
    scientificName: "Sarcops calvus",
    family: "Sturnidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coleto-rSSdUrzuTKgRa1pdBpXsUFTmnZEXIV.jpg",
    description: "Glossy starling with iridescent plumage and bare pinkish facial skin. Highly social, often seen in noisy flocks. Unique appearance distinguishes it among Philippine starlings.",
    habitat: "Forests and secondary growth areas.",
    roleInEcosystem: "Disperses seeds and consumes insects. Aids forest regeneration and influences seed distribution patterns.",
    voiceUrl: ""
  },
  {
    commonName: "Coppersmith Barbet",
    scientificName: "Psilopogon haemacephalus",
    family: "Megalaimidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coppersmith%20barbet-b23ta4lfrTljbibw50wAtQQFYIiz3w.jpg",
    description: "Small, stout bird with green plumage and a red forehead. Known for repetitive \"tuk-tuk\" call resembling a coppersmith hammering. Thick bill suited for fruit eating.",
    habitat: "Urban parks, gardens, and forest edges.",
    roleInEcosystem: "Disperses seeds by consuming fruits. Serves as an indicator of healthy ecosystems through its presence and calls.",
    voiceUrl: ""
  },
  {
    commonName: "Elegant Tit",
    scientificName: "Periparus elegans",
    family: "Paridae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elegant%20tit-yszlg6kfXLw89TeA37OjxAiRKQlvhv.jpg",
    description: "Small bird with black head, white cheeks, and yellow underparts. Active and agile, flitting through branches. Vocal species with varied calls.",
    habitat: "Forests and wooded areas.",
    roleInEcosystem: "Controls insect populations by foraging among leaves and bark. Reduces pest outbreaks in forests.",
    voiceUrl: ""
  },
  {
    commonName: "Eurasian Tree Sparrow",
    scientificName: "Passer montanus",
    family: "Passeridae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eurasian%20tree%20sparrow-WHAKKYL1X7K8hUVB2Has3BDyXPElnb.jpg",
    description: "Small brown bird with black bib, chestnut crown, and white cheeks with a black spot. Common in urban and rural areas. Highly adaptable and social.",
    habitat: "Towns, villages, and farmlands.",
    roleInEcosystem: "Scavenger and seed disperser, aiding plant regeneration. Serves as prey for larger birds.",
    voiceUrl: ""
  },
  {
    commonName: "Garden Sunbird",
    scientificName: "Cinnyris jugularis",
    family: "Nectariniidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garden%20sunbird-8MU598QTRq8mJfYqoYfK3XHQttO9BH.jpg",
    description: "Tiny bird with iridescent plumage, often metallic green or red. Slender curved bill adapted for nectar feeding. Active and fast-moving among flowers.",
    habitat: "Gardens, forest edges, and flowering shrubs.",
    roleInEcosystem: "Pollinates flowers while feeding on nectar. Supports plant reproduction and biodiversity.",
    voiceUrl: ""
  },
  {
    commonName: "Greyback Tailorbird",
    scientificName: "Orthotomus derbianus",
    family: "Cisticolidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graybacked%20tailorbird-vnEfMrzCFRoYs9KxURdTWJxfCq1HdB.jpg",
    description: "Small warbler with olive-green upperparts and gray back. Known for sewing leaves together to build nests. Active and secretive in dense vegetation.",
    habitat: "Shrubs, gardens, and forest undergrowth.",
    roleInEcosystem: "Controls insect populations by feeding on small insects. Contributes to pest regulation in dense foliage.",
    voiceUrl: ""
  },
  {
    commonName: "Long-tailed Shrike",
    scientificName: "Lanius schach",
    family: "Laniidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/long%20tailed%20shrike-b0gXtAak4dxsDczKhbjAPMEP1jMwcs.jpg",
    description: "Medium-sized bird with long tail, gray back, and black mask. Aggressive hunter with hooked bill. Often perches conspicuously while scanning for prey.",
    habitat: "Open fields, scrublands, and forest edges.",
    roleInEcosystem: "Predates on insects and small vertebrates. Helps regulate prey populations in open habitats.",
    voiceUrl: ""
  },
  {
    commonName: "Lowland White-eye",
    scientificName: "Zosterops meyeni",
    family: "Zosteropidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lowland%20white%20eyed-AmvxFP7qeoS4cy9gwqB9KmoVIZ7Km3.jpg",
    description: "Small bird with olive-green plumage and a distinct white eye-ring. Active and social, often in flocks. Has a high-pitched call.",
    habitat: "Lowland forests and gardens.",
    roleInEcosystem: "Pollinates flowers and disperses seeds. Supports plant reproduction and forest regeneration.",
    voiceUrl: ""
  },
  {
    commonName: "Peregrine Falcon",
    scientificName: "Falco peregrinus",
    family: "Falconidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peregrine%20falcon-TTkAUUbmMpOg8LHlOsBopNQOXYTIJJ.jpg",
    description: "Powerful raptor with blue-gray back, barred underparts, and black head markings. Known for incredible speed in hunting dives. Fierce predator of birds.",
    habitat: "Cliffs, tall buildings, and open landscapes.",
    roleInEcosystem: "Controls bird populations, especially pigeons and doves. Maintains balance among avian species.",
    voiceUrl: ""
  },
  {
    commonName: "Philippine Bulbul",
    scientificName: "Hysipetes philippinus",
    family: "Pycnonotidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/philippine%20bulbul-moIde0z2Ar135pe6QNyg2Z9lSmiAhZ.jpg",
    description: "Medium-sized songbird with olive-brown plumage and melodious calls. Often seen in pairs or small groups. Active in forest canopies.",
    habitat: "Forests and secondary growth.",
    roleInEcosystem: "Disperses seeds and consumes insects. Supports forest regeneration and insect control.",
    voiceUrl: ""
  },
  {
    commonName: "Philippine Coucal",
    scientificName: "Centropus viridis",
    family: "Cuculidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/philippine%20coucal-l0NHxDmMpRrLN36nacFuftFotBY5WJ.jpg",
    description: "Large, dark bird with long tail and reddish wings. Secretive, often heard more than seen. Known for deep booming calls.",
    habitat: "Grasslands, thickets, and forest edges.",
    roleInEcosystem: "Predates on insects, reptiles, and small mammals. Helps regulate populations of small prey species.",
    voiceUrl: ""
  },
  {
    commonName: "Philippine Serpent Eagle",
    scientificName: "Spilornis holospilus",
    family: "Accipitridae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/philippine%20serpent%20eagle-k8dweuhpzh6gafLVnsIpG5FE3EXzKW.jpg",
    description: "Medium-sized eagle with brown plumage, broad wings, and piercing eyes. Recognizable by its loud, high-pitched calls. Skilled hunter of reptiles.",
    habitat: "Forests and open woodlands.",
    roleInEcosystem: "Controls reptile populations, especially snakes. Maintains predator-prey balance in forest ecosystems.",
    voiceUrl: ""
  },
  {
    commonName: "Scaly-breasted Munia",
    scientificName: "Lonchura punctulata",
    family: "Estrildidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scaly%20breasted%20munia-fXQU55X6cLKXPJ4Aieu7YYHl04Pz3O.jpg",
    description: "Small finch with brown plumage and distinctive scaly pattern on breast. Social, often in flocks. Feeds mainly on grass seeds.",
    habitat: "Grasslands, farmlands, and gardens.",
    roleInEcosystem: "Disperses seeds and influences plant growth patterns. Serves as prey for larger birds.",
    voiceUrl: ""
  },
  {
    commonName: "Spotted Dove",
    scientificName: "Spilopelia chinensis",
    family: "Columbidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spotted%20dove-7Dl1Bga6wWqakla76xReRyI9wmLlNK.jpg",
    description: "Medium-sized dove with brown plumage and a black-and-white spotted collar. Gentle and soft cooing calls. Often seen foraging on the ground.",
    habitat: "Urban areas, farmlands, and forest edges.",
    roleInEcosystem: "Seed disperser, aiding plant regeneration. Provides prey for raptors.",
    voiceUrl: ""
  },
  {
    commonName: "White-breasted Woodswallow",
    scientificName: "Artaamus leucorynchus",
    family: "Artamidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whitebreasted%20wood%20swallow-WQOSaidi055ehkRs8nDN5SPL98R0zU.jpg",
    description: "Medium-sized bird with gray upperparts, white breast, and short tail. Strong flyer, often seen in groups. Has a sharp, chattering call.",
    habitat: "Open areas, farmlands, and forest edges.",
    roleInEcosystem: "Controls insect populations by aerial hunting. Their flocking behavior enhances pest regulation.",
    voiceUrl: ""
  },
  {
    commonName: "White-eared Brown Dove",
    scientificName: "Phapitreron leucostis",
    family: "Columbidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white%20eared%20brown%20dove%20credits%20mau4you_%27s%20bird%20watch-MkJdT0OesRqna7Sp5e50zHukOrpmJw.jpg",
    description: "Medium-sized dove with brown plumage and a distinct white patch near the ear. Shy and secretive, often in dense vegetation. Soft cooing calls.",
    habitat: "Forests and thickets.",
    roleInEcosystem: "Disperses seeds, supporting forest regeneration. Serves as prey for forest raptors.",
    voiceUrl: ""
  },
  {
    commonName: "Yellow-vented Bulbul",
    scientificName: "Pycnonotus goiavier",
    family: "Pycnonotidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yellow%20vented%20bulbul-9U1Jk6XQNE4UZpFaUydtUD7cjkTogN.jpg",
    description: "Medium-sized bird with brown upperparts, yellow vent, and white throat. Active and noisy, often in gardens. Adaptable to urban environments.",
    habitat: "Gardens, farmlands, and forest edges.",
    roleInEcosystem: "Disperses seeds and controls insects. Supports plant diversity and pest regulation.",
    voiceUrl: ""
  },
  {
    commonName: "Zebra Dove",
    scientificName: "Geopelia striata",
    family: "Columbidae",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zebra%20dove-dK5eUGp8qjwWrCtJCeKu3LXHWRWPID.jpg",
    description: "The Zebra Dove is a small, slender dove with brownish-gray plumage marked by fine black-and-white barring across its chest and belly, giving it a \"zebra-like\" pattern. It has a long tail and soft, pleasant cooing calls. Gentle in behavior, it often forages quietly on the ground for seeds.",
    habitat: "Urban areas, gardens, farmlands, and forest edges.",
    roleInEcosystem: "Acts as a seed disperser, aiding in plant regeneration and maintaining vegetation diversity. It also serves as prey for raptors, contributing to the food chain balance.",
    voiceUrl: ""
  }
];

// ===== INIT =====
buildCards();
