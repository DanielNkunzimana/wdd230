// Function to lazy load images when the user scrolls
function lazyLoadImages() {
    const images = document.querySelectorAll('.lazy-load');
    const options = {
        threshold: 0.5
    };
    
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                imgObserver.unobserve(img);
            }
        });
    }, options);

    images.forEach(image => {
        imgObserver.observe(image);
    });
}
document.addEventListener('DOMContentLoaded', function() {
// Function to populate the main content with images
// Function to populate the main content with images
function populateImages() {
    const mainContent = document.querySelector('.main-content');
    const imageGrid = mainContent.querySelector('.image-grid');

    // Check if imageGrid exists before appending images
    if (!imageGrid) {
        console.error('Error: .image-grid element not found.');
        return;
    }

    for (let i = 1; i <= 6; i++) {
        const image = document.createElement('img');
        image.classList.add('lazy-load');
        image.dataset.src = `images/image${i}.jpg`;
        image.alt = `Image ${i}`;
        imageGrid.appendChild(image); 
    }

    lazyLoadImages();
}


// Call function to populate images when the page loads
window.addEventListener('load', populateImages);

// Function to lazy load images when the user scrolls
function lazyLoadImages() {
    const images = document.querySelectorAll('.lazy-load');
    const options = {
        threshold: 0.5
    };
    
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                imgObserver.unobserve(img);
            }
        });
    }, options);

    images.forEach(image => {
        imgObserver.observe(image);
    });
}

// Function to populate the main content with images
function populateImages() {
    const mainContent = document.querySelector('.main-content');

    for (let i = 1; i <= 6; i++) {
        const image = document.createElement('img');
        image.classList.add('lazy-load');
        image.dataset.src = `images/image${i}.jpg`;
        image.alt = `Image ${i}`;
        /*imageGrid.appendChild(image);*/
    }

    lazyLoadImages();
}

// Call function to populate images when the page loads
window.addEventListener('load', populateImages);
});
// Function to display visit information based on the last visit date
function displayVisitInfo() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();

    if (!lastVisit) {
        document.getElementById('visitInfo').textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const daysDiff = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

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
