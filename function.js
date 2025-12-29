//final version 2
/*var num = 0; // global variable

function button1(){
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}*/

// function.js — style switching + dynamic brand lockup (no wording changes)

(function () {

    /* ============================
       Style switching
    ============================ */
    function toggleStyleSheet() {
        const stylesheet = document.getElementById("mainStyleSheet");
        if (!stylesheet) return;

        const current = stylesheet.getAttribute("href");
        const next = current === "style1.css" ? "style2.css" : "style1.css";

        stylesheet.setAttribute("href", next);
        localStorage.setItem("preferredStyle", next);
    }

    function applySavedStyle() {
        const saved = localStorage.getItem("preferredStyle");
        if (!saved) return;

        const stylesheet = document.getElementById("mainStyleSheet");
        if (stylesheet) {
            stylesheet.setAttribute("href", saved);
        }
    }

    /* ============================
       Dynamic header name lockup
       (pulls from <h1>)
    ============================ */
    function injectHeaderName() {
        const h1 = document.querySelector("main h1");
        const navLeft = document.querySelector(".nav-left");

        if (!h1 || !navLeft) return;

        const name = h1.textContent.trim();
        if (!name) return;

        // Avoid duplicate injection
        if (navLeft.querySelector(".brand-name")) return;

        const span = document.createElement("span");
        span.className = "brand-name";
        span.textContent = name;

        /*
          Styling is handled in CSS (style1.css).
          This element is intentionally minimal and semantic.
        */
        navLeft.appendChild(span);
    }

    /* ============================
       Init
    ============================ */
    document.addEventListener("DOMContentLoaded", function () {
        applySavedStyle();
        injectHeaderName();

        const switcher = document.getElementById("styleSwitcher");
        if (switcher) {
            switcher.addEventListener("click", toggleStyleSheet);
        }
    });

})();
