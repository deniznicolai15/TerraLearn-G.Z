// ===== FOREST 101 INTERACTIVITY =====

// Audio player state management
const audioPlayers = new Map();

function initAudioPlayers() {
  const playOverlays = document.querySelectorAll('.play-overlay');
  
  playOverlays.forEach((overlay, index) => {
    const playerId = `audio-player-${index}`;
    
    // Initialize player state
    audioPlayers.set(playerId, {
      isPlaying: false,
      element: overlay
    });

    // Make overlay clickable
    overlay.style.cursor = 'pointer';
    overlay.style.transition = 'all 0.3s ease';
    
    overlay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleAudioPlayer(playerId);
    });

    // Add hover effect
    overlay.addEventListener('mouseenter', function() {
      overlay.style.transform = 'scale(1.1)';
      overlay.style.background = 'rgba(142, 176, 154, 0.3)';
    });

    overlay.addEventListener('mouseleave', function() {
      overlay.style.transform = 'scale(1)';
      overlay.style.background = 'rgba(142, 176, 154, 0.15)';
    });
  });
}

function toggleAudioPlayer(playerId) {
  const player = audioPlayers.get(playerId);
  if (!player) return;

  player.isPlaying = !player.isPlaying;
  const svg = player.element.querySelector('svg');
  
  if (player.isPlaying) {
    // Show pause icon
    playAudioAnimation(player.element);
    updatePlayerIcon(svg, 'pause');
    player.element.classList.add('playing');
  } else {
    // Show play icon
    stopAudioAnimation(player.element);
    updatePlayerIcon(svg, 'play');
    player.element.classList.remove('playing');
  }
}

function updatePlayerIcon(svg, state) {
  if (!svg) return;

  const parent = svg.parentElement;
  
  // Animate out: rotate and scale
  svg.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.6, 1)';
  svg.style.transform = 'scale(0.7) rotateZ(180deg)';
  svg.style.opacity = '0';
  
  setTimeout(() => {
    if (state === 'pause') {
      // Pause icon: two vertical bars
      svg.innerHTML = `
        <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
        <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
      `;
    } else {
      // Play icon: triangle
      svg.innerHTML = `<path d="M8 5v14l11-7z" fill="currentColor"/>`;
    }
    
    // Animate in: scale up and rotate
    svg.style.transition = 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    svg.style.transform = 'scale(1) rotateZ(0deg)';
    svg.style.opacity = '1';
  }, 125);
}

function playAudioAnimation(element) {
  // Ripple and pulse effect when playing
  element.style.animation = 'playerPulsePlay 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
  
  // Create ripple effect
  createRipple(element, 'play');
}

function stopAudioAnimation(element) {
  // Pulse effect when stopping
  element.style.animation = 'playerPulseStop 0.4s ease-out';
  
  // Create ripple effect
  createRipple(element, 'stop');
}

function createRipple(element, type) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.pointerEvents = 'none';
  
  if (type === 'play') {
    ripple.style.background = 'rgba(76, 153, 102, 0.6)';
    ripple.style.animation = 'ripplePlay 0.6s ease-out forwards';
  } else {
    ripple.style.background = 'rgba(50, 120, 70, 0.5)';
    ripple.style.animation = 'rippleStop 0.4s ease-out forwards';
  }
  
  ripple.style.width = '10px';
  ripple.style.height = '10px';
  ripple.style.top = '50%';
  ripple.style.left = '50%';
  ripple.style.transform = 'translate(-50%, -50%)';
  
  element.style.position = 'relative';
  element.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 700);
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize audio players first
  initAudioPlayers();

  // Check if we should scroll to top (from quiz/game back button)
  if (sessionStorage.getItem('scrollToTop')) {
    window.scrollTo(0, 0);
    sessionStorage.removeItem('scrollToTop');
  }

  const reflectionInput = document.getElementById('reflection-input');
  const reflectionSubmitBtn = document.getElementById('reflection-submit-btn');
  const reflectionWall = document.getElementById('reflection-wall');
  const charCount = document.getElementById('char-count');

  // Character counter
  if (reflectionInput && charCount) {
    reflectionInput.addEventListener('input', function() {
      charCount.textContent = reflectionInput.value.length;
    });
  }

  // Load reflections from localStorage
  function loadReflections() {
    const saved = localStorage.getItem('forest101-reflections');
    return saved ? JSON.parse(saved) : [];
  }

  // Save reflections to localStorage
  function saveReflections(reflections) {
    localStorage.setItem('forest101-reflections', JSON.stringify(reflections));
  }

  // Render reflection wall as chips
  function renderWall() {
    const reflections = loadReflections();
    
    if (reflections.length === 0) {
      reflectionWall.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first!</p>';
      return;
    }

    reflectionWall.innerHTML = reflections.map((reflection, index) => `
      <div class="reflection-chip">
        <span class="chip-text">${escapeHtml(reflection.text)}</span>
        <span class="chip-time">${formatTime(reflection.timestamp)}</span>
      </div>
    `).reverse().join('');
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Format timestamp
  function formatTime(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = now - time;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'now';
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    
    return time.toLocaleDateString();
  }

  // Submit reflection
  reflectionSubmitBtn.addEventListener('click', function() {
    const text = reflectionInput.value.trim();
    
    if (!text) {
      reflectionInput.focus();
      return;
    }

    // Add new reflection
    const reflections = loadReflections();
    reflections.push({
      text: text,
      timestamp: new Date().toISOString()
    });
    saveReflections(reflections);

    // Clear input
    reflectionInput.value = '';
    if (charCount) charCount.textContent = '0';

    // Render immediately
    renderWall();

    // Focus back to input
    reflectionInput.focus();
  });

  // Allow submitting with Enter key
  reflectionInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      reflectionSubmitBtn.click();
    }
  });

  // Initial render
  renderWall();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all forest layer cards
  document.querySelectorAll('.forest-layer-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Observe feature bars
  document.querySelectorAll('.feature-bar').forEach(bar => {
    bar.style.opacity = '0';
    bar.style.transform = 'translateY(20px)';
    bar.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(bar);
  });
});

// ===== BACK BUTTON FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function(e) {
      // The href will handle navigation, but we can add custom logic here if needed
      window.history.back();
    });
  }
});
