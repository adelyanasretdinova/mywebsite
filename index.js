/* darmode */
var darkButton = document.getElementById("darkButton");

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

darkButton.addEventListener("click", darkMode);


/* menu Button */

var MenuButton = document.getElementById("MenuButton");

function menuFun() {
    var htmlBody1 = document.body;
    htmlBody1.classList.toggle("visibility");
}
MenuButton.addEventListener("click", menuFun);


/* jump to top */

var buttontotop = document.getElementById("buttontotop");

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}

buttontotop.addEventListener("click", toTop);


/*  newletter pop up */
var newsletterbutton = document.getElementById("newsletterbutton");

function subscribe() {
    var htmlBody2 = document.body;
    htmlBody2.classList.toggle("visible");
}

newsletterbutton.addEventListener("click", subscribe);





