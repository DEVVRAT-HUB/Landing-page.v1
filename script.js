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
const headerHeight = header.offsetHeight;

function handleScroll() {
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

    // In a real application, you would send this data to a server.
    // For this task, a simple alert or console log is sufficient.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Thank you for your message, ' + name + '! We will get back to you shortly.');

    // Optionally, clear the form fields
    contactForm.reset();
});

// Optional: Scroll Animations for other sections (Example)
// You would typically use an Intersection Observer API for more robust scroll animations
// For this task, a simple check on scroll might suffice for bonus points.

function checkVisibility() {
    const sections = document.querySelectorAll('section'); // Select all sections
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) { // When 25% of section is visible
            section.classList.add('fade-in'); // Add a class for animation
        }
    });
}

window.addEventListener('scroll', checkVisibility);
// Call once on load in case sections are already visible
checkVisibility();

/* Add this to style.css for the fade-in animation: */
/*
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.active { // Add this class with JS when it enters viewport
    opacity: 1;
    transform: translateY(0);
}
*/
// You'd need to adjust the JS to add/remove 'active' class on intersection.
// For a simple intern task, just adding 'fade-in' and setting its default state hidden then animating to visible might be enough.
// A more robust solution uses Intersection Observer, but for 2-3 days, keep it simpler if time is tight.