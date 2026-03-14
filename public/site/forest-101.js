// ===== FOREST 101 INTERACTIVITY =====

document.addEventListener('DOMContentLoaded', function() {
  const reflectionInput = document.getElementById('reflection-input');
  const reflectionSubmitBtn = document.getElementById('reflection-submit-btn');
  const reflectionWall = document.getElementById('reflection-wall');

  // Load reflections from localStorage
  function loadReflections() {
    const saved = localStorage.getItem('forest101-reflections');
    return saved ? JSON.parse(saved) : [];
  }

  // Save reflections to localStorage
  function saveReflections(reflections) {
    localStorage.setItem('forest101-reflections', JSON.stringify(reflections));
  }

  // Render reflection wall
  function renderWall() {
    const reflections = loadReflections();
    
    if (reflections.length === 0) {
      reflectionWall.innerHTML = '<p class="reflection-wall-empty">No thoughts yet... be the first to share! ✨</p>';
      return;
    }

    reflectionWall.innerHTML = reflections.map((reflection, index) => `
      <div class="reflection-stick" style="--rotate: ${Math.random() * 4 - 2}deg;">
        <p class="reflection-text">${escapeHtml(reflection.text)}</p>
        <p class="reflection-time">${formatTime(reflection.timestamp)}</p>
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
    
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    
    return time.toLocaleDateString();
  }

  // Submit reflection
  reflectionSubmitBtn.addEventListener('click', function() {
    const text = reflectionInput.value.trim();
    
    if (!text) {
      alert('Please write your thought before sharing!');
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

    // Update button feedback
    const originalText = reflectionSubmitBtn.textContent;
    reflectionSubmitBtn.textContent = '✨ Posted!';
    reflectionSubmitBtn.disabled = true;

    setTimeout(function() {
      reflectionSubmitBtn.textContent = originalText;
      reflectionSubmitBtn.disabled = false;
      renderWall();
    }, 600);

    // Focus back to input
    reflectionInput.focus();
  });

  // Allow submitting with Ctrl+Enter
  reflectionInput.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
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
