// ===== FOREST 101 INTERACTIVITY =====

document.addEventListener('DOMContentLoaded', function() {
  const reflectionInput = document.getElementById('reflection-input');
  const reflectionSaveBtn = document.getElementById('reflection-save-btn');

  // Load saved reflection from localStorage
  const savedReflection = localStorage.getItem('forest101-reflection');
  if (savedReflection) {
    reflectionInput.value = savedReflection;
  }

  // Save reflection on button click
  reflectionSaveBtn.addEventListener('click', function() {
    const reflectionText = reflectionInput.value.trim();
    
    if (reflectionText) {
      localStorage.setItem('forest101-reflection', reflectionText);
      
      // Show success feedback
      const originalText = reflectionSaveBtn.textContent;
      reflectionSaveBtn.textContent = '✓ Reflection Saved!';
      reflectionSaveBtn.style.background = 'linear-gradient(135deg, #4A7C2C 0%, #2D5016 100%)';
      
      setTimeout(function() {
        reflectionSaveBtn.textContent = originalText;
        reflectionSaveBtn.style.background = '';
      }, 2000);
    } else {
      alert('Please write your reflection before saving.');
    }
  });

  // Allow saving with Ctrl+S
  reflectionInput.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      reflectionSaveBtn.click();
    }
  });

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

  // Observe feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
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
