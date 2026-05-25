// Adds small progressive-enhancement behavior without requiring multiple CSS files.
// The website now uses one professional stylesheet: style.css.

// Wait until the page is fully parsed before touching DOM elements.
document.addEventListener("DOMContentLoaded", function () {
    // Show the current year in every footer that includes <span id="year"></span>.
    var yearElement = document.getElementById("year");

    // Only update the year if the element exists on the current page.
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Get the filename for the current page. Default to index.html when the path is empty.
    var currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Find every navigation link on the page.
    var navLinks = document.querySelectorAll(".nav-link");

    // Add an active state to the navigation link that matches the current page.
    navLinks.forEach(function (link) {
        var linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});
