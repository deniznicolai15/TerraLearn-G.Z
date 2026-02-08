// ===== CAROUSEL DATA =====
const topics = [
  {
    id: 1,
    label: "TOPIC 01",
    name: "Misty Pine Trail",
    color: "#A8B7B5",
    description:
      "A serene walk through ancient pine forests blanketed in mist. This trail offers breathtaking views of the valley below and connects to several alpine meadows.",
    location: "Northern Alps",
    duration: "3-4 hours",
    elevation: "1,200m",
  },
  {
    id: 2,
    label: "TOPIC 02",
    name: "Wild Sage Path",
    color: "#8EB09A",
    description:
      "Wind through rolling hills covered in wild sage and aromatic herbs. This moderate trek rewards hikers with panoramic views at the summit ridge.",
    location: "Eastern Ridge",
    duration: "5-6 hours",
    elevation: "1,800m",
  },
  {
    id: 3,
    label: "TOPIC 03",
    name: "Deep Moss Canyon",
    color: "#4B6B55",
    description:
      "Descend into a lush canyon where moss blankets every surface. Ancient trees tower overhead while a crystal stream carves through the forest floor.",
    location: "Western Gorge",
    duration: "6-8 hours",
    elevation: "2,400m",
  },
  {
    id: 4,
    label: "TOPIC 04",
    name: "River Fog Basin",
    color: "#7A9E8C",
    description:
      "Navigate through a low-lying basin where morning fog clings to a winding river. The humid air supports a rich diversity of ferns and mosses.",
    location: "Southern Basin",
    duration: "4-5 hours",
    elevation: "800m",
  },
  {
    id: 5,
    label: "TOPIC 05",
    name: "Canopy Walkway",
    color: "#5C8A6E",
    description:
      "Ascend into the treetops on elevated walkways that thread between ancient hardwoods. Observe bird species and epiphytic plants from a unique perspective.",
    location: "Central Forest",
    duration: "2-3 hours",
    elevation: "600m",
  },
  {
    id: 6,
    label: "TOPIC 06",
    name: "Sunrise Summit",
    color: "#3D5A47",
    description:
      "An early morning ascent to catch the golden sunrise over misty valleys. This challenging route passes through multiple vegetation zones.",
    location: "Peak Region",
    duration: "7-9 hours",
    elevation: "3,100m",
  },
];

// ===== STATE =====
let currentIndex = 0;

// ===== DOM ELEMENTS =====
const track = document.getElementById("carousel-track");
const counter = document.getElementById("carousel-counter");
const dotsContainer = document.getElementById("carousel-dots");
const prevBtns = document.querySelectorAll("[data-carousel-prev]");
const nextBtns = document.querySelectorAll("[data-carousel-next]");
const modalBackdrop = document.getElementById("modal-backdrop");

// ===== SVG ICONS (inline) =====
const icons = {
  mountain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
};

// ===== BUILD SLIDES =====
function buildSlides() {
  topics.forEach((topic, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    slide.innerHTML = `
      <div class="slide-card" data-index="${index}">
        <div class="slide-card-tint" style="background-color: ${topic.color}"></div>
        <div class="slide-card-center">
          <div class="slide-card-icon" style="background-color: ${topic.color}">
            ${icons.mountain}
          </div>
          <span class="slide-card-hint">Click for info</span>
        </div>
        <div class="slide-card-bottom">
          <div class="slide-card-label">${topic.label}</div>
          <div class="slide-card-name">${topic.name}</div>
        </div>
      </div>
    `;

    track.appendChild(slide);
  });

  // Attach click events to cards
  document.querySelectorAll(".slide-card").forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"));
      openModal(topics[idx]);
    });
  });
}

// ===== BUILD DOTS =====
function buildDots() {
  topics.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (index === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (index + 1));
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

// ===== SLIDE NAVIGATION =====
function goToSlide(index) {
  currentIndex = index;
  track.style.transform = "translateX(-" + currentIndex * 100 + "%)";
  counter.textContent = (currentIndex + 1) + " / " + topics.length;

  // Update dots
  document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  goToSlide((currentIndex + 1) % topics.length);
}

function prevSlide() {
  goToSlide((currentIndex - 1 + topics.length) % topics.length);
}

// ===== MODAL =====
function openModal(topic) {
  const modal = modalBackdrop.querySelector(".modal");

  modal.innerHTML = `
    <button class="modal-close" aria-label="Close">${icons.close}</button>
    <div class="modal-header">
      <div class="modal-swatch" style="background-color: ${topic.color}"></div>
      <div>
        <div class="modal-title">${topic.name}</div>
        <div class="modal-label">${topic.label}</div>
      </div>
    </div>
    <p class="modal-desc">${topic.description}</p>
    <div class="modal-details">
      <div class="modal-detail">${icons.mapPin}<span>${topic.location}</span></div>
      <div class="modal-detail">${icons.clock}<span>${topic.duration}</span></div>
      <div class="modal-detail">${icons.mountain}<span>${topic.elevation}</span></div>
    </div>
  `;

  modalBackdrop.classList.add("open");

  // Close button
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
}

function closeModal() {
  modalBackdrop.classList.remove("open");
}

// Close on backdrop click
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ===== EVENT LISTENERS =====
prevBtns.forEach((btn) => btn.addEventListener("click", prevSlide));
nextBtns.forEach((btn) => btn.addEventListener("click", nextSlide));

// ===== INIT =====
buildSlides();
buildDots();
goToSlide(0);
