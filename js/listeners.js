const button = document.getElementById("start-button");
button.addEventListener("click", function() {
    startGame();
    button.classList.toggle("restart-button");
    button.textContent = "Restart";
});

button.addEventListener("mouseover", function() {
    button.classList.toggle("hover-button");
});

button.addEventListener("mouseout", function() {
    button.classList.toggle("hover-button");
});


//MOVIMIENTOS COCHE
addEventListener("keydown", function(e) {
    if (e.keyCode === 40) {
        coche1.moveDown();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 38) {
        coche1.moveUp();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 32) {
        coche1.jump();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 39) {
        coche1.forward();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 37) {
        coche1.back();
    }
});