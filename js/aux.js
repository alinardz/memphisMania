//CAMBIO DE COLOR BOTÓN
function buttonColor() {
    setInterval(function() {
        button.classList.toggle("color-button");
    }, 500);
}

buttonColor();


function generateObjects() {
    if (!(frames % 300 === 0)) return;
    var randomX = Math.floor(Math.random() * 200) + 900;
    var randomY = Math.floor(Math.random() * 200) + 10;
    var object = new Object(randomX, randomY, "assets/bObjects/mustache.png");
    objects.push(object);
}

function drawObjects() {
    objects.forEach(function(object) {
        object.draw();
    });
}

function checkCollision() {
    //verifica si el pajarín está tocando cada pipe
    objects.forEach(function(object) {
        if (coche1.isTouching(object)) gameOver();
    });
}