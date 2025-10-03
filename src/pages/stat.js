// Add counter animation for stats
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    if (target === 99.9) {
      element.textContent = current.toFixed(1) + "%";
    } else if (target >= 1000) {
      element.textContent = Math.floor(current) + "+";
    } else if (target >= 20) {
      element.textContent = Math.floor(current) + "+";
    } else {
      element.textContent = current.toFixed(0);
    }
  }, 50);
}

// Function to start animation for all stats inside a section
function startStatsAnimation(statsSection) {
  const statNumbers = statsSection.querySelectorAll(".stat-number");
  statNumbers.forEach((stat) => {
    const text = stat.textContent;
    if (text.includes("1000+")) animateCounter(stat, 1000);
    else if (text.includes("20+")) animateCounter(stat, 20);
    else if (text.includes("24/7")) stat.textContent = "24/7";
    else if (text.includes("99.9%")) animateCounter(stat, 99.9);
  });
}

// IntersectionObserver for scroll-trigger
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startStatsAnimation(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
});

// Observe all .stats sections
document.querySelectorAll(".stats").forEach((stats) => {
  statsObserver.observe(stats);

  // ✅ Extra check for refresh: if already visible, trigger immediately
  const rect = stats.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    startStatsAnimation(stats);
    statsObserver.unobserve(stats);
  }
});
