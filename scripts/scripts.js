/*
File: scripts.js
Date: 12/3/2025
*/

// Navbar Hamburger Menu Functionality
function hamburgerMenu() {
    var nav_links = document.getElementById("nav-links")
    if (nav_links.style.display === "block") {
        nav_links.style.display = "none"
    } else {
        nav_links.style.display = "block"
    }
}