// Smooth Scrolling Navigation (Bonus)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header (Bonus)
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero');
const headerHeight = header.offsetHeight; // Get initial height

function handleScroll() {
    // Check if the sticky class is not already present to avoid re-calculating offsetHeight unnecessarily
    // Or, more robustly, calculate the scroll threshold based on heroSection height and header height
    if (window.scrollY > heroSection.offsetHeight - headerHeight) { // Adjust threshold as needed
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', handleScroll);

// Add CSS for sticky header:
/* In style.css */
/*
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
}
*/

// Contact Form Submission (Basic Example - No server-side)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // In a real application, you would send this data to a server
    // For now, we'll just log it and provide a simple alert
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form fields
    contactForm.reset();
});

// Current Year for Footer
document.getElementById('current-year').textContent = new Date().getFullYear();


// Hamburger Menu Toggle for Mobile
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});


// Optional: Scroll Animations for other sections (Example)
// You would typically use an Intersection Observer API for more robust scroll animations
// For this task, a simple check on scroll might suffice for bonus points.

const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the element must be visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

animatedElements.forEach(element => {
    observer.observe(element);
});