// ===== SCROLL TO TOP FROM QUIZ =====
if (sessionStorage.getItem('scrollToTop') === 'true') {
  window.scrollTo(0, 0);
  sessionStorage.removeItem('scrollToTop');
}

// ===== TOPIC DATA (for direct topic access via ?topic=X) =====
var topicsData = [
  {
    id: 1,
    label: "TOPIC 01",
    name: "Forest 101: Hey, Is this Biringan?",
    color: "#8EB09A",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topic%201-LDSJVje5v40iXByvlTx9b2nPwfAcpG.jpeg",
    description: "Start with the essentials of forest ecosystems, exploring how their structure and functions sustain life. It's a primer on the natural systems that set the stage for deeper learning.",
    gallery: [
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7094.PNG-5RorpTIlUzCBUkjabzDVzAphiwohQY.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7099.PNG-4K3gR1CaM812NAohgaKXacPLQGLBiW.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7102.PNG-puSbPzU26uFGNglDcZKwZuy2Rc3AaC.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7095.PNG-6VyYkE3RdTxKgewbdyvhldRGG2AAu4.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7101.PNG-EcUtacxBHxuxo0vxr9jHFwPXFpPf3x.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7097.PNG-yxFj7EkVdSUK1xRMefs4lhrvER45D9.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7100.PNG-l0KY0v8wAQAxtcZqfxrRD4ufxCNY8O.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7098.PNG-GDdAocuhNCBK8kVdhlRJ5PWkw5SEDR.jpeg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7103.PNG-vqTirAT96RSWdJWIrDbZsguxYfq9zm.jpeg" }
    ],
    sections: [
      {
        title: "What is a Forest Ecosystem?",
        text: "Forests in the Philippines are diverse and vital. From dipterocarp forests to mangroves and montane forests, these ecosystems sustain life and regulate climate. They're the lungs of the Earth. The Sierra Madre protects Luzon from typhoons and provides water to millions.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/forest-4xiQnvIiVSEZ9pIgIiE6zMJ7HahGHH.jpg"
      },
      {
        title: "Emergent Layer",
        text: "Towering trees like luan and apitong rise above all others, capturing sunlight. Birds of prey such as the Philippine eagle soar here, hunting from above the forest canopy.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emergent-5ldpBk0k58RsXruEhvmZ5osnCe11ez.jpg"
      },
      {
        title: "Canopy",
        text: "A dense roof of leaves that shelters hornbills, fruit bats, and monkeys. It creates a humid microclimate essential for orchids and epiphytes.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canopy-o7bei8Y4auvhJPnFiXiaAvs5rLVz3M.jpg"
      },
      {
        title: "Understory",
        text: "Shaded shrubs and small trees, home to reptiles, amphibians, and medicinal plants used in traditional healing.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/understory-bk7hnWrXKy9u9GBaSEum13KwPuncFm.jpg"
      },
      {
        title: "Forest Floor",
        text: "Dark, damp, and nutrient-rich. Decomposers recycle organic matter, while wild boars and deer forage among fallen leaves.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/forestfloor-F0uac2XYoSu3DvxsWptT6Mcam7nhNl.jpg"
      }
    ],
    location: "Mt. Pamitinan",
    detail1: "50+ species documented",
    detail2: "Endemic flora sanctuary",
  },
  {
    id: 2,
    label: "TOPIC 02",
    name: "Mt. Pamitinan: Where Myth Meets Revolution",
    color: "#A8B7B5",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topic%202-RzW37tOpY0pxkfvm40mAKuRz3iR6iM.jpeg",
    description: "Uncover the geological features of Mt. Pamitinan while tracing its historical and cultural significance. Myths and revolutionary stories intertwine here, giving the mountain its enduring identity.",
    intro: {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mt%20pamitinan-Kzp1ZynQIV26XqwCTJpnpN10KELBS1.jpg",
      caption: "",
      text: "Luzon is home to some of the Philippines' most important protected areas—mountain ranges, forests, and watersheds that safeguard biodiversity, regulate climate, and preserve cultural heritage. From the vast Sierra Madre that shields eastern Luzon from typhoons, to the historic mountains of Rizal and Bulacan, these landscapes are more than natural wonders: they are living classrooms and cultural treasures.<br><br>Among these sites, Mt. Pamitinan in Montalban (Rodriguez, Rizal) stands out. It is a limestone mountain within the Sierra Madre range, known not only for its rugged cliffs and caves but also for its deep historical and cultural significance. Pamitinan is a place where geology, history, and myth converge—making it an ideal focus for exploring how nature and nationhood intertwine."
    },
    video: {
      title: "Mt. Pamitinan (Montalban, Rizal)",
      url: "https://drive.google.com/file/d/1moI8bZClPbYLFjGc0iJ3mivAZ5Em6VvZ/view?usp=sharing"
    },
    gallery: [
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6164-PvzwNcJeyVnF3GAV3RxJInRj9WcQtf.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6152-hByfbL91Etuen2qHCHdGVjUbL3Qnna.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6150-xqg0Spc7jcxRqKZDMtQo9f9YqV1lrx.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6153-45Wll5rOriVHJFxCPA2YwNANJGWB8m.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6137-xLXEH91gFALvIZrqAE23zw1xLYfuoB.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6135-tdlJB1cmQxFeGRN19bozuKcynoX6LT.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6162-5asyT6NoJE8BPmv47k3YyZ2eSkWT4O.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6167-PFK2N4h8T60x5QhbRTsLjnzXp8HWS7.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6165-C390rblh30cI1cgKmv39rFvOyKHf2y.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6163%20%281%29-mtTAPdvPAuwNAE7uDkXk4wAgFn15uh.jpg" }
    ],
    sections: [],
    location: "Montalban (Rodriguez), Rizal",
    detail1: "426+ meters MASL",
    detail2: "DENR Protected Landscape",
  },
  {
    id: 3,
    label: "TOPIC 03",
    name: "Alpine Mountain Flora: Life at the Peak",
    color: "#7CB9A8",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topic%203-alpine-flora.jpeg",
    description: "Explore the unique plant species that thrive in high-altitude environments of the Philippine mountains. Discover the remarkable adaptations that allow plants to survive in alpine conditions.",
    gallery: [
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-1.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-2.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-3.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-4.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-5.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-6.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-7.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-8.jpg" },
      { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpine-9.jpg" }
    ],
    sections: [],
    location: "Philippine Mountains",
    detail1: "300+ species documented",
    detail2: "High-altitude ecosystem",
    featuredPlants: [
      { name: "Moss Pine", scientificName: "Pinus kesiya", family: "Pinaceae", stations: "2100-2800m", description: "Coniferous tree adapted to high-altitude conditions with needle-like leaves." },
      { name: "Philippine Bush Cherry", scientificName: "Prunus serrulata", family: "Rosaceae", stations: "1800-2400m", description: "Small tree with white flowers, important for mountain biodiversity." },
      { name: "Mountain Laurel", scientificName: "Rhododendron lyi", family: "Ericaceae", stations: "2000-2700m", description: "Shrub with vibrant flowers found in alpine meadows." },
      { name: "Dudleya", scientificName: "Dudleya ceespitosa", family: "Crassulaceae", stations: "2200-2900m", description: "Succulent plant adapted to dry alpine conditions." },
      { name: "Alpine Bistorta", scientificName: "Bistorta japonica", family: "Polygonaceae", stations: "1900-2600m", description: "Herbaceous plant with pink flowers in mountain grasslands." },
      { name: "Mountain Bamboo", scientificName: "Bambusa oldhamii", family: "Poaceae", stations: "1500-2400m", description: "Bamboo species thriving in cooler mountain elevations." },
      { name: "Philippine Oak", scientificName: "Quercus philippinensis", family: "Fagaceae", stations: "1800-2500m", description: "Deciduous tree important to highland forest ecosystems." },
      { name: "Cloud Forest Fern", scientificName: "Polystichum retrosopaleaceum", family: "Dryopteridaceae", stations: "1600-2300m", description: "Fern species abundant in misty mountain regions." },
      { name: "Moss Heath", scientificName: "Styphelia tameiameiae", family: "Ericaceae", stations: "2100-2800m", description: "Low-growing shrub forming dense mats on alpine slopes." },
      { name: "Edelweiss", scientificName: "Leontopodium", family: "Asteraceae", stations: "2300-3000m", description: "Iconic alpine flower known for its silvery appearance." },
      { name: "Alpine Thistle", scientificName: "Cirsium", family: "Asteraceae", stations: "2000-2700m", description: "Purple flowers dotting the alpine landscape." },
      { name: "Mountain Lupine", scientificName: "Lupinus covillei", family: "Fabaceae", stations: "1900-2600m", description: "Nitrogen-fixing plant important for soil health in highlands." }
    ]
  }
];

// ===== GET TOPIC DATA FROM URL =====
function getTopicData() {
  var params = new URLSearchParams(window.location.search);

  // First check for direct topic ID parameter (e.g., ?topic=1)
  var topicId = params.get("topic");
  if (topicId) {
    var id = parseInt(topicId, 10);
    for (var i = 0; i < topicsData.length; i++) {
      if (topicsData[i].id === id) {
        return topicsData[i];
      }
    }
    console.error("Topic not found for id:", id);
    return null;
  }

  // Fallback to data parameter (JSON encoded)
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
      question: "Mt. Pamitinan is part of which major mountain range in Luzon?",
      options: ["Cordillera Central", "Sierra Madre", "Zambales Range", "Caraballo Mountains"],
      correct: 1, // B - Sierra Madre
    },
    {
      question: "What is the official designation of Mt. Pamitinan under the DENR?",
      options: ["National Park", "Protected Landscape", "Wildlife Sanctuary", "Forest Reserve"],
      correct: 1, // B - Protected Landscape
    },
    {
      question: "Which historical figure inscribed 'Viva la Independencia Filipina' inside Pamitinan Cave in 1895?",
      options: ["Emilio Aguinaldo", "Andres Bonifacio", "Apolinario Mabini", "Jose Rizal"],
      correct: 1, // B - Andres Bonifacio
    },
    {
      question: "The inscription inside Pamitinan Cave is considered the first recorded declaration of independence. How many years before the Cry of Balintawak did it occur?",
      options: ["More than one year", "Less than six months", "Exactly one year", "Two years"],
      correct: 0, // A - More than one year
    },
    {
      question: "Which geological feature is most associated with Mt. Pamitinan?",
      options: ["Volcanic cones", "Limestone cliffs and karst caves", "Granite outcrops", "Sandstone plateaus"],
      correct: 1, // B - Limestone cliffs and karst caves
    },
    {
      question: "In local folklore, Bernardo Carpio is said to be trapped between which two mountains?",
      options: ["Mt. Pamitinan and Mt. Binacayan", "Mt. Arayat and Mt. Makiling", "Mt. Banahaw and Mt. Cristobal", "Mt. Pulag and Mt. Tabayoc"],
      correct: 0, // A - Mt. Pamitinan and Mt. Binacayan
    },
    {
      question: "According to myth, Bernardo Carpio's struggle explains which natural phenomenon?",
      options: ["Typhoons", "Earthquakes", "Volcanic eruptions", "Landslides"],
      correct: 1, // B - Earthquakes
    },
    {
      question: "Why is the Sierra Madre range considered vital to Luzon's ecology?",
      options: ["It is the largest source of geothermal energy", "It shields eastern Luzon from typhoons and regulates water systems", "It is the only volcanic chain in Luzon", "It is the site of the country's largest mining operations"],
      correct: 1, // B - It shields eastern Luzon from typhoons and regulates water systems
    },
    {
      question: "Mt. Pamitinan is described as a 'living classroom.' What does this phrase emphasize?",
      options: ["Its role as a training ground for mountaineers", "Its integration of geology, history, and folklore for education", "Its use as a site for agricultural experiments", "Its function as a military training site during the revolution"],
      correct: 1, // B - Its integration of geology, history, and folklore for education
    },
    {
      question: "Why do communities create sabi-sabi (folk stories) about places like Mt. Pamitinan?",
      options: ["To replace scientific explanations with superstition", "To provide entertainment during festivals", "To interpret natural events and embed cultural meaning in landscapes", "To discourage people from visiting dangerous sites"],
      correct: 2, // C - To interpret natural events and embed cultural meaning in landscapes
    },
  ],
  3: [
    {
      question: "At what altitude range do most alpine plants in the Philippines thrive?",
      options: ["Below 1000m", "1000-1500m", "1500m and above", "Only at sea level"],
      correct: 2,
    },
    {
      question: "Which of the following is a key adaptation of alpine plants to harsh mountain conditions?",
      options: ["Growing tall and woody", "Deep root systems", "Low-growing, dense growth patterns", "Large leaves"],
      correct: 2,
    },
    {
      question: "What does Moss Pine require to thrive in its natural habitat?",
      options: ["Tropical lowland climate", "High-altitude conditions above 2100m", "Permanent water coverage", "Volcanic soil"],
      correct: 1,
    },
    {
      question: "Which plant family includes mountain laurels and moss heath found in Philippine alpine zones?",
      options: ["Rosaceae", "Ericaceae", "Asteraceae", "Fabaceae"],
      correct: 1,
    },
    {
      question: "What is the primary ecological importance of nitrogen-fixing alpine plants like Mountain Lupine?",
      options: ["They provide oxygen", "They enrich soil and support plant growth", "They attract insects", "They produce medicinal compounds"],
      correct: 1,
    },
    {
      question: "Which feature makes cloud forest ferns abundant in misty mountain regions?",
      options: ["Their ability to absorb moisture from fog and air", "Their deep root systems", "Their large flower production", "Their resistance to direct sunlight"],
      correct: 0,
    },
    {
      question: "How do alpine plants survive extreme temperature fluctuations on mountain peaks?",
      options: ["They migrate seasonally", "They develop thick protective leaves and specialized tissues", "They only grow underground", "They enter permanent dormancy"],
      correct: 1,
    },
    {
      question: "Which of the following is NOT typical of alpine plant communities?",
      options: ["Low plant stature", "Dense clustering", "Rapid growth rates", "Adaptation to thin soil"],
      correct: 2,
    },
    {
      question: "What ecological role do alpine flowers like Edelweiss play in their ecosystem?",
      options: ["They are purely decorative", "They provide nectar for pollinators and stabilize soil", "They are toxic to animals", "They have no ecological function"],
      correct: 1,
    },
    {
      question: "Why are Philippine alpine ecosystems considered important for biodiversity conservation?",
      options: ["They occupy large land areas", "They contain unique endemic species adapted to specific conditions", "They are easily accessible to humans", "They have unlimited natural resources"],
      correct: 1,
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
  5: [
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
    // Hide the intro section for Topic 1 (the description is shown elsewhere)
    var introSection = document.getElementById("intro-section");
    if (introSection) {
      introSection.style.display = "none";
    }
  }
  if (topicData.id === 2) {
    document.body.classList.add("topic-2");
  }
  if (topicData.id === 4) {
    document.body.classList.add("topic-4");
  }
  if (topicData.id === 3) {
    document.body.classList.add("topic-3");
  }
  if (topicData.id === 5) {
    document.body.classList.add("topic-5");
  }

  // Populate introduction section
  var introElement = document.getElementById("detail-intro");
  if (introElement) {
    if (topicData.intro) {
      if (topicData.id === 1 || topicData.id === 2 || topicData.id === 5) {
        // Topic 1, 2 & 5: Two-column layout with small image left, text right
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

  // Render video player if available (skip for Topic 2 as it has its own video in the pamitinan-section-standalone)
  if (topicData.video && topicData.id !== 2) {
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

    // Add video caption for Topic 2 and Topic 3
    if (topicData.id === 2) {
      var videoCaption = document.createElement("p");
      videoCaption.className = "video-caption";
      videoCaption.textContent = "This 360° video was captured by one of the researchers above the 426+ MASL marker.";
      videoContainer.appendChild(videoCaption);
    }
    if (topicData.id === 3 || topicData.id === 5) {
      var videoCaption = document.createElement("p");
      videoCaption.className = "video-caption";
      videoCaption.textContent = "Explore the plant life and green ecosystems of the Pamitinan Protected Landscape.";
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

        // Add Reflection Box after the first section (What is a Forest Ecosystem?)
        if (idx === 0) {
          var reflectionBox = document.createElement("div");
          reflectionBox.className = "reflection-box-container";
          reflectionBox.innerHTML =
            '<div class="reflection-box-inner">' +
            '<div class="reflection-box-header">' +
            '<span class="reflection-box-badge">Quicky lang! If forests hold mysteries like Biringan, what responsibilities do we have to protect them?</span>' +
            '<h3 class="reflection-box-title">What did you learn?</h3>' +
            '</div>' +
            '<div class="reflection-box-input-section">' +
            '<textarea class="reflection-box-textarea" id="reflection-textarea-topic1" placeholder="Share your reflection or thoughts about forest ecosystems..." maxlength="250"></textarea>' +
            '<div class="reflection-box-footer">' +
            '<span class="reflection-box-char-count"><span class="char-count-number">0</span>/250</span>' +
            '<div class="reflection-box-buttons">' +
            '<button class="reflection-box-submit-btn" onclick="submitReflectionTopic1()">Submit Thought</button>' +
            '<button class="reflection-box-view-btn" onclick="toggleCommunityThoughts()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> View Community Thoughts</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="reflection-box-wall" id="reflection-wall" style="display: none;">' +
            '<div class="reflection-wall-header"><h4>Community Thoughts</h4><span class="thought-count">0 thoughts shared</span></div>' +
            '<div class="reflection-wall-grid" id="reflection-wall-grid">' +
            '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>' +
            '</div>' +
            '</div>';
          sectionsContainer.appendChild(reflectionBox);
        }
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
    }

    // Create a section div for Mt. Pamitinan info with video
    var pamitinanSection = document.createElement("div");
    pamitinanSection.className = "pamitinan-section-standalone";

    // Get the video URL from topicData
    var videoIframe = '';
    if (topicData.video && topicData.video.url) {
      var videoUrl = topicData.video.url;
      // Convert Google Drive URL to embed format
      var videoId = videoUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (videoId && videoId[1]) {
        videoIframe = '<iframe src="https://drive.google.com/file/d/' + videoId[1] + '/preview" width="100%" height="480" frameborder="0" allow="autoplay"></iframe>';
      }
    }

    pamitinanSection.innerHTML =
      '<h2 class="pamitinan-section-title">Mt. Pamitinan (Montalban, Rizal)</h2>' +
      '<div class="pamitinan-content-wrapper">' +
      (videoIframe ? '<div class="pamitinan-video-container">' + videoIframe + '<p class="pamitinan-video-caption">This 360° video was captured by one of the researchers above the 426+ MASL marker.</p></div>' : '') +
      '<p class="pamitinan-intro">Mt. Pamitinan is a limestone mountain located in Montalban (Rodriguez), Rizal, rising to 426+ meters above sea level. It forms part of the Sierra Madre mountain range and is officially recognized as a DENR‑protected landscape, which means visitors must secure permits before entry. Its rugged cliffs, sharp limestone rocks, and karst cave systems make it both a geological wonder and a challenging climb.</p>' +
      '<p class="pamitinan-subtitle">But Mt. Pamitinan is more than just a natural site. It is a <strong>multi‑layered landmark</strong>:</p>' +
      '<ul class="pamitinan-layers">' +
      '<li><strong>Geological</strong> – jagged limestone cliffs, caves with stalactites and stalagmites, and a terrain that supports unique biodiversity.</li>' +
      '<li><strong>Historical</strong> – in 1895, Andres Bonifacio and the Katipunan declared independence inside Pamitinan Cave, leaving the inscription "Viva la Independencia Filipina" as a lasting symbol of freedom.</li>' +
      '<li><strong>Mythical</strong> – local folklore imagines the mountain as enchanted, inhabited by mystical beings (engkanto), and sometimes linked to hidden realms similar to Biringan.</li>' +
      '</ul>' +
      '<p class="pamitinan-conclusion">Because of this blend of nature, nationhood, and myth, Mt. Pamitinan stands out among Luzon\'s protected areas. It is not only a hiking destination but also a <strong>living classroom</strong> where geology, history, and culture converge. Visiting Pamitinan means walking through layers of stone, memory, and imagination all in one place.</p>' +
      '</div>';

    // Insert it right after the video section
    var videoSection = document.querySelector('.video-section');
    if (videoSection) {
      videoSection.parentNode.insertBefore(pamitinanSection, videoSection.nextSibling);
    } else {
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

    // Add reflection box after Why It Matters section
    var reflectionBox = document.createElement("div");
    reflectionBox.className = "reflection-box-container";
    reflectionBox.innerHTML =
      '<div class="reflection-box-inner">' +
      '<div class="reflection-box-header">' +
      '<span class="reflection-box-badge">Quicky lang! Mt. Pamitinan is a fusion of nature, history, and myth—what does this place teach us about how Filipinos relate to their environment?</span>' +
      '<h3 class="reflection-box-title">What did you learn?</h3>' +
      '</div>' +
      '<div class="reflection-box-input-section">' +
      '<textarea class="reflection-box-textarea" id="reflection-textarea-topic2" placeholder="Share your reflection or thoughts about Mt. Pamitinan..." maxlength="250"></textarea>' +
      '<div class="reflection-box-footer">' +
      '<span class="reflection-box-char-count"><span class="char-count-number">0</span>/250</span>' +
      '<div class="reflection-box-buttons">' +
      '<button class="reflection-box-submit-btn" onclick="submitReflectionTopic2()">Submit Thought</button>' +
      '<button class="reflection-box-view-btn" onclick="toggleCommunityThoughtsTopic2()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> View Community Thoughts</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="reflection-box-wall" id="reflection-wall-topic2" style="display: none;">' +
      '<div class="reflection-wall-header"><h4>Community Thoughts</h4><span class="thought-count">0 thoughts shared</span></div>' +
      '<div class="reflection-wall-grid" id="reflection-wall-grid-topic2">' +
      '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>' +
      '</div>' +
      '</div>';

    // Insert after Why It Matters section
    if (whyItMattersSection.parentNode) {
      whyItMattersSection.parentNode.insertBefore(reflectionBox, whyItMattersSection.nextSibling);
    } else {
      sectionsContainer.appendChild(reflectionBox);
    }

    // Add Quiz Section after reflection wall
    var quizGameBox = document.createElement("div");
    quizGameBox.className = "forest-game-box";
    quizGameBox.id = "start-quiz-trigger-topic2";
    quizGameBox.innerHTML =
      '<a href="games/topic2-quiz.html" class="game-box-link">' +
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
      '<p>Challenge yourself with this interactive quiz about Mt. Pamitinan and the Sierra Madre. Answer all 10 questions and see your score!</p>' +
      '</div>' +
      '<div class="game-box-arrow">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="5" y1="12" x2="19" y2="12"></line>' +
      '<polyline points="12 5 19 12 12 19"></polyline>' +
      '</svg>' +
      '</div>' +
      '</div>' +
      '</a>';

    // Insert after reflection box
    if (reflectionBox.parentNode) {
      reflectionBox.parentNode.insertBefore(quizGameBox, reflectionBox.nextSibling);
    } else {
      sectionsContainer.appendChild(quizGameBox);
    }
  }

  // ===== TOPIC 3: Alpine Mountain Flora =====
  if (topicData.id === 3) {
    // Create Featured Plants section with images
    var featuredPlantsSection = document.createElement("div");
    featuredPlantsSection.className = "alpine-featured-plants-section";
    featuredPlantsSection.innerHTML = '<h2 class="alpine-featured-title">Featured Plants Captured in Mt. Pamitinan</h2>';

    // 14 featured plants with real images
    var alpinePlants = [
      { name: "Papaya", scientific: "Carica papaya", family: "Caricaceae", stations: "Station 1, Station 3", description: "A fast-growing, short-lived tree with a hollow, soft trunk and large palmate leaves divided into 5–9 lobes. Papaya produces clusters of small flowers and bears large, fleshy fruits.", ecosystemImpact: "Provides food for wildlife and birds. Fruits support seed dispersal by animals. Leaves decompose to enrich forest soil nutrients.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/papaya-bwGc6sTL7wwrnU7ROeSGEgABFWBB3Z.png" },
      { name: "Balete", scientific: "Ficus benjamina", family: "Moraceae", stations: "Station 2, Station 4", description: "A large fig tree characterized by its glossy green leaves and extensive aerial roots that descend from branches to the ground, creating a complex network of trunks and supports.", ecosystemImpact: "Keystone species providing habitat for birds, insects, and small mammals. Fruits are critical food source year-round. Aerial roots prevent soil erosion.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/balete-uD8LG0nv5dpZ8x3hN4Q5Dp8tqXxGlp.png" },
      { name: "Bukawé", scientific: "Cyrtochloa toppingii", family: "Poaceae", stations: "Station 1, Station 5", description: "A native bamboo species found in Philippine forests. It grows in clumps with tall, slender culms and narrow leaves. The culms are hollow, segmented, and flexible, making them suitable for weaving and landscaping.", ecosystemImpact: "Prevents soil erosion on slopes. Provides nesting material and shelter for birds. Used for sustainable construction and handicrafts.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bukawe-r5327J0K9d35FQbW7VauZ5nFtTBJy1.png" },
      { name: "Gabi", scientific: "Colocasia esculenta", family: "Araceae", stations: "Station 3, Station 6", description: "A tropical plant with large, heart-shaped leaves borne on long petioles. The leaves are broad, with a prominent central vein and radiating lateral veins. It thrives in moist soils and shaded areas.", ecosystemImpact: "Edible corms are important food source. Leaves provide ground cover reducing soil erosion. Supports wetland biodiversity in moist habitats.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabi-OO1j7A3MChDN7URLcMINiXOtzhklnl.png" },
      { name: "(No widely recognized local name recorded)", scientific: "Sterculia rubiginosa", family: "Malvaceae", stations: "Station 2, Station 7", description: "A small tree that grows in specialized forest habitats throughout Southeast Asia including the Philippines. The leaves are obovate and leathery, while the flowers are yellowish-green with purple spots. Status: NE - Not Evaluated.", ecosystemImpact: "Contributes to forest canopy diversity. Flowers attract pollinators. Seeds dispersed by wildlife support forest regeneration.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no%20widely%20recognized%20local%20name%20recordedd-Z90TsNRwRvKDeNtn88E0m2B9EIK59Y.png" },
      { name: "Bigonia (Begonia)", scientific: "Begonia spp.", family: "Begoniaceae", stations: "Station 4, Station 8", description: "A small flowering plant commonly found growing on limestone rocks and crevices. It features rounded, fleshy leaves and delicate pink or white flowers. Thrives in humid, shaded environments.", ecosystemImpact: "Pioneer species colonizing rocky habitats. Flowers support pollinators. Helps stabilize limestone crevices and microhabitats.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bigonia-ndiihaZJKaMJnLMsWpFASj27KNqXvd.png" },
      { name: "Bracket Fungus / Lingzhi (Reishi)", scientific: "Ganoderma spp.", family: "Polyporaceae", stations: "Station 1, Station 6", description: "A large, woody, shelf-like mushroom with a broad brown cap and pale margin. It grows horizontally from tree bases and stumps in forested areas. The underside contains pores instead of gills.", ecosystemImpact: "Critical decomposer recycling dead wood nutrients. Creates microhabitats for insects. Used in traditional medicine for immune support.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bracket%20fungus-qRcAatKeaibEwQkP0ODhoBfiG0qVVR.png" },
      { name: "Saging (Banana)", scientific: "Musa spp.", family: "Musaceae", stations: "Station 3, Station 5", description: "A fast growing herbaceous plant with large, elongated green leaves that grow in spirals from a central pseudostem. The plant produces hanging clusters of fruits after flowering.", ecosystemImpact: "Major food source for humans and wildlife. Large leaves provide shelter for small animals. Supports fruit bats and bird populations.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saging-uAqXoLLUqMy5zs9iefOEIQwDMblYAN.png" },
      { name: "Coral Ardisia", scientific: "Ardisia crenata", family: "Primulaceae", stations: "Station 2, Station 9", description: "A small evergreen shrub with glossy, dark green leaves and upright stalks bearing compact clusters of bright red berries. It thrives in shaded forest understories and rocky, humid environments.", ecosystemImpact: "Berries provide food for birds during winter. Understory plant supporting forest layering. Can be invasive outside native range.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coral%20ardisia-R4qg5oXTUh4rzqtRhBTGFg0ONq4L75.png" },
      { name: "Pheasant's Tail Fern / Pakpak Lawin", scientific: "Microsorum punctatum", family: "Polypodiaceae", stations: "Station 1, Station 4", description: "A distinctive fern species with long, arching fronds that resemble a pheasant's tail. Abundant in misty mountain regions, it thrives in humid conditions and grows on forest floors and tree trunks.", ecosystemImpact: "Indicator of healthy humid ecosystems. Provides ground cover and habitat for invertebrates. Contributes to moisture retention in forests.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pheasant%27s%20Tail%20Fern-jTjN96Vj6LfHqc6f5WxxSAwB85dzuK.png" },
      { name: "Sambong", scientific: "Blumea balsamifera", family: "Asteraceae", stations: "Station 5, Station 8", description: "A perennial shrub with aromatic, hairy leaves and small white to yellowish flower clusters. It grows in open fields, forest edges, and disturbed areas throughout the Philippines.", ecosystemImpact: "Medicinal plant used for kidney and urinary treatments. Flowers attract pollinators. Pioneer species aiding forest edge recovery.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sambong-34npAVVnzAIPqsWtM6yq7RZioKBVFI.png" },
      { name: "Siam Weed", scientific: "Chromolaena odorata", family: "Asteraceae", stations: "Station 6, Station 9", description: "A fast growing invasive shrub with triangular leaves and clusters of small white to pale purple flowers. It thrives in disturbed soils and spreads rapidly along trails and forest edges.", ecosystemImpact: "Invasive species outcompeting native plants. Used traditionally for wound healing. Rapid growth can stabilize disturbed soils but threatens biodiversity.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/siam%20weed-NVc8WJkkZ4iAaHA5vB99ZRxHT0tdKT.png" },
      { name: "Pink Trumpet Tree / Rosy Trumpet Tree", scientific: "Tabebuia rosea", family: "Bignoniaceae", stations: "Station 3, Station 7", description: "A deciduous tree known for its showy pink to white trumpet-shaped flowers. It blooms spectacularly during the dry season and is often planted for ornamental purposes along roadsides and in parks.", ecosystemImpact: "Nectar-rich flowers support bees and butterflies. Provides urban shade and cooling. Wood used for furniture and construction.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink%20trumpet%20tree-PH0OmhE1ECxD1S7Rb1I6aGDfWzVkmT.png" },
      { name: "Gabuyo Malaikmo", scientific: "Ficus nota", family: "Moraceae", stations: "Station 2, Station 5", description: "A tree species found throughout the Philippines. Seeds yield an edible oil. Roots are used for treatment of diarrhea, and leaf sap is used for parasitic infections. Wood is used for construction, furniture, and various tools. Status: Least Concern based on IUCN Red List.", ecosystemImpact: "Multi-purpose tree providing food, medicine, and timber. Fruits support wildlife. Contributes to forest canopy structure and biodiversity.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabuyo%20malaikmo-MOs72X463Ibg2xTdDn0Zvapnl8dLL0.jpg" }
    ];

    // Build featured plants grid with real images (5 boxes per section)
    var plantsGridHTML = '';
    var sectionSizes = [5, 5, 4];  // 5 per section for all sections
    var currentIndex = 0;
    
    for (var section = 0; section < sectionSizes.length; section++) {
      plantsGridHTML += '<div class="alpine-plants-grid">';
      var itemsInThisSection = sectionSizes[section];
      
      for (var i = 0; i < itemsInThisSection; i++) {
        if (currentIndex >= alpinePlants.length) break;
        
        var plant = alpinePlants[currentIndex];
        var imageHTML = plant.image ? 
          '<img src="' + plant.image + '" alt="' + plant.name + '" class="alpine-plant-actual-image" />' :
          '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#e8f0ed"/><text x="50%" y="50%" font-size="14" text-anchor="middle" dominant-baseline="middle" fill="#7CB9A8">No image</text></svg>';
        
        plantsGridHTML +=
          '<div class="alpine-plant-card">' +
          '<div class="alpine-plant-image-placeholder">' +
          imageHTML +
          '</div>' +
          '<div class="alpine-plant-info">' +
          '<h4 class="alpine-plant-name">Common Name: <strong>' + plant.name + '</strong></h4>' +
          '<p class="alpine-plant-scientific">Scientific Name: <em>' + plant.scientific + '</em></p>' +
          '<p class="alpine-plant-family">Family Name: <strong>' + plant.family + '</strong></p>' +
          '<p class="alpine-plant-stations">Stations: ' + plant.stations + '</p>' +
          '<p class="alpine-plant-description">Description: ' + plant.description + '</p>' +
          '<p class="alpine-plant-ecosystem"><strong>Use and Impact to Ecosystem:</strong> ' + (plant.ecosystemImpact || 'Information not available.') + '</p>' +
          '</div>' +
          '</div>';
        
        currentIndex++;
      }
      
      plantsGridHTML += '</div>';
    }

    featuredPlantsSection.innerHTML += plantsGridHTML;

    // Insert after video section
    var videoSection3 = document.querySelector('.video-section');
    if (videoSection3) {
      videoSection3.parentNode.insertBefore(featuredPlantsSection, videoSection3.nextSibling);
    } else {
      sectionsContainer.insertBefore(featuredPlantsSection, sectionsContainer.firstChild);
    }

    // Create Complete Plant Catalog section
    var catalogSection = document.createElement("div");
    catalogSection.className = "alpine-catalog-section";
    catalogSection.innerHTML =
      '<h2 class="alpine-catalog-title">Complete Plant Catalog</h2>' +
      '<div class="alpine-catalog-table-wrapper">' +
      '<table class="alpine-catalog-table">' +
      '<thead>' +
      '<tr>' +
      '<th>Common Name</th>' +
      '<th>Scientific Name</th>' +
      '<th>Family Name</th>' +
      '<th>Count</th>' +
      '<th>Stations</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody id="alpine-catalog-body">' +
      '</tbody>' +
      '</table>' +
      '</div>';

    // Insert after Featured Plants section
    if (featuredPlantsSection.parentNode) {
      featuredPlantsSection.parentNode.insertBefore(catalogSection, featuredPlantsSection.nextSibling);
    } else {
      sectionsContainer.appendChild(catalogSection);
    }

    // Complete Plant Catalog Data (100 plants from PDF)
    var completePlantCatalog = [
      { name: "Alagaw", scientific: "Premna odorata", family: "Lamiaceae", count: 1, stations: "5-6" },
      { name: "Alibangbang", scientific: "Bauhinia malabarica", family: "Fabaceae", count: 19, stations: "0-6" },
      { name: "Amlong", scientific: "Epipremnum pinnatum", family: "Araceae", count: 6, stations: "1-2" },
      { name: "Anabiong", scientific: "Treama orientalis", family: "Cannabaceae", count: 1, stations: "5-6" },
      { name: "Anahaw", scientific: "Saribus rotundifolius", family: "Arecaceae", count: 26, stations: "2-3, 5-6, 6-7" },
      { name: "Anonas", scientific: "Annona reticulata", family: "Annonaceae", count: 1, stations: "2-3" },
      { name: "Antipolo", scientific: "Artocarpus blancoi", family: "Moraceae", count: 6, stations: "0-1, 2-3, 4-5, 7-8" },
      { name: "Atis", scientific: "Annona squamosa", family: "Annonaceae", count: 2, stations: "0-1" },
      { name: "Avocado", scientific: "Persea americana", family: "Lauraceae", count: 13, stations: "0-5" },
      { name: "Balete", scientific: "Ficus benjamina", family: "Moraceae", count: 18, stations: "2-4" },
      { name: "Bamban", scientific: "Donax canniformis", family: "Marantaceae", count: 1, stations: "7-8" },
      { name: "Banaba", scientific: "Lagerstroemia speciosa", family: "Lythraceae", count: 4, stations: "5-6" },
      { name: "Banana", scientific: "Musa Sp.", family: "Musaceae", count: 74, stations: "1-2, 4-5, 5-6, 6-7" },
      { name: "Baston de Sajose", scientific: "Cordyline fruticosa", family: "Asparagaceae", count: 44, stations: "0-1, 5-6, 6-7" },
      { name: "Bayabas", scientific: "Psidium guajava", family: "Myrtaceae", count: 7, stations: "5-6" },
      { name: "Bayag Usa", scientific: "Voacanga globosa", family: "Apocynaceae", count: 2, stations: "2-3" },
      { name: "Bayog", scientific: "Bambusa merrilliana", family: "Poaceae", count: 29, stations: "1-3, 4-7" },
      { name: "Big Leaf Mahogany", scientific: "Swietenia macrophylla", family: "Meliaceae", count: 101, stations: "1-8" },
      { name: "Bigonia", scientific: "Bigonia Sp.", family: "Begoniaceae", count: 3, stations: "3-4" },
      { name: "Binunga", scientific: "Macaranga tanarius", family: "Euphorbiaceae", count: 6, stations: "0-1, 2-3, 5-6" },
      { name: "Bitonghol", scientific: "Flacourtia rukam", family: "Salicaceae", count: 1, stations: "7-8" },
      { name: "Bogus", scientific: "Acalypha amentacea", family: "Euphorbiaceae", count: 75, stations: "0-5" },
      { name: "Botong", scientific: "Gigantochloa levis", family: "Poaceae", count: 21, stations: "5-6, 7-8" },
      { name: "Bowstring", scientific: "Dracaena trifasciata", family: "Asparagaceae", count: 40, stations: "5-6" },
      { name: "Buho", scientific: "Schizostachyum lumampao", family: "Poaceae", count: 43, stations: "0-2, 7-8" },
      { name: "Bukawe", scientific: "Cyrtochloa toppingii", family: "Poaceae", count: 8, stations: "2-3" },
      { name: "Bunga", scientific: "Areca catechu", family: "Arecaceae", count: 5, stations: "0-1" },
      { name: "Butong", scientific: "Gigantochloa levis", family: "Poaceae", count: 18, stations: "1-2, 5-6" },
      { name: "Cabalero", scientific: "Caesalpinia pulcherrima", family: "Fabaceae", count: 1, stations: "2-3" },
      { name: "Cacao", scientific: "Theobroma cacao", family: "Malvaceae", count: 9, stations: "0-1, 4-7" },
      { name: "Cainito", scientific: "Chrysophyllum cainito", family: "Sapotaceae", count: 45, stations: "0-8" },
      { name: "Chesa", scientific: "Pouteria campechiana", family: "Sapotaceae", count: 1, stations: "0-1" },
      { name: "Chiko", scientific: "Manilkara zapota", family: "Sapotaceae", count: 1, stations: "1-2" },
      { name: "Chinese Burr", scientific: "Triumfetta rhomboidea", family: "Malvaceae", count: 19, stations: "0-1" },
      { name: "Coconut", scientific: "Cocos nucifera", family: "Arecaceae", count: 5, stations: "5-8" },
      { name: "Coffee", scientific: "Coffea arabica", family: "Rubiaceae", count: 5, stations: "7-8" },
      { name: "Colombian Flag", scientific: "Sanchezia speciosa", family: "Acanthaceae", count: 18, stations: "0-1, 4-5" },
      { name: "Corn", scientific: "Zea Mays", family: "Poaceae", count: 50, stations: "6-7" },
      { name: "Croton", scientific: "Codiaeum variegatum", family: "Euphorbiaceae", count: 51, stations: "0-1, 3-4, 6-8" },
      { name: "Cupang", scientific: "Parkia timoriana", family: "Fabaceae", count: 1, stations: "7-8" },
      { name: "Datiles", scientific: "Muntingia calabura", family: "Muntingiaceae", count: 2, stations: "4-5" },
      { name: "Durian", scientific: "Durio zibethinus", family: "Malvaceae", count: 1, stations: "4-5" },
      { name: "Fortune Plant", scientific: "Dracaena fragrans", family: "Asparagaceae", count: 81, stations: "0-1, 2-8" },
      { name: "Gabi", scientific: "Colocasia esculenta", family: "Araceae", count: 28, stations: "0-2, 3-4, 6-7" },
      { name: "Guyabano", scientific: "Annona muricata", family: "Annonaceae", count: 13, stations: "0-6" },
      { name: "Hagimit", scientific: "Ficus minahassae", family: "Moraceae", count: 3, stations: "2-3, 5-6, 7-8" },
      { name: "Hauli", scientific: "Ficus Septica", family: "Moraceae", count: 41, stations: "0-5" },
      { name: "Himbabao", scientific: "Allaeanthus luzonicus", family: "Moraceae", count: 1, stations: "2-3" },
      { name: "Ikmo", scientific: "Piper betle", family: "Piperaceae", count: 15, stations: "1-2" },
      { name: "Indian Lanutan", scientific: "Monoon longifolium", family: "Annonaceae", count: 1, stations: "3-4" },
      { name: "Insulin Plant", scientific: "Chamaecostus cuspidatus", family: "Costaceae", count: 23, stations: "0-3, 6-7" },
      { name: "Ipil-ipil", scientific: "Leucaena leucocephala", family: "Fabaceae", count: 24, stations: "1-8" },
      { name: "Is-is", scientific: "Ficus variegata", family: "Moraceae", count: 1, stations: "5-6" },
      { name: "Jade Vine", scientific: "Strongylodon macrobotrys", family: "Fabaceae", count: 1, stations: "2-3" },
      { name: "Kabkab", scientific: "Drynaria quercifolia", family: "Polypodiaceae", count: 2, stations: "0-2" },
      { name: "Kai-kai", scientific: "Adiantum philippense", family: "Pteridaceae", count: 12, stations: "2-3, 4-5" },
      { name: "Kakaaute", scientific: "Gliricidia sepium", family: "Faboideae", count: 3, stations: "2-3" },
      { name: "Kamagong", scientific: "Diospyros blancoi", family: "Ebenaceae", count: 10, stations: "0-1, 3-4, 5-6, 7-8" },
      { name: "Kamay Kastila", scientific: "Syngonium podophyllum", family: "Araceae", count: 104, stations: "2-3, 4-6, 7-8" },
      { name: "Kamyas", scientific: "Averrhoa bilimbi", family: "Oxalidaceae", count: 1, stations: "7-8" },
      { name: "Kawayang Kiling", scientific: "Bambusa vulgaris", family: "Poaceae", count: 6, stations: "5-6" },
      { name: "Lipang Kalabau", scientific: "Dendrocnide meyeniana", family: "Urticaceae", count: 1, stations: "3-4" },
      { name: "Makaasim", scientific: "Syzygium nitidum", family: "Myrtaceae", count: 1, stations: "3-4" },
      { name: "Malabulak", scientific: "Bombax ceiba", family: "Malvaceae", count: 4, stations: "0-1, 2-3" },
      { name: "Manggo", scientific: "Mangifera indica", family: "Anacardiaceae", count: 19, stations: "0-1, 3-4, 5-6, 6-7" },
      { name: "Manila Palm", scientific: "Adonidia merrillii", family: "Arecaceae", count: 1, stations: "4-5" },
      { name: "Mayana", scientific: "Coleus scutellarioides", family: "Lamiaceae", count: 3, stations: "0-1" },
      { name: "Molave", scientific: "Vitex parviflora", family: "Verbenaceae", count: 1, stations: "3-4" },
      { name: "Mulberry", scientific: "Morus alba", family: "Moraceae", count: 3, stations: "5-6" },
      { name: "Nangka", scientific: "Artocarpus heterophyllus", family: "Moraceae", count: 10, stations: "0-1, 3-4, 5-7" },
      { name: "Neem Tree", scientific: "Azadirachta indica", family: "Meliaceae", count: 5, stations: "2-3" },
      { name: "Niog-Niogan", scientific: "Ficus pseudopalma", family: "Moraceae", count: 5, stations: "0-1, 4-6" },
      { name: "Pakiling", scientific: "Ficus odorata", family: "Moraceae", count: 10, stations: "4-6" },
      { name: "Palmera", scientific: "Dypsis lutescens", family: "Arecaceae", count: 1, stations: "5-6" },
      { name: "Palosanto", scientific: "Triplaris cumingiana", family: "Burseraceae", count: 7, stations: "0-1, 4-5" },
      { name: "Pandan Banguhan", scientific: "Pandanus amaryllifolius", family: "Pandanaceae", count: 18, stations: "5-6" },
      { name: "Papaya", scientific: "Carica papaya", family: "Caricaceae", count: 3, stations: "1-2, 4-6" },
      { name: "Prickly Narra", scientific: "Pterocarpus indicus forma echinatus", family: "Fabaceae", count: 3, stations: "0-1, 5-6" },
      { name: "Pugahan", scientific: "Caryota mitis", family: "Arecaceae", count: 7, stations: "1-3" },
      { name: "Rain Tree", scientific: "Samanea saman", family: "Fabaceae", count: 5, stations: "2-4, 7-8" },
      { name: "Rambutan", scientific: "Nephelium lappaceum", family: "Sapindaceae", count: 3, stations: "7-8" },
      { name: "Rimas", scientific: "Artocarpus altilis", family: "Moraceae", count: 2, stations: "0-1, 2-3" },
      { name: "Royal Palm", scientific: "Roystonea regia", family: "Arecaceae", count: 1, stations: "4-5" },
      { name: "Santol", scientific: "Sandoricum koetjape", family: "Meliaceae", count: 13, stations: "0-2, 3-5, 7-8" },
      { name: "Small Leaf Mahogany", scientific: "Swietenia mahogani", family: "Meliaceae", count: 38, stations: "0-1, 5-6" },
      { name: "Smooth Narra", scientific: "Pterocarpus indicus forma indicus", family: "Fabaceae", count: 26, stations: "0-1, 5-6, 7-8" },
      { name: "Spider Lily", scientific: "Hymenocallis littoralis", family: "Asparagales", count: 2, stations: "6-7" },
      { name: "Suha", scientific: "Citrus maxima", family: "Rutaceae", count: 15, stations: "3-7" },
      { name: "Talisay", scientific: "Terminalia catappa", family: "Combretaceae", count: 1, stations: "2-3" },
      { name: "Tamarind", scientific: "Tamarindus indica", family: "Fabaceae", count: 6, stations: "0-1, 2-3" },
      { name: "Tangisang Bayawak", scientific: "Ficus variegata", family: "Moraceae", count: 1, stations: "7-8" },
      { name: "Tibig", scientific: "Ficus nota", family: "Moraceae", count: 5, stations: "2-5" },
      { name: "Vidals Lanutan", scientific: "Hibiscus campylosiphon", family: "Malvaceae", count: 1, stations: "4-5" },
      { name: "Wild Dracaena", scientific: "Dracaena multiflora", family: "Asparagaceae", count: 17, stations: "0-1, 2-3, 4-5" },
      { name: "Wild Hops", scientific: "Flemingia strobilifera", family: "Fabaceae", count: 5, stations: "1-3" },
      { name: "Yautia", scientific: "Xanthosoma sagittifolium", family: "Araceae", count: 4, stations: "5-6" }
    ];

    // Populate catalog table with complete PDF data
    var catalogBody = document.getElementById("alpine-catalog-body");
    if (catalogBody) {
      completePlantCatalog.forEach(function (plant) {
        var row = document.createElement("tr");
        row.innerHTML =
          '<td>' + plant.name + '</td>' +
          '<td><em>' + plant.scientific + '</em></td>' +
          '<td>' + plant.family + '</td>' +
          '<td>' + plant.count + '</td>' +
          '<td>' + plant.stations + '</td>';
        catalogBody.appendChild(row);
      });
    }

    // Add reflection box for Topic 3
    var reflectionBox3 = document.createElement("div");
    reflectionBox3.className = "reflection-box-container";
    reflectionBox3.innerHTML =
      '<div class="reflection-box-inner">' +
      '<div class="reflection-box-header">' +
      '<span class="reflection-box-badge">Quicky lang! Alpine plants thrive where few can survive—what can their resilience teach us about adaptation and thriving in challenging conditions?</span>' +
      '<h3 class="reflection-box-title">What inspires you?</h3>' +
      '</div>' +
      '<div class="reflection-box-input-section">' +
      '<textarea class="reflection-box-textarea" id="reflection-textarea-topic3" placeholder="Share your thoughts about alpine plants and adaptation..." maxlength="250"></textarea>' +
      '<div class="reflection-box-footer">' +
      '<span class="reflection-box-char-count"><span class="char-count-number">0</span>/250</span>' +
      '<div class="reflection-box-buttons">' +
      '<button class="reflection-box-submit-btn" onclick="submitReflectionTopic3()">Submit Thought</button>' +
      '<button class="reflection-box-view-btn" onclick="toggleCommunityThoughtsTopic3()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> View Community Thoughts</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="reflection-box-wall" id="reflection-wall-topic3" style="display: none;">' +
      '<div class="reflection-wall-header"><h4>Community Thoughts</h4><span class="thought-count">0 thoughts shared</span></div>' +
      '<div class="reflection-wall-grid" id="reflection-wall-grid-topic3">' +
      '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>' +
      '</div>' +
      '</div>';

    // Insert after Catalog section
    if (catalogSection.parentNode) {
      catalogSection.parentNode.insertBefore(reflectionBox3, catalogSection.nextSibling);
    } else {
      sectionsContainer.appendChild(reflectionBox3);
    }

    // Add Quiz Section for Topic 3
    var quizGameBox3 = document.createElement("div");
    quizGameBox3.className = "forest-game-box";
    quizGameBox3.id = "start-quiz-trigger-topic3";
    quizGameBox3.innerHTML =
      '<a href="games/topic3-quiz.html" class="game-box-link">' +
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
      '<p>Challenge yourself with this interactive quiz about alpine plants and high-altitude ecosystems. Answer all 10 questions and see your score!</p>' +
      '</div>' +
      '<div class="game-box-arrow">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="5" y1="12" x2="19" y2="12"></line>' +
      '<polyline points="12 5 19 12 12 19"></polyline>' +
      '</svg>' +
      '</div>' +
      '</div>' +
      '</a>';

    // Insert after reflection box
    if (reflectionBox3.parentNode) {
      reflectionBox3.parentNode.insertBefore(quizGameBox3, reflectionBox3.nextSibling);
    } else {
      sectionsContainer.appendChild(quizGameBox3);
    }
  }

  // ===== TOPIC 5: Tree Planting - Seeds of Equality =====
  if (topicData.id === 5) {
    // Create a section div for Tree Planting Overview with image
    var greenGoalsSection = document.createElement("div");
    greenGoalsSection.className = "pamitinan-section-standalone";

    greenGoalsSection.innerHTML =
      '<h2 class="pamitinan-section-title">Tree Planting: Seeds of Equality</h2>' +
      '<div class="pamitinan-content-wrapper">' +
      '<div class="geological-features-image-container">' +
      '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree%20planting-nhHSBPADUYxrA7qUZyvutyBNFJk5aD.png" alt="National Women\'s Month Tree Planting Activity" class="geological-clearer-image" />' +
      '<p class="image-credit">We give full credits to DENR Pamitinan Protected Landscape for the pictures taken during these events.</p>' +
      '</div>' +
      '<p class="pamitinan-intro">In celebration of National Women\'s Month, more than 500 seedlings of Narra and fruit-bearing trees (langka, guyabano, duhat) were planted in Mt. Parawagan. Each participant placed a name tag and personal wish on their tree, symbolizing hope, equality, and care for nature. This initiative strengthens biodiversity while empowering communities to take part in reforestation.</p>' +
      '</div>';

    // Insert it right after the video section
    var videoSection5 = document.querySelector('.video-section');
    if (videoSection5) {
      videoSection5.parentNode.insertBefore(greenGoalsSection, videoSection5.nextSibling);
    } else {
      sectionsContainer.insertBefore(greenGoalsSection, sectionsContainer.firstChild);
    }

    // Add Clean-Up Drive section
    var plantDiversitySection = document.createElement("div");
    plantDiversitySection.className = "geological-section-standalone";
    plantDiversitySection.innerHTML =
      '<h2 class="geological-section-title">Clean-Up Drive: Bayanihan for Nature</h2>' +
      '<div class="geological-content-wrapper">' +
      '<div class="geological-features-image-container">' +
      '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleanup-Rl86wjQd4hWfxWa4xO3oSppFQHu4fb.png" alt="Clean-Up Drive volunteers at Pamitinan Protected Landscape" class="geological-clearer-image" />' +
      '<p class="image-credit">We give full credits to DENR Pamitinan Protected Landscape for the pictures taken during these events.</p>' +
      '</div>' +
      '<p class="section-paragraph">On February 9, 2026, over 50 volunteers joined forces to clean the riverbanks and forest trails from Sitio Kayrupa to Wawa Dam. The drive collected 20 sacks of waste, including 5 sacks of recyclables, ensuring proper disposal and a healthier environment. This activity demonstrates how collective responsibility reduces pollution and protects river ecosystems.</p>' +
      '</div>';

    // Insert after Tree Planting section
    if (greenGoalsSection.parentNode) {
      greenGoalsSection.parentNode.insertBefore(plantDiversitySection, greenGoalsSection.nextSibling);
    } else {
      sectionsContainer.appendChild(plantDiversitySection);
    }

    // Add Sustainable Tourism & Education section
    var photosynthesisSection = document.createElement("div");
    photosynthesisSection.className = "historical-section-standalone";
    photosynthesisSection.innerHTML =
      '<h2 class="historical-section-title">Sustainable Tourism & Education</h2>' +
      '<div class="historical-content-wrapper">' +
      '<div class="historical-image-container">' +
      '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sustainable-qhl2V8AUgYIJ0cv8mUVXEJbA6AeqIJ.png" alt="Fees paid in Pamitinan Protected Landscape" class="historical-clearer-image" />' +
      '<p class="image-credit">We give full credits to DENR Pamitinan Protected Landscape for the pictures taken during these events.</p>' +
      '</div>' +
      '<p class="section-paragraph">Visitors contribute through entrance and trekking fees, which fund conservation programs. Guided hikes emphasize responsible tourism, teaching visitors about forest ecology and cultural heritage. Educational activities like video presentations and reflective essays connect classroom learning with real-world conservation practices, ensuring awareness translates into action.</p>' +
      '</div>';

    // Insert after Clean-Up Drive section
    if (plantDiversitySection.parentNode) {
      plantDiversitySection.parentNode.insertBefore(photosynthesisSection, plantDiversitySection.nextSibling);
    } else {
      sectionsContainer.appendChild(photosynthesisSection);
    }

    // Add School-Based Tree Planting section
    var carbonSection = document.createElement("div");
    carbonSection.className = "myth-section-standalone";
    carbonSection.innerHTML =
      '<h2 class="myth-section-title">School-Based Tree Planting and Clean-Up</h2>' +
      '<div class="myth-content-wrapper">' +
      '<div class="myth-image-container">' +
      '<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/schoolbased-solljIRBIALKi7rsKgZkgHNAawmOpD.png" alt="School-Based Tree Planting at Wawa Elementary School" class="myth-clearer-image" />' +
      '<p class="image-credit">We give full credits to DENR Pamitinan Protected Landscape for the pictures taken during these events.</p>' +
      '</div>' +
      '<p class="section-paragraph">Teachers, students, and parents of Wawa Elementary School, together with PAMO–PPL staff, planted 50 native seedlings including Mulawin, Narra, Langka, and Santol. A demonstration on proper seedling handling was conducted, followed by a clean-up drive from Sitio Wawa to Sitio Kayrupa. This activity highlights the role of education and youth involvement in long-term forest conservation.</p>' +
      '</div>';

    // Insert after Photosynthesis section
    if (photosynthesisSection.parentNode) {
      photosynthesisSection.parentNode.insertBefore(carbonSection, photosynthesisSection.nextSibling);
    } else {
      sectionsContainer.appendChild(carbonSection);
    }

    // Add Conclusion section
    var sustainableSection = document.createElement("div");
    sustainableSection.className = "did-you-know-section-standalone conclusion-section";
    sustainableSection.innerHTML =
      '<div class="did-you-know-content-wrapper conclusion-wrapper">' +
      '<p class="conclusion-text">The conservation efforts in the Pamitinan Protected Landscape prove that human actions can be a force for renewal. Through tree planting, clean-up drives, education, and sustainable tourism, communities are not only protecting forests and rivers today — they are reshaping nature to ensure it thrives for the generations that follow.</p>' +
      '</div>';

    // Insert after Carbon section
    if (carbonSection.parentNode) {
      carbonSection.parentNode.insertBefore(sustainableSection, carbonSection.nextSibling);
    } else {
      sectionsContainer.appendChild(sustainableSection);
    }

    // Add reflection box after Conclusion section
    var reflectionBox5 = document.createElement("div");
    reflectionBox5.className = "forest-reflection-box";
    reflectionBox5.innerHTML =
      '<div class="reflection-badge">Share Your Voice</div>' +
      '<h3>Quicky Lang!</h3>' +
      '<p>Reflection: How do your everyday actions — whether in your community, school, or personal life — contribute to shaping and reshaping the environment, and what changes can you make to ensure that future generations inherit a healthier, more sustainable world?</p>' +
      '<div class="reflection-input-wrapper">' +
      '<textarea id="topic5-reflection-input" class="reflection-input" placeholder="Drop your thoughts here... be real, no cap" maxlength="250"></textarea>' +
      '<div class="char-counter"><span id="topic5-char-count">0</span>/250</div>' +
      '</div>' +
      '<div class="reflection-buttons">' +
      '<button class="btn btn-primary btn-submit" id="topic5-reflection-submit">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="22" y1="2" x2="11" y2="13"></line>' +
      '<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>' +
      '</svg>' +
      'Submit Anonymously' +
      '</button>' +
      '<button class="btn btn-secondary" id="topic5-reflection-clear">Clear</button>' +
      '</div>' +
      '<p class="reflection-saved-msg" id="topic5-reflection-saved-msg"></p>';

    // Insert after Conclusion section
    if (sustainableSection.parentNode) {
      sustainableSection.parentNode.insertBefore(reflectionBox5, sustainableSection.nextSibling);
    } else {
      sectionsContainer.appendChild(reflectionBox5);
    }

    // Create reflection wall display
    var reflectionWallDiv5 = document.createElement("div");
    reflectionWallDiv5.className = "reflection-box-wall";
    reflectionWallDiv5.id = "reflection-wall-topic5";
    reflectionWallDiv5.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>';

    if (reflectionBox5.parentNode) {
      reflectionBox5.parentNode.insertBefore(reflectionWallDiv5, reflectionBox5.nextSibling);
    }

    // Add event listeners for Topic 5 reflection box
    var topic5ReflectionInput = document.getElementById("topic5-reflection-input");
    var topic5SubmitBtn = document.getElementById("topic5-reflection-submit");
    var topic5ClearBtn = document.getElementById("topic5-reflection-clear");
    var topic5SavedMsg = document.getElementById("topic5-reflection-saved-msg");
    var topic5CharCount = document.getElementById("topic5-char-count");
    var topic5ReflectionWall = document.getElementById("reflection-wall-topic5");

    // Initialize community thoughts for Topic 5
    var topic5Thoughts = JSON.parse(localStorage.getItem("topic5-thoughts")) || [];

    // Function to display reflections in the wall
    function displayTopic5Reflections() {
      if (!topic5ReflectionWall) return;

      if (topic5Thoughts.length === 0) {
        topic5ReflectionWall.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>';
      } else {
        var thoughtsHTML = '';
        topic5Thoughts.forEach(function (thought) {
          thoughtsHTML +=
            '<div class="reflection-thought-chip">' +
            '<p class="reflection-thought-text">' + thought.content + '</p>' +
            '</div>';
        });
        topic5ReflectionWall.innerHTML = thoughtsHTML;
      }
    }

    // Display initial reflections
    displayTopic5Reflections();

    // Character counter
    if (topic5ReflectionInput && topic5CharCount) {
      topic5ReflectionInput.addEventListener("input", function () {
        topic5CharCount.textContent = topic5ReflectionInput.value.length;
      });
    }

    // Submit button
    if (topic5SubmitBtn) {
      topic5SubmitBtn.addEventListener("click", function () {
        if (topic5ReflectionInput && topic5ReflectionInput.value.trim()) {
          var newThought = {
            id: Date.now(),
            content: topic5ReflectionInput.value.trim(),
            timestamp: Date.now()
          };

          topic5Thoughts.push(newThought);
          localStorage.setItem("topic5-thoughts", JSON.stringify(topic5Thoughts));

          // Update wall display
          displayTopic5Reflections();

          topic5SavedMsg.textContent = "Your thought has been shared anonymously!";
          topic5SavedMsg.className = "reflection-saved-msg success";
          topic5ReflectionInput.value = "";
          topic5CharCount.textContent = "0";
          setTimeout(function () {
            topic5SavedMsg.className = "reflection-saved-msg";
          }, 4000);
        } else {
          topic5SavedMsg.textContent = "Please write something before submitting!";
          topic5SavedMsg.className = "reflection-saved-msg error";
          setTimeout(function () {
            topic5SavedMsg.className = "reflection-saved-msg";
          }, 3000);
        }
      });
    }

    // Clear button
    if (topic5ClearBtn) {
      topic5ClearBtn.addEventListener("click", function () {
        if (topic5ReflectionInput) {
          topic5ReflectionInput.value = "";
          if (topic5CharCount) topic5CharCount.textContent = "0";
          topic5SavedMsg.className = "reflection-saved-msg";
        }
      });
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

  // Create gallery - skip for Topic 3 (Alpine Flora)
  var galleryContainer = document.getElementById("detail-gallery");
  if (topicData.id !== 3) {
    // Show gallery for all topics except Topic 3
    if (galleryContainer) {
      galleryContainer.style.display = "block";
    }
    
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
    if (galleryGrid) {
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
    }
  } else {
    // Hide gallery for Topic 3
    if (galleryContainer) {
      galleryContainer.style.display = "none";
    }
  }

  // Initialize quiz
  initializeQuiz();

  // Render AVIFAUNA section if available
  renderAvifaunaSection();

  // Old Forest 101 section disabled - now using the new Topic 2 style layout for Topic 1
  // initializeForest101();

  // Back button - navigate to homepage
  var backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }

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
  var reflectionWall = document.getElementById("reflection-wall-topic1");

  // Initialize community thoughts if not exists
  var communityThoughts = JSON.parse(localStorage.getItem("community-thoughts")) || [];

  // Seed with sample thoughts if empty
  if (communityThoughts.length === 0) {
    var sampleThoughts = [
      {
        id: 1,
        content: "We have the responsibility to educate ourselves and others about the importance of forests. Biringan or not, these ecosystems are real treasures that need protection.",
        timestamp: Date.now() - 3600000 * 24 * 2
      },
      {
        id: 2,
        content: "Forests are like our ancestors' way of keeping secrets safe. Just like Biringan hides from those who don't respect it, our forests will disappear if we don't show them respect!",
        timestamp: Date.now() - 3600000 * 24
      },
      {
        id: 3,
        content: "ngl this made me think deeper... we always talk about protecting nature but do we actually do something? maybe we should start small like not using single-use plastics fr fr",
        timestamp: Date.now() - 3600000 * 5
      },
      {
        id: 4,
        content: "The mystery of Biringan reminds me that there's still so much we don't know about our forests. That's why research and preservation are important!",
        timestamp: Date.now() - 3600000 * 12
      },
      {
        id: 5,
        content: "lowkey scared that our grandchildren might only see forests in pictures. we gotta step up and actually do something about deforestation. this hits different",
        timestamp: Date.now() - 3600000 * 2
      }
    ];
    communityThoughts = sampleThoughts;
    localStorage.setItem("community-thoughts", JSON.stringify(communityThoughts));
  }

  // Function to display reflections in the wall
  function displayReflections() {
    if (!reflectionWall) return;

    if (communityThoughts.length === 0) {
      reflectionWall.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>';
    } else {
      var thoughtsHTML = '';
      communityThoughts.forEach(function (thought) {
        thoughtsHTML +=
          '<div class="reflection-thought-chip">' +
          '<p class="reflection-thought-text">' + thought.content + '</p>' +
          '</div>';
      });
      reflectionWall.innerHTML = thoughtsHTML;
    }
  }

  // Display initial reflections
  displayReflections();

  // Character counter
  if (reflectionInput && charCount) {
    reflectionInput.addEventListener("input", function () {
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
          timestamp: Date.now()
        };

        communityThoughts.push(newThought);
        localStorage.setItem("community-thoughts", JSON.stringify(communityThoughts));

        // Update wall display
        displayReflections();

        // Show success message
        savedMsg.textContent = "Your thought has been shared anonymously!";
        savedMsg.className = "reflection-saved-msg success";

        // Clear input
        reflectionInput.value = "";
        charCount.textContent = "0";

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
  avifaunaIntro.textContent = "Encounter the key animal species that inhabit the landscape and discover their importance to the ecosystem. It’s a look at the delicate balance between human presence and wildlife survival.";

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

    // Voice indicator click handler - play/pause audio inline
    if (species.voiceUrl) {
      var voiceIndicator = box.querySelector(".species-voice-indicator");
      var voiceBtn = voiceIndicator.querySelector(".voice-indicator-btn");
      var audio = new Audio(species.voiceUrl);

      voiceBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (audio.paused) {
          audio.play();
          voiceBtn.classList.add("playing");
        } else {
          audio.pause();
          voiceBtn.classList.remove("playing");
        }
      });

      // Handle audio ended event
      audio.addEventListener("ended", function () {
        voiceBtn.classList.remove("playing");
      });
    }

    avifaunaGrid.appendChild(box);
  });
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

// ===== REFLECTION BOX FUNCTIONALITY =====

// Topic 1 specific reflection functionality
function submitReflectionTopic1() {
  var textarea = document.getElementById("reflection-textarea-topic1");
  var thought = textarea.value.trim();

  if (!thought) {
    alert("Please write a thought before submitting.");
    return;
  }

  // Generate anonymous user name
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughtsTopic1") || "[]");
  var userNumber = storedThoughts.length + 1;
  var userName = "Anonymous #" + userNumber;

  // Create thought object
  var thoughtObject = {
    text: thought,
    userName: userName,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  storedThoughts.push(thoughtObject);
  localStorage.setItem("reflectionThoughtsTopic1", JSON.stringify(storedThoughts));

  // Clear textarea
  textarea.value = "";
  var counter = document.querySelector("#reflection-textarea-topic1").parentElement.parentElement.querySelector(".char-count-number");
  if (counter) counter.textContent = "0";

  // Update reflection wall display
  displayReflectionsTopic1();

  // Show success message
  var submitBtn = document.querySelector(".reflection-box-submit-btn");
  submitBtn.innerHTML = "Shared!";
  submitBtn.disabled = true;
  setTimeout(function () {
    submitBtn.innerHTML = "Submit Thought";
    submitBtn.disabled = false;
  }, 2000);
}

function toggleCommunityThoughts() {
  var wall = document.getElementById("reflection-wall");
  var viewBtn = document.querySelector(".reflection-box-view-btn");

  if (wall.style.display === "none" || wall.style.display === "") {
    wall.style.display = "block";
    viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Hide Thoughts';
    displayReflectionsTopic1();
  } else {
    wall.style.display = "none";
    viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> View Community Thoughts';
  }
}

function displayReflectionsTopic1() {
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughtsTopic1") || "[]");
  var wallGrid = document.getElementById("reflection-wall-grid");
  var thoughtCount = document.querySelector(".thought-count");

  if (thoughtCount) {
    thoughtCount.textContent = storedThoughts.length + " thought" + (storedThoughts.length !== 1 ? "s" : "") + " shared";
  }

  if (wallGrid) {
    if (storedThoughts.length === 0) {
      wallGrid.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>';
    } else {
      var thoughtsHTML = '';
      // Show most recent first
      storedThoughts.slice().reverse().forEach(function (thought) {
        thoughtsHTML +=
          '<div class="reflection-thought-chip">' +
          '<div class="thought-user">' + thought.userName + '</div>' +
          '<div class="thought-text">' + escapeHtml(thought.text) + '</div>' +
          '</div>';
      });
      wallGrid.innerHTML = thoughtsHTML;
    }
  }
}

// Topic 2 specific reflection functionality
function submitReflectionTopic2() {
  var textarea = document.getElementById("reflection-textarea-topic2");
  var thought = textarea.value.trim();

  if (!thought) {
    alert("Please write a thought before submitting.");
    return;
  }

  // Generate anonymous user name
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughtsTopic2") || "[]");
  var userNumber = storedThoughts.length + 1;
  var userName = "Anonymous #" + userNumber;

  // Create thought object
  var thoughtObject = {
    text: thought,
    userName: userName,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  storedThoughts.push(thoughtObject);
  localStorage.setItem("reflectionThoughtsTopic2", JSON.stringify(storedThoughts));

  // Clear textarea
  textarea.value = "";
  var counter = document.querySelector("#reflection-textarea-topic2").parentElement.parentElement.querySelector(".char-count-number");
  if (counter) counter.textContent = "0";

  // Update reflection wall display
  displayReflectionsTopic2();

  // Show success message
  var submitBtn = document.querySelector("#reflection-wall-topic2").previousElementSibling.querySelector(".reflection-box-submit-btn");
  submitBtn.innerHTML = "Shared!";
  submitBtn.disabled = true;
  setTimeout(function () {
    submitBtn.innerHTML = "Submit Thought";
    submitBtn.disabled = false;
  }, 2000);
}

function toggleCommunityThoughtsTopic2() {
  var wall = document.getElementById("reflection-wall-topic2");
  var viewBtn = wall.previousElementSibling.querySelector(".reflection-box-view-btn");

  if (wall.style.display === "none" || wall.style.display === "") {
    wall.style.display = "block";
    viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Hide Thoughts';
    displayReflectionsTopic2();
  } else {
    wall.style.display = "none";
    viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> View Community Thoughts';
  }
}

function displayReflectionsTopic2() {
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughtsTopic2") || "[]");
  var wallGrid = document.getElementById("reflection-wall-grid-topic2");
  var thoughtCount = document.querySelector("#reflection-wall-topic2 .thought-count");

  if (thoughtCount) {
    thoughtCount.textContent = storedThoughts.length + " thought" + (storedThoughts.length !== 1 ? "s" : "") + " shared";
  }

  if (wallGrid) {
    if (storedThoughts.length === 0) {
      wallGrid.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>';
    } else {
      var thoughtsHTML = '';
      // Show most recent first
      storedThoughts.slice().reverse().forEach(function (thought) {
        thoughtsHTML +=
          '<div class="reflection-thought-chip">' +
          '<div class="thought-user">' + thought.userName + '</div>' +
          '<div class="thought-text">' + escapeHtml(thought.text) + '</div>' +
          '</div>';
      });
      wallGrid.innerHTML = thoughtsHTML;
    }
  }
}

// Topic 3 specific reflection functionality
function submitReflectionTopic3() {
  var textarea = document.getElementById("reflection-textarea-topic3");
  var thought = textarea.value.trim();

  if (!thought) {
    alert("Please write a thought before submitting.");
    return;
  }

  // Generate anonymous user name
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughtsTopic3") || "[]");
  var userNumber = storedThoughts.length + 1;
  var userName = "Anonymous #" + userNumber;

  // Create thought object
  var thoughtObject = {
    text: thought,
    userName: userName,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  storedThoughts.push(thoughtObject);
  localStorage.setItem("reflectionThoughtsTopic3", JSON.stringify(storedThoughts));

  // Clear textarea
  textarea.value = "";
  var counter = document.querySelector("#reflection-textarea-topic3").parentElement.parentElement.querySelector(".char-count-number");
  if (counter) counter.textContent = "0";

  // Update reflection wall display
  displayReflectionsTopic3();

  // Show success message
  var submitBtn = document.querySelector("#reflection-wall-topic3").previousElementSibling.querySelector(".reflection-box-submit-btn");
  submitBtn.innerHTML = "Shared!";
  submitBtn.disabled = true;
  setTimeout(function () {
    submitBtn.innerHTML = "Submit Thought";
    submitBtn.disabled = false;
  }, 2000);
}

function toggleCommunityThoughtsTopic3() {
  var wall = document.getElementById("reflection-wall-topic3");
  var viewBtn = wall.previousElementSibling.querySelector(".reflection-box-view-btn");

  if (wall.style.display === "none" || wall.style.display === "") {
    wall.style.display = "block";
    viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Hide Thoughts';
    displayReflectionsTopic3();
  } else {
    wall.style.display = "none";
    viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> View Community Thoughts';
  }
}

function displayReflectionsTopic3() {
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughtsTopic3") || "[]");
  var wallGrid = document.getElementById("reflection-wall-grid-topic3");
  var thoughtCount = document.querySelector("#reflection-wall-topic3 .thought-count");

  if (thoughtCount) {
    thoughtCount.textContent = storedThoughts.length + " thought" + (storedThoughts.length !== 1 ? "s" : "") + " shared";
  }

  if (wallGrid) {
    if (storedThoughts.length === 0) {
      wallGrid.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>';
    } else {
      var thoughtsHTML = '';
      // Show most recent first
      storedThoughts.slice().reverse().forEach(function (thought) {
        thoughtsHTML +=
          '<div class="reflection-thought-chip">' +
          '<div class="thought-user">' + thought.userName + '</div>' +
          '<div class="thought-text">' + escapeHtml(thought.text) + '</div>' +
          '</div>';
      });
      wallGrid.innerHTML = thoughtsHTML;
    }
  }
}

// Generic reflection function for other topics
function submitReflection(button) {
  var container = button.closest(".reflection-box-inner");
  var textarea = container.querySelector(".reflection-box-textarea");
  var thought = textarea.value.trim();

  if (!thought) {
    alert("Please write a thought before submitting.");
    return;
  }

  // Generate anonymous user name
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughts") || "[]");
  var userNumber = storedThoughts.length + 1;
  var userName = "Anonymous User " + userNumber;

  // Create thought object
  var thoughtObject = {
    text: thought,
    userName: userName,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  storedThoughts.push(thoughtObject);
  localStorage.setItem("reflectionThoughts", JSON.stringify(storedThoughts));

  // Clear textarea
  textarea.value = "";
  textarea.parentElement.parentElement.querySelector(".char-count-number").textContent = "0";

  // Update reflection wall display
  displayReflections();

  // Show success message
  button.textContent = "Posted!";
  button.disabled = true;
  setTimeout(function () {
    button.textContent = "Submit Thought";
    button.disabled = false;
  }, 2000);
}

function displayReflections() {
  var storedThoughts = JSON.parse(localStorage.getItem("reflectionThoughts") || "[]");
  var reflectionWalls = document.querySelectorAll(".reflection-box-wall:not(#reflection-wall)");

  reflectionWalls.forEach(function (wall) {
    if (storedThoughts.length === 0) {
      wall.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share!</p>';
    } else {
      var thoughtsHTML = '';
      storedThoughts.forEach(function (thought) {
        thoughtsHTML +=
          '<div class="reflection-thought-chip">' +
          '<div class="thought-user">' + thought.userName + '</div>' +
          '<div class="thought-text">' + escapeHtml(thought.text) + '</div>' +
          '</div>';
      });
      wall.innerHTML = thoughtsHTML;
    }
  });
}

function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

// Initialize reflection walls on page load
displayReflections();
if (topicData.id === 2) {
  displayReflectionsTopic2();
}
if (topicData.id === 3) {
  displayReflectionsTopic3();
}

// Add character counter for textarea
document.addEventListener("input", function (e) {
  if (e.target.classList.contains("reflection-box-textarea")) {
    var count = e.target.value.length;
    var counter = e.target.parentElement.parentElement.querySelector(".char-count-number");
    if (counter) {
      counter.textContent = count;
    }
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
