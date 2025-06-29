// Custom JavaScript for WC Perway

// Update footer year automatically
document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Active navigation link highlighting
    // This is a simple version. For more complex scenarios,
    // you might need a more robust solution.
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        // Remove existing active class from parent li
        if (link.parentElement.classList.contains('active')) {
            link.parentElement.classList.remove('active');
        }
        // Remove active class from link itself if it was directly on <a>
        if (link.classList.contains('active')) {
             link.classList.remove('active');
        }

        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.parentElement.classList.add('active'); // Add to parent <li> for Bootstrap styling
        }
    });

    // Smooth scroll for anchor links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // Ensure it's not just a "#" link or a Bootstrap component trigger
            if (hrefAttribute.length > 1 && document.querySelector(hrefAttribute)) {
                e.preventDefault();
                document.querySelector(hrefAttribute).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

// Example: Basic form validation feedback (can be expanded)
// This is just to show where such JS might go.
// Actual form submission would require backend.
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent actual submission for this example
//         // Add validation logic here
//         alert('Form submission would normally occur here (if validation passes). This is a front-end template.');
//         // contactForm.reset(); // Optionally reset form
//     });
// }
