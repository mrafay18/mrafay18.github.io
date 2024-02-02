//final version 2
/*var num = 0; // global variable

function button1(){
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}*/

function toggleStyleSheet(){
    var stylesheet = document.getElementById("mainStyleSheet"); //uses html line 9
    var newFileName = stylesheet.getAttribute("href") === "style1.css" ? "style2.css" : "style1.css"; //swtich between css styles
    stylesheet.setAttribute("href", newFileName);
    localStorage.setItem("stylesheet", newFileName); //refresh doesn't change style back
}

window.onload = function(){
    var preferredStyle = localStorage.getItem("stylesheet") || "style1.css"; //checks which style is selected rn
    document.getElementById("mainStyleSheet").setAttribute("href", preferredStyle);
    document.getElementById('styleSwitcher').addEventListener('click', toggleStyleSheet); //swticher
};