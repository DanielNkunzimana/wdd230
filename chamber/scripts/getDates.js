// Get current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Get last modified date for second paragraph in footer
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu');
    const navItems = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navItems.classList.toggle('show-menu');
        menuToggle.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', function() {
        navItems.classList.remove('show-menu');
        closeMenuBtn.style.display = 'none';
        menuToggle.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('main');

    darkModeToggle.addEventListener('click', function() {
        main.classList.toggle('dark-mode');
    });
});


