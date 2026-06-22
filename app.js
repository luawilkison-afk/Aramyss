document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.plant-section');
  const searchInput = document.getElementById('plantSearch');
  
  // Navigation between tabs
  function switchTab(targetId) {
    // Deactivate all buttons and sections
    tabBtns.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));
    
    // Find target button and section
    const activeBtn = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
    const activeSection = document.getElementById(targetId);
    
    if (activeBtn) activeBtn.classList.add('active');
    if (activeSection) {
      activeSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  // Add click listener to all tab buttons
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
    });
  });

  // Home card navigation
  window.navigateToPlant = function(plantId) {
    switchTab(plantId);
  };

  // Search Filter logic
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (!query) {
        // Reset: show all tab buttons
        tabBtns.forEach(btn => btn.style.display = 'flex');
        return;
      }
      
      // Filter tab buttons based on title, scientific name or content match
      tabBtns.forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        if (targetId === 'inicio') {
          btn.style.display = 'flex';
          return;
        }
        
        const section = document.getElementById(targetId);
        const textContent = section ? section.textContent.toLowerCase() : '';
        const btnText = btn.textContent.toLowerCase();
        
        if (btnText.includes(query) || textContent.includes(query)) {
          btn.style.display = 'flex';
        } else {
          btn.style.display = 'none';
        }
      });
    });
  }
});
