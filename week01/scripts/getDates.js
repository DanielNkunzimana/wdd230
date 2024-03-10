// Get current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Get last modified date for second paragraph in footer
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
