document.addEventListener('DOMContentLoaded', function() {
    // Get last modified date for second paragraph in footer
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + document.lastModified;
    }

    // Toggle menu on click
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const navItems = nav.querySelector('ul');

    if (menuToggle && nav && navItems) {
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('show-menu');
        });
    }

    // Get the last visit date from localStorage
    const lastVisit = localStorage.getItem('lastVisit');
    console.log('Last visit from localStorage:', lastVisit);

    // Function to calculate the difference between two dates in days
    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    // Function to display visit information based on the last visit date
    function displayVisitInfo() {
        console.log('Displaying visit information...');
        const currentDate = new Date();
        if (!lastVisit) {
            const visitInfoElement = document.getElementById('discription'); // Change 'visitInfo' to an existing element ID
            if (visitInfoElement) {
                visitInfoElement.textContent = "Welcome! Let us know if you have any questions.";
            }
        } else {
            const lastVisitDate = new Date(parseInt(lastVisit));
            console.log('Last visit date:', lastVisitDate);
            const daysDiff = dateDiffInDays(lastVisitDate, currentDate);
            console.log('Days difference:', daysDiff);
            if (daysDiff < 1) {
                const visitInfoElement = document.getElementById('discription'); // Change 'visitInfo' to an existing element ID
                if (visitInfoElement) {
                    visitInfoElement.textContent = "Back so soon! Awesome!";
                }
            } else {
                const pluralSuffix = daysDiff === 1 ? "" : "s";
                const visitInfoElement = document.getElementById('discription'); // Change 'visitInfo' to an existing element ID
                if (visitInfoElement) {
                    visitInfoElement.textContent = `You last visited ${daysDiff} day${pluralSuffix} ago.`;
                }
            }
        }
    }

    // Display visit information
    displayVisitInfo();
});
