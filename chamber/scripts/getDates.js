document.addEventListener('DOMContentLoaded', function() {
    // Get last modified date for second paragraph in footer
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + document.lastModified;
    }

    // Toggle menu on click
    const menuToggle = document.getElementById('menu-toggle');
    const navItems = document.querySelector('nav ul');

    if (menuToggle && navItems) {
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('show-menu');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu on click
    const menuToggle = document.getElementById('menu-toggle');
    const navItems = document.querySelector('nav ul');

    if (menuToggle && navItems) {
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('show-menu');
        });
    }
});

