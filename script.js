// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('active');
});

// Reservation Form
document.getElementById('reservationForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('resStatus').textContent = "Reservation submitted successfully! We'll confirm shortly.";
  document.getElementById('resStatus').style.color = "#28a745";
  this.reset();
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent = "Message sent! We will contact you soon.";
  document.getElementById('formStatus').style.color = "#28a745";
  this.reset();
});

// Menu Filtering
document.querySelectorAll('.category-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    this.classList.add('active');
    
    const category = this.getAttribute('data-category');
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
});

backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      document.getElementById('navLinks').classList.remove('active');
    }
  });
});

// Initialize with all menu items showing
document.querySelector('.category-btn.active').click();