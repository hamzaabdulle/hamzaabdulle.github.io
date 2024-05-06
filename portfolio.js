document.addEventListener('DOMContentLoaded', function() {
    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
        // Loop through the entries
        entries.forEach(entry => {
            // Check if the element is intersecting
            if (entry.isIntersecting) {
                // Add the 'fade-in-visible' class to the element
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, {
        root: null, // The root is the viewport if set to null
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    // Select all elements with the class 'fade-in-section'
    const sections = document.querySelectorAll('.fade-in-section');
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
