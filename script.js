document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', function() {
      preloader.style.display = 'none';
  });

  // Custom Cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
      }, 100);
  });
  
  // Cursor effects on hover
  const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card, .testimonial-dot');
  hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursor.style.backgroundColor = 'rgba(253, 121, 168, 0.5)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
      });
      
      el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursor.style.backgroundColor = 'rgba(108, 92, 231, 0.5)';
          cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      });
  });

  // Mobile Menu
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') ? 
          '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              if (navLinks.classList.contains('active')) {
                  navLinks.classList.remove('active');
                  menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
              }
          }
      });
  });

  // Scroll progress indicator
  const scrollProgress = document.querySelector('.scroll-progress');
  window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      scrollProgress.style.width = scrollPercentage + '%';
  });

  // Back to top button
  const backToTopBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
          backToTopBtn.classList.add('active');
      } else {
          backToTopBtn.classList.remove('active');
      }
  });

  // Testimonial slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let currentSlide = 0;
  
  function showSlide(index) {
      testimonialSlides.forEach(slide => slide.classList.remove('active'));
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      
      testimonialSlides[index].classList.add('active');
      testimonialDots[index].classList.add('active');
      currentSlide = index;
  }
  
  testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
  });
  
  // Auto slide change
  setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialSlides.length;
      showSlide(currentSlide);
  }, 5000);

  // Animate elements on scroll
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.hero-content h1, .hero-content p, .hero-content .btn, .service-card, .portfolio-item');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };
  
  // Initial animation
  setTimeout(() => {
      document.querySelector('.hero-content h1').style.opacity = '1';
      document.querySelector('.hero-content h1').style.transform = 'translateY(0)';
      
      setTimeout(() => {
          document.querySelector('.hero-content p').style.opacity = '1';
          document.querySelector('.hero-content p').style.transform = 'translateY(0)';
          
          setTimeout(() => {
              document.querySelector('.hero-content .btn').style.opacity = '1';
              document.querySelector('.hero-content .btn').style.transform = 'translateY(0)';
          }, 300);
      }, 300);
  }, 500);
  
  // Scroll event listener for animations
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
          
          // Here you would typically send the form data to a server
          console.log('Form submitted:', { name, email, subject, message });
          
          
          // Reset form
          contactForm.reset();
      });
  }


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission success (you can replace this with actual API call)
    setTimeout(() => {
        document.getElementById('animatedCard').classList.add('flipped');
    }, 300);
});


    const form = document.getElementById('contactForm');
    const formContainer = document.getElementById('formContainer');
    const thankYou = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop actual form submission

        // Add fade out animation
        formContainer.classList.add('fade-out');

        // Wait for animation to finish
        setTimeout(() => {
            formContainer.style.display = 'none';
            thankYou.style.display = 'block';
        }, 600);
    });


  // 3D tilt effect for about image
  const aboutImg = document.querySelector('.about-img');
  if (aboutImg) {
      aboutImg.addEventListener('mousemove', (e) => {
          const rect = aboutImg.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const angleX = (y - centerY) / 20;
          const angleY = (centerX - x) / 20;
          
          aboutImg.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg) scale(1.05)`;
      });
      
      aboutImg.addEventListener('mouseleave', () => {
          aboutImg.style.transform = 'rotateY(0) rotateX(0) scale(1)';
      });
  }
});