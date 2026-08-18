document.addEventListener('DOMContentLoaded', () => {
  
  // --- NAVBAR SCROLL ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- MOBILE MENU ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    if (mobileNav.classList.contains('open')) {
      mobileNav.style.display = 'flex';
    } else {
      mobileNav.style.display = 'none';
    }
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileNav.style.display = 'none';
    });
  });

  // --- INTERACTIVE ARCHITECTURE ---
  const archNodes = document.querySelectorAll('.arch-node');
  const contextPanel = document.getElementById('contextPanel');
  let activeNodeId = null;

  const tooltipContent = {
    client: {
      title: "Client Layer",
      description: "Multi-platform clients request data and render UI. They handle local state and optimistic UI updates."
    },
    api: {
      title: "API Gateway",
      description: "Handles incoming requests, rate limiting, authentication, and distributes traffic to microservices."
    },
    app: {
      title: "Application Layer",
      description: "Stateless microservices that process business logic. They can scale horizontally based on load."
    },
    cache: {
      title: "Cache (Redis)",
      description: "Why? Reduces repeated database reads and improves response latency. Uses a write-around or write-through strategy."
    },
    db: {
      title: "Primary Database",
      description: "Why? Stores persistent application data. Partitioned by user_id to handle high write throughput."
    }
  };

  archNodes.forEach(node => {
    node.addEventListener('click', () => {
      const nodeId = node.getAttribute('data-node');
      
      // Toggle off if already active
      if (activeNodeId === nodeId) {
        node.classList.remove('active');
        activeNodeId = null;
        renderContextPanel(null);
        return;
      }

      // Remove active from all nodes
      archNodes.forEach(n => n.classList.remove('active'));
      
      // Set new active node
      node.classList.add('active');
      activeNodeId = nodeId;
      renderContextPanel(nodeId);
    });
  });

  function renderContextPanel(nodeId) {
    if (!nodeId) {
      contextPanel.innerHTML = `
        <div class="empty-state">
          <p>Select a node to view its trade-offs.</p>
        </div>
      `;
      return;
    }

    const content = tooltipContent[nodeId];
    // Re-render HTML so the animation restarts
    contextPanel.innerHTML = `
      <div class="tooltip-card">
        <h4 class="tooltip-title">${content.title}</h4>
        <p class="tooltip-desc">${content.description}</p>
      </div>
    `;
  }

  // --- EASTER EGG (KONAMI CODE) ---
  const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let inputSequence = [];
  const easterEggToast = document.getElementById('easterEggToast');
  let isUnlocked = false;

  window.addEventListener('keydown', (e) => {
    if (isUnlocked) return;
    
    inputSequence.push(e.key);
    if (inputSequence.length > KONAMI_CODE.length) {
      inputSequence.shift();
    }

    if (inputSequence.join(',').toLowerCase() === KONAMI_CODE.join(',').toLowerCase()) {
      isUnlocked = true;
      easterEggToast.style.display = 'flex';
      setTimeout(() => {
        easterEggToast.style.display = 'none';
        isUnlocked = false;
        inputSequence = [];
      }, 5000);
    }
  });

});
