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
        image.addEventListener('mouseenter', () => {
            image.classList.add('hover-effect');
        });
        image.addEventListener('mouseleave', () => {
            image.classList.remove('hover-effect');
        });
        mainContent.appendChild(image);
    }

    lazyLoadImages();
}

// Call function to populate images when the page loads
window.addEventListener('load', populateImages);
