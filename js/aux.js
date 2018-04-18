//CAMBIO DE COLOR BOTÓN
function buttonColor() {
    setInterval(function() {
        button.classList.toggle("color-button");
    }, 500);
}

buttonColor();

//GENERAR OBJETOS OLDIES

function generateObjects() {
    if (!(frames % 300 === 0)) return;
    var randomX = Math.floor(Math.random() * 200) + 900;
    var randomY = Math.floor(Math.random() * 200) + 10;
    var image = oldies[Math.floor(Math.random() * oldies.length)];
    var width = image === "assets/objects/oldie1.png" ? 145 : "assets/objects/oldie2.png" ? 100 : "assets/objects/oldie3.png" ? 50 : 50;

    var object = new Object(randomX, randomY, width, image);
    objects.push(object);
    console.log(objects)
}

function drawObjects() {
    console.log(objects)
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