const button = document.getElementById("start-button");
const logo = document.getElementById("logo");
button.addEventListener("click", function() {
    startGame();
    button.classList.toggle("restart-button");
    button.textContent = "Coooool!";
}, { once: true });

button.addEventListener("mouseover", function() {
    button.classList.toggle("hover-button");
});

logo.addEventListener("mouseover", function() {
    logo.classList.toggle("hover-logo");
});

button.addEventListener("mouseout", function() {
    button.classList.toggle("hover-button");
});


//MOVIMIENTOS COCHE
//TRATAR CON CASE
addEventListener("keydown", function(e) {
    if (e.keyCode === 40) {
        coche1.moveDown();
        coche2.moveDown();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 38) {
        coche1.moveUp();
        coche2.moveUp();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 32) {
        coche1.jump();
        coche2.jump();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 39) {
        coche1.forward();
        coche2.forward();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 37) {
        coche1.back();
        coche2.back();
    }
});