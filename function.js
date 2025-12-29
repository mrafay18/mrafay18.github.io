//final version 2
/*var num = 0; // global variable

function button1(){
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}*/

//final version 2 (unchanged functionality)
function toggleStyleSheet(){
    var stylesheet = document.getElementById("mainStyleSheet");
    var newFileName = stylesheet.getAttribute("href") === "style1.css" ? "style2.css" : "style1.css";
    stylesheet.setAttribute("href", newFileName);
    localStorage.setItem("stylesheet", newFileName);
}

window.onload = function(){
    var preferredStyle = localStorage.getItem("stylesheet") || "style1.css";
    document.getElementById("mainStyleSheet").setAttribute("href", preferredStyle);
    document.getElementById('styleSwitcher').addEventListener('click', toggleStyleSheet);
};