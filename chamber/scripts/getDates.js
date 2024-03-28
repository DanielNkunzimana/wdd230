document.addEventListener('DOMContentLoaded', function() {
    // Get last modified date for second paragraph in footer
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + document.lastModified;
    }

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
})    

// Get the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');

// Function to calculate the difference between two dates in days
function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// Function to display visit information based on the last visit date
function displayVisitInfo() {
    const currentDate = new Date();
    if (!lastVisit) {
        document.getElementById('visitInfo').textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const daysDiff = dateDiffInDays(lastVisitDate, currentDate);
        if (daysDiff < 1) {
            document.getElementById('visitInfo').textContent = "Back so soon! Awesome!";
        } else {
            const pluralSuffix = daysDiff === 1 ? "" : "s";
            document.getElementById('visitInfo').textContent = `You last visited ${daysDiff} day${pluralSuffix} ago.`;
        }
    }
}

// Display visit information
displayVisitInfo();
